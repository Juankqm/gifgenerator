import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/GetGifs'

export const useFetchGif = ( category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getImages();
    }, []);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
   
    return {
        images,
        isLoading
    }
}