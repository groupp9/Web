const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const inputPasswordRegister2 = document.querySelector(".input-signup-password_");
const btnRegister = document.querySelector(".signup__signInButton");
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  //Thiết lập các validation của trang đăng kí
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("Vui lòng không để trống"); 
    /* Nếu để trống thì hệ thống sẽ báo "Vui lòng không để trống"
    cho đến khi ta điền vào hết các ô trống thì hệ thống mới chuyển qua trang tiếp */
  } 
  else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "../index.html"; 
    /*Đường dẫn về trang đăng nhập để đăng nhập lại
    sau khi đã đăng kí thành công */
  }
});
