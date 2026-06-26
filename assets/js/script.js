// Only runs on the form.html page, which has the form.
const businessCardForm = document.getElementById("businessCardForm");
if (!businessCardForm) {
  // This page has no form, so stop here
} else {

// get the elements from HTML

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
const cardModal = document.getElementById("cardModal");
const modalCardPreview = document.getElementById("modalCardPreview");
const closeBtn = document.querySelector(".close");
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
  } else {
    cardPreview.style.backgroundImage = `url(${selectedBackground})`;
    cardPreview.style.backgroundSize = "cover";
    cardPreview.style.backgroundPosition = "center";
  }
}

// check the form before submitting

function validateForm() {
  let isValid = true;
  const emailValue = emailInput.value.trim();
  const emailIsValid = emailValue !== "" && emailValue.includes("@") && emailValue.includes(".");

  if (nameInput.value.trim() === "") {
    nameInput.classList.add("input-error");
    isValid = false;
  } else {
    nameInput.classList.remove("input-error");
  }

  if (phoneInput.value.trim() === "") {
    phoneInput.classList.add("input-error");
    isValid = false;
  } else {
    phoneInput.classList.remove("input-error");
  }

  if (emailInput.value.trim() === "") {
    emailInput.classList.add("input-error");
    isValid = false;
  } else {
    emailInput.classList.remove("input-error");
  }

  if (emailValue !== "" && emailIsValid === false) {
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (isValid === false) {
    setStatus("Please fill in Name, Phone, and a valid Email address.");
  }

  return isValid;
}

function createCard() {
  if (validateForm() === false) {
    return;
  }
  setStatus("Card created successfully!");

  modalCardPreview.innerHTML = cardPreview.innerHTML;
  modalCardPreview.className = cardPreview.className;
  modalCardPreview.style.cssText = cardPreview.style.cssText;
  modalCardPreview.style.backgroundSize = "cover";
  modalCardPreview.style.backgroundPosition = "center";

  const originalLogo = cardPreview.querySelector("#previewLogo");
  const modalLogo = modalCardPreview.querySelector("#previewLogo");

  if (originalLogo && modalLogo) {
    modalLogo.src = originalLogo.src;
    modalLogo.style.cssText = originalLogo.style.cssText;
  }

  cardModal.style.display = "block";
}

// download the card as a JPG image

function downloadCard() {
  if (validateForm() === false) {
    return;
  }
  html2canvas(cardPreview).then(function (canvas) {
    const link = document.createElement("a");
    link.download = "business-card.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
    setStatus("Card downloaded as JPG.");
  });
}

// Runs when the user clicks one of the images in the background modal
function selectBackground(imagePath) {
  selectedBackground = imagePath;
  applyBackground();
  hide(document.getElementById("backgroundModal"));
}

// Event listeners

nameInput.addEventListener("input", updatePreview);
titleInput.addEventListener("input", updatePreview);
companyInput.addEventListener("input", updatePreview);
emailInput.addEventListener("input", updatePreview);
phoneInput.addEventListener("input", updatePreview);

logoUpload.addEventListener("change", showLogo);
logoPosition.addEventListener("change", updateLogoPosition);

cardColor.addEventListener("input", applyBackground);
createCardButton.addEventListener("click", createCard);
downloadButton.addEventListener("click", downloadCard);

fontColorInput.addEventListener("input", function () {
  document.getElementById("cardContent").style.color = fontColorInput.value;
});

// jQuery: all background thumbnails do the same thing so one handler covers all of them
$(".bg-option").on("click", function () {
  selectBackground($(this).data("bg"));
});

// --- CLOSE MODAL (X) ---
closeBtn.addEventListener("click", () => {
  cardModal.style.display = "none";
});

// --- CLOSE MODAL (background click) ---
window.addEventListener("click", (e) => {
  if (e.target === cardModal) {
    cardModal.style.display = "none";
  }
});

}
