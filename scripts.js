const form = window.document.getElementById("converterForm");

const amount = window.document.getElementById("amount");

const fromCurrency = window.document.getElementById("fromCurrency");

const convertedAmount = window.document.getElementById("convertedAmount");

const toCurrency = window.document.getElementById("toCurrency");

const converterBtn = window.document.getElementById("converterBtn");

const loading = window.document.querySelector(".loading");

const result = window.document.querySelector(".result");

const error = window.document.querySelector(".error");

const API_URL = "https://api.exchangerate-api.com/v4/latest/";
async function convertMoney() {
  loading.style.display = "block";
  converterBtn.style.display = "none";
  error.style.display = "none";
  result.style.display = "none";

  try{
    const response  = await fetch(API_URL + fromCurrency.value);
    const data = await response.json();
    const rate = data.rates[toCurrency.value];
    const convertedValue = (amount.value * rate).toFixed(2);

    convertedAmount.value = convertedValue;
    //error.style.display = "none";
    result.style.display = "block";

    result.innerHTML = `
    <div style="font-size: 1.4rem;">
    ${amount.value} ${fromCurrency.value} = ${convertedAmount.value} ${toCurrency.value}
    </div>
    <div style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px">
    Taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
    </div>
    `;

  } catch(err) {
    console.error(err);
    error.style.display = "block";
    error.innerHTML = `Falha ao converter moeda. Tente novamente!`;
    //alert("Falha de servidor");
  }

  loading.style.display = "none";
  //console.log("Converte valor");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  convertMoney();
});