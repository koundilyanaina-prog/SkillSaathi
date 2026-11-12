
const editor = document.querySelector("#lessonEditor");
const runButton = document.querySelector("#lessonRunBtn");
const preview = document.querySelector("#lessonPreview");

const hintButton = document.querySelector("#lessonHintBtn");
const hint = document.querySelector("#lessonHint");

const checkButton = document.querySelector("#lessonCheckBtn");
const feedback = document.querySelector("#lessonFeedback");

// Language Toggle
const languageButton = document.querySelector("#languageBtn");
let currentLanguage = "en";

languageButton.addEventListener("click", function () {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";

  document.querySelectorAll("[data-en][data-hi]").forEach(element => {
    element.innerHTML = currentLanguage === "hi"
      ? element.dataset.hi
      : element.dataset.en;
  });

  languageButton.textContent =
    currentLanguage === "en" ? "हिंदी" : "English";

  hintButton.textContent =
    currentLanguage === "en"
      ? (hint.hidden ? "Show Hint" : "Hide Hint")
      : (hint.hidden ? "संकेत दिखाएँ" : "संकेत छिपाएँ");
});

// Run the learner's HTML
function runLessonCode() {
  preview.srcdoc = editor.value;
  preview.hidden = false;
}

runButton.addEventListener("click", runLessonCode);

// Show or hide the hint
hintButton.addEventListener("click", function () {
  hint.hidden = !hint.hidden;

  hintButton.textContent = currentLanguage === "en"
    ? (hint.hidden ? "Show Hint" : "Hide Hint")
    : (hint.hidden ? "संकेत दिखाएँ" : "संकेत छिपाएँ");
});

// Check the learner's answer
checkButton.addEventListener("click", function () {
  const parser = new DOMParser();
  const doc = parser.parseFromString(editor.value, "text/html");

  const link = doc.querySelector("a");
  const image = doc.querySelector("img");

  const correctLink =
    link &&
    link.getAttribute("href") === "https://example.com" &&
    link.textContent.trim() === "Visit Example";

  const correctImage =
    image &&
    image.getAttribute("src") ===
      "https://placehold.co/300x150?text=Sample+Image" &&
    image.getAttribute("alt") === "Sample image";

  if (correctLink && correctImage) {
    feedback.textContent = currentLanguage === "en"
      ? "🎉 Excellent! Your link and image code are correct!"
      : "🎉 बहुत अच्छा! आपका लिंक और इमेज कोड सही है!";

    feedback.className = "success";
  } else {
    feedback.textContent = currentLanguage === "en"
      ? "Not quite! Check the link URL, link text, image src and alt."
      : "अभी सही नहीं है! लिंक URL, लिंक टेक्स्ट, इमेज src और alt जाँचें।";

    feedback.className = "error";
  }
});
