const articleBtn = document.querySelector(".container__article-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupBlocker = document.querySelector(".blocker");
const clicksCounter = document.querySelector(".popup__text-click-info");

let clicks = 0;

//-------------------add class .show to popup and .active to blocker on button click-------------------
articleBtn.addEventListener("click", () => {
	if (!popup.classList.contains("show")) {
		popup.classList.add("show");
		popupBlocker.classList.add("active");
	}
});

//--------------remove class .show and .active on click outside popup on blocker---------------------
popupBlocker.addEventListener("click", () => {
	popupBlocker.classList.remove("active");
	popup.classList.remove("show");
});

//-------------------remove class .show and .active from popup and blocker on X click-------------------
popupCloseBtn.addEventListener("click", () => {
	if (popup.classList.contains("show")) {
		popup.classList.remove("show");
		popupBlocker.classList.remove("active");
	}
});
