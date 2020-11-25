import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import AppRouter from "./Routes"
// http://localhost:3000 가세요

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 

// TODO:
// 1. 네비게이션 바를 만든다
// 2. 소개 부분 제작
// 3. 로그인, 회원가입 폼 제작
// 4. 백엔드와 통신

  render() {
    return (

      <div style={{width:window.innerWidth, height:window.innerHeight,alignItems:'center',justifyContent:'center',display:'flex',backgroundColor:'white'}}>
        <Helmet>
          <title> ARRAY [] </title>
        </Helmet>
        <AppRouter isLoggedIn={false}></AppRouter>
      </div>
    );
  }
}
// 그 로그인 패킷 전달되었는지는 어떻게 보는건가요?
// 아 그 F12? ㅖㅖ
// 화면에 뜨잖아요
export default App;
