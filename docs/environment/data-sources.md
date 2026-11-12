# Data sources and linkage limits

Choose a source that matches the chemical, route, place and period in the research question. The links below are entry points, not a claim of complete national or historical coverage. Record the data product, release, years, geographic unit, units of measurement and processing method used in each analysis.

## Air and industrial sources {#air}

| Source | What it provides | Use and limitation |
|---|---|---|
| [EPA AirData / AQS](https://www.epa.gov/outdoor-air-quality-data) | Historical outdoor monitor measurements and downloadable summaries | Useful for monitoring-based analyses and model evaluation. Coverage varies by pollutant, place and date; a monitor value is not a personal dose |
| [EPA AirToxScreen](https://www.epa.gov/AirToxScreen/airtoxscreen-frequent-questions) | Screening estimates for outdoor hazardous air pollutants | Use pollutant concentration fields for relevant research questions. Cancer-risk estimates are not ALS-risk estimates. Geographic resolution and methods differ across releases |
| [EPA Toxics Release Inventory](https://www.epa.gov/toxics-release-inventory-tri-program/tri-and-estimating-potential-risk) | Reported chemical releases from covered facilities | Retain chemical, year and release medium. Released mass does not establish human exposure; reporting does not cover every source |
| [EPA Superfund site search](https://www.epa.gov/superfund/search-superfund-sites-where-you-live) | Site locations and links to site records | Review contaminants, affected media, dates and remediation. The mapped point may not represent a plume or the full affected area |

EPA describes AirToxScreen as a screening resource with [data and modeling limitations](https://www.epa.gov/AirToxScreen/airtoxscreen-limitations). Do not interpolate its releases into an apparent continuous exposure history without evaluating changes in models, inventories and geography. For particulate pollution, consider a validated spatiotemporal model with documented geographic and temporal coverage.

## Agriculture {#agriculture}

| Source | What it provides | Use and limitation |
|---|---|---|
| [USGS Pesticide National Synthesis Project](https://water.usgs.gov/nawqa/pnsp/usage/maps/) | Estimated annual agricultural use by chemical, with county data and maps | Appropriate primarily for broad patterns. Read the [methods and limitations](https://water.usgs.gov/nawqa/pnsp/usage/maps/about.php) before individual-level linkage. Within-county allocation is modeled rather than observed application |
| [California Pesticide Information Portal](https://calpip.cdpr.ca.gov/infodocs.cfm?page=aboutpur) | Pesticide use records searchable by time, chemical, location and treated site or crop | Useful where record detail supports the question. Geographic detail varies, and California reporting cannot be assumed for other states |

For USGS data, preserve the distinction between EPest-low and EPest-high and examine discontinuities in source coverage, including the exclusion of seed-treatment estimates beginning in 2015. The two estimates are not statistical confidence bounds. Retain application units rather than converting use to a biological dose without a validated model.

## Water and blooms {#water}

| Source | What it provides | Use and limitation |
|---|---|---|
| [EPA CyAN](https://www.epa.gov/water-research/cyanobacteria-assessment-network-application-cyan-app) | Satellite-derived cyanobacterial indicators for resolvable water bodies | Use the selected product's actual dates, spatial resolution, quality flags and valid observations. Coverage depends on water-body size and sensor |
| [EPA HAB monitoring and trends](https://www.epa.gov/habs/hab-monitoring-and-trends) | An overview of satellite bloom resources | Satellite estimates describe biomass-related conditions and cannot detect toxin concentrations |
| [EPA HAB methods](https://www.epa.gov/habs/hab-methods) | Methods for sampling and measuring specified cyanotoxins | Choose the assay for the toxin and sample medium. A microcystin assay does not measure BMAA |
| [EPA service-line inventory](https://sdwis.epa.gov/ords/sfdw_pub/r/sfdw/sdwis_fed_reports_public/service-line-inventory) | Public-water-system counts by pipe-material category | System counts do not identify a participant's pipe or water concentration. Seek local service-area and address-level records where authorized |

For bloom histories, document the sensor and gaps between products. Water-body proximity, recreational contact, source-water contamination and finished drinking-water concentrations are distinct variables. Public-supply and private-well histories require different linkage information.

## Minimum record for a derived estimate

| Field | Example |
|---|---|
| Participant and location interval | Study ID, address-period ID, start date, end date |
| Variable and assessment type | PM2.5 concentration; modeled outdoor estimate |
| Source and coverage | Product name, release, covered years, source-file identifier |
| Spatial linkage | Grid-cell assignment, coordinate system, geocode quality |
| Temporal linkage | Prespecified average window, available days, missing days |
| Result and unit | Value in µg/m³, with uncertainty where available |
| Quality and provenance | Missingness reason, processing version, linkage date |

These fields are a proposed documentation minimum. Store exact location identifiers within the approved secure system. Use the [standards guidance](overview.md#connect-the-examples-to-standards) to implement a shared representation and the [privacy guidance](../governance/privacy.md) before releasing maps.
