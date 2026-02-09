const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileCard = document.getElementById('profile-card');    


/* * DOCU: Updates the displayed profile name using the text entered in the name input field.
 * @param {None} - Reads the value directly from the "name" input element
 * @returns {void} - Changes the text content of the profileName display
 * @throws {None} - Skips the update if the input field is empty
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function updateProfileName() {  
    const newName = document.getElementById("name").value.trim();
    if (newName) {
        profileName.textContent = newName;
    }
}

/* * DOCU: Changes the displayed bio text using the text entered from the bio input field.
 * @param {None} - Reads data directly from the "bio" input element
 * @returns {void} - Updates the profileBio text content
 * @throws {None} - Does nothing if the input field is empty
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function updateProfileBio() {       
    const newBio = document.getElementById("bio").value.trim();
    if (newBio) {
        profileBio.textContent = newBio;
    }
}

/* * DOCU: Updates the profile picture by changing its source URL to the link provided in the input.
 * @param {None} - Reads the URL string from the "image" input element
 * @returns {void} - Modifies the 'src' attribute of the profilePicture element
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function updateProfileImage() {    
    const newImageUrl = document.getElementById("image").value.trim();
    
    profilePicture.setAttribute('src', newImageUrl);
}

/* * DOCU: Changes the background color of the profile card to the color selected by the user.
 * @param {None} - Reads the color value from the "color" input element
 * @returns {void} - Updates the CSS backgroundColor property of the profileCard
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function updateBgColor() {          
    const newColor = document.getElementById("color").value;

    profileCard.style.backgroundColor = newColor;
}