
import { createStudent } from "./student.js";
import { createMessage } from "./message.js";

const nameInput = document.getElementById("studentName");
const button = document.getElementById("showMessage");
const output = document.getElementById("output");

button.addEventListener("click", function () {

    const name = nameInput.value.trim();

    if (name === "") {
        output.textContent = "Please enter your name first!";
        return;
    }

    const student = createStudent(name);

    output.textContent = createMessage(student);
});
