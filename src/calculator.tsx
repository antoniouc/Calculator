import {useState} from 'react';
import Button from './Button';

function Calculator() {
    const [displayValue, setDispalyValue] = useState('0');

    return (
        <div>
            <div>{displayValue}</div>
            <Button value='1' onClick={() => setDispalyValue(displayValue + "1")}/>
            <Button value='+' onClick={() => console.log('logica para la suma')}/>   
        </div>
    );
}

export default Calculator;