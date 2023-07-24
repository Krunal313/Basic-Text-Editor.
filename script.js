function formatText(action) {
    const textArea = document.getElementById('textArea');
    const selectedText = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);

    let modifiedText;
    switch (action) {
        case 'bold':
            modifiedText = `<b>${selectedText}</b>`;
            break;
        case 'italic':
            modifiedText = `<i>${selectedText}</i>`;
            break;
        case 'underline':
            modifiedText = `<u>${selectedText}</u>`;
            break;
    }

    const textBeforeSelection = textArea.value.slice(0, textArea.selectionStart);
    const textAfterSelection = textArea.value.slice(textArea.selectionEnd);

    textArea.value = `${textBeforeSelection}${modifiedText}${textAfterSelection}`;
}

function openFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const textArea = document.getElementById('textArea');
                textArea.value = e.target.result;
            }
            reader.readAsText(file);
        }
    });

    fileInput.click();
}

function saveFile() {
    const textArea = document.getElementById('textArea');
    const textContent = textArea.value;
    const blob = new Blob([textContent], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'text_file.txt';
    a.click();
}

function changeFontSize() {
    const textArea = document.getElementById('textArea');
    const fontSizeInput = document.getElementById('fontSizeInput');
    textArea.style.fontSize = fontSizeInput.value + 'px';
}

document.getElementById('fontSizeInput').addEventListener('change', changeFontSize);
