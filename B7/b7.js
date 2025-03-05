let money = Number(prompt("Mời bạn nhập vào số tiền cần gửi"));
let interestRate = prompt("Mời bạn nhập vào lãi suất");
let transInterestRate = Number(interestRate.replace("%","")) /100;
let month = Number(prompt("Mời bạn nhập vào số tháng gửi:"));
let total = 0;

for (let i = 1; i <= month; i++) {
    let interest = money * transInterestRate;
    money += interest;
    total += interest;
}
console.log(`Số tiền lãi là: ${total.toFixed(3)}`);
console.log(`Số tiền nhận được: ${money}`);
