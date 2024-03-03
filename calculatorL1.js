document.addEventListener('DOMContentLoaded', function () {
    let input = document.querySelector(".calculator input");
    let buttons = document.querySelectorAll(".calculator button");

    let string = "";

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.innerText);
        });
    });

    document.addEventListener('keydown', function (event) {
        const key = event.key;

       
        if (/^[0-9+\-*/.=]$/.test(key)) {
            event.preventDefault();
            handleButtonClick(key);
        }
    });

    function handleButtonClick(value) {
        if (value === 'AC') {
            string = "";
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
        } else if (value === '=') {
            string = eval(string);
        } else {
            string += value;
        }

        input.value = string;
    }
});
