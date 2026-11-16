# 🧰 Repository scripts

## check_docs.py
Validates relative Markdown links and local HTML image references. It also checks image alt attributes and rejects repository path escapes.

Run:

```bash
python scripts/check_docs.py
```

## check_svg.py
Parses SVG files under docs/assets and verifies they are well-formed XML with an SVG root.

Run:

```bash
python scripts/check_svg.py
```

These scripts validate repository documentation and vector assets. They do not test Express routes, authentication, MongoDB connectivity, or security controls.
