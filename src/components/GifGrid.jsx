import { useFetchGif } from '../hooks/useFetchGif';
import { GifItem } from './GifItem';
import { Loading } from './Loading';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif(category);
    return (
        isLoading
            ? <Loading />
            : <div>
                <p>Showing results for <span>{category}</span></p>
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