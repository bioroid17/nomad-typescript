// 인터페이스의 유일한 목적은 객체의 모양 설명이다.
interface User {
  name: string;
}
interface User {
  lastName: string;
}
// 인터페이스의 축적도 가능하다.
interface User {
  health: number;
}

const nico: User = {
  name: "nico",
  lastName: "n",
  health: 10,
};

// 인터페이스도 상속 가능
// interface Player extends User {}
