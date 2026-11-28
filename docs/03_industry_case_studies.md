# Scope 3 in Practice: Industry Case Studies

> **📚 [Scope 3 Challenge](index.md)** · Part 4 of 16 · [← Complexity & Challenges](02_complexity_challenges.md) · [Next: Abatement Challenges →](04_abatement_challenges.md)

<details open markdown="1">
<summary><strong>📑 Contents</strong></summary>

- [Overview](#overview)
- [Case Study 1: Automotive OEM](#case-study-1-automotive-oem)
- [Case Study 2: Apparel / Fashion Brand](#case-study-2-apparel--fashion-brand)
- [Case Study 3: Commercial Bank — Financed Emissions](#case-study-3-commercial-bank--financed-emissions)
- [Case Study 4: Food & Beverage — Agricultural Emissions](#case-study-4-food--beverage--agricultural-emissions)
- [Cross-Sector Summary: The Common Failure Patterns](#cross-sector-summary-the-common-failure-patterns)

</details>

## Overview

Abstract complexity becomes concrete when you trace specific supply chains. This section provides deep-dive case studies for four sectors where Scope 3 accounting is particularly challenging: automotive manufacturing, fashion/apparel, commercial banking, and food & agriculture. For each sector, we map the full value chain, identify the dominant emission categories, and explain why the standard approaches fail.

---

## Case Study 1: Automotive OEM

### Value Chain Map

```mermaid
    flowchart LR
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef down fill:#63e6be,stroke:#0ca678,color:#0b2e1d;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    subgraph T3["Tier 3+ Raw Materials"]
        Iron["Iron Ore\nMining"]
        Baux["Bauxite →\nAluminum"]
        Lith["Lithium/Cobalt\nMining (EVs)"]
        Petro["Petroleum →\nPlastics"]
    end

    subgraph T2["Tier 2 Processing"]
        Steel["Steel\nSmelting\n~1.8t CO₂/t steel\n(global avg)"]
        AlumF["Aluminum\nSmelting\n~11t CO₂/t Al"]
        Battery["Battery Cell\nManufacturing\n~30-100 kg CO₂/kWh\n(falling rapidly)"]
        Chem["Chemical\nSynthesis"]
    end

    subgraph T1["Tier 1 Component Suppliers"]
        Body["Body\nPanels"]
        Power["Powertrain\nComponents"]
        BattPk["Battery\nPacks"]
        Elec["Electronics\nand Sensors"]
        Int["Interior\nComponents"]
    end

    subgraph OEM["Auto OEM (Reporting Company)"]
        Manuf["Assembly\nPlant\nScope 1+2"]
        Log["Internal\nLogistics"]
    end

    subgraph DS["Downstream"]
        Deal["Dealerships\nand Distribution\nCat 9"]
        Use["Vehicle\nUse Phase\nCat 11\n~85% of total S3"]
        EoL["End of Life\nRecycling\nCat 12"]
    end

    T3 --> T2 --> T1 --> OEM --> DS

    note1["Cat 1 (upstream)\n~10-15% of total footprint"]
    note2["Cat 11 (use phase)\n~75-85% of total footprint"]

    class Iron,Baux,Lith,Petro,AlumF,Chem,Body,Power,BattPk,Elec,Int up;
    class Steel,Battery warn;
    class Manuf,Log s1;
    class Deal,EoL down;
    class Use bad;
    class note1,note2 warn;
```

### Emissions Profile: Traditional ICE vs. BEV

| Category | Traditional ICE | Battery EV (grid: 2023 avg) | Battery EV (grid: 100% renewable) |
|----------|----------------|---------------------------|----------------------------------|
| Cat 1 (Steel, Al, components) | ~3 tCO₂e | ~3 tCO₂e | ~3 tCO₂e |
| Cat 1 (Battery production) | — | ~5–10 tCO₂e (falling; leading fabs 3–5t) | ~2–4 tCO₂e |
| Cat 11 (Use phase, 200k km) | ~35–45 tCO₂e | ~15–25 tCO₂e | ~2–5 tCO₂e |
| **Total lifetime** | **~40–50 tCO₂e** | **~25–38 tCO₂e** | **~8–12 tCO₂e** |

### The OEM's Scope 3 Accounting Challenges

**Challenge A: Cat 11 Projection Uncertainty**

A major OEM selling 3 million vehicles per year must estimate the lifetime emissions of those vehicles *at the time of sale*. This requires projections of:

- Grid carbon intensity in 40+ countries over 12–15 years
- EV adoption rate within its own fleet
- Driver behavior and annual mileage
- Vehicle retirement patterns

**Actual industry practice:** Most OEMs use IEA's Stated Policies Scenario (STEPS) for grid projections — which assumes modest policy continuation and does not model rapid decarbonization. Using STEPS vs. IEA's Net Zero Scenario can change Cat 11 estimates by **30–50%** for the same vehicle sold today.

**Challenge B: Battery Supply Chain (Tier 3+ Visibility)**

The cobalt supply chain for EV batteries illustrates the multi-tier data problem:

```mermaid
    flowchart TD
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    Co["Cobalt Mine\nDRC — ~70% of global supply\nintensity highly variable\nartisanal vs industrial\n0.5–8 kg CO₂e/kg Co = 16x"]
    Ref["Cobalt Refiner\nChina — ~80% of refining\ncoal-heavy grid\n15–30 kg CO₂e/kg Co"]
    Prec["Precursor\nCathode Active Material\n(PCAM)\nChina, South Korea, Japan"]
    Cell["Battery Cell\nManufacturing\n65–100 kg CO₂e/kWh"]
    Pack["Battery Pack\nAssembly (Tier 1)"]
    OEM["Auto OEM"]

    Co --> Ref --> Prec --> Cell --> Pack --> OEM

    note["OEM has supplier data from Tier 1.\nTiers 2–4 are black boxes\nfor 95% of OEMs."]

    class Co bad;
    class Ref,Prec,Cell,Pack up;
    class OEM s1;
    class note warn;
```

**Challenge C: The SBTi Paradox for OEMs**

An OEM with a 2030 SBTi target must reduce Cat 11 by 67% (1.5°C pathway). But Cat 11 is determined by:
1. The EV share of new vehicle sales (company controls this)
2. The carbon intensity of the electricity customers use to charge EVs (company cannot control this)
3. The pace of fleet turnover (customers decide when to buy new vehicles)

**Illustrative calculation:** If an OEM sells 3M vehicles/year and sets a Cat 11 target requiring 50% reduction by 2030:

- To achieve through EV mix alone: ~70–80% of new sales must be BEV by 2030 (even with significant grid decarbonization assumed)
- Current (2024) industry average: 15–20% BEV share
- The math requires the OEM to nearly quadruple its BEV penetration in 6 years — which depends on consumer adoption, charging infrastructure, grid capacity, and battery material supply chains that are largely outside its control

---

## Case Study 2: Apparel / Fashion Brand

### Value Chain Map

```mermaid
    flowchart TD
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef down fill:#63e6be,stroke:#0ca678,color:#0b2e1d;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    subgraph Raw["Raw Materials (Cat 1 Upstream)"]
        Cotton["Cotton Farming\n~5,000 L water/kg\n2–6 kg CO₂e/kg\nfertilizer = N₂O"]
        Poly["Polyester\n(fossil-based)\n5–15 kg CO₂e/kg"]
        Wool["Wool\n~36 kg CO₂e/kg\nmethane from sheep"]
        Regen["Recycled Fiber\n1–3 kg CO₂e/kg\n(potential)"]
    end

    subgraph Process["Processing (Cat 1 Upstream)"]
        Spin["Spinning\nand Weaving"]
        Dye["Dyeing\nand Finishing\nwater, chemicals,\nheat-intensive"]
        Cut["Cut, Make, Trim\n(CMT)\nlabor-intensive\nlow-tech factories"]
    end

    subgraph Brand["Brand (Reporting Company)"]
        Design["Design and\nProduct Dev"]
        Proc["Procurement\nand QA"]
        Mktg["Marketing and\nBrand"]
    end

    subgraph DS["Downstream"]
        Ship["Ocean/Air Freight\nCat 4, Cat 9"]
        Retail["Retail\n(Own/Franchise)\nCat 13/14"]
        Use["Consumer Washing\nand Drying\nCat 11"]
        EoL["Landfill /\nIncineration\nCat 12\n>85% of apparel"]
    end

    Raw --> Process --> Brand --> DS

    note["Brand employs zero manufacturing workers.\nZero direct control of mills or farms.\nEntire physical chain = Scope 3."]

    class Cotton,Poly,Wool,Regen,Spin,Cut up;
    class Dye warn;
    class Design,Proc,Mktg s1;
    class Ship,Retail,Use down;
    class EoL bad;
    class note warn;
```

### The "Disintermediated Brand" Problem

Fast fashion brands like Zara, H&M, and Shein have almost no direct physical operations — they design, market, and retail. Every single step of physical production is in their Scope 3 (Category 1). The brand's entire climate impact is in its supply chain, and that supply chain:

- Spans 50–100+ countries
- Involves thousands of direct suppliers and tens of thousands of indirect ones
- Operates in jurisdictions with no carbon pricing or emissions reporting requirements
- Changes composition significantly each season

**The tier multiplication problem:**

```mermaid
    flowchart TD
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    Brand["Brand\n1 entity"]
    T1["Tier 1 Garment Factories\n~200–500 factories"]
    T2["Tier 2 Fabric Mills\n~2,000–5,000 mills"]
    T3["Tier 3 Yarn/Fiber Suppliers\n~10,000+ entities"]
    T4["Tier 4 Raw Material\n~50,000+ farms/mines"]

    Brand --> T1 --> T2 --> T3 --> T4

    note["Engagement cost grows\nexponentially by tier.\nTier 4 is effectively\nunreachable for most brands."]
    T4 --> note

    class Brand s1;
    class T1,T2,T3,T4 up;
    class note warn;
```

### Dyeing and Finishing: The Hidden Hotspot

The dyeing and finishing stage — converting grey fabric to finished textile — is often the largest single-process emission source within apparel manufacturing, yet receives relatively little public attention.

| Process | Emission Driver | Typical Intensity |
|---------|----------------|-------------------|
| Pre-treatment (scouring, bleaching) | Heat + chemicals | 2–5 kg CO₂e/kg fabric |
| Dyeing | Heat (steam, hot water) + dye chemicals | 3–8 kg CO₂e/kg fabric |
| Finishing (coatings, water repellency) | Heat + fluorochemical treatments | 1–3 kg CO₂e/kg fabric |
| Wastewater treatment | Energy for treatment + methane from effluent | 0.5–2 kg CO₂e/kg fabric |

A fabric mill in Bangladesh running on coal-fired grid power has a dyeing intensity ~4–6x higher than an equivalent mill in Portugal with access to EU grid electricity. Yet both supply identical-looking fabric to a brand that uses an average fabric emission factor per kg.

### Consumer Use Phase: The Inconvenient Category 11

For a pair of jeans, the use phase (washing, drying, ironing over a 5-year life) can account for **30–40%** of total lifecycle emissions. A brand has essentially zero ability to change consumer washing behavior at scale. They can:

- Design for lower wash frequency (longer-lasting treatments)
- Label for cold-water washing
- Release consumer campaigns

None of these interventions can be measured and attributed to the brand's Cat 11 reduction. The category exists in the accounts but cannot be meaningfully managed.

---

## Case Study 3: Commercial Bank — Financed Emissions

### Why Banks' Scope 3 Dwarfs Their Other Emissions

```mermaid
    flowchart LR
    classDef good fill:#69db7c,stroke:#2f9e44,color:#0b2e13;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;

    subgraph Bank["Large Commercial Bank (Illustrative)"]
        Ops["Operational Emissions\n(Scope 1+2)\n~100,000 tCO₂e/yr\noffices + data centers"]
        Cat15["Financed Emissions\n(Scope 3 Cat 15)\n~150–500 MtCO₂e/yr\n1,500–5,000x operational\nloan book $500B+\nspanning all sectors"]
    end

    class Ops good;
    class Cat15 bad;
```

### The PCAF Attribution Calculation in Practice

A bank with a $500M loan to an oil & gas company:

```
Company enterprise value (equity + net debt) = $20B
Outstanding loan = $500M
Attribution factor = $500M / $20B = 2.5%

Company Scope 1+2+3 emissions = 50 MtCO₂e/year

Bank's attributed financed emissions = 2.5% × 50 MtCO₂e = 1.25 MtCO₂e/year
```

This single loan generates financed emissions equal to **12.5 times** the bank's entire operational footprint.

### The Engagement vs. Divestment Dilemma

```mermaid
    flowchart TD
    classDef dark fill:#212529,stroke:#101113,color:#fff;
    classDef info fill:#d0ebff,stroke:#1971c2,color:#1864ab;
    classDef good fill:#69db7c,stroke:#2f9e44,color:#0b2e13;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    START["Bank has Net-Zero\ncommitment by 2050"]
    Q1{"Client is high-emitting\nsteel/cement company"}

    Engage["Strategy A: Engage\nContinue lending.\nRequire decarbonization plan.\nMay offer green financing.\nPro: transition finance.\nCon: emissions stay attributed."]
    Divest["Strategy B: Divest/Exit\nRefuse new loans.\nLet existing mature.\nFinanced emissions drop.\nPro: reduces Cat 15.\nCon: client finds another lender;\nworld emissions unchanged."]
    Green["Strategy C: Transition Finance\nLend for decarbonization:\ngreen steel capex, CCS, electrification.\nPro: real-world change.\nCon: still attributed until client\ncuts Scope 1+2."]

    START --> Q1
    Q1 --> Engage
    Q1 --> Divest
    Q1 --> Green

    Insight["Key Insight: PCAF attribution\nrewards divestment even when\nengagement produces better outcomes.\nFundamental flaw in financed\nemission accounting."]

    Engage --> Insight
    Divest --> Insight
    Green --> Insight

    class START dark;
    class Q1 info;
    class Engage info;
    class Divest warn;
    class Green good;
    class Insight warn;
```

### The SME Lending Black Hole

Large corporate clients (Fortune 500) have Scope 1+2+3 disclosures that banks can use for PCAF calculations. But the majority of bank loan books by *count* (though not by value) consists of SME loans — companies with annual revenues of $1M–$50M that have never produced a GHG inventory.

For these loans, PCAF requires the "spend-based fallback" — essentially applying sector-average emission intensities. This produces numbers with **±200–500%** uncertainty, and provides no ability to track improvement over time.

**Illustrative coverage gap:**

| Loan Segment | % of Loan Book by Value | PCAF Data Quality | Confidence |
|-------------|------------------------|------------------|------------|
| Investment-grade corporates | 40% | Primary (Scope 1+2 disclosed) | High |
| Sub-investment-grade corporates | 20% | Secondary (some disclosure) | Medium |
| Mid-market companies | 25% | Mostly spend-based | Low |
| SME / Small Business | 15% | Spend-based fallback | Very Low |

A bank claiming "net-zero financed emissions by 2050" with 40% of its book in the "very low confidence" category is making a claim that is essentially unmeasurable with current data infrastructure.

---

## Case Study 4: Food & Beverage — Agricultural Emissions

### Why Agriculture Is Uniquely Difficult

Agricultural emissions are:
1. **Biogenic** — from living organisms (methane from cattle enteric fermentation, N₂O from fertilizer)
2. **Spatially distributed** — millions of farms across hundreds of geographies
3. **Highly variable** — same crop, different country, 5–10x emission intensity difference
4. **Not covered by most emission factor databases** — agricultural process emissions require specialized models (IPCC Tier 2/3)

```mermaid
    flowchart LR
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef down fill:#63e6be,stroke:#0ca678,color:#0b2e1d;

    subgraph Farm["Agricultural Production (Cat 1)"]
        Rice["Rice Paddies\nmethane emissions\n~450 kg CO₂e/t rice"]
        Cattle["Beef Cattle\nenteric fermentation\n25–50 kg CO₂e/kg beef"]
        Dairy["Dairy\n2–4 kg CO₂e/kg milk"]
        Soy["Soybeans\n0.4–3 kg CO₂e/kg\nhuge deforestation risk"]
        Coffee["Coffee\n5–15 kg CO₂e/kg\nprocessing + transport"]
    end

    subgraph LUC["Land Use Change (Cat 1)"]
        Def["Deforestation\nfor new agricultural land\npeat conversion =\n50–100 years carbon debt"]
    end

    subgraph Proc["Processing and Manufacturing"]
        Mill["Milling, Blending,\nPasteurization"]
        Pack["Packaging\nplastics, glass,\naluminum"]
    end

    subgraph Brand2["Food Brand"]
        RD2["Research and Development\n+ Marketing"]
    end

    subgraph DS2["Downstream"]
        Cold["Cold Chain\nLogistics"]
        Retail2["Grocery\nRetail"]
        Cook["Consumer Cooking\nCat 11"]
        Waste["Food Waste\n30–50% of food produced\nCat 12"]
    end

    Farm --> LUC
    Farm --> Proc
    LUC --> Proc
    Proc --> Brand2 --> DS2

    class Rice,Dairy,Soy,Coffee up;
    class Cattle warn;
    class Def bad;
    class Mill,Pack up;
    class RD2 s1;
    class Cold,Retail2,Cook,Waste down;
```

### The Deforestation Time-Bomb

Land use change (LUC) associated with agricultural expansion — particularly in tropical regions — releases enormous carbon stocks stored in forests, peatlands, and grasslands. A single hectare of tropical peatland drained for palm oil plantation can release **50–200 tCO₂e/year** for decades as the peat oxidizes.

Under current GHG Protocol rules, LUC emissions are allocated to the commodity produced on the land (palm oil, soy, beef). But:

- Attribution requires knowing *when* land was converted (pre- or post-1994 baseline?)
- Attribution requires satellite mapping of deforestation events linked to specific farms
- Most buyers have no visibility into which farms their commodities come from (especially through traders)

```mermaid
    flowchart LR
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;
    classDef good fill:#69db7c,stroke:#2f9e44,color:#0b2e13;
    classDef info fill:#d0ebff,stroke:#1971c2,color:#1864ab;
    classDef up fill:#66d9e8,stroke:#0c8599,color:#0b3c44;
    classDef s1 fill:#ff922b,stroke:#e8590c,color:#fff;
    classDef warn fill:#ffc078,stroke:#f08c00,color:#212529;

    Farm1["Deforestation\nFarm A\nhigh LUC carbon debt"]
    Farm2["Sustainable\nFarm B\nno LUC"]
    Farm3["Farm C"]
    Trader["Commodity Trader\nmixes grain from\nhundreds of farms.\nno farm-level traceability"]
    Brand3["Food Brand\nbuys 'Brazilian soy'\nfrom trader.\ncannot distinguish\nFarm A from Farm B"]

    Farm1 --> Trader
    Farm2 --> Trader
    Farm3 --> Trader
    Trader --> Brand3

    Result3["Result: brand must use\nnational/regional average\nLUC emission factor.\ncannot reward sustainable\nfarmers vs deforesters"]
    Brand3 --> Result3

    class Farm1 bad;
    class Farm2 good;
    class Farm3 info;
    class Trader up;
    class Brand3 s1;
    class Result3 warn;
```

**Why this matters:** If a food brand sources soy from Brazil, should it use:
- Brazil national average soy LUC factor: ~3–5 kg CO₂e/kg soy
- Amazon biome average: ~8–12 kg CO₂e/kg soy
- Certified deforestation-free: ~0.3–0.8 kg CO₂e/kg soy

The range is **15–40x**. The choice of emission factor has more impact on the reported footprint than any supply chain intervention the brand could make in the near term.

### Food Waste: The Category No One Wants to Own

Approximately **30–40% of all food produced globally is wasted** — in production, transport, retail, and consumption. The emissions associated with producing that wasted food are not formally allocated to any Scope 3 category by most companies. They appear in Cat 12 (end-of-life treatment — methane from landfilled food) but the *upstream production emissions of the food that was wasted* are attributed to the food that was *consumed*.

This is a category-level attribution failure: the system does not capture the full cost of waste, which disincentivizes investment in waste reduction.

---

## Cross-Sector Summary: The Common Failure Patterns

```mermaid
    flowchart TD
    classDef info fill:#d0ebff,stroke:#1971c2,color:#1864ab;
    classDef bad fill:#ff6b6b,stroke:#e03131,color:#fff;

    subgraph Common["Common Failure Patterns Across All Sectors"]
        F1["Spend-based proxies\nmask high-intensity suppliers"]
        F2["Tier 2+ supply chain\nis effectively invisible"]
        F3["Downstream use phase\nis estimated, not measured"]
        F4["Allocation across multi-product\nprocesses is arbitrary"]
        F5["No financial incentive\nfor suppliers to improve\nor disclose"]
        F6["Annual measurement\ncannot track continuous\nsupply chain decisions"]
    end

    F1 & F2 & F3 & F4 & F5 & F6 --> Consequence["The Result:\nCompanies report Scope 3\nbut do not manage it.\nThe market cannot price\nthe difference between\na leader and a laggard."]

    class F1,F2,F3,F4,F5,F6 info;
    class Consequence bad;
```

## Key Takeaways

- **Automotive:** Cat 11 is 85–95% of Scope 3 and 75–85% of the entire footprint.
- **Apparel:** the brand operates zero manufacturing — the entire physical chain is Scope 3.
- **Banking:** financed emissions are 100–1,000x operational emissions; divestment is rewarded even when engagement delivers more.
- **Food & ag:** the LUC emission-factor choice (a **15–40x** range) outweighs any near-term intervention.

---

**← Previous:** [Complexity & Challenges](02_complexity_challenges.md) &nbsp;·&nbsp; **Next:** [Abatement Challenges](04_abatement_challenges.md) → &nbsp;·&nbsp; **[📚 Guide Index](index.md)**
