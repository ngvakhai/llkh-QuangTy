document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const languageVietnamese = document.getElementById("language-vietnamese");
  const languageEnglish = document.getElementById("language-english");
  const languageChinese = document.getElementById("language-chinese");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });

  languageVietnamese.addEventListener("click", function () {
    document.documentElement.lang = "vi";
  });

  languageEnglish.addEventListener("click", function () {
    document.documentElement.lang = "en";
  });

  languageChinese.addEventListener("click", function () {
    document.documentElement.lang = "zh";
  });
});
