
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



