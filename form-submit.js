function store(){
    const textareaWhat = document.getElementById("what");
    localStorage.setItem("what", textareaWhat.value);

    const textareaWhy = document.getElementById("why");
    localStorage.setItem("why", textareaWhy.value);

    const textareaWho = document.getElementById("who");
    localStorage.setItem("who", textareaWho.value);

    const textareaWhen = document.getElementById("when");
    localStorage.setItem("when", textareaWhen.value);

    const textareaWhere = document.getElementById("where");
    localStorage.setItem("where", textareaWhere.value);

    const textareaHow = document.getElementById("how");
    localStorage.setItem("how", textareaHow.value);

    const textareaHowMuch = document.getElementById("how-much");
    localStorage.setItem("how-much", textareaHowMuch.value);

    window.location.href = "form.html";
}