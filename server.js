const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");



dotenv.config();

const PORT = process.env.PORT;
const pagesRoutes = require("./routes/pages");
const lessonRoutes = require("./routes/lessonsRoutes");
const quizRoutes = require("./routes/quizzesRoutes");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


app.use(
    "/",
    pagesRoutes
);


app.use(
    "/lessons",
    lessonRoutes
);

app.use(
    "/quiz",
   quizRoutes
);

app.listen(PORT, () => {
console.log(`Szervered elindult a következő porton: ${PORT}`);
});


