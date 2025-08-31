const form = window.document.getElementById("converterForm");

const amount = window.document.getElementById("amount");

const fromCurrency = window.document.getElementById("fromCurrency");

const convertedAmount = window.document.getElementById("convertedAmount");

const toCurrency = window.document.getElementById("toCurrency");

const converterBtn = window.document.getElementById("converterBtn");

const loading = window.document.querySelector(".loading");

const result = window.document.querySelector(".result");

const error = window.document.querySelector(".error");

function convertMoney() {
  loading.style.display = "block";
  converterBtn.style.display = "none";
  console.log("Converte valor");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  convertMoney();
});