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

  hintButton.textContent = hint.hidden
    ? "Show Hint"
    : "Hide Hint";
});

// Check My Answer
checkButton.addEventListener("click", function () {
  const code = editor.value.toLowerCase();

  const requiredTags = [
    "<header",
    "<nav",
    "<main",
    "<section",
    "<article",
    "<aside",
    "<footer"
  ];

  const missingTags = requiredTags.filter(tag => !code.includes(tag));

  if (missingTags.length === 0) {
    feedback.textContent =
      "Excellent! You have used all seven semantic HTML elements. 🎉";
    feedback.className = "success";
  } else {
    feedback.textContent =
      "Keep trying! Missing elements: " + missingTags.join(", ");
    feedback.className = "error";
  }
});