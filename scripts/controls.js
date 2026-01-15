const legend = [
    {
        "name": "CCC",
        "class": "CCC",
        "color_descriptor": "Amethyst"
    },
    {
        "name": "AIRTH",
        "class": "AIRTH",
        "color_descriptor": "Aquamarine"
    },
    {
        "name": "Mashup Crusaders",
        "class": "PAINT",
        "color_descriptor": "Teal"
    },
    {
        "name": "Minor Universes",
        "class": "OTHER",
        "color_descriptor": "Gray"
    },
    {
        "name": "Nutshackwoodman34",
        "class": "FOOLS",
        "color_descriptor": "Mulberry"
    },
    {
        "name": "Omegaverse",
        "class": "NUGGET",
        "color_descriptor": "Sandy Brown"
    },
    {
        "name": "SiIvaSwim/GORK",
        "class": "GORK",
        "color_descriptor": "Bone"
    },
    {
        "name": "Itsy Bitsy Spider",
        "class": "SPIDA",
        "color_descriptor": "Buff"
    },
    {
        "name": "HCB.exe",
        "class": "HCB",
        "color_descriptor": "Steel Blue"
    },
    {
        "name": "Sanrio Universe",
        "class": "KITTY",
        "color_descriptor": "Lilac"
    },
    {
        "name": "KIrby Fighters",
        "class": "KIRBY",
        "color_descriptor": "Orchid"
    },
    {
        "name": "Arc 2 Susie ARG",
        "class": "RESPH",
        "color_descriptor": "Violet"
    },
    {
        "name": "Noaka",
        "class": "NOAKA",
        "color_descriptor": "Slate Grey"
    }
]

const color_key = document.getElementById("color_key");

legend.forEach((entry) => {
    const element = document.createElement("span");
    element.classList.add(entry.class);
    element.textContent = entry.name + " (" + entry.color_descriptor + ")"
    const space = document.createElement("p");
    space.innerHTML = "",
    space.style.width = "1ch";
    space.style.height = "1ch"
    space.style.display = "inline-block";
    color_key.appendChild(element);
    color_key.appendChild(space);
});