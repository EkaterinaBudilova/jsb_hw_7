const inputs = document.getElementsByTagName('input'); // почему-то не срабатывает изменение чекбокса
function move(event) {
  if (event.target.checked) {
    console.log(event.target.checked);
    event.target.checked = true;
    console.log(event.target);
    console.log(1);
  }
}
Array.from(inputs).forEach(item => item.addEventListener('change', move));