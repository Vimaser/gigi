document.addEventListener('DOMContentLoaded', () => {
    const treatButton = document.getElementById('treatButton');
    const poopButton = document.getElementById('poopButton');
    const eatButton = document.getElementById('clearButton');
    const treatContainer = document.getElementById('treatContainer');
    const floor = document.getElementById('floor');
    let treatCount = 0;

    treatButton.addEventListener('click', () => {
        displayImage('bone.jpg', 'Yum!', treatContainer);
        treatCount++;
        checkTreatCount();
    });

    eatButton.addEventListener('click', () => {
        if (treatCount > 0) {
            treatCount--;
            treatContainer.innerHTML = '';
            checkTreatCount();
        }
    });

    poopButton.addEventListener('click', () => {
        displayImage('goodPoop.jpg', 'Dog Poop', floor);
    });

    function checkTreatCount() {
        // Enable the poop button
        poopButton.disabled = treatCount <1;

        if (treatCount > 10) {
            // Automatically display poop on the floor if more than 10 treats are dispensed
            displayImage('pooproom.png', 'Poop on Floor', floor);
        } else {
            // Clear the floor if the count is less than or equal to 10
            floor.innerHTML = '';
        }
    }

    function displayImage(imagePath, altText, container) {
        // Clear the container before displaying a new image
        container.innerHTML = '';

        const image = document.createElement('img');
        image.src = imagePath;
        image.alt = altText;

        container.appendChild(image);
    }
});
