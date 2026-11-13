# Location privacy and governance

A home address identifies a person, and a dot on a map can identify a person as surely as a name. ALS is uncommon enough that a few cases in a small area may be recognizable. The practices below are considerations for planning and reviewing geographic research.

## What counts as identifying

The Privacy Rule of the Health Insurance Portability and Accountability Act (HIPAA) lists geographic subdivisions smaller than a state among its identifiers, including street address, city, county, precinct and ZIP Code. Under the Safe Harbor method, only the first three digits of a ZIP Code may be kept, and only where the area they cover holds more than 20,000 people. Coordinates derived from an address are as identifying as the address.

Projects should establish their privacy requirements with their data holders and institutional reviewers, including obligations under data use agreements.

## Practices

- **Decide what the question needs.** Many questions can be answered with a tract or county identifier, without retaining coordinates.
- **Geocode inside the data holder's environment.** Addresses should not be sent to an outside geocoding service unless an agreement covers it. Tools that run locally, such as DeGAUSS, exist for this purpose.
- **Separate identifiers from analysis.** Keep addresses and coordinates in a restricted table, and give analysts derived variables: distance to a facility, a tract identifier, a linked environmental value.
- **Suppress small cells.** Agree on a suppression threshold with the data holder and privacy reviewers before publishing counts. Check that a suppressed value cannot be recovered by subtraction or comparison with another release.
- **Aggregate or mask points.** Public maps of people show areas, not points. Where points are necessary for a restricted audience, use a documented masking method.
- **Build on invented records.** Maps, dashboards and analysis code are developed and tested with placeholder people before any real record is loaded.
- **Review before release.** A person reviews every map, table and figure in full before it leaves the secure environment.
- **Keep a de-identified version.** Any identified product has a de-identified counterpart for wider sharing.

## Review and agreements

- Research that uses participant addresses needs review by an institutional review board (IRB) or a determination that review is not required.
- When GeoALS staff or consultants need access to study information, the lead institution's IRB lists them as approved study personnel, usually with an institutional login.
- A data use agreement should state which geographic fields are shared, at what resolution, where they may be stored, and when they are destroyed.

## Public data about clinics and legislators

Clinic locations and legislative districts are public information about organizations and officials.

## Sources

- [HHS, Guidance on de-identification under the HIPAA Privacy Rule](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html)
- [DeGAUSS](https://degauss.org/)
