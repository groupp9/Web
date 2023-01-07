const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  //Thiết lập các validation của trang đăng nhập
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống"); 
    /*Khi tên username đã được nhập bên trang đăng kí KHÁC với username nhập bên trang đăng nhập
    thì hệ thống sẽ báo lên bằng hàm alert rằng "Vui lòng không để trống" */
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công"); 
      /* Ngược lại nếu username ở cả 2 trang giống nhau thì hệ thống báo lên "Đăng Nhập Thành Công"
      sau đó chuyển đến trang chủ */
      window.location.href = "../mainpage/index.html"; //Đường dẫn đến trang chủ
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});
