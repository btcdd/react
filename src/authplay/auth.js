
export function signIn(resp) {
  
  let user;
  if(resp.result == "ok"){
    user = true;
    sessionStorage.setItem("authenticated",user);
  }else if(resp.result =="delete"){
    alert("삭제된 문제");
    user = false;
  }else if(resp.result =="empty"){
    alert("이름,생일 필수!!");
    user = false;
  }else{
    alert("인증 실패");
    user = false;
  }
  return user;  

}
