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

function submitForm() {
  var message =
    document.getElementById("message").value +
    " Sender: " +
    document.getElementById("first-name").value +
    " " +
    document.getElementById("last-name").value;

  // Construct the mailto link with the message and email
  var mailtoLink =
    "mailto:jakub.dertus@gmail.com" +
    "?subject=sent from online form" +
    "&cc=" +
    document.getElementById("email").value +
    "&body=" +
    encodeURIComponent(message);

  // Open the mail client with the mailto link
  window.open(mailtoLink);
}

document.getElementById("submitBtn").addEventListener("click", submitForm);
