# Contribute

This site is the [BoyceLab/gis-commons](https://github.com/BoyceLab/gis-commons) repository on GitHub, built with MkDocs. It is a prototype and is not officially affiliated with GeoALS or Esri. Corrections and additions are welcome.

## Suggest a change without writing code

Open an issue in the repository using one of the templates: "Suggest a resource" for a training link, tool, standard or video, or "Feedback on the prototype" for comments on any page. Issues are public, so leave out anything confidential.

## Edit a page

Each page has an edit link that opens the Markdown source on GitHub. Propose the change as a pull request.

## Update the video gallery

The gallery is generated from `data/videos.yml`. A scheduled workflow checks the YouTube channel feed and opens a pull request when a new video appears. Before merging, a person assigns the theme and edits the description.

## Build the site locally

```
pip install -r requirements.txt
python scripts/generate.py
mkdocs serve
```

## Style

- Plain, direct language, with acronyms defined at first use
- American spelling
- Dated statements for anything that changes, with a link to the source
- A list of web sources at the end of each page
- No personal information about people living with ALS, and no map of individuals
