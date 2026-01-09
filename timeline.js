import { data2000 } from "./data/2000.js"; //<2000
import { data2010 } from "./data/2010.js"; //2000-2010
import { data2015 } from "./data/2015.js"; //2010-2015
import { data2016 } from "./data/2016.js"; //2016
import { data2017 } from "./data/2017.js"; //2017
import { data2018 } from "./data/2018.js"; //2018
import { data2019 } from "./data/2019.js"; //2019
import { data2020 } from "./data/2020.js"; //2020
import { data2021 } from "./data/2021.js"; //2021
import { data2022 } from "./data/2022.js"; //2022
import { data2023 } from "./data/2023.js"; //2023
import { data2024 } from "./data/2024.js"; //2024 pain
import { data2025 } from "./data/2025.js"; //2025 even more pain thank you gork, nugget, monokuma and missingno
import { data2026 } from "./data/2026.js"; //2026 FREEDOM

const databases = {
    data2000,
    data2010,
    data2015,
    data2016,
    data2017,
    data2018,
    data2019,
    data2020,
    data2021,
    data2022,
    data2023,
    data2024,
    data2025,
    data2026
}

const table = document.getElementById("timeline");
const table_cont = document.getElementById("timeline_container");

for (const key in databases) {
    const db = databases[key];   // get the array
    for (const entry of db) {
        const row = document.createElement("tr");

        const year = document.createElement("h3");
        year.innerHTML = entry.year;
        year.style.marginBottom = "20px";
        row.appendChild(year);

        for (const event of entry.events) {
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
                const title = document.createElement("p");
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
                } else {
                    content.style.color = "#DDD"
                }
                content.innerHTML = event.content;
                obj.appendChild(content);
            }

            row.appendChild(obj);
        }
        table.appendChild(row);
    }
}

