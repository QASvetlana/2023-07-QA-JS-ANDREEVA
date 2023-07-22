
const nam = prompt('Введите имя персонажа: ');
let kolobok;

    switch (nam) {
        case 'дедушка':
          alert( 'Я от дедушки ушёл' );
          break;
        case 'заяц':
          alert( 'Я от зайца ушел' );
          break;
        case 'лиса':
          alert( 'Меня съели' );
          break;
        default:
          alert( "Нет таких значений" );
      }


      const nam1 = prompt('Введите имя персонажа: ');
      let newYear;
      switch (nam1) {
        case 'Дед Мороз':
          alert( `${nam1}, ${nam1}, ${nam1} !`);
          break;
        case 'Снегурочка':
          alert( `${nam1}, ${nam1}, ${nam1} !` );
          break;
        default:
          alert( "Нет таких значений" );
      }

