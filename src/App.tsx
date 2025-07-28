import { decrement, increment } from "./store/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="bg-red-500 text-white ">
        <button onClick={() => dispatch(increment())}>increment</button>
        <div>count: {count}</div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </>
  );
}

export default App;
