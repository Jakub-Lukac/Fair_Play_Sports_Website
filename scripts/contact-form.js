const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
  ipt.addEventListener("focus", () => {
    ipt.parentNode.classList.add("focus");
    ipt.parentNode.classList.add("not-empty");
  });
  ipt.addEventListener("blur", () => {
    if (ipt.value == "") {
      ipt.parentNode.classList.remove("not-empty");
    }
    ipt.parentNode.classList.remove("focus");
  });
});

function submit() {
  var message =
    document.getElementById("message").value +
    " Odoslal: " +
    document.getElementById("first-name").value +
    " " +
    document.getElementById("last-name");
  window.open(
    "mailto:jakub.dertus@gmail.com?subject=správa z formulára&cc=" +
      document.getElementById("email").value +
      "&body=" +
      message
  );
}

document.getElementById("submitBtn").addEventListener("click", submit);
