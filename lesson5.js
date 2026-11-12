
const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const preview = document.querySelector("#lessonPreview");
const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");
const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");

// Run Code: Show output only after clicking the button
function runLessonCode() {
  preview.srcdoc = editor.value;
  preview.hidden = false;
  feedback.textContent = "";
  feedback.className = "";
}

runButton.addEventListener("click", runLessonCode);

// Show Hint
hintButton.addEventListener("click", function () {
  hint.hidden = !hint.hidden;

  hintButton.textContent = hint.hidden
    ? "Show Hint"
    : "Hide Hint";
});

// Check My Answer
checkButton.addEventListener("click", function () {
  const code = editor.value;

  const hasForm = /<form\b[^>]*>/i.test(code);
  const hasInputs = (code.match(/<input\b[^>]*>/gi) || []).length >= 2;
  const hasButton = /<button\b[^>]*>/i.test(code);
  const hasLabels = /<label\b[^>]*>/i.test(code);

  if (hasForm && hasInputs && hasButton && hasLabels) {
    feedback.textContent =
      "Excellent! You have created a form with inputs, labels and a button. 🎉";
    feedback.className = "success";
  } else {
    feedback.textContent =
      "Not quite! Add a form, at least two input fields, one label and a button. Keep trying!";
    feedback.className = "error";
  }
});
