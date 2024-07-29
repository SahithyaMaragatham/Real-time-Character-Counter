const textInput = document.getElementById('textInput');
const totalChars = document.getElementById('totalChars');
const remainingChars = document.getElementById('remainingChars');

textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    const maxLength = textInput.getAttribute('maxlength');
    totalChars.textContent = currentLength;
    remainingChars.textContent = maxLength - currentLength;
});