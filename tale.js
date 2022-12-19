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

var NewYear = function (name) { return `${name}! ${name}! ${name}!`; };
var x = NewYear('Дед Мороз');
console.log(x);
var y = NewYear('Снегурочка');
console.log(y);