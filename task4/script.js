const  promptRedact = document.querySelector('a');
promptRedact.addEventListener('click', function(event) {
        event.preventDefault();
        this.textContent = (prompt('Введите ваш текст.'));
        })