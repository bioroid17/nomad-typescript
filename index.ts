type Words = {
  // 속성의 양이 제한 없는 객체 타입 지정 방법
  [key: string]: string;
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    if (this.words[term] === undefined) {
      return `The term ${term} is not defined in the dictionary.`;
    } else {
      return this.words[term];
    }
  }
  remove(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
      return `Term ${term} deleted`;
    } else {
      return `The term ${term} is not defined in the dictionary.`;
    }
  }
  update(word: Word) {
    if (this.words[word.term] === undefined) {
      return `The term ${word.term} is not defined in the dictionary.`;
    } else {
      this.words[word.term] = word.def;
      return `Term ${word.term} updated`;
    }
  }
  getAll() {
    return this.words;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.getAll();
dict.add(kimchi);
dict.def("kimchi");

dict.getAll();
dict.update(new Word("kimchi", "Korean food"));
dict.def("kimchi");

dict.getAll();
dict.remove("kimchi");
dict.def("kimchi");

dict.getAll();

dict.remove("kimchi");

dict.update(new Word("kimchi", "Korean food"));
