//1. Сумма отрицательных элементов массива

let arr = [4,-5, 13, 0, -8,-12,6, 0], i=0, sum = 0;
function sumMinus (arr) {
    for (i=0; i<arr.length; i++) {
        if (arr[i]<0) {
            sum= sum+arr[i]
        }
    }
    return sum
}
console.log (sumMinus (arr));

//Замените все отрицательные элементы массива на ноль 
let res = [],j;
function minusToZeros (arr) {
    for (i=0, j=0; i,j<arr.length; i++, j++) {
        if (arr[i]<0) {
            res [j] = 0;
    }
    else {
        res[j] = arr[i];
    }
    }
    return res
}
console.log (minusToZeros(arr));

//Найдите произведение элементов массива , которые меньше 10, но положительные
let mults=1;
function multPl () {
    for (i=0; i<arr.length; i++) {
        if (arr[i]>0 && arr[i]<10) {
            mults=mults*arr[i]
        }
    }
    return mults
}
console.log (multPl(arr));

//Выведите индексы нулевых элементов массива (которые равны нулю), сохраняя результат в отдельный массив
let mas= [],k=0
function indexes () {
    for (i=0; i<arr.length; i++) {
        if (arr[i] == 0) {
            mas [k] = i;
            k++
        }
        else continue
    }
    return mas 
}
console.log (indexes (arr));

//Вернуть первые N элемента массива 
let num = 4, result = [], o=0;
function nthCount () {
    for (i=0; i<num; i++) {
        result[o] = arr[i];
        o++
    }
    return result
}
console.log (nthCount(arr));

//найдите максимальный элемент массива
let max=0;
function findMax () {
    for (i=0; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i]
        }
        } 
    return max
}
console.log (findMax(arr));

//найдите сумму элементов двух массивов , учитывая что у них может быть разная длина
let mas1 = [4,-5,3,1], t;
let mas2 = [-5,3,4], g;
let mas3 = [], f=0;
function sumMas () {
    for (t=0, g=0; t<mas1.length, g<mas2.length; t++, g++) {
if (mas1.length>mas2.length) {
           mas2[mas2.length]=0;
        }
if (mas1.length<mas2.length) {
    mas1[mas1.length]=0;
}
        mas3[f] = mas1[t] + mas2[g];
        f++}     
    return mas3
}
console.log (sumMas(mas1,mas2));

// переместить элемент массива : тоесть обменять например 2 и 5 элементы местами - это значит 2 элемент станет на место 5-го, а 5-й элемент станет вторым

let newArr = [], h=0, rre = [4, 16, 25, 14, 8, 22], b;
function reverses () {
        for (b=0; b<rre.length; b++) {
        newArr[h] = rre[b];   
        h++;
        if (b=2) {
            newArr[2] = rre[5]
        }
        else if (b=5) {
            newArr[5] = rre[2]
        }
        else continue
    }
    return newArr;
}
console.log (reverses (rre));

