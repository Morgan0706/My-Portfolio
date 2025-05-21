alert("🙏Thank you for visiting my portfolio have fun");
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function handleSubmit() {
  const messageInput = document.getElementById("message").value.trim();
  const output = document.getElementById("output");

  if (messageInput === "") {
    output.textContent = "Please enter the message";
    output.style.color = "black";
  } else {
    output.textContent = "Thank you for contacting me!";
    output.style.color = "green";
  }
}
