// Birim maliyet ve birim satış fiyatı
const birimMaliyet = 100; // Birim maliyet
const birimSatisFiyati = 150; // Birim satış fiyatı

// Kâr elde etmek için gerekli adet hesaplaması
function karHesapla(maliyet, satisFiyati) {
  if (maliyet >= satisFiyati) {
    return "Kar elde edilemez. Birim maliyet birim satış fiyatından yüksek veya eşit olmamalıdır.";
  }

  const karEdilecekAdet = Math.ceil(maliyet / (satisFiyati - maliyet));
  return `Kar elde etmek için ${karEdilecekAdet} ürün satılmalıdır.`;
}

// Kâr hesaplama sonuçlarını al
const sonuc = karHesapla(birimMaliyet, birimSatisFiyati);

// Sonucu ekrana yazdır
console.log(sonuc);
