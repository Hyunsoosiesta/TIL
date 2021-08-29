function solution(record) {
  const users = {};
  const actions = [];
  const actionsObj = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let el of record) {
    const [action, userid, nickname] = el.split(" "); // ["Enter", "uid1234", "Muzi"]
    if (nickname) { // Enter, Change 일 경우만 nickname 존재
      // 객체에 가장 마지막 요소 el의 userid 키, nickname 값으로 들어감
      users[userid] = nickname;
    }
    if (action === "Enter" || action === "Leave") { // Enter, Leave 일 경우
      actions.push([action, userid]);
    }
  }
  return actions.map(([action, userid]) => `${users[userid]}${actionsObj[action]}`);

}