import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
  }
  
  if (capitalize('') !== '') {
    throw new Error('Функция работает неверно для пустоц строки!');
  }
  
  console.log('Все тесты пройдены!');