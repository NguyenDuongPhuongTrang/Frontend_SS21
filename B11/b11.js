let day = Number(prompt(`Mời bạn nhập vào ngày sinh`));
let month = Number(prompt(`Mời bạn nhập vào tháng sinh`));
if(!isNaN(day) && !isNaN(month) && 0 < day < 32 && 0 < month < 13){
    switch(month){
        case 1:
            if(day <= 19){
                alert("Ma Kết");
            }else{
                alert("Bảo Bình");
            }
            break;
        case 2:
            if(day <= 18){
                alert("Bảo Bình");
            }else if(18 < day < 29){
                alert("Song Ngư");
            }
            break;
        case 3:
            if(day <= 20){
                alert("Song Ngư");
            }else {
                alert("Bạch Dương");
            }
            break;
        case 4:
            if(day <= 20){
                alert("Bạch Dương");
            }else if(20 < day < 31){
                alert("Kim Ngưu");
            }
            break;
        case 5:
            if(day <= 20){
                alert("Kim Ngưu");
            }else{
                alert("Song Tử");
            }
            break;
        case 6:
            if(day <= 20){
                alert("Song Tử");
            }else if(20 < day < 31){
                alert("Cự Giải");
            }
            break;
        case 7:
            if(day <= 22){
                alert("Cự Giải");
            }else{
                alert("Sư Tử");
            }
            break;
        case 8:
            if(day <= 22){
                alert("Sư Tử");
            }else{
                alert("Xử Nữ");
            }
            break;
        case 9:
            if(day <= 20){
                alert("Xử Nữ");
            }else if(20 < day < 31){
                alert("Thiên Bình");
            }
            break;
        case 10:
            if(day <= 23){
                alert("Thiên Bình");
            }else{
                alert("Bọ Cạp");
            }
            break;
        case 11:
            if(day <= 20){
                alert("Bọ Cạp");
            }else if(20 < day < 31){
                alert("Nhân Mã");
            }
            break;
        case 12:
            if(day <= 21){
                alert("Nhân Mã");
            }else{
                alert("Ma Kết");
            }
            break;
        default:
            alert(`Dữ liệu nhập vào không hợp lệ`);
    }
}else{
    alert(`Dữ liệu nhập vào không hợp lệ`);
}
