
//1. Сумма отрицательных элементов массива
const numbers = [18, 0, 23, 2, 4, -15, 0, 24, -3];
let sum=0;
for (i=0; i<numbers.length; i++) {
if (numbers[i]<0) {sum=sum+numbers[i]} else sum;}
console.log (sum);

//2. Замените все отрицательные элементы массива на ноль
for (i=0; i<numbers.length; i++) {
    if (numbers[i]<0) {numbers[i]=0} else numbers[i];
}
console.log (numbers);

//Найдите произведение элементов массива , которые меньше 10, но положительные
let summary=0
for (i=0; i-numbers.length; i++) {
    if (numbers[i]<10 && numbers[i]>0)
 {summary = summary+numbers[i]} 
    else summary;
}
console.log ('summary =', summary)

//4. Выведите индексы нулевых элементов массива (которые равны нулю), сохраняя результат в отдельный массив
let a=[], j=0;
for (i=0; i<numbers.length; i++) {
    if (numbers[i]==0) {
        a[j]=i; j++
    }
    else a[j]
}
console.log (a)

//5. Вернуть первые N элемента массива
let l=[], p=0, n=5;
for (i=0; i<numbers.length; i++) {
if (i<n) {l[p]=numbers[i]; p++}
else l[p]
}
console.log (l);

//6* найдите максимальный элемент массива
//const numbers = [18, 0, 23, 2, 4, -15, 0, 24, -3];
let max=0;
for (i=0; i<numbers.length; i++) {
    if (numbers[i]>max) {
        max=numbers[i]
    }
}
console.log (max)
