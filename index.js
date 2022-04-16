// Advices API URL
const ADVICES_API_URL = "	https://api.adviceslip.com/advice";

// DOM Elements
const $adviceIdEl = document.querySelector("#advice-id");
const $adviceTextEl = document.querySelector(".advice-text");
const $diceBtn = document.querySelector(".dice-btn");

// Event listeners
$diceBtn.addEventListener("click", getAdviceAndFillContent);

// Functions
const getRandomAdvice = async () => {
  try {
    const apiRes = await fetch(ADVICES_API_URL);
    const randomAdvice = await apiRes.json();

    if (!randomAdvice.slip) {
      throw new Error("No slip property found in api response");
      return;
    }

    return await randomAdvice.slip;
  } catch (e) {
    console.error(e);
  }
};

function getAdviceAndFillContent() {
  getRandomAdvice().then((randomAdvice) => {
    if (randomAdvice.advice) {
      $adviceIdEl.textContent = randomAdvice.id;
      $adviceTextEl.textContent = randomAdvice.advice;
    }
  });
}

// Get data when page loads
getAdviceAndFillContent();
