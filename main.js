const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
// const slider = document.querySelector("input");
// const value = document.querySelector(".value");

// value.textContent = slider.value;

// slider.oninput = function () {
//   console.log(slider.value);
//   value.textContent = slider.value;
// };

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

const totalCost = document.getElementById("total-cost");
const anInitialFee = document.getElementById("an-initial-fee");
const creditTrem = document.getElementById("credit-trem");

const totalCostRange = document.getElementById("total-cost-range");
const anInitialFeeRange = document.getElementById("an-initial-fee-range");
const creditTremRange = document.getElementById("credit-trem-range");

const totalAmountOfCredit = document.getElementById("amount-of-credit");
const totalMounthlyPayment = document.getElementById("mounthly-payment");
const totalRecommendedIncome = document.getElementById("recommended-income");

const inputsRange = document.querySelectorAll(".input-range");
const bankBtns = document.querySelectorAll(".bank");

const assignValue = () => {
  totalCost.value = totalCostRange.value;
  // anInitialFee.value = anInitialFeeRange.value;
  creditTrem.value = creditTremRange.value;
};

let currentPrecent = 6;

for (let bank of bankBtns) {
  bank.addEventListener("click", () => {
    for (let item of bankBtns) {
      item.classList.remove("active");
    }
    bank.classList.add("active");
    takeActiveBank(bank);
  });
}

const takeActiveBank = (currentActive) => {
  const dataAttrValue = currentActive.dataset.name;
  const currentBank = banks.find((bank) => bank.name === dataAttrValue);
  currentPrecent = currentBank.precents;
  colculation(totalCost.value, creditTrem.value);
};

for (let input of inputsRange) {
  input.addEventListener("input", () => {
    assignValue();
    colculation(totalCost.value, creditTrem.value);
  });
}

const colculation = (totalCost = 0, creditTrem = 1) => {
  const monthlyInterestRate = currentPrecent / 12 / 100;
  const annuityCoefficient =
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, creditTrem)) /
    (Math.pow(1 + monthlyInterestRate, creditTrem) - 1);
  res = Math.round(totalCost * annuityCoefficient * 0.1);

  if (res < 0 || res === Infinity) {
    return false;
  } else {
    totalAmountOfCredit.innerHTML = `${res}₽`;
  }
};

colculation();

// function validation(form) {
//   function removeError(input) {
//     const parent = input.parentNode;

//     if (parent.classList.contains("error")) {
//       parent.querySelector(".error-label").remove();
//       parent.classList.remove("error");
//     }
//   }
//   function createError(input, text) {
//     const parent = input.parentNode;
//     const errorLabel = document.createElement("label");

//     errorLabel.classList.add("error-label");

//     errorLabel.textContent = text;

//     parent.classList.add("error");

//     parent.append(errorLabel);
//   }

//   let result = true;

//   form.querySelectorAll("input").forEach((input) => {
//     removeError(input);
//     if (input.value == "") {
//       console.log("Ошибка ввода данных");
//       createError(input, "Поле не заполнено!");
//       result = false;
//     }
//   });

//   return result;
// }

// const addForm = document.getElementById("add-form");

// addForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (validation(this)) {

//   }
// });

let modalWindow = document.querySelector(".form__request_block");
let overlay = document.querySelector(".overlay");
let buttonRequest = document.querySelectorAll(".button_send_request");
let buttonClose = document.querySelector(".button_close");

buttonRequest.forEach((button) => {
  button.addEventListener("click", () => {
    modalWindow.style.display = "block";
  });
});

overlay.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.style.display = "none";
});

buttonClose.addEventListener("click", (e) => {
  e.preventDefault();
  modalWindow.style.display = "none";
});

try {
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
  });
} catch (error) {
  console.log(`Произошла ошибка ${error}`);
}
