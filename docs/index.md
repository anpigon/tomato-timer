# 리덕스 설치하기

```bash
$ npm install redux react-redux --save
```

# 리덕스란?
상태 관리 라이브러리이다.

# 리덕스가 필요한 이유?
- 컴포넌트는 local state를 가지고 있다. 그러나 앱은 global state를 가지고 있다.
- state 공유가 필요할 떄가 있다.
- 리덕스는 state 컨테이너이다.

# 리듀서 만들기

`reducer.js` 파일 생성.

actions 정의
```js
// actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";
```

action 생성
```js
// Action Creators
function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}
```

초기 State 생성

```js
const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: 1500
};
```

함수 정의

```js
function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  // ... 생략 ...
}

function applyAddSecond(state, action) {
  // ... 생략 ...
}
```

리듀서 생성

리듀서는 언제나 state를 가진다.

```js
// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}
```
> action을 보내면 자동으로 reducer가 실행된다.


Export 하기
```js
// Exports Actions
export {
  startTimer,
  restartTimer,
  addSecond
};

// Exports Default
export default reducer;
```