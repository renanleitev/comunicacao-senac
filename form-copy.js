const inputWhatValue = localStorage.getItem("what");
const inputWhyValue = localStorage.getItem("why");
const inputWhoValue = localStorage.getItem("who");
const inputWhenValue = localStorage.getItem("when");
const inputWhereValue = localStorage.getItem("where");
const inputHowValue =  localStorage.getItem("how");
const inputHowMuchValue = localStorage.getItem("how-much");

window.addEventListener('load', function() {
    const inputWhat = document.getElementById("what");
    inputWhat.value = inputWhatValue;

    const inputWhy = document.getElementById("why");
    inputWhy.value = inputWhyValue;

    const inputWho = document.getElementById("who");
    inputWho.value = inputWhoValue;

    const inputWhen = document.getElementById("when");
    inputWhen.value = inputWhenValue; 

    const inputWhere = document.getElementById("where");
    inputWhere.value = inputWhereValue;

    const inputHow = document.getElementById("how");
    inputHow.value = inputHowValue;

    const inputHowMuch = document.getElementById("how-much");
    inputHowMuch.value = inputHowMuchValue;
});

function unsecuredCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        window.alert('Falha ao copiar o formulário.')
        console.error('Falha ao copiar o formulário.', err);
    }
    document.body.removeChild(textArea);
}

function onCopy() {
    let fullText = "";
    fullText += "Solução 5W2H para Problemas de Comunicação";
    fullText += `\n\nO Quê? ${inputWhatValue}`;
    fullText +=  `\n\nPor Quê? ${inputWhyValue}`;
    fullText +=  `\n\nQuem? ${inputWhoValue}`;
    fullText +=  `\n\nQuando? ${inputWhenValue}`;
    fullText += `\n\nOnde? ${inputWhereValue}`;
    fullText +=  `\n\nComo? ${inputHowValue}`;
    fullText +=  `\n\nQuanto? ${inputHowMuchValue}`;
    unsecuredCopyToClipboard(fullText);
    window.alert('Resposta copiada com sucesso!');
}

function returnPage() {
    window.location.href = "index.html";
}