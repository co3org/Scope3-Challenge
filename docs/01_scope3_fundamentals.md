# Scope 3 Emissions: Fundamentals and Category Breakdown

> **📚 [Scope 3 Challenge](index.md)** · Part 2 of 16 · [← Executive Summary](00_executive_summary.md) · [Next: Complexity & Challenges →](02_complexity_challenges.md)

<details open markdown="1">
<summary><strong>📑 Contents</strong></summary>

- [1. The GHG Protocol's Three Scopes](#1-the-ghg-protocols-three-scopes)
- [2. The 15 Scope 3 Categories](#2-the-15-scope-3-categories)
- [3. Materiality — Which Categories Matter Most by Sector](#3-materiality--which-categories-matter-most-by-sector)
- [4. The Double-Counting Problem](#4-the-double-counting-problem)

</details>

## 1. The GHG Protocol's Three Scopes

The Greenhouse Gas (GHG) Protocol Corporate Standard — first published in 2001, revised in 2004, with the Scope 3 Standard added in 2011 — divides corporate emissions into three nested scopes. This architecture was designed to prevent double-counting *within* a company's boundary, though as we will see, it creates significant double-counting *across* company boundaries.

```mermaid
flowchart TB
    classDef s1 fill:#fff4e6,stroke:#e8590c,color:#7a3d00;
    classDef s2 fill:#e7f5ff,stroke:#1c7ed6,color:#0b3a5e;
    classDef up fill:#e3fafc,stroke:#0c8599,color:#0b3c44;
    classDef down fill:#e6fcf5,stroke:#0ca678,color:#0b2e1d;
    classDef muted fill:#f8f9fa,stroke:#dee2e6,color:#495057;

    subgraph Company["Company Operational Boundary"]
        direction TB
        S1["🏭 Scope 1 — Direct\nFuel combustion\nProcess emissions\nFugitive emissions\nOwned or controlled sources"]
        S2["⚡ Scope 2 — Indirect (Energy)\nPurchased electricity\nPurchased steam, heat, cooling\nLocation-based vs market-based\nTypically 10–30% of footprint"]
    end

    subgraph VC["Value Chain (Scope 3)"]
        direction LR
        UP["⬆️ Upstream\nCat 1–8\nwhat you buy\nand how you buy it"]
        DOWN["⬇️ Downstream\nCat 9–15\nwhat happens after\nyou sell it"]
    end

    Company --> VC
    UP -.->|"Typically 70–90%\nof total footprint"| DOWN

    class S1 s1;
    class S2 s2;
    class UP up;
    class DOWN down;
    class Company muted;
    class VC muted;
```

### Why Three Scopes?

| Scope | Rationale | Control Level | Typical % of Total |
|-------|-----------|--------------|-------------------|
| 1 | Direct operational control | Full | 5–15% |
| 2 | Purchased energy — contractually controllable | Partial | 5–20% |
| 3 | Value chain — influenceable but not controlled | Indirect | 70–90% |

The Protocol's logic: companies should fully account for what they directly control (Scope 1), should account for the carbon embedded in energy they choose to buy (Scope 2), and should *also* disclose the broader value chain impact (Scope 3) — even though they cannot directly control it.

This last requirement is where the complexity explodes.

---

## 2. The 15 Scope 3 Categories

The GHG Protocol's Scope 3 Standard (2011) defines 15 distinct categories, split into upstream (1–8) and downstream (9–15).

```mermaid
flowchart LR
    classDef up fill:#e3fafc,stroke:#0c8599,color:#0b3c44;
    classDef down fill:#e6fcf5,stroke:#0ca678,color:#0b2e1d;
    classDef s3 fill:#ebfbee,stroke:#2b8a3e,color:#0b2e1d;

    subgraph US["Upstream Scope 3 — Cat 1–8"]
        direction TB
        C1["Cat 1\nPurchased Goods\nand Services"]
        C2["Cat 2\nCapital Goods"]
        C3["Cat 3\nFuel and Energy\nRelated Activities"]
        C4["Cat 4\nUpstream Transport\nand Distribution"]
        C5["Cat 5\nWaste Generated\nin Operations"]
        C6["Cat 6\nBusiness Travel"]
        C7["Cat 7\nEmployee Commuting"]
        C8["Cat 8\nUpstream\nLeased Assets"]
    end

    subgraph DS["Downstream Scope 3 — Cat 9–15"]
        direction TB
        C9["Cat 9\nDownstream Transport\nand Distribution"]
        C10["Cat 10\nProcessing of\nSold Products"]
        C11["Cat 11\nUse of\nSold Products"]
        C12["Cat 12\nEnd-of-Life\nTreatment"]
        C13["Cat 13\nDownstream\nLeased Assets"]
        C14["Cat 14\nFranchises"]
        C15["Cat 15\nInvestments\n(Financed Emissions)"]
    end

    class C1,C2,C3,C4,C5,C6,C7,C8 up;
    class C9,C10,C12,C13,C14 down;
    class C11,C15 s3;
```

### Upstream Categories (1–8) — Detailed

#### Category 1: Purchased Goods and Services
The single largest Scope 3 category for most companies. All emissions associated with producing the goods and services a company buys — raw materials, components, professional services, IT, travel, consumables.

**Why it's hard:**
- Requires emissions intensity data from every supplier
- Most companies have thousands of suppliers across dozens of countries
- Emission factors vary enormously by production geography, technology vintage, and energy mix
- Services (consulting, legal, IT) have poorly defined emission factors

**Calculation methods (in decreasing order of accuracy):**

```mermaid
flowchart TD
    classDef s3 fill:#ebfbee,stroke:#2b8a3e,color:#0b2e1d;
    classDef good fill:#ebfbee,stroke:#2f9e44,color:#0b2e1d;
    classDef warn fill:#fff9db,stroke:#f08c00,color:#5c4400;
    classDef bad fill:#fff5f5,stroke:#e03131,color:#5c0f0f;

    M1["Supplier-Specific Method\n(Primary data)\n★★★★★ Accuracy\nDirect data from suppliers\nrequires supplier capacity and trust"]
    M2["Hybrid Method\n★★★★☆ Accuracy\nPrimary supplier data plus\nsecondary emission factors\nfor remaining gaps"]
    M3["Average-Data Method\n★★★☆☆ Accuracy\nIndustry-average emission factors\nper unit of product (kg CO₂e/kg steel)"]
    M4["Spend-Based Method\n★★☆☆☆ Accuracy\nEmission factors per $ of spend\n(kg CO₂e/$ in sector X)\nHighest error, easiest to compute"]

    M1 --> M2 --> M3 --> M4

    class M1 s3;
    class M2 good;
    class M3 warn;
    class M4 bad;
```

**Spend-based error range:** A spend-based factor for "basic iron and steel manufacturing" might be 0.8–2.4 kg CO₂e per dollar, depending on geography and the emission factor database used. Actual intensity can vary **3–10x** between a coal-powered Chinese steel mill and a hydrogen-reduced Swedish steel plant — both of which look identical in a spend-based model.

---

#### Category 2: Capital Goods
Emissions from producing capital equipment — machinery, buildings, vehicles, IT infrastructure. Often overlooked because capex is episodic, but can be material for capital-intensive industries.

**Key complexity:** How do you allocate the lifetime emissions of a piece of equipment to a single reporting year? The GHG Protocol says to attribute all capital good emissions to the year of acquisition — which creates lumpy, potentially misleading annual disclosures.

---

#### Category 3: Fuel- and Energy-Related Activities
Upstream emissions from fuel production (extraction, refining, transport) *not already captured in Scope 1 or 2*. Includes:
- Well-to-gate emissions for purchased fuels
- Transmission and distribution losses for electricity
- Extraction and transport of fuels used to generate purchased electricity

This is sometimes called "Scope 2.5" — it fills gaps between Scope 2 (combustion of purchased energy) and the full lifecycle of that energy.

---

#### Category 4: Upstream Transportation and Distribution
Emissions from transporting and distributing purchased goods — from supplier to the company's facility. Includes third-party logistics, rail, sea freight, air freight.

**Key tension:** The company *controls* which logistics providers it uses, but has limited data on their actual fuel consumption and load factors. Shipping companies vary enormously in carbon intensity per tonne-kilometer.

---

#### Category 5: Waste Generated in Operations
Emissions from waste disposal — landfill, incineration, wastewater treatment — for waste generated at company-operated facilities. Often a small category, but can be significant in food processing, chemical manufacturing, and construction.

---

#### Category 6: Business Travel
Employee travel by air, rail, car (non-company-owned vehicles), and hotels. Typically easier to measure (travel management systems hold booking data), but radiative forcing from aviation contrails is a significant area of scientific debate and methodological inconsistency.

**Radiative forcing factor:** Aviation emissions at altitude have an additional warming effect beyond CO₂ from fuel combustion — the IPCC estimates a radiative forcing index (RFI) of 2–4x. Some companies apply this; most do not. The GHG Protocol does not require it.

---

#### Category 7: Employee Commuting
Emissions from employees traveling to and from work. Requires survey-based estimates of commute distance, mode, and frequency. Work-from-home policies complicate this significantly — does remote work move emissions from Cat 7 to Cat 11 (home energy use)?

---

#### Category 8: Upstream Leased Assets
Emissions from assets leased by the company (as lessee) not captured in Scope 1/2. Relevant primarily for companies with large leased fleets, data centers in colocation facilities, or leased retail space.

---

### Downstream Categories (9–15) — Detailed

#### Category 9: Downstream Transportation and Distribution
Emissions from transporting sold products from the point of sale to end customers and between intermediaries. Particularly material for e-commerce companies, consumer goods, and distributors.

---

#### Category 10: Processing of Sold Products
Emissions from processing intermediate products sold to other businesses — e.g., a chemical company selling feedstocks that customers then process further. Requires understanding customers' manufacturing processes.

---

#### Category 11: Use of Sold Products
**The category that defines energy-transition-era Scope 3.**

For any company selling products that consume energy during their lifetime — cars, appliances, electronics, HVAC systems, industrial equipment — Category 11 captures *lifetime operational emissions* from those products in customers' hands.

**Why this is uniquely difficult:**

```mermaid
flowchart LR
    classDef info fill:#e7f5ff,stroke:#1971c2,color:#0b3a5e;
    classDef warn fill:#fff9db,stroke:#f08c00,color:#5c4400;
    classDef muted fill:#f8f9fa,stroke:#dee2e6,color:#495057;

    subgraph Assumptions["Assumptions Required for Cat 11 Calculation"]
        direction TB
        A1["Product\nLifetime\n(years)"]
        A2["Annual\nEnergy Use\n(kWh/year)"]
        A3["Grid Carbon\nIntensity\n(current and future)"]
        A4["Usage\nPatterns\n(actual vs rated)"]
        A5["Fleet\nMix\n(product variants)"]
        A6["Geographic\nDistribution\nof sales"]
    end

    Assumptions --> R["Cat 11\nEmissions Estimate\n±50–200%\nuncertainty range"]

    class A1,A2,A3,A4,A5,A6 info;
    class R warn;
    class Assumptions muted;
```

For an automotive OEM, Cat 11 is typically **85–95% of total Scope 3** and **75–85% of the company's entire GHG footprint** (Scopes 1+2+3). Reducing Cat 11 requires transitioning to EVs — but even EVs' Cat 11 depends on grid decarbonization that is outside the manufacturer's control.

---

#### Category 12: End-of-Life Treatment
Emissions from disposal or recycling of sold products at end of life. Companies must estimate product retirement rates, disposal methods by geography, and emissions from various waste treatment processes.

---

#### Category 13: Downstream Leased Assets
Emissions from assets owned by the company (as lessor) and leased to others. Real estate investment trusts (REITs) and commercial property companies face this as a major category.

---

#### Category 14: Franchises
Emissions from operations of franchisees. Material for companies like fast food chains (McDonald's, Subway), hotel chains, and retail franchises — where the corporate entity owns the brand but franchisees own the operations.

**Key problem:** Corporate cannot mandate emissions reporting standards on independent franchisees without creating legal risk around control/employment classification.

---

#### Category 15: Investments (Financed Emissions)
Emissions attributable to a company's equity investments, debt financing, and other financial services. This is the Scope 3 category that applies to banks, asset managers, insurance companies, and institutional investors.

Governed primarily by the **Partnership for Carbon Accounting Financials (PCAF)** standard, which extends the GHG Protocol for financial institutions.

```mermaid
flowchart TD
    classDef market fill:#f3f0ff,stroke:#7950f2,color:#2e1b5c;
    classDef info fill:#e7f5ff,stroke:#1971c2,color:#0b3a5e;
    classDef bad fill:#fff5f5,stroke:#e03131,color:#5c0f0f;
    classDef muted fill:#f8f9fa,stroke:#dee2e6,color:#495057;

    Bank["Commercial Bank\n$500B loan portfolio"]

    subgraph Portfolio["Financed Emissions Calculation (PCAF)"]
        direction TB
        P1["Corporate Loans\nAttribution = (Outstanding Loan / Enterprise Value) × Borrower Emissions"]
        P2["Project Finance\nAttribution = (Outstanding Loan / Total Project Costs) × Project Emissions"]
        P3["Mortgages\nAttribution = (Outstanding Mortgage / Property Value) × Property Emissions"]
        P4["Listed Equity and Bonds\nAttribution = (Investment Value / Enterprise Value) × Investee Emissions"]
        P5["Business Loans under $1M\nAttribution = Sector emission factor × Revenue"]
    end

    Bank --> Portfolio
    Portfolio --> Total["Bank's Scope 3 Cat 15\n(Financed Emissions)\n\nTypically 100–1000x\nlarger than Scope 1+2"]

    class Bank market;
    class P1,P2,P3,P4,P5 info;
    class Total bad;
    class Portfolio muted;
```

For a major commercial bank, financed emissions are typically **100–1,000 times larger** than the bank's own operational emissions (Scopes 1 and 2). This means a bank's net-zero commitment is essentially meaningless without a credible plan to decarbonize its loan book.

---

## 3. Materiality — Which Categories Matter Most by Sector

Not every category is material for every company. The GHG Protocol requires companies to assess and disclose all material categories. What "material" means is frustratingly vague — the Protocol says a category is material if "it comprises a significant portion of total Scope 3 emissions, contributes to [company's] GHG risks, is important for reporting purposes, or is considered material by stakeholders."

*Note: The table below shows dominant category and share of total Scope 3 — not a single-axis comparison, as each sector's profile is multi-dimensional.*

| Sector | Dominant Category | % of Total Scope 3 | Secondary |
|--------|------------------|-------------------|-----------|
| Automotive OEM | Cat 11 (Use of sold products) | 85–95% | Cat 1 (steel, aluminum) |
| Apparel / Fashion | Cat 1 (Purchased goods) | 60–80% | Cat 4 (shipping) |
| Commercial Bank | Cat 15 (Financed emissions) | 95–99% | Cat 6 (business travel) |
| Food & Beverage | Cat 1 (Ag raw materials) | 50–80% | Cat 11 (cooking) |
| Software / Tech | Cat 1 (Hardware supply chain) | 40–70% | Cat 3 (data center energy) |
| Oil & Gas | Cat 11 (Combustion of sold fuels) | 70–90% | Cat 1, Cat 4 |
| Cement | Cat 1 + Cat 3 | 30–50% | Cat 11 |
| Real Estate | Cat 13 (Downstream leased) | 70–90% | Cat 2 (construction) |

---

## 4. The Double-Counting Problem

Scope 3 is designed to be a *company-level* accounting tool, not a *system-level* one. When you sum all companies' Scope 3 disclosures, you count most emissions multiple times.

```mermaid
flowchart LR
    classDef up fill:#e3fafc,stroke:#0c8599,color:#0b3c44;
    classDef down fill:#e6fcf5,stroke:#0ca678,color:#0b2e1d;
    classDef info fill:#e7f5ff,stroke:#1971c2,color:#0b3a5e;
    classDef warn fill:#fff9db,stroke:#f08c00,color:#5c4400;

    Mine["Iron ore<br/>100 t"]
    Steel["Steel mill<br/>800 t · buys 100 t"]
    Auto["Auto OEM<br/>50 t · buys 900 t"]
    Driver["Driver<br/>200 t"]

    Mine --> Steel --> Auto --> Driver

    Note["Physical total: 1,150 t<br/>Sum of disclosures: ~6,100 t<br/>same tonnes counted repeatedly"]

    class Mine up;
    class Steel,Auto info;
    class Driver down;
    class Note warn;
```

This is not a bug in the Protocol — it is a deliberate design choice. Scope 3 is intended to give each company visibility into its *value chain risk*, not to produce system-level accounting. But it creates enormous confusion when aggregating disclosures, setting sector-level targets, or comparing company disclosures.

The implication for policy and markets: you cannot simply add up Scope 3 disclosures to understand economy-wide emissions. National GHG inventories (using the IPCC methodology) are the authoritative system-level account — and they do not map cleanly onto corporate Scope 3 boundaries.

## Key Takeaways

- Scope 3 spans **15 categories** — upstream (Cat 1–8, what you buy) and downstream (Cat 9–15, what happens after you sell).
- **Cat 11 (use of sold products)** dominates energy-transition sectors; **Cat 15 (financed emissions)** dominates finance.
- Calculation accuracy falls sharply from supplier-specific (±10–20%) down to spend-based (±100–400%).
- Double-counting is **by design** — Scope 3 is a company-level risk tool, not a system-level inventory.

---

**← Previous:** [Executive Summary](00_executive_summary.md) &nbsp;·&nbsp; **Next:** [Complexity & Challenges](02_complexity_challenges.md) → &nbsp;·&nbsp; **[📚 Guide Index](index.md)**
