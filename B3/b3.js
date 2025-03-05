let pass = `123456789`;

do{
    let checkPass = prompt("Mời bạn nhập mật khẩu");
    if(pass === checkPass){
        alert(`Mật khẩu chính xác`);
        break;
    }else{
        alert(`Sai mật khẩu! Vui lòng thử lại!`);
    }
}while(true);