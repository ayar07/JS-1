var month = prompt('Введите месяц рождения: ')
var day = prompt("Введите число рождения: ")

if(
    (day >= 21 && day <= 31 && month === 'Март') ||
    (day <= 19 && day >= 1 && month === 'Апрель')
    ){
        console.log('ОВЕН')
    }
else if(
    (day >= 21 && day <= 30 && month === 'Апрель') ||
    (day <= 21 && day >= 1 && month === 'Май')
    ){
        console.log('ТЕЛЕЦ')
    }
else if(
    (day >= 22 && day <= 31 && month === 'Май') ||
    (day <= 21 && day >= 1 && month === 'Июнь')
    ){
        console.log('БЛИЗНЕЦЫ')
    }
else if(
    (day >= 22 && day <= 30 && month === 'Июнь') ||
    (day <= 22 && day >= 1 && month === 'Июль')
    ){
        console.log('РАК')
    }
else if(
    (day >= 23 && day <= 31 && month === 'Июль') ||
    (day <= 23 && day >= 1 && month === 'Август')
    ){
        console.log('ЛЕВ')
    }
else if(
    (day >= 24 && day <= 31 && month === 'Август') ||
    (day <= 22 && day >= 1 && month === 'Сентябрь')
    ){
        console.log('ДЕВА')
    }
else if(
    (day >= 23 && day <= 30 && month === 'Сентябрь') ||
    (day <= 23 && day >= 1 && month === 'Октябрь')
    ){
        console.log('ВЕСЫ')
    }
else if(
    (day >= 24 && day <= 31 && month === 'Октябрь') ||
    (day <= 22 && day >= 1 && month === 'Ноябрь')
    ){
        console.log('СКОРПИОН')
    }
else if(
    (day >= 23 && day <= 30 && month === 'Ноябрь') ||
    (day <= 21 && day >= 1 && month === 'Декабрь')
    ){
        console.log('СТРЕЛЕЦ')
    }
else if(
    (day >= 22 && day <= 31 && month === 'Декабрь') ||
    (day <= 20 && day >= 1 && month === 'Январь')
    ){
        console.log('КОЗЕРОГ')
    }
else if(
    (day >= 21 && day <= 31 && month === 'Январь') ||
    (day <= 18 && day >= 1 && month === 'Февраль')
    ){
        console.log('ВОДОЛЕЙ')
    }
else if(
    (day >= 19 && day <= 28 && month === 'Февраль') ||
    (day <= 20 && day >= 1 && month === 'МАРТ')
    ){
    console.log('БЛИЗНЕЦЫ')
    }

else{
    console.log('ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ')
}



