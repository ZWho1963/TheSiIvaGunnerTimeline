import { data2000 } from "../data/2000.js"; //<2000
import { data2010 } from "../data/2010.js"; //2000-2010
import { data2015 } from "../data/2015.js"; //2010-2015
import { data2016 } from "../data/2016.js"; //2016
import { data2017 } from "../data/2017.js"; //2017
import { data2018 } from "../data/2018.js"; //2018
import { data2019 } from "../data/2019.js"; //2019
import { data2020 } from "../data/2020.js"; //2020
import { data2021 } from "../data/2021.js"; //2021
import { data2022 } from "../data/2022.js"; //2022
import { data2023 } from "../data/2023.js"; //2023
import { data2024 } from "../data/2024.js"; //2024 pain
import { data2025 } from "../data/2025.js"; //2025 even more pain thank you gork, nugget, monokuma and missingno
import { data2026 } from "../data/2026.js"; //2026 FREEDOM
import { CharacterAttributes, characterDetails, tooltipList } from "../data/explainerDatabase.js";

let db = [
    { key: "data2000", entries: data2000 },
    { key: "data2010", entries: data2010 },
    { key: "data2015", entries: data2015 },
    { key: "data2016", entries: data2016 },
    { key: "data2017", entries: data2017 },
    { key: "data2018", entries: data2018 },
    { key: "data2019", entries: data2019 },
    { key: "data2020", entries: data2020 },
    { key: "data2021", entries: data2021 },
    { key: "data2022", entries: data2022 },
    { key: "data2023", entries: data2023 },
    { key: "data2024", entries: data2024 },
    { key: "data2025", entries: data2025 },
    { key: "data2026", entries: data2026 }
]

let databases = Array.from(db);

let savedX = null;
let savedY = null;

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.onmousedown = function (event) {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;

        document.onmousemove = function (event) {
            if (isDragging) {
                const newX = event.clientX - offsetX;
                const newY = event.clientY - offsetY;

                // Update the position of the element
                element.style.left = newX + 'px';
                element.style.top = newY + 'px';

                // Save the position in global variables
                savedX = newX;
                savedY = newY;
            }
        };

        document.onmouseup = function () {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

const dashboardContainer = document.getElementById("dashboardContainer")
makeDraggable(dashboardContainer);

if (savedX !== null && savedY !== null) {
    dashboardContainer.style.left = savedX + 'px';
    dashboardContainer.style.top = savedY + 'px';
}
else {
    dashboardContainer.style.left = 1 + 'px';
    dashboardContainer.style.top = 0;
    savedX = dashboardContainer.getBoundingClientRect().left;
    savedY = dashboardContainer.getBoundingClientRect().top;
}

const modes = document.getElementById("dashboardModes");

//Character details printout
let characterIndex = 0;
const details = document.getElementById("dashboardDetails");

let database = characterDetails;
let attributes = CharacterAttributes;
let index = characterIndex;

function initialiseDetails(database, attributes, index) {
    const entry = database[index];
    for (let i = 1; i < attributes.length - 1; i++) {
        let attribute = attributes[i];
        let item_check = document.getElementById(attribute);
        if (!entry[attribute] || item_check) { //if the attribute does not exist, skip iterating
            continue;
        } else {
            const string = document.createElement("p");
            string.className = "details";
            string.id = attribute;
            string.innerHTML = attribute.split('_').join(' ').toUpperCase() + ": "
            details.appendChild(string)
        }
    }
}


function enterDetails(database, attributes, index) {
    let entry = database[index]
    const src = entry["image"]
    const img = document.getElementById("image");
    img.src = src;
    const first_appearance = document.getElementById("first_mention");
    if (entry["first_mention"] == entry["debut"]) {
        first_appearance.style.display = "none";
    }
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i]
        let check = document.getElementById(attribute);
        if (!check) {
            continue;
        } else {
            check.innerHTML = check.textContent + entry[attribute];
        }
    };
}

function resetContent(attributes) {
    const first_appearance = document.getElementById("first_mention");
    if (first_appearance.style.display == "none") {
        first_appearance.style.display = "block";
    } 

    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        let item = document.getElementById(attribute);
        if (attribute == "name" || attribute == "description") {
            item.innerHTML = ""
        } else if (attribute == "img") {
            item.src = ""
        } else {
            item.textContent = attribute.split('_').join(' ').toUpperCase() + ": "
        }
    }
};

function nextEntry(database, attributes) {
    index++;
    if (index >= database.length) index = 0;
    characterParser(database, attributes, index);
}

