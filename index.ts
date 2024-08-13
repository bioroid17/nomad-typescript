// 제네릭을 쓰는 커스텀 타입
type Player<E> = {
  name: string;
  extraInfo: E;
};
type NicoExtra = {
  favFood: string;
};
// 제네릭이 커스텀 타입이 될 수 있음
type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi",
  },
};
const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null,
};

// Array 생성 시 제네릭 받을 수 있음
type A = Array<number>;

let a: A = [1, 2, 3, 4];
