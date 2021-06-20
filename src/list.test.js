import List from './list';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({adapter: new Adapter()});

let mockState = {
    dataToDisplay: [
        {
            "name": "The Birds",
            "poster-image": "poster8.jpg"
        },
        {
            "name": "Family Pot",
            "poster-image": "posterthatismissing.jpg"
        }
    ],
    value: ''
}

describe('testing list component', () => {

    let list = shallow(<List state={mockState} />);

    it("correct amount of data listed", () => {
        expect(list.find('h1').length).toEqual(2);
    })
})