const textBox = document.getElementById('text-box');
const charCounter = document.getElementById('char-counter');
const maxChars = 200;

textBox.addEventListener('input', function() {
    const currentLength = textBox.value.length;
    const remaining = maxChars - currentLength;

    charCounter.textContent = `${currentLength} / ${maxChars} characters`;

    if (remaining < 0) {
        charCounter.textContent = `Character limit exceeded!`;
        textBox.value = textBox.value.substring(0, maxChars); 
    }
});