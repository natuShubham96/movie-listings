import * as page1 from './API/CONTENTLISTINGPAGE-PAGE1.json';
import * as page2 from './API/CONTENTLISTINGPAGE-PAGE2.json';
import * as page3 from './API/CONTENTLISTINGPAGE-PAGE3.json';

const initialState = {
    dataToDisplay: [...page1.default.page["content-items"].content,...page2.default.page["content-items"].content,...page3.default.page["content-items"].content],
    value: ""
  }

export default initialState;