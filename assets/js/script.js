// get the elements from the page

// Text inputs
const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title");
const companyInput = document.getElementById("company");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

// Logo controls
const logoUpload = document.getElementById("logoUpload");
const logoPosition = document.getElementById("logoPosition");
const previewLogo = document.getElementById("previewLogo");

// Background controls

const cardColor = document.getElementById("cardColor");
let selectedBackground = "";

// Submit button and status message

const createCardButton = document.getElementById("createCardButton");
const downloadButton = document.getElementById("downloadButton");
const fontColorInput = document.getElementById("fontColor");
const statusText = document.getElementById("statusText");

// Preview elements

const cardPreview = document.getElementById("businessCardPreview");
const previewName = document.getElementById("previewName");
const previewTitle = document.getElementById("previewTitle");
const previewCompany = document.getElementById("previewCompany");
const previewEmail = document.getElementById("previewEmail");
const previewPhone = document.getElementById("previewPhone");

// helper functions

function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function setStatus(message) {
  statusText.textContent = message;
}

// update the live preview text

function updatePreview() {
  const name = nameInput.value.trim();
  const title = titleInput.value.trim();
  const company = companyInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Show what the user typed, or a placeholder if the field is empty

  if (name === "") {
    previewName.textContent = "Name";
  } else {
    previewName.textContent = name;
  }

  if (email === "") {
    previewEmail.textContent = "email@example.com";
  } else {
    previewEmail.textContent = email;
  }

  if (phone === "") {
    previewPhone.textContent = "+44 1234 567890";
  } else {
    previewPhone.textContent = phone;
  }

  // Title and company are optional, so hide them when empty

  if (title === "") {
    hide(previewTitle);
  } else {
    previewTitle.textContent = title;
    show(previewTitle);
  }

  if (company === "") {
    hide(previewCompany);
  } else {
    previewCompany.textContent = company;
    show(previewCompany);
  }
}
// logo stuff

// Move the logo to the left or right side of the card
function updateLogoPosition() {
  if (logoPosition.value === "left") {
    previewLogo.classList.remove("logo-right");
    previewLogo.classList.add("logo-left");
  } else {
    previewLogo.classList.remove("logo-left");
    previewLogo.classList.add("logo-right");
  } 
}

// Read the chosen image file and show it on the card
function showLogo() {
  const file = logoUpload.files[0];

  if (file === undefined) {
    hide(previewLogo);
    previewLogo.src = "";
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", function () {
    previewLogo.src = reader.result;
    show(previewLogo);
    updateLogoPosition();
  });

  reader.readAsDataURL(file);
}

// background color and image

function applyBackground() {
  cardPreview.style.backgroundColor = cardColor.value;

  if (selectedBackground === "") {
    cardPreview.style.backgroundImage = "none";
  }



