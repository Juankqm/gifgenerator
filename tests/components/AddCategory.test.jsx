import { fireEvent,render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Testing <AddCategory/> component', () => {
    
    test('Should chance the value of the box', () => {

        render(<AddCategory onNewCategor={ () => {} } /> );
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama'}} );
        expect( input.value ).toBe('Saitama');
    
    });

})