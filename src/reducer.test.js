import reducer from './reducer';
import {configure} from 'enzyme';
import initialState from './initialState';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const mockResult = {
    "name": "The Birds with an Extra Long Title",
    "poster-image": "poster9.jpg"
}

describe('testing reducer', () => {

    it('when nothing searched', () => {
        expect(reducer(initialState,{type: "change", payload: ""})).toEqual(initialState);
    })

    it("when a character is searched", () => {
        expect(reducer(initialState,{type: 'change', payload: "x"})).toEqual({dataToDisplay: [mockResult], value: "x"});
    })
})