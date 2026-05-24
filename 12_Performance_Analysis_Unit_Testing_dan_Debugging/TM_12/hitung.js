
function tambahPengitung(terkini, jumlah) {
  if (typeof terkini !== "number" || typeof jumlah !== "number") {
    throw new Error("Input harus number");
  }

  return terkini + jumlah;
}

export { tambahPengitung };
