// -------- query DOM elements ---------------------------
const container = document.querySelector(".container");
const article = document.querySelector(".container__article");
const articleBtn = document.querySelector(".container__article-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupBlocker = document.querySelector(".blocker");
const clicksCounter = document.querySelector(".popup__text-click-info");
const resetBtn = document.querySelector(".popup__counter-reset");
const highContrastCheckbox = document.querySelector(
	".container__checkbox-check"
);
// -------------------- variable for clicks --------------------
let clicks = 0;

//-------------- get clicks value from local storage ---------------------------
clicksCounter.value = localStorage.getItem("clickNr");

//------------ high contrast mode--------------------
highContrastCheckbox.addEventListener("change", handleHighContrast);

//------------------- listener for handle button and popup -----------------------
articleBtn.addEventListener("click", handlePopup);

//----------------- listener on page reload -------------------------
window.addEventListener("load", () => {
	clicks = localStorage.getItem("clickNr");
});

//--------------close popup clicking outside popup ---------------------
popupBlocker.addEventListener("click", () => {
	popupBlocker.classList.remove("active");
	popup.classList.remove("show");
});

//-------------------close popup with X -------------------
popupCloseBtn.addEventListener("click", () => {
	if (popup.classList.contains("show")) {
		popup.classList.remove("show");
		popupBlocker.classList.remove("active");
	}
});

// ----------- functions----------------------
// ---- popup function with handle storage for clicks--------------
function handlePopup() {
	if (!popup.classList.contains("show")) {
		popup.classList.add("show");
		popupBlocker.classList.add("active");

		clicks++;
		clicksCounter.innerText = `${clicks} ${clicks === 1 ? "time" : "times"}`;

		// check if clicks value is 1 or 2 digit
		if (clicks < 10) {
			localStorage.setItem("clickNr", clicksCounter.innerText[0]);
		} else if (clicks >= 10) {
			localStorage.setItem("clickNr", clicksCounter.innerText.slice(0, 2));
		}

		// if click counter is >= 5 then display reset button
		if (clicks >= 5) {
			resetBtn.style.display = "block";
			//reset memory and clicks counter when reset button clicked
			resetBtn.addEventListener("click", () => {
				localStorage.clear();
				clicks = 0;
				resetBtn.style.display = "none";
				clicksCounter.innerText = `${clicks} ${
					clicks === 1 ? "time" : "times"
				}`;
			});
		}
	}
}
//-----------high contrast function ---------------
function handleHighContrast() {
	if (highContrastCheckbox.checked === true) {
		document.body.style.backgroundColor = "black";
		container.classList.add("high-contrast-active");
	} else {
		document.body.style.backgroundColor = "white";
		container.classList.remove("high-contrast-active");
	}
}
