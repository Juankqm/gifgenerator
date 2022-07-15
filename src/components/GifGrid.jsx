import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, []);
    return (
        <div>
            <h3>{category}</h3>
            <div className='card-grid'>        
                {
                    images.map(({id,title,url}) => (
                        <GifItem 
                            key={id}
                            title={title}
                            src={url}
                        />
                    ))
                }      
            </div>
        </div>
    );
}
export default GifGrid;