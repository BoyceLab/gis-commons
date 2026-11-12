# The standards stack

A map answers a question once. For geographic findings to be combined across studies, registries and diseases, the underlying data need shared structures and shared vocabularies. This page describes the open standards relevant to recording where a person has lived and the environmental context of those places, what each one covers, and where the known gaps are.

!!! note "Snapshot"
    Versions and gap statements reflect a review dated 10 November 2026, prepared for a manuscript in preparation. Check each project's release page before relying on a version-specific statement.

<p><a href="#layers-of-the-stack">Layers</a> · <a href="#standards-and-what-each-covers">Standards</a> · <a href="#known-gaps">Known gaps</a> · <a href="#geospatial-data-formats-and-identifiers">Geospatial formats and identifiers</a> · <a href="#fair-data-in-practice">FAIR data</a></p>

## Layers of the stack

| Layer | Question it answers | Where it is handled |
|---|---|---|
| Place | Where, and in what geographic unit? | Coordinates, census identifiers, geospatial formats |
| Residential history | Where did this person live, and when? | OMOP location tables with the OHDSI GIS extension |
| Environmental feature | What was at or near that place? | ENVO, and the source data set's own definitions |
| Exposure event | What was the person exposed to, by what route and medium? | ECTO, with clinical terminologies for the recorded fact |
| Measurement | What was measured in the person? | LOINC |
| Disease and phenotype | What condition, with what features? | Mondo, HPO, SNOMED CT |
| Exchange | How do records move between systems? | GA4GH Phenopackets and Beacon |
| Analysis | Where are cohorts built and compared? | OMOP Common Data Model |

## Standards and what each covers

