// 첫 번째와 마지막 글자를 제외하고 출력하시오.


// str -> array -> array.shift / array.pop -> array -> string
function middleCharacter(str){
  // 이 곳에 코드를 작성해 주세요.
  var arr = str.split(''); // [ 't', 'h', 'e', 'l', 'l', 'o', 't' ]
  
  arr.pop(); // arr = [ 't', 'h', 'e', 'l', 'l', 'o']
  arr.shift(); // arr = ['h', 'e', 'l', 'l', 'o']
  var joinArr = arr.join('');
  return joinArr;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(middleCharacter('thellot'));

// 출력 예시
// hello