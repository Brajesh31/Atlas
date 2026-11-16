#!/usr/bin/env python3
"""Validate that repository SVG illustrations are well-formed XML."""
from pathlib import Path
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
files = sorted((ROOT / "docs" / "assets").glob("*.svg"))
errors = []
for file in files:
    try:
        root = ET.parse(file).getroot()
        if not root.tag.endswith("svg"):
            errors.append(f"{file.relative_to(ROOT)}: root element is not svg")
    except ET.ParseError as exc:
        errors.append(f"{file.relative_to(ROOT)}: {exc}")
if errors:
    print("\n".join(errors))
    sys.exit(1)
print(f"SVG validation passed: {len(files)} files.")
