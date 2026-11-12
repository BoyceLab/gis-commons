# Environmental mapping

Environmental mapping connects where a person lived or worked, and when, with information about the surrounding environment. In ALS research, it can help define exposure hypotheses, select measurements and investigate differences in disease occurrence, progression or survival.

Start with the [six exposure examples](examples.md), then use the [data source guide](data-sources.md) to identify a suitable layer. Each example links to research papers and explains what additional information would strengthen the study.

!!! note "How to read the examples"
    These are research planning examples adapted from an exploratory ALS exposure workbook. They are not a ranking of proven causes of ALS. A mapped estimate describes environmental context; evidence of contact, absorbed dose and a causal effect requires additional investigation. Published findings and proposed analyses are identified separately.

## Choose an exposure example

| Example | What it demonstrates | Information beyond an address |
|---|---|---|
| [Lead](examples.md#lead) | Combining historical sources with biomonitoring | Job history, household water information, blood lead and sampling date |
| [Pesticides and herbicides](examples.md#pesticides) | Matching the chemical, application period and geographic scale | Work tasks, products used, application records and protective equipment |
| [Air pollution](examples.md#air-pollution) | Repeated environmental estimates linked to repeated clinical measures | Residential moves, smoking, indoor sources and clinical follow-up |
| [Solvents and industrial sites](examples.md#solvents) | Distinguishing a source location from a plausible exposure pathway | Site history, contaminant identity, air or water measurements and occupation |
| [Cyanobacterial blooms](examples.md#blooms) | Connecting satellite observations with water contact and sampling | Water supply, recreation, diet where relevant and toxin-specific testing |
| [Occupational formaldehyde](examples.md#formaldehyde) | Recognizing when work history is more informative than a home address | Job dates, tasks, ventilation and industrial hygiene measurements |

## Define the question before making the map

| Question | Suggested design | Interpretation limit |
|---|---|---|
| Who develops ALS? | A population cohort with incident ALS, or a case-control study with controls from the same source population and comparable exposure windows | An ALS-only registry cannot estimate population disease risk on its own |
| Who progresses more slowly? | Repeated ALSFRS-R measurements linked to prespecified exposure windows, analyzed with a longitudinal model | Diagnosis, disability and moving may change exposure; account for time ordering and informative dropout |
| Who survives longer? | Survival analysis with an explicit time origin, entry date and endpoint | If follow-up starts after onset or diagnosis, use delayed entry where appropriate and examine survivor selection |
| What mechanism could explain an association? | Targeted exposure measurement followed by laboratory and omics studies | A shared molecular response is not proof that one chemical caused ALS |

These are proposed design choices, not results. Define slow progression or long-term survival before analysis, and avoid selecting an exposure threshold because it gives the strongest association. For incidence and prognosis, use separate protocols or explicitly separate analyses.

## Build a person-place-time record

1. Collect address start and end dates, including uncertainty. Keep residential and occupational histories distinct.
2. Geocode within the approved secure environment and record match quality. Keep exact addresses and coordinates out of public maps.
3. Match each period to a data layer that covers the correct location, years and exposure pathway. Record gaps rather than treating them as zero exposure.
4. Derive a prespecified metric, such as a time-weighted pollutant concentration or the proportion of valid lake observations above a defined bloom threshold. Label it as measured, modeled, self-reported or a proximity estimate.
5. Evaluate confounding, correlated exposures, spatial clustering and sensitivity to the exposure window. Report uncertainty and missing coverage with the estimate.

## Connect the examples to standards

Keep the environmental context, exposure event and laboratory result distinguishable. The [standards stack](../standards/overview.md) describes the resources; the table below shows how they could be used in these examples.

| Record | Representation to consider | Preserve alongside it |
|---|---|---|
| Chemical identity | ChEBI, when an appropriate term exists | Exact chemical or mixture, identifier and vocabulary release |
| Water body or environmental setting | ENVO, when applicable | Local water-body or site identifier and source geometry |
| Exposure event | ECTO, when a matching class exists | Route, medium, time window, assessment method and uncertainty |
| Residential interval and assigned environmental estimate | OMOP with the OHDSI GIS extension, after confirming the implemented schema | Location interval, value, unit, spatial relationship and source version |
| Blood or other specimen measurement | A suitable LOINC term and OMOP MEASUREMENT mapping | Specimen, assay, collection date, unit and detection limit |

These are modeling suggestions, not a validated code crosswalk. Check terms and standard concept status in the vocabulary release used by the study. Do not record a modeled outdoor concentration as a measured blood concentration. The [OHDSI GIS schema documentation](https://ohdsi.github.io/GIS/schema-extensions.html) describes separate fields for the exposure variable, derivation, spatial relationship and source.

See [Location privacy and governance](../governance/privacy.md) before working with participant locations. The [references and workbook provenance](references.md) identify the source material behind this section.
