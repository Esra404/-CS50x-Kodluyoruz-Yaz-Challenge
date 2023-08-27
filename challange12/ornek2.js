//Medium:  Bir çiftlikte toplamda 36 baş tavuk ve koyun bulunmaktadır. Bu hayvanlardan toplamda 100 bacak çıkmaktadır.
// Çiftlikte kaçar tane tavuk ve koyun olduğunu bulan kod parçacığını yazar mısın?


for (let tavuk = 0; tavuk <= 36; tavuk++) {
	const koyun = 36 - tavuk; // Toplam hayvan sayısından tavuk sayısını çıkartarak koyun sayısını buluyoruz.
	const toplamBacak = (tavuk * 2) + (koyun * 4); // Tavukların 2, koyunların ise 4 bacağı olduğunu hesaplıyoruz.
  
	if (toplamBacak === 100) {
	  console.log(`Tavuk sayısı: ${tavuk}, Koyun sayısı: ${koyun}`);
	  break; // Çözümü bulduk, döngüyü sonlandırıyoruz.
	}
  }
  