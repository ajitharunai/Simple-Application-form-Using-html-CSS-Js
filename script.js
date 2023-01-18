const form = document.getElementById("application-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!name.value) {
    alert("Name is required");
    return;
  }

  if (!email.value) {
    alert("Email is required");
    return;
  }

  if (!phone.value) {
    alert("Phone is required");
