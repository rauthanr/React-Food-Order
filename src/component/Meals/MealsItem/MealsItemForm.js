import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from './MealsItemForm.module.css';


const MealsItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) =>{
        event.preventDefault();

        const enteredAmout = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmout;
        if(enteredAmout.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber >5){
            setAmountIsValid(false);
            return;
        }

        setAmountIsValid(true);
        console.log('Calling onAddToCart');
        props.onAddToCart(enteredAmountNumber);

    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                lable='Amount'
                input={{
                    id: 'amount_'+props.id  ,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: 1
                }}

            ></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Please Enter Valid Amount (1-5)</p>}
        </form>
    );
};

export default MealsItemForm;