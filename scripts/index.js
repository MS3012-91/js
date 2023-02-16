// 1. Определите переменные со значениями 100, 2.5, false, "Hello, java script!" и выведите их в консоль
let a = 100,
    b = 2.5,
    c = false,
    d = "Hello, java script!";
console.log(a, b, c, d);

// // 2. Создайте переменные greeting со значением'Hi, ' и userName. Спросите имя пользователя 
// // и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. 
// // Например, 'Hi, Vasya!'.
let greeting='Hi, ';
let userName=prompt ('Whats your name?')
alert (greeting + userName);

// // 3. Выведите числа от 10 до 50, которые кратны 5
let x=10;
while (x<50){
    x=x+5;
    console.log (x);
}

// // 4. Спросите у пользователя номер месяца (это будет число из интервала от 1 до 12) . 
// // Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let season = prompt ('Enter a number of month')
    if (season == 1 & season == 2 & season == 12) alert ('winter')
else if (season >=3 & season<= 5) alert ('spring')
else if (season >=6 & season<= 9) alert ('summer')
else alert ('autmn');


// 5. Подсчитайте сумму четных чисел от 1 до 100
let firstNumber = 2;
let sum=0;
while (firstNumber<=100) {
    sum=sum+firstNumber;
    firstNumber = firstNumber+2;
}
console.log (sum);



// Дополнительные:
// 6. Вывести знак * столько раз сколько задаст пользователь
let symbol = '*'
let num = prompt ('Enter number of stars');
while (num>0){
    console.log(symbol);
    num=num-1;
}

/*7. делить число 1000 на 2 до тех пор, пока не получится число меньше 50.
 Какое число получилось? сколько раз делили?*/
let count = 1000;
let constant = 2;
let result = count/constant;
while (result>=50) {
    result=result/constant;
    console.log (result);
}


// 8. вывести таблицу значений для функции y = 5x + 2 для значения х от -1 до 1 с шагом 0.1. Вывод вида:
// x = -1 , y = -3
// x = -0.9, y = -2.5
// ....
// x = 1, y = 7
let variable;
let res;
for (let variable = -1; variable < 1; variable=variable+0.1) {
    res=5*variable+2;
        console.log ('x=', variable, 'y=', res);}   