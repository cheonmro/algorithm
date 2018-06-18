// Problem: Return an array that consists of team ids that is not included in the team that is already registered.

// 프로그래밍 대회 참가 팀을 추가로 모집하려고 합니다.추가로 참가하는 팀들의 팀 아이디를 등록하기 위해
// 각 팀으로부터 대회에 사용할 아이디를 순서대로 신청받았습니다.단, 기존에 등록되어있는 아이디는 사용할 수 없으며,
// 두 팀 이상이 같은 아이디를 신청할 경우, 먼저 신청한 팀에 우선권이 있습니다.
// 예를 들어 이미 등록이 완료된 팀 아이디 목록은[world, prog], 추가로 등록 신청을 받은 팀
// 아이디의 순서는[hello, world, code, hello, try, code]일 때,
// 추가 등록 팀의 아이디가 등록되는 순서는 다음과 같습니다.

// 첫 번째로 신청받은 hello는 팀 아이디로 등록됩니다.
// 두 번째로 신청받은 world는 이미 등록된 아이디이므로 등록되지 않습니다.
// 세 번째로 신청받은 code는 팀 아이디로 등록됩니다.
// 네 번째로 신청받은 hello는 이미 등록된 아이디이므로 등록되지 않습니다.
// 다섯 번째로 신청받은 try는 팀 아이디로 등록됩니다.
// 여섯 번째로 신청받은 code는 이미 등록된 아이디이므로 등록되지 않습니다.
// 따라서 추가로 등록되는 아이디는 등록이 완료된 순서대로[hello, code, try]가 됩니다.
// 기존에 등록되어있는 팀 아이디 목록 teamIDs 와 추가로 등록 신청을 받은 팀 아이디가 신청받은
// 순서대로 들어있는 목록 additional이 매개변수로 주어질 때, 추가 신청받은 아이디 중 등록이
// 완료되는 팀 아이디가 순서대로 있는 배열을 return 하도록 solution 함수를 완성해주세요.


function checkTeamIds(teamIDs, additional) {
  var result = [];
  
  // using for-statement
  // for(var i = 0; i < additional.length; i++) {
  //   if(!(teamIDs.includes(additional[i]))) {
  //     teamIDs.push(additional[i]);
  //     result.push(additional[i]);
  //   }
  // }

  // using forEach method
  additional.forEach(function (item) {
    if((!teamIDs.includes(item))) {
      teamIDs.push(item);
      result.push(item);
    }
  })
  return result;
}

console.log(checkTeamIds(['world', 'prog'], ['hello', 'world', 'code', 'hello', 'try', 'code']));