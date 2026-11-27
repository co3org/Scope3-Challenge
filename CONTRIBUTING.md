# Contributing

Thank you for helping make this guide more accurate, clearer, and more useful. This repository is a knowledge base about Scope 3 GHG accounting — corrections, new data, additional sector case studies, and regulatory updates are all welcome.

## Before You Start

- **Open an issue first** for substantial additions (new sections, new case studies, new files) so the direction can be agreed before you invest time.
- **Check the existing structure.** Files are numbered `00`–`10` and are meant to be read in order. Add new numbered files only when the content genuinely warrants a top-level part; otherwise, extend an existing file.

## Style Guide

- **Rigour over promotion.** This includes the Carbon3 sections — the guide's credibility comes from being honest about open questions and risks. Do not add sales copy.
- **Cite every factual claim.** Add the source (and a URL where possible) inline or to the [Sources](07_industry_data_and_benchmarks.md#sources) list. Prefer primary sources (company reports, standards bodies, regulators) over press summaries.
- **Match the existing conventions:**
  - British spelling for organisational terms (*decarbonisation, programme, organisation*) as used in the Carbon3 content.
  - Mermaid for diagrams; keep node labels short and test that they render.
  - Tables for structured comparisons; blockquotes for call-outs and key insights.
  - A `📑 Contents` collapsible at the top of each numbered file, and a `## Key Takeaways` section at the end.
- **Keep navigation intact.** Each numbered file starts with a breadcrumb header and ends with a prev/next footer. When you add a file, update the header/footer of its neighbours and the [Guide Index](README.md#guide-index).

## Process

1. Fork and branch from `main`.
2. Make your change, following the style guide.
3. Verify that links resolve and that any Mermaid diagrams render (GitHub's built-in renderer supports flowchart, sequence, gantt, pie, timeline, xychart, and quadrant).
4. Open a pull request with a clear description and the sources you used.

## Data Updates

The figures in [07 Industry Data & Benchmarks](07_industry_data_and_benchmarks.md) are drawn from the [Carbon3 Emissions Registry](https://demo.carbon3.net/api/emissions-registry) and third-party research. When updating data:

- Record the report year and the number of companies (`n`) in the sample.
- Preserve the distinction between **medians**, **averages**, and **totals**.
- Flag any change in methodology that breaks year-over-year comparability.

---

*Maintained by [Carbon3 Global Pte. Ltd.](https://carbon3.net).*
