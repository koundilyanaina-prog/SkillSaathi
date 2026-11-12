
const languageBtn = document.querySelector("#languageBtn");

let currentLanguage = "en";

languageBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";

  document.querySelectorAll("[data-en][data-hi]").forEach((element) => {
    const translation = element.dataset[currentLanguage];

    if (translation.includes("<span>")) {
      element.innerHTML = translation;
    } else {
      element.textContent = translation;
    }
  });

  languageBtn.textContent = currentLanguage === "en" ? "हिंदी" : "English";
});


document.querySelectorAll("button.course-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const courseName = button.dataset.course;

    if (courseName === "Excel & Office") {
      window.location.href = "excel.html";
    } else {
      alert(
        currentLanguage === "en"
          ? `${courseName} lessons are coming soon!`
          : `${courseName} के lessons जल्द आ रहे हैं!`
      );
    }
  });
});
