const birimMaliyet=100;
const birimSatisFiyati=150;

function karHesapla(maliyet,satisFiyati){
	if(maliyet>satisFiyati){
		return "kar elde edilemz çünkü maliyer satis fiyatindan fazladır"
	}
	const karEdilecekAdet=Math.ceil(maliyet/(satisFiyati-maliyet));
	return`kar elde etmek için ${karEdilecekAdet} kadar ürün satılmalıdır`;

}


const sonuc=karHesapla(birimMaliyet,birimSatisFiyati);
console.log(sonuc);

