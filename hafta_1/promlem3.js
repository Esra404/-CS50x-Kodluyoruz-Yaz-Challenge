//Bir tam sayı dizisi oluşturmanı istiyorum. Kullanıcıdan aldığın hedef sayı doğrultusunda sayı dizisinin içinden sayılar seçip toplayarak hedef sayıya ulaşmasını sağlamalısın. 
//Farklı farklı kombinasyonlar ile hedef sayıya ulaşıyor olman burada çok önemli!
// Kullanıcıdan hedef sayıyı ve sayı dizisini alalım
// Kullanıcıdan hedef sayıyı ve sayı dizisini alalım
let targetNumber = parseInt(prompt("Hedef sayıyı girin:"));
let numbersInput = prompt("Sayı dizisini virgülle ayırarak girin:");
let numberArray = numbersInput.split(',').map(Number);

// Hedefe ulaşan kombinasyonları bulan fonksiyon
function findCombinations(target, array, index = 0, currentCombination = []) {
  if (target === 0) {
    console.log("Kombinasyon:", currentCombination.join(', '));
    return;
  }

  for (let i = index; i < array.length; i++) {
    if (array[i] <= target) {
      findCombinations(target - array[i], array, i, [...currentCombination, array[i]]);
    }
  }
}

console.log(`Hedef sayı: ${targetNumber}`);
console.log(`Sayı dizisi: ${numberArray.join(', ')}`);
console.log("Hedefe ulaşan kombinasyonlar:");

// Kombinasyonları bul
findCombinations(targetNumber, numberArray);