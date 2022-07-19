const API_KEY = 'ocH4anLo5kM0WNDi312mfiKV7laoVE2U'; 
export const getGifs = async (category) =>{
    const URL    = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;
    const resp   = await fetch(URL);
    const {data} = await resp.json()
    const gifs = data.map( gif => ({
        id: gif.id,
        title : gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}