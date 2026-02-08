const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileCard = document.getElementById('profile-card');    


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
  

const updateButton = document.getElementById('updateProfile');      // updates the profile when button is clicked using event listener
updateButton.addEventListener('click', updateProfile);