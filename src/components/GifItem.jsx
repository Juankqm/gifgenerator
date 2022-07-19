export const GifItem = ({title,src}) => {
    return (
        <div className='card'>
            <img
                alt={title}
                src={src}
                loading="lazy" 
            />
            <p>{title}</p>
        </div>
    );
}
