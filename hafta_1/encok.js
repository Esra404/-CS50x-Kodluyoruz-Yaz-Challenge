function findMostFrequentLetter(text){
	text=text.toLowerCase();
	let letterCounts={};

	for(let i=0;i<text.length;i++){
		if(text[i]>='a' && text[i]<='z'){
			if(letterCounts[text[i]]) {
				letterCounts[text[i]]++;
			} else {
				letterCounts[text[i]]=1;
			}
		}
	}

	let mostFrequentLetter='';
	let maxCount=0;
	for (let letter in letterCounts){
		if(letterCounts[letter]>maxCount){
			mostFrequentLetter = letter;
			maxCount = letterCounts[letter];
		}
	}
	return {letter: mostFrequentLetter, count: maxCount};
}

let userInput = prompt("Bir metin değeri girin");
let result = findMostFrequentLetter(userInput);

if(result.letter){
	console.log(`En çok tekrar eden harf: ${result.letter}`);
	console.log(`Tekrar sayısı: ${result.count}`);
} else {
	console.log("Metinde harf bulunmadı");
}
