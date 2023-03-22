import View from './mainView.js';

class IndexView extends View {
   // Rendering page content for index.html
   _generateMarkup() {
      const content = [
         this._data.oNas,
         this._data.oferta,
         this._data.aktualnosci,
         this._data.galeria,
      ];
      return content.join('');
   }
}

export default new IndexView();
