const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`/lessons/${id}`)
    .then(res => res.json())
    .then(data => {

        const lesson = data.lesson;

        document.getElementById("lesson").innerHTML = `
            <h2>${lesson.title}</h2>
            <p>${lesson.content}</p>
        `;
    });

function goQuiz() {
    window.location.href = `/quiz?lessonId=${id}`;
}