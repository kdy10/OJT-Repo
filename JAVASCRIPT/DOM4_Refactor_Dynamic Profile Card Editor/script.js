const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileCard = document.getElementById('profile-card');   

const updateButton = document.getElementById('updateProfile');     
updateButton.addEventListener('click', updateProfile);

/* * DOCU: Updates all profile details (name, bio, image, and color) at once based on user input.
 * @param {None} - Collects values from multiple input fields in the document
 * @returns {void} - Directly updates the display and styling of the profile card
 * @throws {None} - Only updates specific fields if they are not empty
 * * Last Updated: 2026-02-09  
 * Author: Krishae Ann Dela Cruz  
 * Last Updated By: Krishae Ann Dela Cruz  
 */
function updateProfile() {
    const inputName = document.getElementById("name").value.trim();
    const inputBio = document.getElementById("bio").value.trim();
    const inputImageUrl = document.getElementById("image").value.trim();
    const inputColor = document.getElementById("color").value;


    if (inputName) {
        profileName.textContent = inputName;
    }

    if (inputBio) {
        profileBio.textContent = inputBio;
    }

    if (inputImageUrl) {
        profilePicture.setAttribute('src', inputImageUrl);
    }

    if (inputColor) {
        profileCard.style.backgroundColor = inputColor;
    }

}  
  

