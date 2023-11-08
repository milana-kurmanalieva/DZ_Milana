let chooseMonth = prompt('Введите месяц').toLowerCase()

switch (chooseMonth){
    case 'декабрь':
    case 'январь':
    case 'февраль':
        alert('Зима')
        break
    case 'март':
    case 'апрель':
    case 'май':
        alert('Весна')
        break
    case 'июнь':
    case 'июль':
    case 'август':
        alert('Лето')
        break
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        alert('Осень')
        break
}


let valueOne = Number(prompt('Введите первое значение'))
let valueTwo = Number(prompt('Введите второе значение'))
let action = prompt('Выберите действие')



if (action === '+') {
    alert(valueOne + valueTwo)
} else if (action === '-'){
    alert(valueOne - valueTwo)
} else if (action === '/') {
    alert(valueOne / valueTwo)
} else if (action === '*') {
    alert(valueOne * valueTwo)
} else {
    alert('Error')
}

let massiveNumberTwo = [[[[[[[[[[[2]]]]]]]]]]]

console.log(massiveNumberTwo[0][0][0][0][0][0][0][0][0][0][0])