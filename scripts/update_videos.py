"""Add new uploads from the channel's public feed to data/videos.yml (standard library plus PyYAML).

The feed lists the most recent uploads. New entries get the theme "Stories" and the channel's own
description; edit both by hand afterward.
"""
import re, urllib.request
import yaml

PATH = "data/videos.yml"
d = yaml.safe_load(open(PATH, encoding="utf-8"))
feed = urllib.request.urlopen("https://www.youtube.com/feeds/videos.xml?channel_id=" + d["channel"]["id"], timeout=30).read().decode("utf-8")
known = {v["id"] for v in d["videos"]}
def tag(s, t):
    m = re.search("<%s[^>]*>([\\s\\S]*?)</%s>" % (t, t), s)
    return m.group(1).strip() if m else ""
new = []
for e in feed.split("<entry>")[1:]:
    vid = tag(e, "yt:videoId")
    if vid and vid not in known:
        new.append({"id": vid, "title": tag(e, "title"), "published": tag(e, "published")[:10], "theme": "Stories",
                    "description": " ".join(tag(e, "media:description").split())[:600] or "No description yet.", "links": []})
if new:
    d["videos"] = new + d["videos"]
    yaml.safe_dump(d, open(PATH, "w", encoding="utf-8"), sort_keys=False, allow_unicode=True, width=110)
print("new videos:", len(new))
