import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

configure({ adapter: new Adapter() });

describe("Testing App", () => {

  const app = shallow(<App />);

  it('Checking Search component mounted', () => {

    expect(app.find('Search').exists()).toBe(true);

  })

  it('Checking List component mounted', () => {

    expect(app.find('List').exists()).toBe(true);

  })


}
)

