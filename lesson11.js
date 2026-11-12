const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const preview = document.querySelector("#lessonPreview");
const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");
const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");

// Run Code
function runLessonCode() {
  preview.hidden = false;
  feedback.textContent = "";
  feedback.className = "";

  preview.onload = function () {
    const frameDoc = preview.contentDocument;

    const submitButton = frameDoc.querySelector("#submitBtn");
    const nameInput = frameDoc.querySelector("#studentName");
    const message = frameDoc.querySelector("#submitMessage");

    if (submitButton && nameInput && message) {
      submitButton.addEventListener("click", function () {
        if (nameInput.value.trim() === "") {
          message.textContent = "Please enter your name.";
          message.style.color = "red";
        } else {
          message.textContent =
            "Form Submitted Successfully! Welcome to SkillSaathi. 🎉";
          message.style.color = "green";
        }
      });
    }
  };

  preview.srcdoc = editor.value;
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
    "alt=",
    "<label",
    'for="',
    'id="',
    "<h1",
    "<main"
  ];

  const missingItems = requiredItems.filter(item => !code.includes(item));

  if (missingItems.length === 0) {
    feedback.textContent =
      "Excellent! You have used important HTML accessibility elements. 🎉";
    feedback.className = "success";
  } else {
    feedback.textContent =
      "Keep trying! Missing items: " + missingItems.join(", ");
    feedback.className = "error";
  }
});