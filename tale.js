console.log(kolobok('дедушка'));
console.log(kolobok('заяц'));
console.log(kolobok('лиса'));

function kolobok(player) {
    switch (player) {
        case 'дедушка':
            return ('Я от дедушки ушел!');
            break;
        case 'заяц':
            return ('Я от зайца ушел!');
            break;
        case 'лиса':
            return ('Меня съели ((');
            break;
        default:
            return ("Нет таких значений");
    }
}