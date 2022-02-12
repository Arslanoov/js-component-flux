export function App(subscribeToStore, increase, decrease) {
  let value = null;
  const el = document.querySelector('#counter');

  const [ increaseBtn, decreaseBtn ] = Array.from(el.querySelectorAll('button'));
  const display = el.querySelector('.display');

  const updateState = (store) => value = store.getValue();
  const render = () => display.innerHTML = value;

  subscribeToStore([updateState, render]);

  increaseBtn.addEventListener('click', increase);
  decreaseBtn.addEventListener('click', decrease);
}