document.addEventListener("DOMContentLoaded", loadLessons);

async function loadLessons() {
    try {
        const response = await fetch("/lessons");
        const data = await response.json();

        const container = document.getElementById("lessons-container");

        if (!data.success) {
            container.innerHTML = "<p>Nem sikerült betölteni a tananyagokat.</p>";
            return;
        }

        container.innerHTML = "";

        data.lessons.forEach((lesson) => {
            const card = document.createElement("div");

            card.classList.add("lesson-card");

            card.innerHTML = `
                <h3>${lesson.title}</h3>
                <p>${lesson.content.substring(0, 100)}...</p>

                <button onclick="openLesson(${lesson.id})">
                    Megnyitás
                </button>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);

        document.getElementById("lessons-container").innerHTML =
            "<p>Hiba történt a tananyagok lekérése során.</p>";
    }
}

function openLesson(id) {
    window.location.href = `/lesson?id=${id}`;
}