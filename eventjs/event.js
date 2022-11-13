document.getElementById('btn-update').addEventListener('click', function () {
    const inputText = document.getElementById('input-text');
    const textValue = inputText.value;
    const updateText = document.getElementById('default-text')
    updateText.innerText = textValue;
    inputText.value = ''
})