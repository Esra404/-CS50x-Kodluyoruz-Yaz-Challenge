function asalMi(sayi) {
	if (sayi <= 1) {
	  return false;
	}
	
	if (sayi <= 3) {
	  return true;
	}
	
	if (sayi % 2 === 0 || sayi % 3 === 0) {
	  return false;
	}
	
	for (let i = 5; i * i <= sayi; i += 6) {
	  if (sayi % i === 0 || sayi % (i + 2) === 0) {
		return false;
	  }
	}
	
	return true;
  }
  
  // Kullanıcıdan bir sayı alalım
  let girilenSayi = parseInt(prompt("Bir sayı girin:"));
  
  if (asalMi(girilenSayi)) {
	console.log(`${girilenSayi}, asal bir sayıdır.`);
  } else {
	console.log(`${girilenSayi}, asal bir sayı değildir.`);
  }
  