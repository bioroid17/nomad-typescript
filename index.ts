// // 타입
// type PlayerA = {
//   name: string;
// };
// type PlayerAA = PlayerA & {
//   lastName: string;
// };
// const playerA: PlayerAA = {
//   name: "nico",
//   lastName: "xxx",
// };

// // 인터페이스
// interface PlayerB {
//   name: string;
// }
// interface PlayerBB extends PlayerB {
//   lastName: string;
// }
// interface PlayerBB {
//   health: number;
// }
// const playerB: PlayerBB = {
//   name: "nico",
//   lastName: "xxx",
//   health: 1,
// };

type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
class User implements PlayerA {
  constructor(public firstName: string) {}
}
