var chooseMonth = prompt('Введите месяц').toLowerCase()

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

var valueOne = Number(prompt('Введите первое значение'))
var valueTwo = Number(prompt('Введите второе значение'))
var action = prompt('Выберите действие')

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

var massiveNumberTwo = [[[[[[[[[[[2]]]]]]]]]]]

console.log(massiveNumberTwo[0][0][0][0][0][0][0][0][0][0][0])

