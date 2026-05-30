const express = require("express");
const path = require("path");

const router = express.Router();


router.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../views/index.html")
    );
})

router.get("/test", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../views/test.html")
    );
});


router.get("/lesson", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../views/lesson.html")
    );
});


router.get("/quiz", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../views/quize.html")
    );
});

module.exports = router;