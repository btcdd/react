# React Component - Styling(외부 Module 적용하기)
<pre>
1
mkdir project-ex10
cd project-ex10

2
npm -y init
npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react style-loader css-loader

3
project-ex07번 src,public,webpack.config.js, babel.config.js 복사

4.
npm scripting 적용(package.json)
        "scripts": {
            "build": "npx webpack",
            "start": "npx webpack-dev-server"
        }
5.
애플리케이션 작성 
App.js 작성
Banner01.js
..

6.
App.css 파일 작성


7.
css-loader에  CSS Module 설정 (webpack.config.js)

8.
개발 서버 실행 및 확인

npm i -D webpack webpack-cli webpack-dev-server react react-dom @babel/core babel-loader @babel/preset-env @babel/preset-react style-loader css-loader ace-builds react-ace

npm install @material-ui/core
</pre>