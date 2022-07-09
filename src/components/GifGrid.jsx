import { useEffect ,useState} from 'react';
import {getGifs} from '../helpers/GetGifs';
const GifGrid =  ({category}) => {
    const [gifs, setGifs] = useState([{}]) 
    useEffect( () => { 
        getGifs(category)
    },[])
    return(
        <div>
            <h3>{category}</h3>   
        </div>
    );
}
export default GifGrid;