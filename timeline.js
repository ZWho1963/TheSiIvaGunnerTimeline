import { data } from "./data.js";
import { data1 } from "./data1.js";
import { data2 } from "./data2.js";
import { data3 } from "./data3.js";
import { data4 } from "./data4.js";
import { data5 } from "./data5.js";
import { data6 } from "./data6.js";
import { data7 } from "./data7.js";

const databases = {
    data7
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
                if (!event.title && event.time) {
                    const time = document.createElement("i");
                    time.innerHTML = "("+event.time+")";
                    time.className = event.timeclass;
                    date.append(time);
                }
            }

            if (event.note) {
                const note = document.createElement("p");
                note.innerHTML = event.note;
                note.className="note";
                obj.appendChild(note);
            }

            if (event.title) {
                const title = document.createElement("p");
                title.innerHTML = event.title + "&nbsp;";
                title.className = "title";
                if (event.time) {
                    const time = document.createElement("i");
                    time.innerHTML = "("+event.time+")";
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

