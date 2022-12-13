
var counter = 0;

function onClickbutton(btn) {
    counter++ ;
    if (counter == 1){
        alert('Ты долбаеб?');
        alert('Нахуй ты нажал?');
        alert('еще раз нажмешь, я тебе ебало сломаю');
    } else if(counter == 2) {
        var inf = confirm('Ты уверен?');
        if (inf == true) {
            alert('Я так понимаю ты дохуя уверенный в себе, ну так я тебе сказал');
            alert('еще');
            alert('сука');
            alert('раз');
            alert('нажмешь');
            alert('я еду бить тебе ебало');
        } else {
            alert('Ну вот и пошел нахуй!');
        }

    } else if (counter == 3) {
        prompt('Доигрался сука, адрес пиши свой');
        alert('А знаешь мне похуй я по ip тебя вычислю!');
    } else if (counter == 4) {
        btn.innerHTML = 'Пошел нахуй!';
    } else if (counter < 20) {
        btn.innerHTML = 'Пошел нахуй: ' + counter ;
    } else if (counter == 20) {
        var name = prompt('Слушай как тебя зовут?');
        alert(name + ' давай договримся ты идешь нахуй');
    } else if (counter == 21) {
        alert('Все иди нахуй я забираю кнопку');
        btn.style.display = 'none';
    }

}











