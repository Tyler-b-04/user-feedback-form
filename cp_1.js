// Main elements
const pageContainer = document.getElementById("page-container");
const form = document.getElementById("feedback-form");
const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const feedbackDisplay = document.getElementById("feedback-display");
const charCount = document.getElementById("char-count");

// Error fields
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const commentsError = document.getElementById("comments-error");

// Tooltips
const nameTooltip = document.getElementById("name-tooltip");
const emailTooltip = document.getElementById("email-tooltip");
const commentsTooltip = document.getElementById("comments-tooltip");

// Character count
commentsInput.addEventListener("input", function () {
  charCount.textContent = `Characters: ${commentsInput.value.length}`;
});

// Mouseover
form.addEventListener("mouseover", function (event) {
  if (event.target.id === "user-name") {
    nameTooltip.style.display = "block";
  } else if (event.target.id === "email") {
    emailTooltip.style.display = "block";
  } else if (event.target.id === "comments") {
    commentsTooltip.style.display = "block";
  }
});

// Mouseout
form.addEventListener("mouseout", function (event) {
  if (event.target.id === "user-name") {
    nameTooltip.style.display = "none";
  } else if (event.target.id === "email") {
    emailTooltip.style.display = "none";
  } else if (event.target.id === "comments") {
    commentsTooltip.style.display = "none";
  }
});

// Error reset
 nameError.textContent = "";
  emailError.textContent = "";
  commentsError.textContent = "";

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const commentsValue = commentsInput.value.trim();

  let isValid = true;

  if (nameValue === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (emailValue === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  }

  if (commentsValue === "") {
    commentsError.textContent = "Comments are required.";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

// Feedback entry
