const db = require("../database/config");


const getAllLessons = (req, res) => {

    const query = `
        SELECT
            id,
            title,
            content
        FROM lessons
        ORDER BY id ASC
    `;

    db.query(query, (error, results) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Hiba történt a tananyagok lekérdezése során."
            });
        }

        return res.status(200).json({
            success: true,
            count: results.length,
            lessons: results
        });

    });

};


const getLessonById = (req, res) => {

    const { id } = req.params;

    const query = `
        SELECT
            id,
            title,
            content
        FROM lessons
        WHERE id = ?
    `;

    db.query(query, [id], (error, results) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: "Adatbázis hiba."
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Tananyag nem található."
            });
        }

        return res.status(200).json({
            success: true,
            lesson: results[0]
        });

    });

};


const createLesson = (req, res) => {

    const {
        title,
        content
    } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Minden mező kitöltése kötelező."
        });
    }

    const query = `
        INSERT INTO lessons (
            title,
            content
        )
        VALUES (?, ?)
    `;

    db.query(
        query,
        [title, content],
        (error, result) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Nem sikerült létrehozni a tananyagot."
                });
            }

            return res.status(201).json({
                success: true,
                message: "Tananyag létrehozva.",
                lessonId: result.insertId
            });

        }
    );

};


const updateLesson = (req, res) => {

    const { id } = req.params;

    const {
        title,
        content
    } = req.body;

    const query = `
        UPDATE lessons
        SET
            title = ?,
            content = ?
        WHERE id = ?
    `;

    db.query(
        query,
        [title, content, id],
        (error, result) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Szerverhiba."
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Tananyag nem található."
                });
            }

            return res.status(200).json({
                success: true,
                message: "Tananyag sikeresen módosítva."
            });

        }
    );

};


const deleteLesson = (req, res) => {

    const { id } = req.params;

    const query = `
        DELETE FROM lessons
        WHERE id = ?
    `;

    db.query(
        query,
        [id],
        (error, result) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "Szerverhiba."
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    success: false,
                    message: "Tananyag nem található."
                });
            }

            return res.status(200).json({
                success: true,
                message: "Tananyag törölve."
            });

        }
    );

};

module.exports = {
    getAllLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson
};