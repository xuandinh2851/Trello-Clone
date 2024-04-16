import { useDispatch, useSelector } from 'react-redux';
import { selectCount, decrement, increment, incrementByAmount } from '../redux/features/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>incrementByAmount</button>
    </div>
  );
};

export default Counter;