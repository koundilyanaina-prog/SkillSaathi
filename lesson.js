const editor = document.querySelector("#codeEditor");
const runButton = document.querySelector("#runBtn");
const preview = document.querySelector("#preview");

const resetButton = document.querySelector("#resetBtn");
const originalCode = editor.value;
const clearButton = document.querySelector("#clearBtn");

clearButton.addEventListener("click", function () {
  preview.srcdoc = "";
  preview.style.display = "none";
});
resetButton.addEventListener("click", function () {
  const confirmReset = confirm(
    "Are you sure you want to reset your code?"
  );

  if (confirmReset) {
    editor.value = originalCode;
    preview.srcdoc = "";
    preview.style.display = "none";
  }
});

function runCode() {
  preview.style.display = "block";
  preview.srcdoc = editor.value;
}

runButton.addEventListener("click", runCode);
const hintButton = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");

hintButton.addEventListener("click", function () {
  hintText.hidden = !hintText.hidden;

  if (hintText.hidden) {
    hintButton.textContent = "Show Hint";
  } else {
    hintButton.textContent = "Hide Hint";
  }
});
const checkButton = document.querySelector("#checkBtn");
const feedback = document.querySelector("#feedback");

checkButton.addEventListener("click", function () {
  const code = editor.value;

  // HTML code ko browser mein parse karo
  const parser = new DOMParser();
  const doc = parser.parseFromString(code, "text/html");

  // Pehli h1 heading check karo
  const heading = doc.querySelector("h1");

  if (!heading) {
    feedback.textContent =
      "❌ Abhi <h1> heading nahi mili. Dobara try karo!";
    feedback.className = "error";
    return;
  }

  // Heading ke andar ka text check karo
 
const headingText = heading.textContent.trim();

if (/^My name is .+!$/.test(headingText)) {
  feedback.textContent =
    "🎉 Correct! Great job, learner!";
  feedback.className = "success";
} else {
  feedback.textContent =
    "Almost! <h1> mil gaya, lekin heading ka text match nahi hua. Hint try karo!";
  feedback.className = "error";
}

});