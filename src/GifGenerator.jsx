import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GiftGenerator = () => {

    const [categories, setCategories] = useState([]);

     const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
     }
    return (
        <>
            <h1>Gift Generator</h1>
            < AddCategory 
                onNewCategory={onAddCategory}
            />
                {categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
              
                ))}
            
        </>
    );
}
export default GiftGenerator;

