// Get the file input and button elements
var fileInput = document.getElementById('profile-picture');
var fileButton = document.getElementById('file-button');
var previewContainer = document.getElementById('preview');

// Add a click event listener to the button
fileButton.addEventListener('click', function () {
    fileInput.click(); // Trigger the file input when the button is clicked
});

// Function to preview the selected image
function previewImage() {
    var file = fileInput.files[0];
    var reader = new FileReader();

    // Check if a file is selected
    if (file) {
        reader.onload = function (e) {
            // Set the background of the preview container to the selected file
            previewContainer.style.backgroundImage = 'url(' + e.target.result + ')';
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
}