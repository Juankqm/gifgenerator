import { getGifs } from '../../src/helpers/GetGifs';

describe( 'Testing GetGifs Helper', () => {

    test('Should return an array of gifs with the category indicated', async () => {
        const category = 'madagascar';
        const gifs = await getGifs( category );

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual( {
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
    });

})