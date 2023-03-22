import galeriaImg from '../../img/index/galeria/*.jpg';

export default class View {
   _data;
   _parentElement = document.querySelector('.header');

   galeriaZdjec = function (picture) {
      Object.entries(galeriaImg).forEach(([key]) => picture.push(key));
   };

   render(data) {
      this._data = data;
      const markup = this._generateMarkup();

      this._parentElement.insertAdjacentHTML('afterend', markup);
   }
}
