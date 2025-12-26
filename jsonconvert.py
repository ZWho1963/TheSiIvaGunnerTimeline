import json

paths = ["data3.json"]
outputs = ["data3.json"]

created = []

for src, out in zip(paths, outputs):
    with open(f"/Users/zacharymujar/Downloads/SiIvaTimeline2/{src}", "r", encoding="utf-8-sig") as f:
        data = json.load(f)
    converted = [{"year": year, "events": events} for year, events in data.items()]
    with open(f"/Users/zacharymujar/Downloads/SiIvaTimeline2/{out}", "w", encoding="utf-8") as f:
        json.dump(converted, f, ensure_ascii=False, indent=4)
    created.append(out)

created