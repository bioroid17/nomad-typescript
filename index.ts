// unknown 타입
let a: unknown;
// 타입 확인 필수
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  a.toUpperCase();
}

// void 타입: 아무것도 반환하지 않는 함수를 대상으로 사용
// 굳이 void를 명시할 필요 없음
function hello(): void {
  console.log("x");
}
const b = hello();
// b.toUpperCase() // void엔 toUpperCase()가 없으므로 에러

// never: 함수가 절대 return 하지 않을 때 사용
function hello2(): never {
  throw new Error("xxx");
}
// else 부분은 never로, 절대 실행되어선 안 된다.
function hello3(name: string | number) {
  if (typeof name === "string") {
    name;
  } else if (typeof name === "number") {
    name;
  } else {
    name;
  }
}
