//💪🏻Hard: Bir yüzme havuzunda 2 adet su girişi, 1 adet su çıkışı vardır. İlk su girişi havuzu 10 saatte doldururken, ikinci su girişi havuzu 15 saatte doldurmaktadır.
// Havuzun kendiliğinden boşalma hızı ise 30 saatte bir doludur. 
//Eğer havuz boşken, her iki su girişi de açılırsa havuz ne kadar sürede dolar?😀
const suGirisHiz1=1/10;
const suGirisHiz2=1/15;

const suCikisHiz=1/30;
let havuzDoluluk=0;
let gecenSure=0;



while(havuzDoluluk<1){
	//su griş ve çıkışını hesapla
	const toplamSuGirisiHiz=suGirisHiz1+suGirisHiz2 - suCikisHiz;

	//geçen süreyi güncelle
	gecenSure =+1/toplamSuGirisiHiz;

	//havuzun doluluğunu güncelle
	havuzDoluluk=gecenSure*toplamSuGirisiHiz;
};

 console.log( `Havuz ${gecenSure.toFixed(2)} saatte dolar`);
