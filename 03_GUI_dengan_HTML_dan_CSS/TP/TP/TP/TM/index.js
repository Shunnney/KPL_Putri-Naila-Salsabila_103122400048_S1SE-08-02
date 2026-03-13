const textarea = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

function updateStats() {

    const text = textarea.value;

    charCount.innerText = text.length;

    hk.innerText = (text.match(/[a-z]/g) || []).length;
}

textarea.addEventListener("input", updateStats);

btnBesar.addEventListener("click", function(){
    textarea.value = textarea.value.toUpperCase();
    updateStats();
});

btnKecil.addEventListener("click", function(){
    textarea.value = textarea.value.toLowerCase();
    updateStats();
});