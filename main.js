const buttons = document.getElementsByClassName("qst-button");
var i;

for(i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', function(){
        var answer = this.nextElementSibling;
        if(answer.classList.contains('showAnswer')){
            answer.classList.remove('showAnswer');
        } else{
            answer.classList.add('showAnswer');
        }
    })
}


