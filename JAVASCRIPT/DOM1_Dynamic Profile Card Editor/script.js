const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');


function updateProfileName() {
    const newName = document.getElementById("name").value.trim();
    if (newName) {
        profileName.textContent = newName;
    }
}

function updateProfileBio() {
    const newBio = document.getElementById("bio").value.trim();
    if (newBio) {
        profileBio.textContent = newBio;
    }
}

function updateProfileImage() {
    const newImageUrl = document.getElementById("image").value.trim();
    
    profilePicture.setAttribute('src', newImageUrl);
}

function updateBgColor() {
    const newColor = document.getElementById("color").value;
    const profileCard = document.getElementById('profile-card');

    const red =  Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomBgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    profileCard.style.backgroundColor = randomBgColor;
}