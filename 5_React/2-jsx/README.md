# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React

- 페이스북(메타)에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 만들기 위한 라이브러리 -단일 페이지 애플리케이션(Single Page Application)

## 주요 특징

- **컴포넌트 기발설계** : React 애플리케이션은 작고 재사용 가능한 컴포넌트로 구성된다. 각 컴포넌트는 자체적으로 상태(state)와 생명주기(lifecycle)를 가질 수 있다.
- **가상 DOM(Virtual DOM)** : React는 가상 DOM을 사용하여 브라우저의 실제 DOM과 상호작용한다.
- **단방향 데이터 흐름** : React는 단방향 데이터 흐름을 채택하고 있으며, 데이터의 흐름이 컴포넌트 계층 구조에서 위에서 아래로 흐른다. -**JSX** : React에서는 JSX 문법을 사용하여 컴포넌트 UI를 정의한다. JSX는 JavaScript 코드 안에 HTML과 유사한 문법을 사용할 수 있도록 해주며, 이를 바벨(Babel)과 같은 도구를 사용하여 일반 JavaScript 코드로 변환한다.

## Create React App

- Create React App은 React 애플리케이션을 쉡기 설정하고 시작할 수 있도록 도와주는 도구다.
- 사용하려면 Node.js 와 npm( 또는 yarn )이 설치되어 있어야 한다.

```
npx create-react-app 프로젝트명 or .
```

- 프로젝트명을 작성할 시 해당 프로젝트를 생성하면서 명령이 실행
- . 같은 경우는 해당 폴더내에 바로 생성

### 애플리케이션 실행

```
npm start
yarn start
```

### 애플리케이션 배포

```
npm build
```

## jsx

### 기본 문법

```js
const MyComponent = () => {
  return (
    <React.Fragment>
      {/* 이 부분이 주석 */}
      <p>Hello,{name}</p>
    </React.Fragment>
  );
};
export default MyComponent;
```

- JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다.
- 리액트에서 제공하는 <React.Fragment> 태그를 사용해도 되고, 아니면 빈태그인 <></>를 사용해도 된다.
