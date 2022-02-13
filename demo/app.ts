import { increase, decrease, countSelector } from './counterReducer';

function App({ count, increase, decrease }) {
  const el = document.querySelector('#counter');
  const counter = el.querySelector('.display');

  const onCountChange = (count) => counter.innerHTML = count;
  onCountChange(count);

  const [ increaseBtn, decreaseBtn ] = Array.from(el.querySelectorAll('button'));
  increaseBtn.addEventListener('click', increase);
  decreaseBtn.addEventListener('click', decrease);

  return {
    onCountChange
  };
}

const mapStateToProps = (state) => ({
  count: countSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export {
  App,
  mapStateToProps,
  mapDispatchToProps
};