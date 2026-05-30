const db = require("../database/config");


const getQuizzesByLessonId = (req, res) => {

    const { lessonId } = req.params;

    const query = `
        SELECT
            id,
            question
        FROM quizzes
        WHERE lesson_id = ?
        ORDER BY id ASC
    `;

    db.query(query, [lessonId], (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Hiba történt a kérdések lekérésekor."
            });
        }

        return res.status(200).json({
            success: true,
            quizzes: results
        });
    });
};



const getQuizWithAnswers = (req, res) => {

    const { quizId } = req.params;

    const query = `
        SELECT
            q.id AS quiz_id,
            q.question,
            a.id AS answer_id,
            a.answer_text
        FROM quizzes q
        JOIN answers a ON q.id = a.quiz_id
        WHERE q.id = ?
    `;

    db.query(query, [quizId], (err, results) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: "Hiba a quiz lekérésekor."
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Quiz nem található."
            });
        }

        const formatted = {
            quizId: results[0].quiz_id,
            question: results[0].question,
            answers: results.map(row => ({
                id: row.answer_id,
                text: row.answer_text
            }))
        };

        return res.status(200).json({
            success: true,
            quiz: formatted
        });
    });
};


const submitQuizResult = (req, res) => {

    const {
        username,
        lessonId,
        answers
    } = req.body;

    if (!username || !lessonId || !answers) {
        return res.status(400).json({
            success: false,
            message: "Hiányzó adatok."
        });
    }

    let score = 0;
    let checked = 0;

    answers.forEach((item) => {

        const query = `
            SELECT is_correct
            FROM answers
            WHERE id = ?
        `;

        db.query(query, [item.answerId], (err, result) => {

            checked++;

            if (!err && result.length > 0) {
                if (result[0].is_correct === 1) {
                    score++;
                }
            }

            if (checked === answers.length) {

                const insertQuery = `
                    INSERT INTO results (
                        username,
                        score,
                        lesson_id
                    )
                    VALUES (?, ?, ?)
                `;

                db.query(
                    insertQuery,
                    [username, score, lessonId],
                    (err2) => {

                        if (err2) {
                            return res.status(500).json({
                                success: false,
                                message: "Nem sikerült menteni az eredményt."
                            });
                        }

                        return res.status(200).json({
                            success: true,
                            message: "Quiz befejezve.",
                            score
                        });
                    }
                );
            }
        });
    });
};


module.exports = {
    getQuizzesByLessonId,
    getQuizWithAnswers,
    submitQuizResult
};