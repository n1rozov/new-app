import { useState } from 'react';

const TestComponent = (props) => {

    const [index, setIndex] = useState(0);

    // console.log('Test component render');

    function handleClick(event) {
        console.log(event);
        event.target.innerHTML = "New Text";
        setIndex(index + 1);
    }

function handleClickIndexMinus(event) {
    console.log(event);
    setIndex(index - 1);
}

function handleClickCountMinus(event) {
    props.setCount(props.count -1);
}

    return (
        <div>
        <h1>{props.message}</h1>
            {index}
            <div>
                <button onClick={handleClick}>Add 1</button>
                <button onClick={handleClickIndexMinus}>Minus 1 index</button>
                <button onClick={handleClickCountMinus}>Minus 1 count</button>
            </div>
        </div>
    );
};

TestComponent.deafaultProps = {
    message: "Deafult Message",
}

const ArrowComponent = (props) => {

    const [count, setCount] = useState(0);

    // console.log('Arrow render');
    const array = [
        'Test 1',
        'Test 2 ',
        'Test 3',
    ];
    return (
        <div>
            <div> {props.message} <b>{count}</b></div>
            <small> {props.text} </small>
            <div><button onClick={() => setCount(count + 1)}>Add 1</button></div>
            <TestComponent count={count} setCount={setCount} message={'Privet'}/>

            {array.map(a => {
                return (<div key={a}>{a}</div>);
            })}
        </div>
    )
};

export default ArrowComponent;