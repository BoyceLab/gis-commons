# GIS Commons

> **Prototype only. Not officially affiliated with GeoALS or Esri.**

A prototype resource on geographic information systems (GIS), mapping, data standards and ontologies for ALS and other neurodegenerative diseases, drafted 12 November 2026 for discussion with GeoALS. To learn about GeoALS, visit [geoals.org](https://www.geoals.org/).

Site: https://boycelab.github.io/gis-commons/

## What is here

| Folder | Contents |
|---|---|
| `docs/start/` | GIS orientation, learning paths by role, glossary |
| `docs/maps/` | GeoALS public apps and the video gallery |
| `docs/esri/` | ArcGIS product directory, free training, crediting maps and software |
| `docs/standards/` | Standards and ontologies for location and environmental context |
| `docs/grants/` | Draft grant toolkit: arrangements, starter ideas, language, budget text, letters, checklist |
| `docs/governance/` | Location privacy practices |
| `docs/board/` | Prototype program plan and the list of items to confirm |
| `docs/environment/` | Six exposure examples, study designs, environmental data sources, references and workbook provenance |
| `overrides/` | Theme override that places the prototype banner on every page |
| `data/videos.yml` | The video list behind the gallery |
| `scripts/` | `generate.py` builds the gallery page; `update_videos.py` adds new uploads |
| `.github/` | Workflows for deployment, video refresh and link checking; issue templates |

## Publish

1. Upload these files to `BoyceLab/gis-commons` on GitHub.
2. In the repository settings, under Pages, set the source to GitHub Actions.
3. Push to `main`. The "Build and deploy site" workflow publishes the site.

## Build locally

```
pip install -r requirements.txt
python scripts/generate.py
mkdocs serve
```

## Open items

See `docs/board/confirm.md`. Items marked "to be discussed with GeoALS" are not settled.

## License

Content: Creative Commons Attribution 4.0 International. Code: MIT. See `LICENSE`.
