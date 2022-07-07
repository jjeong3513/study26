import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; //useSelector는 store에서 구독을 해주는 역할을 한다.
import { decrement, increment } from '../../store/counter/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value) ;
    return (
        <div>
            <button
            aria-label="Increment value"
            onClick={() => dispatch(increment(1))} //dipatch는 reducer에 action을 보내서 변화를 요청한다. 괄호 안에 2라는 값을 넣어주면 그 값이 payload로 전달이 됨
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement(1))}
            >
            Decrement
            </button>
        </div>
    );
};

export default Counter;