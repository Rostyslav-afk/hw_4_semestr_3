// #1 Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const firstWords = prompt("Введіть ваше ім'я").trim();
const secondtWords =  prompt("Введіть ваш email").trim()

if (firstWords !== "" || secondtWords !== ""){
    alert("Все правильно")
} else{
    alert("Ви ввели не правильні дані")
}
// #2 Створити розмітку з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
const number = Number(prompt("Введіть число"));
const secondNumber = Number(prompt("Введіть друге число"));
const result = number + secondNumber;
if (result > 10){
    alert("Сума більша за 10")
} else{
    alert("Сума менша або дорівнює 10")
}

// #3Створити розмітку з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const whatWord = prompt("Напишіть речення зі словом JavaScript");
const word = "JavaScript";

if (whatWord.includes(word)) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}

// #4 Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const whatNumber = prompt("Введіть число в діапазоні від 10 до 20");
if (whatNumber > 10 && whatNumber < 20 ){
    alert("Все вірно")
} else {
    alert("Ви ввели не вірні дані")
}

// #5 Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
const userName = prompt("Введіть ваше ім'я(не менше 3 символів)");
const userEmail = prompt("Введіть ваш email");
const userPassword = prompt("Введіть ваш пароль(не менше 6 символів)");
if(userName > 3 || userEmail.includes("@") || userEmail.includes(".") || userPassword > 6){
 alert("Ви переправляєтесь на наступну сторінку")
} else{
alert("Ви ввели неправильні дані!")
}