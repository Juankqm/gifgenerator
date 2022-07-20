import { render,screen } from "@testing-library/react";
import { GifItem } from '../../src/components/GifItem'

describe('Testing <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('should match snapshot', () => {
        const {container} = render(<GifItem title={title} src={url}/>);
        expect( container ).toMatchSnapshot();
    });

    test('Should show Image with URL & ALT indicated', () => {
        render(<GifItem title={title} src={url}/>);
        const { src,alt } = screen.getByRole('img');
        expect( src ).toBe( src );
        expect( alt ).toBe( alt );
    });

    test('should show Component title', () => {
        render(<GifItem title={title} src={url}/>);
        expect( screen.getByText( title )).toBeTruthy();
    })
});