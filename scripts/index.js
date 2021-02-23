let question = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');


for (let index = 0; index < question.length; index++) {
    question[index].addEventListener('click', drop);

    function drop() {
        question[index].classList.toggle('active');

        if (answer[index].style.display != 'block') {
            answer[index].style.display = 'block';
        }
        else {
            answer[index].style.display = 'none';
        }
    }
}

