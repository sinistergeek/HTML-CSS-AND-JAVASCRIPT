const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('modal');

//Toggle nav

toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);
//show modal

open.addEventListener('click', () => model.classList.add('show-modal'));

//hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));
//hide model by outside

window.addEventListener('click', (e) =>
  e.target == model ? model.classList.remove('show-modal') : false
);
