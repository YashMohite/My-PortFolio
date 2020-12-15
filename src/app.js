const express = require('express');
const hbs = require('hbs');
const path = require("path");
const Contact = require("./models/message")
require("./db/conn");
require("hbs");

const app = express();
const port = process.env.PORT || 3000;

// Setting The Path
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Midddle Ware
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath)

// Routing
// app.get( path, callback )
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.post("/submited", async (req, res) => {
    try {
        const useData = new Contact(req.body);
        await useData.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(505).send(error);
    }
})

// Creating Server
app.listen(port, () => {
    console.log(`Server Started On Port: ${port}`);
})