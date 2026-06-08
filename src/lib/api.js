const API_URL = "https://script.google.com/a/macros/apolloglobalacademy.com/s/AKfycbw6ErvNllHLKnjcjYsvj8zjL-YVP_wU_05lT7Xsu61ruwPZB3hWMUnOw8TeKiMGpej2NA/exec";

async function request(action, payload = {}) {
    const body = new URLSearchParams();

    body.append("action", action);
    body.append("payload", JSON.stringify(payload));

    const response = await fetch(API_URL, {
        method: "POST",
        body
    });

    return response.json();
}

export const api = {
    login(username, password) {
        return request("login", { username, password });
    },

    getBootstrap() {
        return request("getBootstrap");
    },

    saveUsers(users) {
        return request("saveUsers", { users });
    },

    saveQuestions(questions) {
        return request("saveQuestions", { questions });
    },

    saveFlashcards(flashcards) {
        return request("saveFlashcards", { flashcards });
    },

    saveCourseNotes(courseNotes) {
        return request("saveCourseNotes", { courseNotes });
    },

    submitQuizResult(result) {
        return request("submitQuizResult", result);
    }
};