| Standard | Purpose | Handling of environmental exposure | Link |
|---|---|---|---|
| ECTO, the Environmental Conditions, Treatments and Exposures Ontology | The exposure event itself | Classes of the form "exposure to X", composed from other ontologies by design patterns, with some variants qualified by route or medium | [GitHub](https://github.com/EnvironmentOntology/environmental-exposure-ontology) |
| ENVO, the Environment Ontology | Environmental systems, materials, features and processes | Supplies the setting or medium that ECTO builds on; has no person, route or dose of its own | [GitHub](https://github.com/EnvironmentOntology/envo) |
| ChEBI, Chemical Entities of Biological Interest | Identity of chemical entities | Identity only | [ChEBI](https://www.ebi.ac.uk/chebi/) |
| SNOMED CT | Clinical terminology, and the standard target for many OMOP domains | Records that an exposure was noted, at clinical granularity | [SNOMED International](https://www.snomed.org/) |
| ICD-10-CM | Diagnosis and health-status coding in United States records | Exposure and occupational history codes appear in real records but are coarse and inconsistently applied | [CDC](https://www.cdc.gov/nchs/icd/icd-10-cm/index.html) |
| LOINC | Laboratory and clinical observations | Codes for biomonitoring results where a test exists | [LOINC](https://loinc.org/) |
| Mondo Disease Ontology | Disease identity across resources | The outcome layer; ALS is MONDO:0004976 | [Mondo](https://mondo.monarchinitiative.org/) |
| HPO, the Human Phenotype Ontology | Phenotypic features | The phenotype side of any analysis; no exposure semantics by design | [HPO](https://hpo.jax.org/) |
| GA4GH Phenopackets | A portable, schema-validated record of one individual's phenotype, disease, measurements and variants | The version 2 schema has no element for exposure | [GitHub](https://github.com/phenopackets/phenopacket-schema) |
| GA4GH Beacon v2 | Federated discovery across cohorts | Includes an exposure object, without a required vocabulary for its code | [GitHub](https://github.com/ga4gh-beacon/beacon-v2) |
| OMOP Common Data Model | The analytic model where cohorts are built | Core tables hold observations, measurements, conditions and a current location | [GitHub](https://github.com/OHDSI/CommonDataModel) |
| OHDSI GIS working group tools, known as Gaia | Extension tables that attach geospatial data to an OMOP person | Adds a location history table and an external exposure table with start and end dates, value, unit and data source type | [Documentation](https://ohdsi.github.io/GIS/) |
| OHDSI Standardized Vocabularies | The concept layer that makes OMOP analyses comparable | Holds SNOMED CT, ICD-10-CM, LOINC and others | [Releases](https://github.com/OHDSI/Vocabulary-v5.0/releases) |
| LinkML | A modeling language for defining schemas that bind fields to ontologies | A way to specify an exposure record once and generate formats from it | [LinkML](https://linkml.io/) |

## Known gaps

The review found that identity of the agent is well served, the exposure event is partly served, and exposure assessment is the least developed layer in every standard examined. In summary:

- **Route, medium and duration.** Many exposure classes exist without variants for route or medium, and no standard reviewed has a settled way to express cumulative dose or a time window.
- **Place-based exposure.** Proximity to a site or residence within an area over a period has no agreed construct in the exchange standards.
- **Provenance of modeled estimates.** A value taken from a satellite product or an air model needs its source, method and spatial relationship recorded, and the core analytic model has no dedicated place for that. The OHDSI GIS extension does, but it is outside the core model, so it is not yet portable across sites without local work.
- **Exchange.** Phenopackets cannot express an exposure in a structured way. Beacon can, but two implementers may fill its code field differently.
- **Vocabulary reach.** ECTO is not among the OHDSI vocabularies, so its concepts enter an OMOP analysis only as locally defined ones.

These gaps suggest contributions GeoALS and its partners can make: term requests to ECTO and ENVO, use cases for the OHDSI GIS working group, and proposals to GA4GH for exposure representation. See [Communities to join](communities.md).

For applications to specific exposures, see [Environmental mapping](../environment/overview.md#connect-the-examples-to-standards). Its six examples distinguish a source location, a modeled environmental estimate, a reported exposure and a laboratory measurement, with [references and workbook provenance](../environment/references.md).

## Geospatial data formats and identifiers

| Standard | What it is | Link |
|---|---|---|
| GeoJSON | A text format for vector features, widely used on the web | [RFC 7946](https://datatracker.ietf.org/doc/html/rfc7946) |
| GeoPackage | An open, single-file database format for vector and raster data | [geopackage.org](https://www.geopackage.org/) |
| Cloud Optimized GeoTIFF | A raster format that can be read in part over the web | [cogeo.org](https://cogeo.org/) |
| GeoParquet | A columnar format for large vector data sets | [geoparquet.org](https://geoparquet.org/) |
| OGC API standards | Web interfaces for features, maps and tiles from the Open Geospatial Consortium | [ogcapi.ogc.org](https://ogcapi.ogc.org/) |
| ISO 19115 | Metadata for geographic information | [ISO](https://www.iso.org/standard/53798.html) |
| SpatioTemporal Asset Catalog (STAC) | A common way to describe and search imagery and other spatiotemporal assets | [stacspec.org](https://stacspec.org/) |
| EPSG codes | Identifiers for coordinate reference systems | [epsg.org](https://epsg.org/) |
| Census GEOIDs | Identifiers for states, counties, tracts and block groups | [Census Bureau](https://www.census.gov/programs-surveys/geography/guidance/geo-identifiers.html) |

Hosted ArcGIS feature layers can be exported to GeoJSON, GeoPackage and other open formats, which is how GeoALS exchanges data with partners who work in open source tools.

## FAIR data in practice

For a geographic data set, the FAIR principles translate into concrete habits: a persistent identifier and a license for each layer, metadata that states the source, date, geographic unit and coordinate reference system, open formats, and identifiers from shared vocabularies in place of free text. These habits also make data easier for analytic software, including language models, to find and use correctly.

## Sources

- [OHDSI GIS working group documentation](https://ohdsi.github.io/GIS/) and [schema extensions](https://ohdsi.github.io/GIS/schema-extensions.html)
- [ECTO repository](https://github.com/EnvironmentOntology/environmental-exposure-ontology)
- [GA4GH Phenopackets schema](https://github.com/phenopackets/phenopacket-schema) and [Beacon v2](https://github.com/ga4gh-beacon/beacon-v2)
- [GO FAIR, FAIR principles](https://www.go-fair.org/fair-principles/)
- Standards review workbook, 10 November 2026, unpublished working document

[Back to top](#the-standards-stack)
