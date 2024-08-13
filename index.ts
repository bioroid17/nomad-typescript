const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) // 'readonly number[]' 형식에 'push' 속성이 없습니다.

// 튜플
// const player: [string, number, boolean] = ["nico", 1, true]

// 튜플 + readonly
const player: readonly [string, number, boolean] = ["nico", 1, true];
// player[0] = "hi" // readonly이므로 수정 불가

// undefined, null 타입
let a: undefined = undefined;
let b: null = null;

// any 타입
const c: any[] = [1, 2, 3, 4];
const d: any = true;

c + d; // 에러 없음 -> TypeScript의 보호를 빠져 나왔기 때문
