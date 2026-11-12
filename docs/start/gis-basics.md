# GIS in plain language

A geographic information system (GIS) stores information together with its location, so that separate data sets can be compared because they describe the same place. A list of ALS clinics and a table of population by county have nothing in common until both are placed on a map. Once they are, a question such as "how many people live more than 90 minutes from a clinic" has an answer.

This page covers the ideas behind every GeoALS map. It is an orientation, and the [learning paths](learning-paths.md) link to full courses.

## Layers

A map is a stack of layers. Each layer holds one kind of thing: clinics, congressional districts, drive-time areas, census tracts. Analysis happens when layers are combined, for example by counting the points of one layer that fall inside the polygons of another.

## Vector and raster data

| Type | What it is | Examples |
|---|---|---|
| Vector: points | A single location | A clinic, a monitoring station, a geocoded address |
| Vector: lines | A path | A road, a river, a transmission line |
| Vector: polygons | An area with a boundary | A county, a census tract, a congressional district, a lake |
| Raster | A grid of cells, each with a value | Satellite imagery, land cover, a modeled air quality grid |

## Attributes and joins

Every feature in a layer has a row of attributes, like a spreadsheet row. A **table join** attaches outside data to a layer through a shared identifier, such as a county code. A **spatial join** attaches data through location alone, for example by giving each address the identifier of the census tract that contains it. Most health mapping depends on these two operations.

## Geocoding

Geocoding converts an address into coordinates. It is the step where health data become mappable, and it is also the step with the greatest privacy consequence, because coordinates of a home identify a person. See [Location privacy and governance](../governance/privacy.md) before geocoding anything.

Geocoding quality varies. Rural routes, post office boxes and new construction match less reliably than urban street addresses, so a study should report its match rate and how unmatched addresses were handled.

## Coordinate systems and projections

Coordinates only mean something relative to a coordinate reference system. Latitude and longitude from a phone or a web map are usually in the system called WGS 84. Because the earth is curved and a screen is flat, every map uses a projection, and every projection distorts distance, area or shape somewhere. Distances and areas should be calculated in a projection suited to the study region, and layers in different systems must be transformed before they are combined.

## Geographic units

| Unit | Typical use | Caution |
|---|---|---|
| State and county | Policy, reporting, many federal data sets | Counties vary enormously in size and population |
| Census tract and block group | Neighborhood-level context | Boundaries change with each decennial census |
| ZIP Code | Often the only location in health data | ZIP Codes are mail routes, not areas; ZIP Code Tabulation Areas approximate them |
| Congressional district | Advocacy | Redrawn after each census, and sometimes between |
| Grid cell | Modeled environmental data | Resolution differs by source |

## Core analyses

- **Buffer:** the area within a set distance of a feature, such as everything within 3 km of a site.
- **Overlay:** combining layers to find where conditions coincide.
- **Proximity and drive time:** distance or travel time from each person to the nearest service, measured along roads.
- **Service area:** the region reachable from a facility within a travel time, as in the GeoALS 90-minute clinic maps.
- **Aggregation:** counting or averaging points within areas, such as registry participants per district.
- **Hot spot analysis:** statistical tests for whether high or low values cluster more than chance would produce.

## Reading a map critically

A map is persuasive, so it deserves the same scrutiny as a chart.

- **Rates and counts differ.** A map of counts mostly shows where people live. Compare rates, with a stated denominator.
- **Small numbers are unstable.** A county with two cases and a small population can show an extreme rate by chance. Small counts should also be suppressed for privacy.
- **Boundaries shape the result.** The same points grouped into different units can show different patterns. This is called the modifiable areal unit problem.
- **Areas are not people.** A pattern across counties does not establish that the same relationship holds for individuals. This is the ecological fallacy.
- **Where someone lives now is one moment.** For a disease with a long preclinical period, the address at diagnosis may say little about earlier decades, which is why residential history is central to exposure research.
- **A blank area is not an absence of people.** It may reflect who was reached by a survey or registry.

## Sources and further reading

- [Esri, What is GIS?](https://www.esri.com/en-us/what-is-gis/overview)
- [Geocomputation with R](https://r.geocompx.org/), a free textbook
- [Census Bureau, Geography Program](https://www.census.gov/programs-surveys/geography.html)
- [GeoALS story map, Patterns of Care in the U.S.](https://storymaps.arcgis.com/stories/489d8da2358940818d3019b09e777155)

[Back to top](#gis-in-plain-language)
