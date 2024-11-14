import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { IFMation, updateMember } from "../../api/member";
import "../../assets/css/writing.css";
import { useAuth } from "../../contexts/AuthContext";
import "../../assets/css/mypage.scss";

export const Mypage = () => {
  const navigate = useNavigate();
  // const { no } = useAuth();
  // const { member, setMember } = useOutletContext();
  const [no, setId] = useState(localStorage.getItem("no"));
  const [ifmation, setIfmation] = useState([]);

  const ifmationAPI = async (data) => {
    console.log(data, "이거 뭐여 1");
    const result = await IFMation(data);
    console.log("이거 뭐여 3", result.data);
    setIfmation(result.data);
  };

  useEffect(() => {
    ifmationAPI(no);
  }, [no]);

  useEffect(() => {
    console.log(ifmation, "여기 지금 어떻게 나오고 있는 중이야?????? ");
  }, [ifmation]);

  const cansel = () => {
    navigate("/");
  };

  const UpDate = () => {
    navigate("/UpDate");
  };

  const DeletePage = () => {
    navigate("/Delete");
  };

  return (
    <main className="MyPageMain">
      <div className="HeaderName">
        <h1 id="myIf">내 정보</h1>
        <div className="imgFile">
          <div id="Mypagenickname">
            닉네임
            <h1 className="MypagenicknameIf">{ifmation.nickname}</h1>
          </div>
          <div id="MypageProfileImg">프로필 이미지</div>
          <img id="fileImg" src={ifmation.file}></img>
        </div>
        이 부분은 자기 소개부분 입니다
        <div id="Info"> {ifmation.memberInfo}</div>
        <div> 2. 개발직에 지원하게 된 이유와 노력에 대해 말해주세요 </div>
        <div> 3. 진행한 프로젝트에 대해 말해주세요 </div>
        <div> 4. SI, SM, 솔루션의 차이에 대해 말해주세요 </div>
        <button> SI </button>
        <>
          <h1>여기 정보 빼내기!!!!!!!!!!!!!!!</h1>

          <div>
            <div id="MyInfo">이 부분은 자기 소개부분 입니다</div>
            <h1>{ifmation.memberInfo}</h1>
          </div>
        </>
        <div>
          <h1>
            {" "}
            !!!!!!!!!!이 부분은 공부할때 자습용으로 적어두는
            구간입니다!!!!!!!!!!!!
          </h1>
        </div>
        <div>
          {" "}
          <h1> java 기본 </h1>{" "}
        </div>
        <div className="writing">
          1. 자바의 기본 구조 클래스와 객체: 자바는 객체지향 언어로, 모든
          프로그램은 클래스를 통해 정의됩니다. 클래스는 객체를 생성하기 위한
          청사진이며, 객체는 클래스의 인스턴스입니다. 메서드: 클래스 내부에서
          특정 작업을 수행하는 함수. public static void main(String[] args)는
          자바 애플리케이션의 시작점입니다.{" "}
        </div>
        <div className="writing">
          2. 주요 자료형 기본 자료형 (Primitive Types): int: 정수형 double:
          실수형 boolean: 논리형 (true/false) char: 문자형 참조 자료형: 배열,
          클래스, 인터페이스 등 객체를 가리킵니다. 예를 들어 String도 참조
          자료형입니다.{" "}
        </div>
        <div className="writing">
          3. 객체지향 프로그래밍 (OOP) 기본 개념 캡슐화: 데이터를 보호하기 위해
          클래스 내부의 필드를 private으로 선언하고, 외부 접근은 getter와 setter
          메서드로 제한합니다. 상속: 기존 클래스의 기능을 확장하여 새로운
          클래스를 정의하는 것 (extends 키워드 사용). 다형성: 같은 메서드가 서로
          다른 클래스에서 다른 동작을 수행하도록 하는 것. 추상화: 중요한 정보만
          남기고 세부 사항을 숨기는 과정입니다. abstract 키워드로 추상 클래스를
          정의할 수 있습니다.
        </div>
        <div className="writing">
          4. 자바의 메모리 관리 스택(Stack): 메서드 호출과 지역 변수가 저장되는
          메모리 영역. 힙(Heap): 동적으로 생성된 객체가 저장되는 메모리 영역.
          가비지 컬렉션 (Garbage Collection): 더 이상 참조되지 않는 객체를
          자바가 자동으로 제거하여 메모리를 관리합니다.
        </div>
        <div className="writing">
          5. 예외 처리 try-catch-finally: 예외 발생 가능성이 있는 코드를 try
          블록에 두고, 예외가 발생하면 catch 블록으로 처리합니다. throws 키워드:
          메서드가 예외를 던질 가능성이 있음을 선언합니다. throw: 특정 조건에서
          직접 예외를 발생시킵니다.
        </div>
        <div className="writing">
          6. 주요 클래스와 인터페이스 String: 불변(immutable) 객체로 문자열을
          다룹니다. ArrayList, HashMap: 자바 컬렉션 프레임워크에서 리스트와 맵
          구조를 다루는 클래스입니다. 인터페이스: 클래스가 특정 메서드를
          구현하도록 강제하는 추상형으로, 다중 상속을 지원하는 역할도 합니다.
        </div>
        <div className="writing">
          7. 기타 중요한 키워드 static: 클래스 수준에서 공유되는 필드나 메서드에
          사용됩니다. final: 변경할 수 없는 상수나 클래스/메서드를 정의할 때
          사용됩니다. this: 현재 객체를 참조하는 키워드. super: 부모 클래스의
          멤버에 접근할 때 사용합니다.
        </div>
        <div>
          {" "}
          <h1> JAVA의 기본 문법들과 키워드 </h1>{" "}
        </div>
        자바의 모든 키워드 자바는 총 50개의 키워드를 가지고 있습니다. 이들은
        프로그램의 구조와 동작을 정의하는 데 사용됩니다. 키워드 설명 abstract
        추상 클래스 또는 메서드를 정의할 때 사용 assert 조건을 검증하는 데 사용
        boolean boolean 데이터 타입을 정의 break 반복문 또는 switch 문을 종료
        byte byte 데이터 타입을 정의 case switch 문 내에서 사용 catch 예외를
        처리하는 블록 char char 데이터 타입을 정의 class 클래스를 정의 const
        예약어로 사용되지 않음 continue 반복문의 현재 반복을 건너뜀 default
        switch 문에서 기본값을 지정 do do-while 반복문을 정의 double double
        데이터 타입을 정의 else if 문과 함께 사용하여 조건을 설정 enum 열거형을
        정의 extends 클래스를 상속할 때 사용 final 상수 또는 더 이상 변경할 수
        없는 요소를 정의 finally 예외 처리 후 항상 실행되는 블록 float float
        데이터 타입을 정의 for for 반복문을 정의 goto 예약어로 사용되지 않음 if
        조건문을 정의 implements 인터페이스를 구현할 때 사용 import 다른
        패키지의 클래스를 가져올 때 사용 instanceof 객체의 타입을 확인하는 데
        사용 int int 데이터 타입을 정의 interface 인터페이스를 정의 long long
        데이터 타입을 정의 native 자바 외부에서 정의된 메서드 new 객체를 생성할
        때 사용 null null 값을 나타냄 package 클래스의 패키지를 정의 private
        클래스 내에서만 접근 가능한 멤버 정의 protected 같은 패키지 또는
        서브클래스에서 접근 가능 public 어디에서든 접근 가능한 멤버 정의 return
        메서드에서 값을 반환할 때 사용 short short 데이터 타입을 정의 static
        클래스 레벨에서 사용하는 멤버 정의 strictfp 부동 소수점 계산의 정확성을
        유지 super 부모 클래스의 멤버에 접근 switch 여러 조건을 확인하는 데 사용
        synchronized 멀티스레드 환경에서 동기화 this 현재 객체를 참조 throw
        예외를 발생시킴 throws 메서드가 발생시킬 수 있는 예외를 선언 transient
        직렬화 시 무시할 필드를 정의 try 예외 처리를 위한 블록 정의 void
        반환값이 없는 메서드를 정의 volatile 멀티스레드에서 변수를 동기화하는 데
        사용 주요 문법 요소 변수: 데이터를 저장하는 공간으로, 기본 타입과 참조
        타입이 있습니다. 예: int age = 25;, String name = "John"; 연산자: 변수
        간의 연산을 수행합니다.
        {/* 산술 연산자: +, -, *, /, %
비교 연산자: ==, !=, >, <, >=, <=
논리 연산자: &&, ||, !
조건문: 프로그램의 흐름을 제어합니다. */}
        if, else, switch 반복문: 코드 블록을 반복 실행합니다. for, while,
        do-while 메서드: 특정 작업을 수행하는 코드 블록입니다. java 코드 복사
        {/* public int add(int a, int b) {
    return a + b;
} */}
        클래스와 객체: 객체 지향 프로그래밍의 기본 요소입니다. 클래스 정의: java
        코드 복사 public class Car{" "}
        {
          // 속성 및 메서드
        }
        객체 생성: java 코드 복사 Car myCar = new Car(); 예외 처리: 프로그램에서
        발생하는 오류를 처리합니다. java 코드 복사 try{" "}
        {
          // 위험한 코드
        }{" "}
        catch (Exception e){" "}
        {
          // 예외 처리
        }{" "}
        finally{" "}
        {
          // 항상 실행되는 코드
        }
        배열: 같은 타입의 여러 변수를 저장하는 데이터 구조입니다. java 코드 복사
        {/* int[] numbers = {1, 2, 3, 4, 5}; */}
        컬렉션: 여러 개체를 저장하는 자료구조입니다. (예: List, Set, Map 등)
        <div>
          {" "}
          <h1> 객체지향 </h1>{" "}
        </div>
        1. 캡슐화 (Encapsulation) 캡슐화는 객체의 상태와 동작을 하나로 묶고,
        외부에서 객체 내부의 구현을 숨기는 개념입니다. 이를 통해 객체는 자기
        자신의 데이터를 보호하고, 외부에서는 제공된 인터페이스(메서드)를
        통해서만 접근할 수 있습니다. 자바스크립트에서 캡슐화를 구현하려면
        private 키워드나 # 기호를 사용하여 클래스 필드나 메서드를 비공개로
        설정할 수 있습니다.
        {/* javascript
코드 복사
class BankAccount {
    #balance = 0; // private 필드

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance; // 외부에서 직접 balance에 접근할 수 없음
    }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
console.log(account.#balance); // 에러 발생, 직접 접근 불가 */}
        2. 상속 (Inheritance) 상속은 자식 클래스가 부모 클래스의 속성과 메서드를
        물려받는 것을 의미합니다. 이를 통해 코드 재사용성을 높이고, 여러
        클래스에서 공통적인 기능을 공유할 수 있습니다. 자바스크립트에서는
        extends 키워드를 사용해 상속을 구현할 수 있습니다.
        {/* javascript
코드 복사
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const myDog = new Dog();
myDog.speak(); // "Dog barks" 출력 */}
        3. 추상화 (Abstraction) 추상화는 객체의 복잡성을 숨기고, 필요한 부분만
        노출하는 원칙입니다. 이를 통해 구현과 관련된 세부 사항을 숨기고, 객체의
        중요한 속성이나 기능만을 보여줍니다. 자바스크립트에서는 직접적인 추상화
        기능은 없지만, 상속을 사용하여 추상 클래스를 만들고 자식 클래스에서
        구현하게 할 수 있습니다. 예를 들어, 인터페이스처럼 사용할 추상 클래스
        Shape를 만들고, 각 도형이 해당 클래스를 상속받아 area() 메서드를
        구현하도록 할 수 있습니다.
        {/* // javascript
// 코드 복사
// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

//     area() {
//         throw new Error("Method 'area()' must be implemented.");
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super("Circle");
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// const circle = new Circle(5);
// console.log(circle.area()); // 78.53981633974483 */}
        4. 모듈화 (Modularity) 모듈화는 코드를 독립적인 단위로 나누어 코드
        재사용성과 유지보수성을 향상시키는 개념입니다. 자바스크립트에서는
        export와 import 키워드를 사용하여 모듈을 만들고, 이를 필요에 따라 가져와
        사용할 수 있습니다. 예를 들어, mathUtils.js라는 파일에서 다음과 같은
        함수를 export한 후 다른 파일에서 import하여 사용할 수 있습니다.
        {/* javascript
코드 복사
// mathUtils.js
// export function add(a, b) {
//     return a + b;
// }

// main.js
// import { add } from './mathUtils.js';
// console.log(add(3, 4)); // 7 */}
        5. 의존성 주입 (Dependency Injection) 의존성 주입은 객체가 직접적으로
        의존하는 것이 아니라 외부에서 필요한 객체를 주입 받는 방식입니다.
        자바스크립트에서는 주로 함수나 클래스에 인자를 통해 주입하는 방식으로
        사용되며, 코드의 유연성을 높이고 테스트를 쉽게 해줍니다.
        {/* // javascript
// 코드 복사
// class Logger {
//     log(message) {
//         console.log("Log:", message);
//     }
// }

// class UserService {
//     constructor(logger) {
//         this.logger = logger; // 의존성 주입
//     }

//     createUser(user) {
//         this.logger.log("User created: " + user.name);
//     }
// }

// const logger = new Logger();
// const userService = new UserService(logger);
// userService.createUser({ name: "Alice" }); */}
        이러한 객체 지향 개념을 자바스크립트에서 활용하면 코드의 유연성과
        재사용성이 크게 향상되어 더 효율적이고 유지보수하기 쉬운 프로그램을
        작성할 수 있습니다. loram*10
        <div> 5. 트러블슈팅의 정의와 진행경험, 느낀점(배운점) </div>
        <button onClick={UpDate}>수정</button>
        <button onClick={DeletePage}>회원탈퇴</button>
        <button onClick={cansel}>취소</button>
      </div>
    </main>
  );
};

export default Mypage;
