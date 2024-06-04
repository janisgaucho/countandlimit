let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const limit = document.querySelector("#limit");
const totalPlace = document.querySelector("#total-place");
const body = document.body;
const validLimit = document.querySelector(".valid-limit");
const occupedPlace = document.querySelector("#occuped-place");
const freePlace = document.querySelector("#free-place");
const reset = document.querySelector(".refresh");

// Actualisation de la phrase de confirmation du nombre de places.
validLimit.addEventListener("click", changeMessage);
function changeMessage() {
    totalPlace.textContent = limit.value;
    freePlace.textContent = limit.value - count;
    occupedPlace.textContent = value.textContent;
};

//Fonctionnement du compteur.
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e)  {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease") && count > 0) {
             count--;
             occupedPlace.textContent = ~~value.textContent - 1;
             freePlace.textContent = limit.value - count;
        } else if (styles.contains("increase") && count < limit.value) {
            count++;
            occupedPlace.textContent = ~~value.textContent + 1;
            freePlace.textContent = limit.value - count;
        } else if (styles.contains("increase") && count === limit.value) {
            count = count;
        } else if (styles.contains("refresh")) {
            value.textContent = "0";
            occupedPlace.textContent = "0";
            freePlace.textContent = limit.value;
            count = 0;
        }
        value.textContent = count;
    });
});