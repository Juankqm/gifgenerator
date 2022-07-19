import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

const GiftGenerator = () => {

    const [categories, setCategories] = useState([]);

     const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
     }
    return (
        <>
        <div className="header-app">
            <h1>The perfect Gif for every occasion!</h1>
            < AddCategory onNewCategory={onAddCategory}/>
        </div>
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

