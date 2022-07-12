import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';
const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
    }, [])
    return (
        <div>
            <h3>{category}</h3>
            <div className='card-grid'>        
                {
                    images.map(img => (
                        <div className='card'>
                            <img
                                key={img.id}
                                alt={img.title}
                                src={img.url}
                            />
                            <p>{img.title}</p>
                        </div>
                    ))
                }      
            </div>
        </div>
    );
}
export default GifGrid;