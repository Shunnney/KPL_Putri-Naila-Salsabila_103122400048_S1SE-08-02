require("dotenv").config();
const axios = require("axios");

const BASE_API = process.env.BASE_API;

async function getExchange(amount) {
  try {
    const response = await axios.get(BASE_API);
    const rates = response.data.rates;

    const cnh = rates.CNY; // CNH biasanya pakai CNY di API
    const eur = rates.EUR;

    const cnhValue = amount * cnh;
    const eurValue = amount * eur;

    // Format Rupiah
    const formatIDR = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(amount);

    // Format CNH
    const formatCNH = new Intl.NumberFormat("zh-CN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(cnhValue);

    // Format EUR
    const formatEUR = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(eurValue);

    // Format tanggal
    const today = new Date();
    const formatDate = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(today);

    console.log(
      `Kurs ${formatIDR} pada ${formatDate} adalah CNH ${formatCNH} dan ${formatEUR}`
    );

  } catch (error) {
    console.error("Terjadi kesalahan:", error.message);
  }
}

// TEST
getExchange(25000);
getExchange(50000);
getExchange(100000);