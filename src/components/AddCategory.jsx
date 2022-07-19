import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const handleFormInfo = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <=1 ) return;
        onNewCategory(inputValue);
        setInputValue('');
    }
    return (
    <>
        <form onSubmit={handleFormInfo}>
        <input 
            type="text"
            placeholder="Search Gifs"
            value={inputValue}
            onChange={handleInputChange}
        />
        </form>
    </>
    )
}