#!/usr/bin/env python3
"""Validate local Markdown links and image references in the repository."""
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {".git", "node_modules", ".idea"}
MARKDOWN = sorted(p for p in ROOT.rglob("*.md") if not any(x in EXCLUDED for x in p.relative_to(ROOT).parts))
LINK = re.compile(r"!??\[[^\]]*\]\((?:<([^>]+)>|([^\s)]+))(?:\s+[^)]*)?\)")
IMG = re.compile(r"<img\b([^>]*)>", re.IGNORECASE)
ATTR = re.compile(r"""([\w:-]+)\s*=\s*["']([^"']*)["']""")
errors, links, images = [], 0, 0

def check(document, raw, kind):
    global links, images
    target = raw.split("#", 1)[0]
    if not target:
        return
    parsed = urlsplit(target)
    if parsed.scheme or target.startswith("//"):
        return
    relative = Path(unquote(parsed.path))
    if relative.is_absolute():
        errors.append(f"{document.relative_to(ROOT)}: unexpected absolute local {kind}: {raw}")
        return
    resolved = (document.parent / relative).resolve()
    try:
        resolved.relative_to(ROOT.resolve())
    except ValueError:
        errors.append(f"{document.relative_to(ROOT)}: {kind} escapes repository: {raw}")
        return
    if not resolved.exists():
        errors.append(f"{document.relative_to(ROOT)}: missing {kind}: {raw}")
    if kind == "link":
        links += 1
    else:
        images += 1

for document in MARKDOWN:
    source = document.read_text(encoding="utf-8")
    for match in LINK.finditer(source):
        check(document, match.group(1) or match.group(2) or "", "link")
    for match in IMG.finditer(source):
        attrs = dict(ATTR.findall(match.group(1)))
        if not attrs.get("src"):
            errors.append(f"{document.relative_to(ROOT)}: image missing src")
            continue
        if "alt" not in attrs:
            errors.append(f"{document.relative_to(ROOT)}: image missing alt")
        check(document, attrs["src"], "image")

if errors:
    print("Documentation validation failed:")
    print("\n".join(f"- {item}" for item in errors))
    sys.exit(1)
print(f"Documentation links/images validated: {links} local links, {images} local HTML images, {len(MARKDOWN)} Markdown files.")
