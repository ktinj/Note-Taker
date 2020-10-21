var fs = require("fs");
var notesData = getNotes();

function getNotes() {
    let data = fs.readFileSync('./main/db/db.json', 'utf8');
    let notes = JSON.parse(data);

    for (let i = 0; i < notes.length; i++) {
        notes[i].id = '' + i;
    }
    return notes;
}

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = getNotes();
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {
        notesData.push(req.body);
        fs.writeFileSync('./main/db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
    });

    app.delete("/api/notes/:id", function (req, res) {
        const requestID = req.params.id;
        console.log(requestID);

        let note = notesData.filter(note => {
            return note.id === requestID;
        })[0];

        console.log(note);
        const index = notesData.indexOf(note);

        notesData.splice(index, 1);

        fs.writeFileSync('./main/db/db.json', JSON.stringify(notesData), 'utf8');
        res.json("Note deleted");
    });
};