import indexView from './indexView.js';

class aktualnosci extends indexView {
   _indexONas() {
      return console.log(this);
   }
}
export default new aktualnosci();
