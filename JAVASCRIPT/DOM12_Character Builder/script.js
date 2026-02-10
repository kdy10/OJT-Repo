const characterOptions = document.querySelectorAll(".character-options li");
const selectAudio = new Audio("assets/sdv_select.mp3");
const lockButton = document.getElementById("lock-button");
const message = document.getElementById("message");


/* * DOCU: Attaches event listeners to character options to play audio and update specific body parts in the display.
 * @param {None} - Uses event listeners on ".character-options li" elements.
 * @returns {void} - Updates character preview 'src' and manages 'active' CSS classes per category.
 * * Last Updated: 2026-02-10  
 * Author: Krishae Ann Dela Cruz 
 */
characterOptions.forEach(function(option) {
    option.addEventListener("click", 
        function() {
            selectAudio.play();
            const img = option.querySelector("img");
            const part = img.getAttribute("data-part");
            const src = img.getAttribute("src");
            const partOption = document.getElementById("char-"+part);

            characterOptions.forEach(function(otherOption) {
                const otherImg = otherOption.querySelector("img");
                if (otherImg.getAttribute("data-part") === part) {
                    otherOption.classList.remove("active");
                }
            });
            option.classList.add("active");

            partOption.setAttribute("src", src);
        }
    );
});

/* * DOCU: Validates that all required character parts are selected and provides an message notification.
 * @param {None} - Checks the count of elements with the ".active" class.
 * * Last Updated: 2026-02-10  
 * Author: Krishae Ann Dela Cruz 
 */
lockButton.addEventListener("click", function() {
    if (document.querySelectorAll(".character-options li.active").length < 4) {
        message.textContent = "Please select one per set before locking in!";
    }
    else {
        message.textContent = "Character Locked In!";
    }
    setTimeout(function() {
        message.textContent = '';
    }, 5000);
});


selectDefault();
/* * DOCU: Automatically selects the first option for every body part category on page load.
 * @param {None} - Targets the first-child of each character option group.
 * * Last Updated: 2026-02-10  
 * Author: Krishae Ann Dela Cruz 
 */
function selectDefault() {
    const defaultOptions = document.querySelectorAll(".character-options li:first-child");
    defaultOptions.forEach(function(option) {
        option.click();
        option.classList.add("active");
    });
}

