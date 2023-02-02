const inputANode = document.querySelector('.js-number-a');
const  inputBNode = document.querySelector('.js-number-b');
const  SelectOperation = document.querySelector('.js-select');
const  btnResultNode = document.querySelector('.js-btn-result');
const  jsOutputNode = document.querySelector('.js-output');


btnResultNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = (SelectOperation.value);

    const result = calculate ({ a, b,  operation});

    jsOutputNode.innerHTML = result + ' ' + 'я такой классный калькулятор';
});
