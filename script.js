const a = prompt ('Введите ваше имя')
if(!a){
    alert ('Вы отменили действие')

}else{
    const b = confirm ('Вы уверены?')
    if(b){
     alert('Я очень сильно люблю вас, Айсезим. Мне так сильно вас не хватает... простите за всё')
    }
    else{
     alert('Пожалуйста, попробуйте еще раз')
}
}



