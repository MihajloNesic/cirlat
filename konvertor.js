function cir2lat() {
	var resultl = obrnutnizc(document.f.cirilica.value);
	document.f.latinica.value = resultl;
}

function lat2cir() {
	var resultc = obrnutnizl(document.f.latinica.value);
	document.f.cirilica.value = resultc;
} 

function obrnutnizc(nizteksta) {
	nizteksta = nizteksta.replace("џ", "dž");
	nizteksta = nizteksta.replace("Џ", "DŽ");
	nizteksta = nizteksta.replace("њ", "nj");
	nizteksta = nizteksta.replace("Њ", "NJ");
	nizteksta = nizteksta.replace("ђ", "đ");
	nizteksta = nizteksta.replace("Ђ", "Đ");	
	nizteksta = nizteksta.replace("љ", "lj");	
	nizteksta = nizteksta.replace("Љ", "LJ");	
var result = "";
	for (var i = 0; i <= nizteksta.length; ++i) {
		result += obrnutolat(nizteksta.charAt(i))
	}
	return result;
}

function obrnutnizl(nizteksta) {
	nizteksta = nizteksta.replace("dž", "x");
	nizteksta = nizteksta.replace("dz", "x");
	nizteksta = nizteksta.replace("Dž", "Џ");
	nizteksta = nizteksta.replace("Dz", "Џ");
	nizteksta = nizteksta.replace("DŽ", "Џ");
	nizteksta = nizteksta.replace("DZ", "Џ");
	nizteksta = nizteksta.replace("nj", "w");
	nizteksta = nizteksta.replace("Nj", "W");
	nizteksta = nizteksta.replace("NJ", "W");
	nizteksta = nizteksta.replace("dj", "ђ");	
	nizteksta = nizteksta.replace("Dj", "Ђ");	
	nizteksta = nizteksta.replace("DJ", "Ђ");	
	nizteksta = nizteksta.replace("lj", "љ");	
	nizteksta = nizteksta.replace("Lj", "Љ");		
	nizteksta = nizteksta.replace("LJ", "Љ");	
var result = "";
	for (var i = 0; i <= nizteksta.length; ++i) {
		nizteksta = nizteksta.replace("dž", "x");
		nizteksta = nizteksta.replace("dz", "x");
		nizteksta = nizteksta.replace("Dž", "Џ");
		nizteksta = nizteksta.replace("Dz", "Џ");
		nizteksta = nizteksta.replace("DŽ", "Џ");
		nizteksta = nizteksta.replace("DZ", "Џ");
		nizteksta = nizteksta.replace("nj", "w");
		nizteksta = nizteksta.replace("Nj", "W");
		nizteksta = nizteksta.replace("NJ", "W");
		nizteksta = nizteksta.replace("dj", "ђ");	
		nizteksta = nizteksta.replace("Dj", "Ђ");	
		nizteksta = nizteksta.replace("DJ", "Ђ");	
		nizteksta = nizteksta.replace("lj", "љ");	
		nizteksta = nizteksta.replace("Lj", "Љ");		
		nizteksta = nizteksta.replace("LJ", "Љ");	

	result += obrnutocir(nizteksta.charAt(i))
	}
	return result;
}

function obrnutolat(c) {
	if (c == 'а') {
		return 'a'
	}
	else if (c == 'ш') {
		return 'š'
	}
	else if (c == 'ч') {
		return 'č'
	}
	else if (c == 'ћ') {
		return 'ć'
	}
	else if (c == 'ж') {
		return 'ž'
	}
	else if (c == 'ђ') {
		return 'đ'
	}
	else if (c == 'Ђ') {
		return 'Đ'
	}
	else if (c == 'њ') {
		return 'nj'
	}
	else if (c == 'Њ') {
		return 'NJ'
	}
	else if (c == 'љ') {
		return 'lj'
	}
	else if (c == 'Љ') {
		return 'LJ'
	}
	else if (c == 'џ') {
		return 'dž'
	}
	else if (c == 'Џ') {
		return 'DŽ'
	}
	else if (c == 'б') {
		return 'b'
	}
	else if (c == 'ц') {
		return 'c'  
	}
	else if (c == 'д') {
		return 'd'
	}
	else if (c == 'е') {
		return 'e'
	}
	else if (c == 'ф') {
		return 'f' 
	}
	else if (c == 'г') {
		return 'g'
	}
	else if (c == 'х') {
		return 'h'
	}
	else if (c == 'и') {
		return 'i' 
	}
	else if (c == 'ј') {
		return 'j'
	}
	else if (c == 'к') {
		return 'k'
	}
	else if (c == 'л') {
		return 'l'
	}
	else if (c == 'м') {
		return 'm'
	}
	else if (c == 'н') {
		return 'n'
	}
	else if (c == 'о') {
		return 'o'
	}
	else if (c == 'п') {
		return 'p'
	}
	else if (c == 'р') {
		return 'r'
	}
	else if (c == 'с') {
		return 's'
	}
	else if (c == 'т') {
		return 't'
	}
	else if (c == 'у') {
		return 'u'
	}
	else if (c == 'в') {
		return 'v'
	}
	else if (c == 'з') {
		return 'z'
	}
	else if (c == 'А') {
		return 'A'
	}
	else if (c == 'Ш') {
		return 'Š'
	}
	else if (c == 'Ч') {
		return 'Č'
	}
	else if (c == 'Ћ') {
		return 'Ć'
	}
	else if (c == 'Ж') {
		return 'Ž'
	}
	else if (c == 'Б') {
		return 'B'
	}
	else if (c == 'Ц') {
		return 'C'  
	}
	else if (c == 'Д') {
		return 'D'
	}
	else if (c == 'Е') {
		return 'E'
	}
	else if (c == 'Ф') {
		return 'F' 
	}
	else if (c == 'Г') {
		return 'G'
	}
	else if (c == 'Х') {
		return 'H'
	}
	else if (c == 'И') {
		return 'I' 
	}
	else if (c == 'Ј') {
		return 'J'
	}
	else if (c == 'К') {
		return 'K'
	}
	else if (c == 'Л') {
		return 'L'
	}
	else if (c == 'М') {
		return 'M'
	}
	else if (c == 'Н') {
		return 'N'
	}
	else if (c == 'О') {
		return 'O'
	}
	else if (c == 'П') {
		return 'P'
	}
	else if (c == 'Р') {
		return 'R'
	}
	else if (c == 'С') {
		return 'S'
	}
	else if (c == 'Т') {
		return 'T'
	}
	else if (c == 'У') {
		return 'U'
	}
	else if (c == 'В') {
		return 'V'
	}
	else if (c == 'З') {
		return 'Z'
	}
	return c;
}

