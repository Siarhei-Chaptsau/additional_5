module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  var arr = [];
  arr = str.split(''); // создаём массив из строки

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) { // проверка на соответствие правилу
        arr.splice(i, 2); // удаляем 2 элемента соотвествующих правилу
        i = -1;
        break; // прерываем цикл и перебираем с начала (i = 0)
      }
    }
  }

  if (arr.length) {
    return false;
  } else {
    return true;
  }
}
