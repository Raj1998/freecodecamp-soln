function convertToRoman(num) {
  dec = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  rom = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  
  function justMax(t){
    count = 0;
    prev = dec[0];
    max = 13;
    if(dec.includes(t)){
    	prev = t;
    	return prev;
    }
    while(t > dec[count] && count < max){      
      count++;
    }
    prev = dec[count-1];
    return prev;
  }
  
  var f = num;
  var ans = "";
  
  if(dec.includes(f)){
  	ans = rom[dec.indexOf(f)];
  }
  else{

  	while(f > 0){
	  	jm = justMax(f);
  		ans = ans + rom[dec.indexOf(jm)];
  		f = f - justMax(f);
  	}

  }
  
  return ans;
}


console.log(convertToRoman(16));