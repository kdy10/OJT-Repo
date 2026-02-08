const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profileCard = document.getElementById('profile-card');    

function updateProfileName() {      // updates the name based on input
    const newName = document.getElementById("name").value.trim();
    if (newName) {
        profileName.textContent = newName;
    }
}

function updateProfileBio() {       // updates the bio based on input
    const newBio = document.getElementById("bio").value.trim();
    if (newBio) {
        profileBio.textContent = newBio;
    }
}

function updateProfileImage() {      // updates the profile image based on input    
    const newImageUrl = document.getElementById("image").value.trim();
    
    profilePicture.setAttribute('src', newImageUrl);
}

function updateBgColor() {          // updates the bg color of the profile card based on input
    const newColor = document.getElementById("color").value;

    profileCard.style.backgroundColor = newColor;
}