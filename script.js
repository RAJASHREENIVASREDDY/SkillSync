// Form Validation Script for SkillSync Contact Form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!email.match(emailPattern)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    alert(`✅ Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  });
});
