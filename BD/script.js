const ResultButton = document.querySelector('.result_button');
const DateInput = document.querySelector('.date_input');
const Answer = document.querySelector('.answer');

function HowManyDays(){
    const birthdayDate = new Date(DateInput.value);
    const currentDate = new Date();
    const days = Math.floor((birthdayDate - currentDate)/1000/60/60/24)    

    function getDayWord(days) {
        const lastDigit = days % 10;
        const lastTwoDigits = days % 100;
    
        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'дней';
        } else if (lastDigit === 1) {
            return 'день';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    }
    Answer.textContent = 'До дня рождения осталось ' + days + " " + getDayWord(days);
    
    if(DateInput.value === ""){
        // Answer.style.color = 'red'          //Не получилось сделать красным
        Answer.textContent = 'Выберите дату'
    }
}

ResultButton.addEventListener('click', HowManyDays)