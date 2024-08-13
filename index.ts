type SuperPrint = <T, M>(a: T[], b: M) => T;

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, 2, true, false], []);

// d.toUppercase() // 만약 generic을 쓰지 않고 any를 쓰면 런타임 에러 발생
