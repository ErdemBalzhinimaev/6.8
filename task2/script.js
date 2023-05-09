const  exampleConsole = document.querySelector('#consoleLog');
exampleConsole.addEventListener('click', () => {
    // тело обработчика
    alert('Метод для вывода сообщения в консоли пользователя.');
})

const alertID = document.querySelector("#alertID");

alertID.addEventListener("click", () => {
  alert("Пример использования команды Alert");
});

const promptID = document.querySelector("#promptID");

promptID.addEventListener("click", () => {
  prompt("Пример использования команды Prompt", "Введите сообщение");
});