// private, public, protected, abstract 키워드는 JS에 반영되지 않지만 TS가 보호해줌
// 만약 private 필드에 외부에서 접근하는 코드 작성 시 에러 발생 -> 컴파일 불가
// 추상 클래스: 다른 클래스가 상속받기 위해서만 존재하는 클래스. 인스턴스화 불가.
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  // 추상 메소드: 추상 클래스를 상속받는 모든 클래스들이 구현해야 하는 메소드
  abstract getNickName(): void;
  // 추상 클래스 내의 그냥 메소드
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// private:     클래스 인스턴스 아니면 절대 접근 불가. 인스턴스 외부는 물론 자식 클래스도 접근 불가.
// protected:   클래스 인스턴스 혹은 자식 클래스 내에서는 접근 가능
// 공통적으로 클래스나 인스턴스 외부에서 접근 불가
class Player extends User {
  // 추상 메소드 구현
  getNickName(): void {
    console.log(this.nickname);
  }
}

const nico = new Player("nico", "las", "니코");
