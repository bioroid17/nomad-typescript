// alias
type Name = string;
type Age = number;
type Player = {
  name: Name;
  age?: Age; // ?: optional
};

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }
const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker("nico");
nico.age = 12;
