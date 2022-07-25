import PropTypes from 'prop-types';

export const GifItem = ({title,src}) => {
    return (
        <div className='card'>
            <img
                alt={title}
                src={src}
            />
            <p>{title}</p>
        </div>
    );
}

GifItem.propTypes = {
    title : PropTypes.string.isRequired,
    src : PropTypes.string.isRequired
}