function obrnutocir(c) {
	if (c == 'a') {
		return 'а'
	}
	else if (c == 'x') {
		return 'џ'
	}
	else if (c == 'š') {
		return 'ш'
	}
	else if (c == 'đ') {
		return 'ђ'
	}
	else if (c == 'č') {
		return 'ч'
	}
	else if (c == 'ć') {
		return 'ћ'
	}
	else if (c == 'ž') {
		return 'ж'
	}
	else if (c == 'w') {
		return 'њ'
	}
	else if (c == 'W') {
		return 'Њ'
	}
	else if (c == 'b') {
		return 'б'
	}
	else if (c == 'c') {
		return 'ц'  
	}
	else if (c == 'd') {
		return 'д'
	}
	else if (c == 'e') {
		return 'е'
	}
	else if (c == 'f') {
		return 'ф' 
	}
	else if (c == 'g') {
		return 'г'
	}
	else if (c == 'h') {
		return 'х'
	}
	else if (c == 'i') {
		return 'и' 
	}
	else if (c == 'j') {
		return 'ј'
	}
	else if (c == 'k') {
		return 'к'
	}
	else if (c == 'l') {
		return 'л'
	}
	else if (c == 'm') {
		return 'м'
	}
	else if (c == 'n') {
		return 'н'
	}
	else if (c == 'o') {
		return 'о'
	}
	else if (c == 'p') {
		return 'п'
	}
	else if (c == 'r') {
		return 'р'
	}
	else if (c == 's') {
		return 'с'
	}
	else if (c == 't') {
		return 'т'
	}
	else if (c == 'u') {
		return 'у'
	}
	else if (c == 'v') {
		return 'в'
	}
	else if (c == 'z') {
		return 'з'
	}
	else if (c == 'A') {
		return 'А'
	}
	else if (c == 'Š') {
		return 'Ш'
	}
	else if (c == 'Đ') {
		return 'Ђ'
	}
	else if (c == 'Č') {
		return 'Ч'
	}
	else if (c == 'Ć') {
		return 'Ћ'
	}
	else if (c == 'Ž') {
		return 'Ж'
	}
	else if (c == 'B') {
		return 'Б'
	}
	else if (c == 'C') {
		return 'Ц'  
	}
	else if (c == 'D') {
		return 'Д'
	}
	else if (c == 'E') {
		return 'Е'
	}
	else if (c == 'F') {
		return 'Ф' 
	}
	else if (c == 'G') {
		return 'Г'
	}
	else if (c == 'H') {
		return 'Х'
	}
	else if (c == 'I') {
		return 'И' 
	}
	else if (c == 'J') {
		return 'Ј'
	}
	else if (c == 'K') {
		return 'К'
	}
	else if (c == 'L') {
		return 'Л'
	}
	else if (c == 'M') {
		return 'М'
	}
	else if (c == 'N') {
		return 'Н'
	}
	else if (c == 'O') {
		return 'О'
	}
	else if (c == 'P') {
		return 'П'
	}
	else if (c == 'R') {
		return 'Р'
	}
	else if (c == 'S') {
		return 'С'
	}
	else if (c == 'T') {
		return 'Т'
	}
	else if (c == 'U') {
		return 'У'
	}
	else if (c == 'V') {
		return 'В'
	}
	else if (c == 'Z') {
		return 'З'
	}
	return c;
}