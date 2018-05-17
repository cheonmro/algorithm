// 문제: javascript를 활용해서 입력받은 문자를 역순으로 반환하는 함수를 만들어라.

function reverse(str) {
  // 이 곳에 코드를 작성해 주세요.

  // str -> array for each character
  var arr = str.split(''); // ['h', 'e', 'l', 'l', 'o']

  // reverse the array
  var reversedArr = arr.reverse(); // [ 'o', 'l', 'l', 'e', 'h' ]
  
  // array -> string
  var joinArr = reversedArr.join(''); // olleh
  
  return joinArr;


  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(reverse('hello'));