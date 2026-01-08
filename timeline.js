import { data } from "./data.js"; //<2000
import { data1 } from "./data1.js"; //2000-2010
import { data2 } from "./data2.js"; //2010-2015
import { data3 } from "./data3.js"; //2016
import { data4 } from "./data4.js"; //2017
import { data5 } from "./data5.js"; //2018
import { data6 } from "./data6.js"; //2019
import { data7 } from "./data7.js"; //2020
import { data8 } from "./data8.js"; //2021
import { data9 } from "./data9.js"; //2022
import { data10 } from "./data10.js"; //2023
import { data11 } from "./data11.js"; //2024 pain
import { data12 } from "./data12.js"; //2025 even more pain thank you gork, nugget, monokuma and missingno

const databases = {
    data,
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
    data12
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
                };
                content.innerHTML = event.content;
                obj.appendChild(content);
            }

            row.appendChild(obj);
        }
        table.appendChild(row);
    }
}

