import { useState } from "react";

const AddCategory = ({onNewCategory}) => {

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
        <h4>Add Category</h4>
        <input 
            type="text"
            placeholder="Search Gifts"
            value={inputValue}
            onChange={handleInputChange}
        />
        </form>
    </>
    )
}
export default AddCategory;