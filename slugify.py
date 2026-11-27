"""GitHub-compatible slug generator for MkDocs.

Makes MkDocs heading anchors match GitHub's `github-slugger` exactly, so every
`#anchor` link and the in-page tables of contents work identically on the
GitHub repository and on the published site.
"""
import re

# Keep word characters, whitespace, and hyphens; drop everything else
# (punctuation, symbols, em/en dashes, arrows, etc.).
_REMOVE = re.compile(r"[^\w\s-]", re.UNICODE)


def slugify(value, separator="-"):
    """Mimic github-slugger: lowercase, strip punctuation, replace each space."""
    value = value.lower()
    value = _REMOVE.sub("", value)
    return value.replace(" ", separator)
