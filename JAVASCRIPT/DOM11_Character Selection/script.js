const character = document.querySelectorAll(".character");
const charImage = document.getElementById("char-image");
const charName = document.getElementById("char-name");
const charTitle = document.getElementById("char-title");
const charQuote = document.getElementById("char-quote");
const charGift = document.getElementById("char-gift");
const selectAudio = new Audio("assets/sdv_select.mp3");

/* * DOCU: Initializes and plays background music upon the first user interaction.
 * * Last Updated: 2026-02-10  
 * Author: Krishae Ann Dela Cruz  
 */
const backgroundAudio = new Audio("assets/stardew valley overture.mp3");
addEventListener("mousedown", function () {
    backgroundAudio.play();
});


/* * DOCU: Manages character selection by updating the active state and updating the display panel with the selected character's data.
 * @param {HTMLElement} char - The specific character element being clicked.
 * @returns {void} - Updates the DOM with the character's unique name, title, quote, and gift preference.
 * * Last Updated: 2026-02-10  
 * Author: Krishae Ann Dela Cruz  
 */
character.forEach(function (char) {
    char.addEventListener("click", function () {
        selectAudio.play();
        
        character.forEach(function (c) 
            { c.classList.remove("active"); });
        char.classList.add("active");

        const name = char.getAttribute("data-name");
        const title = char.getAttribute("data-title");
        const quote = char.getAttribute("data-quote");
        const gift = char.getAttribute("data-gift");
        

        charImage.src = char.src;
        charName.textContent = name;
        charTitle.textContent = title;
        charQuote.textContent = quote;
        charGift.textContent = "Loves " +gift;
    });
});