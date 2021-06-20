import Search from './search';
import initialState from './initialState';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

const dispatch = jest.fn();

describe('testing search component', () => {
    const search = shallow(<Search state={initialState} dispatch={dispatch} />);

    it("checking if 2 images are rendered", () => {
        expect(search.find('img').length).toBe(2);
    })

    it("back icon rendered", () => {
        expect(search.find('img').at(0).prop('src')).toEqual('Back.png');
    })

    it('search icon rendered', () => {
        expect(search.find('img').at(1).prop('src')).toEqual('search.png');
    })

    it("checking if textbox is rendered", () => {
        expect(search.find('textarea').exists()).toBe(true);
    })

    describe('testing for textarea', () => {

        it("default text", () => {
            expect(search.find('textarea').prop('value')).toEqual('');
        })

        it("checking textarea placeholder", () => {
            expect(search.find('textarea').prop('placeholder')).toEqual('Romantic Comedy');
        })
    })
})