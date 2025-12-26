async function getData() {
    const urls = [
        "data5.json"
    ];

    const table = document.getElementById("timeline");

    for (const url of urls) {
        const response = await fetch(url);
        const result = await response.json();   // now an array

        // Loop through each year-entry object
        for (const entryObj of result) {
            const { year, events } = entryObj;

            const row = document.createElement("tr");

            // Year column
            const yearCell = document.createElement("td");
            const yearEl = document.createElement("h3");
            yearEl.textContent = year;
            yearCell.appendChild(yearEl);
            row.appendChild(yearCell);

            // Events column
            events.forEach(data => {
                const eventCell = document.createElement("td");

                // DATE + TIME
                if (data.date) {
                    const dateEl = document.createElement("p");
                    dateEl.className = "date";
                    dateEl.textContent = data.date;

                    eventCell.appendChild(dateEl);
                }

                // NOTE
                if (data.note) {
                    const noteEl = document.createElement("h4");
                    noteEl.innerHTML = data.note;
                    eventCell.appendChild(noteEl);
                }

                // TITLE
                if (data.title) {
                    const titleEl = document.createElement("p");
                    titleEl.className = "title";
                    if (data.title && data.time) {
                        titleEl.innerHTML = data.title +
                            ' <i class="' +
                            (data.timeclass) +
                            '">(' + data.time + ')</i>';
                    } else if (data.title) {

                        titleEl.innerHTML = data.title;
                        
                    } else if (data.time && !(data.title)) {
                        titleEl.innerHTML = '<i class="' +
                            (data.timeclass) +
                            '">(' + data.time + ')</i>';
                    }
                    eventCell.appendChild(titleEl);

                }

                // CONTENT
                if (data.content) {
                    const contentEl = document.createElement("p");
                    contentEl.className = "content";
                    contentEl.innerHTML = data.content;

                    // Apply tags/classes (CCC, double-entry, etc.)
                    if (data.class) {
                        contentEl.classList.add(...data.class.split(/\s+/));
                    }

                    eventCell.appendChild(contentEl);
                }

                row.appendChild(eventCell);
            });

            table.appendChild(row);
        }
    }
}

getData();
