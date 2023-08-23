function findMostFrequentLetter(text) {
	// Metni küçük harfe çevirerek işlem yapalım
	text = text.toLowerCase();
	
	// Harf sayılarını tutacak bir nesne oluşturalım
	let letterCounts = {};
	
	// Metni gezerek harf sayılarını hesaplayalım
	for (let i = 0; i < text.length; i++) {
	  if (text[i] >= 'a' && text[i] <= 'z') {
		if (letterCounts[text[i]]) {
		  letterCounts[text[i]]++;
		} else {
		  letterCounts[text[i]] = 1;
		}
	  }
	}
	
	// En çok tekrar eden harfi ve sayısını bulalım
	let mostFrequentLetter = '';
	let maxCount = 0;
	
	for (let letter in letterCounts) {
	  if (letterCounts[letter] > maxCount) {
		mostFrequentLetter = letter;
		maxCount = letterCounts[letter];
	  }
	}
	
	return { letter: mostFrequentLetter, count: maxCount };
  }
  
  // Kullanıcıdan metin alalım
  let userInput = prompt("Bir metin girin:");
  let result = findMostFrequentLetter(userInput);
  
  if (result.letter) {
	console.log(`En çok tekrar eden harf: ${result.letter}`);
	console.log(`Tekrar sayısı: ${result.count}`);
  } else {
	console.log("Metinde harf bulunamadı.");
  }