function prevEntry(database, attributes) {
    index--;
    if (index < 0) index = database.length - 1;
    characterParser(database, attributes, index);
}

initialiseDetails(database, attributes, index);
characterParser(database, attributes, index)

function characterParser(database, attributes, index) {
    resetContent(attributes);
    enterDetails(database, attributes, index);
};


const forward = document.getElementById("forwardToggle");

const backward = document.getElementById("backwardToggle");

forward.addEventListener("click", () => {
    nextEntry(database, attributes);
});

backward.addEventListener("click", () => {
    prevEntry(database, attributes);
});

const closeButton = document.getElementById("closeToggle");

closeButton.addEventListener("click", function () {
    dashboardContainer.style.display = "none";
});


function render_table() {
    const table = document.getElementById("timeline");
    table.innerHTML = ""; // clear old rows

    db.forEach(dataset => {
        const { entries } = dataset;
        entries.forEach(entry => {
            const row = document.createElement("tr");

            const year = document.createElement("h3");
            year.innerHTML = entry.year;
            year.style.marginBottom = "20px";
            row.appendChild(year);

            entry.events.forEach(event => {
                const obj = document.createElement("td");
                if (event.date) {
                    const date = document.createElement("p");
                    date.innerHTML = event.date + "&nbsp;";
                    date.className = "date";
                    obj.appendChild(date);
                }

                if (event.note) {
                    const note = document.createElement("p");
                    note.innerHTML = event.note;
                    note.className = "note";
                    obj.appendChild(note);
                }

                if (!event.title && event.time) {
                    const time = document.createElement("i");
                    time.innerHTML = "(" + event.time + ")";
                    time.className = event.timeclass;
                    obj.appendChild(time);
                }
                if (event.title) {
                    const title = document.createElement("em");
                    title.innerHTML = event.title + "&nbsp;";
                    title.className = "title";
                    if (event.time) {
                        const time = document.createElement("i");
                        time.innerHTML = "(" + event.time + ")";
                        time.className = event.timeclass;
                        title.append(time);
                    }
                    obj.appendChild(title);
                }


                if (event.content) {
                    const content = document.createElement("p");
                    content.className = "content";
                    if (event.class) {
                        content.classList.add(...event.class.split(/\s+/));
                    }
                    content.innerHTML = event.content;
                    obj.appendChild(content);
                }

                row.appendChild(obj);
            });
            table.appendChild(row);
        });
    });
}

render_table();

const form = document.getElementById("select");
let data_count = 0;
//initialise form
Array.from(form.elements).forEach((input) => {
    if (input.checked) {
        data_count += 1;
    }
});

Array.from(form.elements).forEach((input) => {
    const key = input.getAttribute("name");
    if (input.checked) {
        // Add dataset
        toggleDataset(key, true); // true = show
    } else {
        // Remove dataset
        toggleDataset(key, false); // false = hide
    }
});

form.querySelectorAll("label").forEach((label) => {
    label.classList.add("enabled_glow");
    label.addEventListener("click", function () {
        const key = this.htmlFor
        const associatedInput = document.getElementsByName(key)[0];

        if (associatedInput.checked == true) {
            if (data_count == 1) {
                console.log("You can't have an empty timeline!");
                return;
            } else {
                associatedInput.checked = false;
                label.classList.toggle("enabled_glow");
                toggleDataset(key, false);
                console.log("Deleted " + key + " from viewable list");
                data_count -= 1;
            };
        } else if (associatedInput.checked == false) {
            associatedInput.checked = true;
            label.classList.toggle("enabled_glow");
            toggleDataset(key, true);
            console.log("Added " + key + " to viewable list");
            data_count += 1;
        };
    });
});

function toggleDataset(key, show) {
    const indexInDb = db.findIndex(d => d.key == key);

    if (!show && indexInDb !== -1) {
        db.splice(indexInDb, 1);
    }
    else if (show && indexInDb == -1) {
        const originalIndex = databases.findIndex(d => d.key == key);

        const insertIndex = db.findIndex(d =>
            databases.findIndex(o => o.key === d.key) > originalIndex
        );

        if (insertIndex == -1) db.push(databases[originalIndex]);
        else db.splice(insertIndex, 0, databases[originalIndex]);
    }

    render_table();
}

function testing(index) {
    if (dashboardContainer.style.display != "block") {
        dashboardContainer.style.display = "block";
        characterParser(database, attributes, 0);
    } else {
        return
    }
}

document.getElementById("explainerToggle").addEventListener("click", testing); 
