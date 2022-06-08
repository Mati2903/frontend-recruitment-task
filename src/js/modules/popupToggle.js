const articleBtn = document.querySelector(".container__article-button");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");
const popupBlocker = document.querySelector(".blocker");
export function showPopup() {
	if (!popup.classList.contains("show")) {
		popup.classList.add("show");
		popupBlocker.classList.add("active");
	}
}
