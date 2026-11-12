const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const preview = document.querySelector("#lessonPreview");
const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");
const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");

// Run Code
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
  hintButton.textContent = hint.hidden ? "Show Hint" : "Hide Hint";
});

// Check My Answer
checkButton.addEventListener("click", function () {
  const code = editor.value.toLowerCase();

  const requiredItems = [
    'type="email"',
    'type="number"',
    'type="radio"',
    'type="checkbox"',
    "required",
    "minlength",
    "maxlength"
  ];

  const missingItems = requiredItems.filter(item => {
    return !code.includes(item);
  });

  if (missingItems.length === 0) {
    feedback.textContent =
      "Excellent! You have used all the important form input types and validation attributes. 🎉";
    feedback.className = "success";
  } else {
    feedback.textContent =
      "Keep trying! Missing items: " + missingItems.join(", ");
    feedback.className = "error";
  }
});