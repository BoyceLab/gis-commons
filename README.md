# GIS Commons

> **Prototype only.** This site is not finalized and does not represent the views of Esri or GeoALS.

A resource on geographic information systems, mapping, environmental exposure research, data standards and ontologies for ALS and other neurodegenerative diseases. Developed by Danielle Boyce, a member of the board at GeoALS.

Site: https://boycelab.github.io/gis-commons/

## What is here

| Folder | Contents |
|---|---|
| `docs/start/` | GIS orientation, learning paths by role, glossary |
| `docs/maps/` | GeoALS public apps, embedded StoryMaps and the video gallery |
| `docs/esri/` | ArcGIS product directory, free training, crediting maps and software |
| `docs/standards/` | Standards and ontologies for location and environmental context |
| `docs/grants/` | Grant toolkit: partnership arrangements, expert-led training, starter ideas, language, budget text, letters, checklist |
| `docs/governance/` | Location privacy practices |
| `docs/environment/` | Six exposure examples, study designs, environmental data sources, references and workbook provenance |
| `docs/about/` | Developer attribution, sources and email feedback |
| `overrides/` | Theme override |
| `data/videos.yml` | The video list behind the gallery |
| `scripts/` | `generate.py` builds the gallery page; `update_videos.py` adds new uploads |
| `.github/` | Workflows for deployment, video refresh and link checking; issue templates |

## Publish

1. Copy the package contents into the root of your repository, alongside `mkdocs.yml` and `.github/`, rather than into a nested folder. Keep the repository private if desired.
2. In the repository settings, under Pages, set the source to GitHub Actions.
3. Push to `main`, or run "Build and deploy site" from the Actions tab. The workflow builds MkDocs and publishes only the generated site.
4. Open the Pages site using "Visit site" in Settings > Pages. The repository Code page continues to show this README.

Do not deploy the source root or `docs/` directly from a branch: MkDocs must build the HTML first. The Pages publishing options available to a private repository depend on the account plan and organization settings.

When updating an older checkout, delete the old `docs/board/` folder. The configuration also excludes `board/` from builds, including stale copies left by an overlay update. Keep the separate board briefing outside `docs/`; it is not included in this package. No source repository link or edit button is shown on the public site.

## Build locally

```
pip install -r requirements.txt
python scripts/generate.py
mkdocs serve
```

## License

Content: Creative Commons Attribution 4.0 International. Code: MIT. See `LICENSE`.
