// You are given a string of words (x), 
// for each word within the string you need to turn the word 'inside out'. 
// By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. 
// If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// Test.describe("Example tests",_=>{
//   Test.assertEquals(insideOut('man i need a taxi up to ubud'), 'man i ende a atix up to budu');
//   Test.assertEquals(insideOut('what time are we climbing up the volcano'), 'hwta item are we milcgnib up the lovcona'); 
//   Test.assertEquals(insideOut('take me to semynak'), 'atek me to mesykan');
//   });

function insideOut(x){
  let strArr = x.split(' ');
  let resArr = [];

  strArr.forEach(i => {
      if (i.length > 3) {
          resArr.push(insideString(i));
      } else {
          resArr.push(i);
      }
  });

  function insideString(str) {
      let s = str.split('');
      let length = Math.floor(str.length / 2);
      for (let i = 0; i < length; i++) {
          s[i] = str[length - 1 - i];
          s[str.length - 1 - i] = str[str.length - length + i];
      }
      return s.join('');
  }

  return resArr.join(' ');
}

console.log(insideOut('what time are we climbing up the volcano')); // 'hwta item are we milcgnib up the lovcona');