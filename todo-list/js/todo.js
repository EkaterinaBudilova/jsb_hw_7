const inputs = document.getElementsByTagName('input');
const done = document.querySelector('section.done');
const undone = document.querySelector('section.undone');

function move(event) {
  let task = event.target;
  console.log(event.target.checked);
  if (task.checked) {
    done.appendChild(task.parentElement);
  } else {
    undone.appendChild(task.parentElement);
  }
}

Array.from(inputs).forEach(item => item.addEventListener('change', move));