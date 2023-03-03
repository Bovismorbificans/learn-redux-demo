import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync } from '@/store/counterSlice';
import type { RootState } from '../../store';

export default function Counter() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{counter.value}</h1>
        <button onClick={() => dispatch(increment(10))}>加</button>
        <button onClick={() => dispatch(decrement(20))}>减</button>
      </div>
      <div>
        <input
          type="number"
          onChange={(value) => {
            console.log('value', value);

            incrementAsync(Number(value.target.value || 0))(dispatch);
          }}
        />
      </div>
    </>
  );
}
