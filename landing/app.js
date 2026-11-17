// Вставьте сюда опубликованную ссылку Google Формы для заполнения.
const applicationFormUrl = "https://forms.gle/U7vFvBXkyG5RmBqAA";

for (const button of document.querySelectorAll(".apply")) {
  if (applicationFormUrl.trim()) {
    const link = document.createElement("a");
    link.className = button.className;
    link.href = applicationFormUrl.trim();
    link.append(...button.childNodes);
    button.replaceWith(link);
  } else {
    const status = document.getElementById(button.getAttribute("aria-describedby"));
    button.addEventListener("click", () => {
      status.textContent = "Приём заявок скоро откроется";
    });
  }
}
