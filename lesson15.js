const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const clearButton = document.querySelector("#lessonClearBtn");
const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");
const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");
const preview = document.querySelector("#lessonPreview");
const output = document.querySelector("#lessonOutput");

function runLessonCode() {
  preview.srcdoc = editor.value;
  output.hidden = false;
  feedback.textContent = "Your code is running! 🎉";
  feedback.style.color = "#a78bfa";
}
runButton.addEventListener("click", runLessonCode);

clearButton.addEventListener("click", function () {
  editor.value = "";
  preview.srcdoc = "";
  output.hidden = true;
  feedback.textContent = "";
  hint.hidden = true;
  hintButton.textContent = "Show Hint";
  hintButton.setAttribute("aria-expanded", "false");
});

hintButton.addEventListener("click", function () {
  hint.hidden = !hint.hidden;
  hintButton.textContent = hint.hidden ? "Show Hint" : "Hide Hint";
  hintButton.setAttribute("aria-expanded", String(!hint.hidden));
});

function showFeedback(message, success) {
  feedback.textContent = message;
  feedback.style.color = success ? "#86efac" : "#fca5a5";
}

checkButton.addEventListener("click", function () {
  const code = editor.value.toLowerCase();
  const required = [
    "<picture", "<source", "srcset=", "media=",
    "<img", "alt=", "width=", "height=",
    "loading=", "<figure", "<figcaption"
  ];
  const missing = required.filter(item => !code.includes(item));
  if (missing.length === 0) {
    showFeedback("Excellent! Your code includes the key responsive image and figure elements. 🎉", true);
  } else {
    showFeedback("Keep practicing. Add these items: " + missing.join(", "), false);
  }
});
