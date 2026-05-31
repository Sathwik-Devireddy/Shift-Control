const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Original:");
    console.log(data);

    const modify = data.toUpperCase();

    console.log("Modified:");
    console.log(modify);

    fs.writeFile("output.txt", modify, (err) => {
        if (err) {
            console.log(err);
            return;
        }

        fs.readFile("output.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Output File:");
            console.log(data);
        });
    });
});