let num = 0;
let sum = 0;
for (let i = 0; i < 5; i++) {
    num = Number(prompt(`Mời bạn nhập số nguyên thứ ${i+1}`));
    if(num % 2 === 1){
        sum += num;
    }
}
alert(`Tổng của các số lẻ là: ${sum}`);

