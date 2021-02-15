# JavaScript Example

프론트엔드 필수 브라우저 101 (자바스크립트 마스터과정 | 디버깅, 퍼포먼스 분석, 실전프로젝트 10개)

## 1. Web APIs의 이해의 시작

- 1-1. Web APIs 넌 누구냐?

  - [MDN WebAPI](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - [Web API collection](https://developer.mozilla.org/en-US/docs/Web/API)
  - [Security](https://www.thoughtco.com/what-javascript-cannot-do-2037666)

- 1-2. Browser 구조분석

  - [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
  - [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)
  - [Viewport](https://developer.mozilla.org/en-US/docs/Glossary/layout_viewport)
  - [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

- 1-3. 실습1. 윈도우 사이즈 표기

  - [x] 윈도우 사이즈표기

- 1-4. 정말 중요한 브라우저 좌표

- 1-5. 실습2. 좌표실습

  - [x] 윈도우 좌표

- 1-6. 실습3. 윈도우 스크롤링

  - [x] 윈도우 스크롤링

- 1-7. 실습4. Window load 의 비밀

  - [x] 윈도우 로드

## 2. Web APIs 실전

- 2-1. 실습1. 좌표찾아 007

  - [x] 1.좌표 찾아 007

- 2-2. 실습2. 토끼를 찾아라

  - [x] 2.토끼를 찾아라

## 3. DOM 완전 정복

- 3-1. DOM 큰 그림 이해하기

  - [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
  - [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API-

- 3-2. 우리의 조상 이벤트 타겟

  - [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)
  - [Event Target](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)

- 3-3. 웹페이지 요소분석 🔍

- 3-4. 알면 유용한 CSSOM

  - [CSSOM](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)
  - [CSS Triggers](https://csstriggers.com/)

- 3-5. 성능보장 렌더링 순서 ⚡️

  📜 requests/response → loading → scripting → rendering → layout → painting 🌈

  | Construction             | Operation                    |
  | :----------------------- | :--------------------------- |
  | DOM → CSSOM → RenderTree | layout → paint → composition |

- 3-6. 모르면 후회하는 레이어 데모

- 3-7. 실습1. 좌표 성능 개선

  - [x] 2.좌표 찾아 007 성능 개선

- 3-8. 퍼포먼스 개발툴 사용

- 3-9. DOM 조작하기

  - [x] 1.DOM Example

- 3-10. innerHTML vs element ?

## 4. DOM 완전 정복 실전

- 4-1. 실습1. 쇼핑 목록앱 만들기

  - [FontAwesome](https://fontawesome.com/)
  - [CSS Gradient](https://cssgradient.io/)
  - [Color Wheel](https://color.adobe.com/ko/create/color-wheel)
  - [x] 1.쇼핑 목록앱 만들기

## 5. 이벤트

- 5-1. Events 정확하게 이해하기 + 종류들

  - [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
  - [Events Category](https://developer.mozilla.org/en-US/docs/Web/Events)

  ```js
  const div = document.createElement('div');
  const listener = () => console.log('clicked');

  // Add Events
  div.addEventListener('click', listener);

  // Dispatch Events
  div.dispatchEvent(new Event('click'));

  // Remove Events
  div.removeEventListener('click', listener);
  ```

- 5-2. 실습1. Bubbling & Capturing & Tip

  - [Bubbling and Capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
  - [x] 1.Bubbling & Capturing & Tip

  ```js
  const outer = document.createElement('div');
  const button = document.createElement('button');
  outer.append(button);

  button.addEventListener('click', evnet => {
    event.stopImmediatePropagation(); //! 가능하면 사용하지 말것
    event.stopPropagation(); //! 가능하면 사용하지 말것
  });

  outer.addEventListener('click', evnet => {
    if (event.target !== event.currentTarget) {
      return;
    }
  });
  ```

- 5-3. 브라우저를 취소하라! 유의할 점

  ```js
  const input = document.createElement('input');

  input.addEventListener(
    'click',
    evnet => {
      event.preventDefault(); //! 기본 행동 취소
    },
    { passive: false } //! 기본 True 속성이면 사용하지 말 것
  );
  ```

- 5-4. 우아한 이벤트 위임 (BAD vs GOOD)

  ```js
  // BAD
  const lis = document.querySelectorAll('li');
  lis.forEach(li => {
    li.addEventListener('click', event => {
      event.target.classList.add('selected');
    });
  });

  // GOOD
  const ul = document.querySelector('ul');
  ul.addEventListener('click', event => {
    if (event.target.tagName == 'LI') {
      event.target.classList.add('selected');
    }
  });
  ```

- 5-5. 실습2. 쇼핑 목록앱 개선하기

  - [x] 2.쇼핑 목록앱 개선하기

## 6. 자바스크립트 보충 수업 📙

- [기본 자바스크립트 강의](https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2)

## 7. 실전: 게임만들기 🥕🥕

- [x] 당근 뽑기 게임 만들기

## 8. 리팩토링으로 배우는 코딩팁 ✨

- [x] 당근 뽑기 게임 리팩토링

## 9. Event loop 🔥

- 9-1. 프로세스와 쓰레드란?

  - Process
    운영체제 위에서 독립적으로 실행되는 프로그램

    | Process | Process | Process |
    | :-----: | :-----: | :-----: |
    |  Code   |  Code   |  Code   |
    |  Stack  |  Stack  |  Stack  |
    |  Heap   |  Heap   |  Heap   |
    |  Data   |  Data   |  Data   |

    - Code
      프로그램 실행을 위한 코드

    - Stack
      함수들의 어떤 순서로 실행 되는지 함수가 종료 시 어디로 가야하는지 정보 저장

    - Heap
      오브젝트 및 데이터 저장(동적할당 변수)

    - Data
      전역변수 및 스태틱 변수

  - Thread
    한 프로세스 안에서 동작하는 여러 스택

    |            Process             |
    | :----------------------------: |
    |         Code Heap Data         |
    | Thread1(Stack), Thread2(Stack) |

- 9-2. 자바스크립트 런타임 환경(엔진 이해, 스택 개념 정리)
  Single Threaded 언어

  |    Javascript Engine    |
  | :---------------------: |
  | Memory Heap, Call Stack |

  - Memory Heap
    데이터 할당(동적 할당)

  - Call Stack
    함수 실행 순서 저장(LIFO)

- 9-3. 브라우저 런타임 환경 이해(중요, 큐 개념정리)

  Web APIs를 통하여 비동기 실행 (DOM API,setTimeout,setInterval,fetch,event listener ...)

  - Queue(FIFO)

  - Event loop
    Call stack 이 비워지면 Call stack으로 이동시킴

- 9-4. Render Sequence, Microtask Queue, TaskQueue

  |                   Render Sequence                   |         Microtask Queue         |         TaskQueue          |
  | :-------------------------------------------------: | :-----------------------------: | :------------------------: |
  | Request Animation Frame, Render Tree, Layout, Paint | Promise then, mutation observer | setTimeout, click callback |

- 9-5. 데모1. 나선임 반박하는 법

  ```js
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    const el = document.createElement('h1');
    document.body.appendChild(el); // 순서 상관 없음
    el.style.color = 'red';
    element.innerText = 'hello';
  });
  ```

- 9-6. 데모2. 후배에게 가르치기

  ```js
  const button = document.querySelector('button');
  const box = document.querySelector('.box');
  button.addEventListener('click', () => {
    box.style.transition = 'transform 1s ease-in';
    box.style.transform = 'translateX(800px)';
    box.style.transform = 'translateX(500px)'; // 마지막 transform 반영
  });
  ```

- 9-7. 데모3. 브라우저 죽이기

  ```js
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    while (true) {
      // repeat 🎃
    }
  });
  ```

- 9-8. 데모4. setTimeout의 비밀

  ```js
  function handleClick() {
    console.log('handleClick');
    setTimeout(() => {
      console.log('setTimeout');
      handleClick();
    }, 0);
  }
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    handleClick();
  });
  ```

- 9-9. 데모5. Promise의 비밀

  ```js
  function handleClick() {
    console.log('handleClick');
    Promise.resolve(0).then(() => {
      console.log('then');
      handleClick();
    });
  }
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    handleClick();
  });
  ```

- 9-10. 데모6. RAF의 비밀

  ```js
  const button = document.querySelector('button');
  button.addEventListener('click', () => {
    requestAnimationFrame(() => {
      document.body.style.backgroundColor = 'beige';
    });
    requestAnimationFrame(() => {
      document.body.style.backgroundColor = 'orange';
    });
    requestAnimationFrame(() => {
      document.body.style.backgroundColor = 'red'; // 마지막 bg 반영
    });
  });
  ```

## 마무리 하며 ❤️
