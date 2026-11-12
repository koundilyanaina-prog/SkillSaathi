const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const clearButton = document.querySelector("#lessonClearBtn");
const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");
const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");
const preview = document.querySelector("#lessonPreview");

// Run HTML Code
function runLessonCode() {
  preview.srcdoc = editor.value;
  preview.hidden = false;

  feedback.textContent = "Your code is running! 🎉";
  feedback.style.color = "#a78bfa";
}

runButton.addEventListener("click", runLessonCode);

// Clear Editor and Output
clearButton.addEventListener("click", function () {
  editor.value = "";
  preview.srcdoc = "";
  preview.hidden = true;

  feedback.textContent = "";
  hint.hidden = true;
  hintButton.textContent = "Show Hint";
});

// Show or Hide Hint
hintButton.addEventListener("click", function () {
  hint.hidden = !hint.hidden;

  hintButton.textContent = hint.hidden
    ? "Show Hint"
    : "Hide Hint";
});

// Check HTML Attributes
checkButton.addEventListener("click", function () {
  const code = editor.value.toLowerCase();

  const requiredAttributes = [
    'id=',
    'class=',
    'title=',
    'href=',
    'src=',
    'alt='
  ];

  const missingAttributes = requiredAttributes.filter(
    attribute => !code.includes(attribute)
  );

  if (missingAttributes.length === 0) {
    feedback.textContent =
      "Excellent! You have used all the important HTML attributes correctly. 🎉";

    feedback.style.color = "#86efac";
  } else {
    feedback.textContent =
      "Keep practicing! Please include these attributes: " +
      missingAttributes.join(", ");

    feedback.style.color = "#fca5a5";
  }
});