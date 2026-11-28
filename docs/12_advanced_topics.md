# Advanced Topics for Practitioners

> **📚 [Scope 3 Challenge](index.md)** · Part 13 of 16 · [← Templates & Checklists](11_templates.md) · [Next: Glossary →](13_glossary.md)

<details open markdown="1">
<summary><strong>📑 Contents</strong></summary>

- [Allocation Methods, Done Properly](#allocation-methods-done-properly)
- [Uncertainty and Sensitivity Analysis](#uncertainty-and-sensitivity-analysis)
- [PCAF Data Quality and the EV Attribution Anomaly](#pcaf-data-quality-and-the-ev-attribution-anomaly)
- [Market-Based vs. Location-Based Scope 2](#market-based-vs-location-based-scope-2)
- [The GHG Protocol Revision: The Five Debates](#the-ghg-protocol-revision-the-five-debates)
- [Scenario Analysis: IEA STEPS vs. NZE](#scenario-analysis-iea-steps-vs-nze)
- [Assurance: Limited vs. Reasonable](#assurance-limited-vs-reasonable)
- [From Company Accounting to System Accounting](#from-company-accounting-to-system-accounting)

</details>

> This section assumes you've read the core guide ([00](00_executive_summary.md)–[07](07_industry_data_and_benchmarks.md)). It goes one level deeper on the topics that separate a competent inventory from a rigorous one.

---

## Allocation Methods, Done Properly

When a single process produces multiple outputs, you must *allocate* its emissions across them. The choice of basis changes the answer — sometimes dramatically. The main allocation bases:

| Basis | Definition | Works well for | Breaks down for |
|-------|-----------|----------------|-----------------|
| **Physical / mass** | Allocate by weight of each co-product | Homogeneous physical products (steel slabs) | Products with different densities/value |
| **Energy content** | Allocate by embedded energy | Fuels, energy products | Non-fuel co-products |
| **Economic value** | Allocate by market value of each co-product | Refineries, where value diverges wildly | Products with volatile prices |
| **System expansion / displacement** | Avoid allocation by modelling what the co-product *displaces* | When a co-product substitutes a primary product | Requires heavy assumptions |

**The refinery example.** A barrel of crude becomes petrol, diesel, jet fuel, asphalt, and petrochemicals. Allocate process emissions:

- **By mass:** heavy products (asphalt) absorb more.
- **By energy content:** the fuels absorb more.
- **By economic value:** petrol and jet fuel absorb more (higher value per tonne).

Three defensible methods, three materially different Scope 3 numbers for the buyer of each product. This is not a rounding error — it is a *methodology choice* that must be disclosed. The GHG Protocol's Scope 3 Standard requires companies to *explain* their allocation approach, but does not mandate a single one.

> **Practitioner note:** ISO 14044 (LCA) prefers system expansion over allocation where possible; corporate GHG accounting more often uses physical or economic allocation. Know which regime you're in.

---

## Uncertainty and Sensitivity Analysis

Every Scope 3 number is the product of activity data and emission factors, each with error. Two complementary techniques tell you how much to trust the result:

**Sensitivity analysis** — change one input at a time and watch the output.
*Example:* in [09 Worked Example](09_worked_example.md), changing the Cat 11 grid factor from 0.10 to 0.45 kg/kWh swings Cat 11 from 432k to 1,944k tCO₂e — a 4.5x range from one assumption.

**Uncertainty (Monte Carlo) analysis** — assign a probability distribution to each input and simulate thousands of outcomes to produce a confidence interval.
*Example:* if Cat 1 spend-based factor is ±100% and Cat 11 lifetime is 10–15 years, the *combined* total might have a 90% confidence interval spanning ±60%.

**Why this matters for disclosure:** CSRD/ISSB are moving toward expecting companies to *state* uncertainty, not just report a point estimate. A point estimate without uncertainty is, at best, incomplete; at worst, misleading.

**The value of information:** uncertainty analysis tells you *where* better data has the most leverage. If Cat 1 is ±100% and Cat 11 is ±40%, a supplier-data programme targeting Cat 1 reduces total uncertainty far more than refining Cat 11.

---

## PCAF Data Quality and the EV Attribution Anomaly

PCAF scores financed-emissions data quality on a **1–5 scale**:

| Score | Meaning | Typical source |
|-------|---------|----------------|
| 1 | Audited, company-specific primary data | Direct investee disclosures, assured |
| 2 | Company-specific, unaudited | Investee disclosures, unassured |
| 3 | Sector-average activity data | Regional/national sector factors |
| 4 | Sector-average economic data | Spend/asset-based proxies |
| 5 | Estimated, lowest quality | Undisclosed, modelled |

The score is useful, but it exposes a deeper structural issue: **the enterprise-value (EV) attribution method.**

PCAF allocates financed emissions as `(exposure ÷ enterprise value) × investee emissions`. The anomaly: **a company with a *high* market valuation gets *less* emissions attributed per unit of output than an identical company with a depressed valuation.** Carbon intensity becomes inversely correlated with market cap. A distressed fossil-fuel company with a falling share price can *look* like it has lower financed-emissions intensity than a thriving clean-energy company — purely because of the denominator.

**The practical consequence:** comparing banks' financed-emissions intensity across portfolios is fraught when their clients have very different valuation profiles. This is a known, acknowledged weakness of the current PCAF standard, and a live area of debate (see [03 Case Studies](03_industry_case_studies.md)).

---

## Market-Based vs. Location-Based Scope 2

Scope 2 has *two* valid accounting methods — and they can give wildly different answers:

- **Location-based:** uses the average grid intensity *where you consume* the electricity.
- **Market-based:** reflects the *contractual* instruments you hold (RECs, green tariffs, PPAs).

A company in a coal-heavy grid that buys unbundled RECs can report near-zero Scope 2 under the market-based method, while its *location-based* number stays high.

**The REC debate:** unbundled RECs are often cheaper and disconnected from *new* renewable generation — buying a REC from an existing hydro plant in Norway does not displace coal in your region. Critics argue market-based accounting can therefore *overstate* the real-world effect of a company's choices. The GHG Protocol revision is actively debating whether to tighten or retain the market-based method (see below).

**Why it matters for Scope 3:** the same logic is the *template* for how inset credits might be treated. If the Protocol validates market-based Scope 2, it strengthens the case for a "market-based" treatment of supplier reductions in Scope 3. The analogy is imperfect but instructive (see [05 Carbon3 Solution](05_carbon3_solution.md)).

---

## The GHG Protocol Revision: The Five Debates

The first major revision since 2011 (concluding ~2025–2026) will settle several questions that currently make Scope 3 strategy a bet. The five that matter most:

1. **Supplier-reduction attribution.** Can a buyer claim a supplier's verified Scope 1 reduction in its own Scope 3 account? *This is the existential question for inset credits.*

2. **Carbon removals in Scope 3.** The 2011 standard is silent on how removals (not just reductions) factor into Scope 3 net calculations. New guidance is expected.

3. **Market-based Scope 2.** Tighten, retain, or replace the REC-based method? This has knock-on effects for the inset analogy.

4. **Beyond Value Chain Mitigation (BVCM).** Should offsets be formally separated from in-value-chain reductions — and how should BVCM be reported?

5. **Allocation and double-counting.** How (if at all) to reconcile company-level Scope 3 with system-level national inventories, which use a completely different methodology.

> **Practitioner's stance:** don't build a multi-year disclosure or inset-purchase strategy on any single outcome. Hedge by keeping reductions *traceable* and *non-double-counted* regardless of the final language — that discipline survives any of the plausible outcomes.

---

## Scenario Analysis: IEA STEPS vs. NZE

Downstream emissions (especially Cat 11) depend on *future* grid and technology trajectories, so the scenario you pick drives your number:

| IEA scenario | What it assumes | Effect on Cat 11 |
|--------------|-----------------|------------------|
| **STEPS** (Stated Policies) | Current policies only, modest progress | Higher grid intensity → higher Cat 11 |
| **APS** (Announced Pledges) | Governments meet announced pledges | Mid-range |
| **NZE** (Net Zero 2050) | 1.5°C-aligned rapid decarbonisation | Lower grid intensity → lower Cat 11 |

An automotive OEM using STEPS versus NZE for grid intensity can change its Cat 11 estimate by **30–50%** for the same vehicle sold today (see [03 Case Studies](03_industry_case_studies.md)). The choice is defensible either way — but it must be *disclosed*, and it should be consistent with the scenario used in your climate risk (TCFD/ISSB) analysis.

---

## Assurance: Limited vs. Reasonable

CSRD requires assurance over sustainability disclosures, escalating from **limited** toward **reasonable** by 2028. The difference is the auditor's bar:

- **Limited assurance:** negative form — "nothing came to our attention suggesting the statement is materially misstated." Lower effort, lower confidence.
- **Reasonable assurance:** positive form — "the statement is fairly presented, in all material respects." Audit-level rigor, higher cost.

**The Scope 3 problem:** reasonable assurance is hard when the underlying data is supplier self-reported and unassured. This is why the audit trail — method, source, vintage, allocation, and verification of each input — is the practical precondition for assurance, and why insetting infrastructure emphasises ISO 14064-3 verification (see [05](05_carbon3_solution.md)).

---

## From Company Accounting to System Accounting

The most important conceptual limit of Scope 3: **it is a company-level risk tool, not a system-level inventory.** Summing every company's Scope 3 over-counts the same physical emissions many times, by design (see [01 Fundamentals](01_scope3_fundamentals.md)).

National GHG inventories, by contrast, use IPCC sectoral methodologies that *avoid* double counting — but they don't map cleanly onto corporate Scope 3 boundaries. This has real consequences:

- You **cannot** add up corporate Scope 3 to get an economy-wide number.
- Sector-level "reduction" claims that rely on summing Scope 3 are **not physically meaningful**.
- Policy that tries to price carbon based on corporate Scope 3 runs into the same boundary problem.

**The insight for market design:** any *financial* instrument built on Scope 3 (inset credits, supply-chain carbon pricing) must solve attribution and double-counting *within* the value chain — the exact problem that [05 Carbon3 Solution](05_carbon3_solution.md)'s allocation engine and retirement system are designed to address.

---

## Key Takeaways

- **Allocation and scenario choices are not technicalities** — they can swing results by multiples, so disclose them.
- **Uncertainty analysis tells you where data has the most leverage**; use it to prioritise.
- **The GHG Protocol revision is the single biggest regulatory swing factor** for Scope 3 strategy.
- **Assurance and audit-trail discipline** are the practical bridge from "we report" to "we can be believed."

---

**← Previous:** [Templates & Checklists](11_templates.md) &nbsp;·&nbsp; **Next:** [Glossary](13_glossary.md) → &nbsp;·&nbsp; **[📚 Guide Index](index.md)**
