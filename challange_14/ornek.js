//Bir tam sayı dizisi oluşturmanı istiyorum. Kullanıcıdan aldığın hedef sayı doğrultusunda sayı dizisinin içinden sayılar seçip toplayarak hedef sayıya ulaşmasını sağlamalısın. 
//Farklı farklı kombinasyonlar ile hedef sayıya ulaşıyor olman burada çok önemli!

let sayi=prompt("lütfen bir sayı giriniz");
let Sayidizi=[];

for(let i = 1; i <= sayi; i++){
	Sayidizi.join(i);
}

for(let j=0; j<Sayidizi.length;j++){
	console.log(Sayidizi[i]);
}
