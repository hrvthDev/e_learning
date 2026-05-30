const express = require("express");
const router = express.Router();

const { getQuizzesByLessonId, getQuizWithAnswers, submitQuizResult} = require("../controllers/quizController");


router.get(
    "/lesson/:lessonId",
    getQuizzesByLessonId
);


router.get(
    "/:quizId",
    getQuizWithAnswers
);


router.post(
    "/submit",
    submitQuizResult
);

module.exports = router;