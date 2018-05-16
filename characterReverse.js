// 문제: javascript를 활용해서 입력받은 문자를 역순으로 반환하는 함수를 만들어라.

function reverse(str) {
  // 이 곳에 코드를 작성해 주세요.
  var arr = str.split('');

  var reversedArr = arr.reverse();

  var joinArr = reversedArr.join('');

  return joinArr;


  }
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log(reverse('hello'));