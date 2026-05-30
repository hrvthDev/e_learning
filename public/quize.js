const params = new URLSearchParams(window.location.search);
const lessonId = params.get("lessonId");

let quizData = [];
let answers = {};

fetch(`/quiz/lesson/${lessonId}`)
    .then(res => res.json())
    .then(data => {

        const container = document.getElementById("quiz");

        data.quizzes.forEach(q => {

            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <h3>${q.question}</h3>
                <div id="answers-${q.id}">Loading answers...</div>
            `;

            container.appendChild(div);

            fetch(`/quiz/${q.id}`)
                .then(res => res.json())
                .then(full => {

                    const ansContainer = document.getElementById(`answers-${q.id}`);

                    ansContainer.innerHTML = "";

                    full.quiz.answers.forEach(a => {

                        const label = document.createElement("label");

                        label.innerHTML = `
                            <input type="radio" name="q${q.id}" value="${a.id}">
                            ${a.text}
                        `;

                        ansContainer.appendChild(label);
                        ansContainer.appendChild(document.createElement("br"));
                    });
                });

            quizData.push(q);
        });
    });

function submitQuiz() {

    const allAnswers = [];

    quizData.forEach(q => {

        const selected = document.querySelector(`input[name="q${q.id}"]:checked`);

        if (selected) {
            allAnswers.push({
                quizId: q.id,
                answerId: selected.value
            });
        }
    });

    fetch("/quiz/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "TesztUser",
            lessonId,
            answers: allAnswers
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(`Eredmény: ${data.score}`);
    });
}