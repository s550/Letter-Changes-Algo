function LetterChanges(str) { 

  // code goes here
  let arr = [];
  let ans = '';
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
      if(str[i].match(/[a-z]/g)){
      arr.push(str[i].charCodeAt() + 1);
  }
  else{
      arr.push(str[i]);
  }
  }
  ans = arr.map((x) => {
      if(x >= 97 && x <= 122){
          return String.fromCharCode(x);
      }
      else{
          return x
      }
  })
  return ans.map((letter) => {
      if(letter.match(/[aeiou]/g)){
          return letter.toUpperCase();
      }
      else{
          return letter;
      }
  }).join('');