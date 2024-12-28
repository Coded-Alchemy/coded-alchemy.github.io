document.addEventListener('DOMContentLoaded', function (event) {
    // Array with texts to type in typewriter
    const dataText: string[] = [
        "Utrecht.",
        "Full Service.",
        "Webdevelopment.",
        "Wij zijn Codefield!"
    ];

    // Type one text in the typewriter
    // Keeps calling itself until the text is finished
    function typeWriter(
        text: string,
        i: number,
        fnCallback?: () => void
    ): void {
        // Check if text isn't finished yet
        if (i < text.length) {
            // Add next character to h1
            const h1 = document.querySelector("h1");
            if (h1) {
                h1.innerHTML =
                    text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            }

            // Wait for a while and call this function again for the next character
            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (fnCallback) {
            // Text finished, call callback if there is a callback function
            setTimeout(fnCallback, 700);
        }
    }

    // Start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i: number): void {
        if (i >= dataText.length) {
            // Restart the animation after a delay
            setTimeout(() => {
                StartTextAnimation(0);
            }, 20000);
            return;
        }

        // Check if dataText[i] exists
        if (dataText[i]) {
            // Start typewriter animation
            typeWriter(dataText[i], 0, () => {
                // After callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    // Start the text animation
    StartTextAnimation(0);
});
