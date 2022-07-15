import { useFetchGif } from '../hooks/useFetchGif';
import GifItem from './GifItem';
import Loading from './Loading';
const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif(category);
    return (
        isLoading
            ? <Loading />
            : <div>
                <h3>{category}</h3>
                <div className='card-grid'>
                    {
                        images.map(({ id, title, url }) => (
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