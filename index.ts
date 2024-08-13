type Config = {
  path: string;
  state: object;
};

// 오버로딩(파라미터 타입 별)
// call signature를 길게 쓸 수 있다. 오버로딩 때문
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 오버로딩(파라미터 개수 별)
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};
// c는 optional이나 다름없다. 따라서 ?와 함께 타입을 표시해준다.
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
