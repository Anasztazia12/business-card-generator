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

// update the live preview text

function updatePreview() {
  const name = nameInput.value.trim();
  const title = titleInput.value.trim();
  const company = companyInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
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
