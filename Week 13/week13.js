//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate); 

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = new Date().getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = new Date().getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = new Date().getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(2023, 11, 21);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2023, 8, 5);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(Math.floor((futureDate - currentDate)/1000/60/60/24)); //можно поделить на 86400000

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(2023, 6, 20);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(Math.floor((currentDate - pastDate)/1000/60/60/24));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(2023, 6, 31);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentYear + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear, 11, 21);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentYear);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
let dateMs = Date.parse(strDate);
let date = new Date(dateMs);
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(dateMs); 

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const ms = Date.parse(wrongDate);
if(isNaN(ms)){
    console.log('Неправильный формат даты');
}
else{
    console.log('Правильный формат даты');
}
//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if(number > 0){
    console.log(number + ' это положительное число');
}
else{
    console.log(number + 'число меньше или равно нулю');
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if(number % 2 == 0){
    console.log(number + ' это четное число');
}
else{
    console.log(number + ' это не четное число');
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if(number % 3 == 0){
    console.log(number + ' это число, кратное трём');
}
else{
    console.log(number + ' это число, не кратное трём');
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if(number >= 0 && number <= 9){
    console.log(number + ' это однозначное число');
}
else{
    console.log(number + ' это не однозначное число');
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if(number >= 10 && number <= 99){
    console.log(number + ' это двузначное число');
}
else{
    console.log(number + ' это не двузначное число');
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if(number < 0){
    console.log(number + ' это отрицательное число');
}
else{
    console.log(number + ' число больше или равно нулю');
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if(number % 5 || 7 == 0){
    console.log(number + ' это число, кратное 5 или 7');
}
else{
    console.log(number + ' это число, не кратное 5 или 7');
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if(number === 0 || number < 0){
    console.log(number + ' это отрицательное число или ноль');
}
else{
    console.log(number + ' число положительное');
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if(number >= 100 && number <= 999){
    console.log(number + ' это трёхзначное положительное число');
}
else{
    console.log(number + ' что-то не так');}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let day = '';

switch(new Date().getDay()) {
case 1:
    day = 'Понедельник';
    break;
case 2:
    day = 'Вторник';
    break;
case 3:
    day = 'Среда';
    break;
case 4:
    day = 'Четверг';
    break;
case 5:
    day = 'Пятница';
    break;
case 6:
    day = 'Суббота';
    break;
case 7:
    day = 'Воскресенье';
default:
    day = 'самый лучший день';
}

console.log('Сегодня ' + day);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").

function getDirection(direction){
    switch(direction){
    case 'N':
        return 'Север';
        break;
    case 'S':
        return 'Юг';
        break;
    case 'E':
        return 'Восток';
        break;
    case 'W':
        return 'Запад';
        break;
    default:
        return 'Где я?'        
    }
}
let direction = 'W';
let fullName = getDirection(direction);
console.log('Направление ' + fullName);

