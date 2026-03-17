const textarea = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const hk = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const btnTerang = document.getElementById("mode-terang");
const btnGelap = document.getElementById("mode-gelap");

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

btnGelap.addEventListener("click", function () {
    document.body.classList.add("dark-mode");
});

btnTerang.addEventListener("click", function () {
    document.body.classList.remove("dark-mode");
});