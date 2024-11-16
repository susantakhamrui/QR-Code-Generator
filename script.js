const container = document.querySelector(".container");
const qrInput = document.getElementById("qr-input");
const generateBtn = document.getElementById("generate-btn");
const qrCode = document.getElementById("qr-code");
const qrImg = document.getElementById("qr-img");
const themeToggle = document.getElementById("theme-toggle");

// Initial State
qrCode.querySelector(".qr-placeholder").style.display = "block";
qrImg.style.display = "none";

// Generate QR Code
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || qrImg.src.includes(qrValue)) return;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  qrImg.onload = () => {
    qrCode.style.opacity = "1";
    qrCode.querySelector(".qr-placeholder").style.display = "none";
    qrImg.style.display = "block";
    generateBtn.innerText = "Generate QR Code";
  };
});

// Theme Switcher
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Reset QR Code section when input is empty
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    qrCode.style.opacity = "0";
    qrImg.src = "";
    qrImg.style.display = "none";
    qrCode.querySelector(".qr-placeholder").style.display = "block";
  }
});