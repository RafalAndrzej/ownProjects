import * as data from './data.js';
import indexView from './view/indexView.js';

import fale from '../img/fale/*.png';
import ofertaImg from '../img/oferta/*.svg';
import aktualnosciImg from '../img/aktualności/*.jpg';
import galeriaImg from '../img/index/galeria/*.jpg';

controlerIndexContent = function () {
   // Tworzenie zmiennej oferty w Index.html
   const ofertaIndex = function () {
      let markUp = [];

      data.pageContent.oferta.forEach(el => {
         markUp.push(`
             <a href="${
                el.link
             }" target="_blank" class="oferta-index-container__box">
               <img
                 src="${ofertaImg[`${el.img}`]}.svg"
                 src="${el.img}}"
                 alt="${el.alt}"
                 class="oferta-index-container__box--img"
               />
               <h4
                 class="oferta-index-container__box--text heading-4__oferta-index"
               >
               ${el.opis}
               </h4>
             </a>
            `);
      });
      return markUp.join('');
   };

   // Tworzenie zmiennej aktualności w Index.html
   const aktualnosciIndex = function () {
      let markUp = [];

      data.pageContent.aktualnosci.forEach(el => {
         markUp.push(
            `
          <div class="aktualnosci-index__box">
            <img
              src="${aktualnosciImg[el.img]}.jpg"
              alt="${el.alt}"
              class="aktualnosci-index__box--img"
            />
            <div class="aktualnosci-index__box--data">6 stycznia 2022</div>
            <div class="aktualnosci-index__box--opis">
              <span>Uwaga! </span>Zmiana godzin i dni otwarcia Poradni w
              miesiącu lutym 2022
            </div>
            <a href="${el.link}" target="_blank">
              <button class="button">Czytaj więcej</button>
            </a>
          </div>
          `
         );
      });
      return markUp.join('');
   };

   //  Tworzenie zmiennej galerii w Index.html
   const galeriaIndex = function () {
      let markUp = [];

      data.pageContent.galeria.forEach((_, i) => {
         markUp.push(
            `
          <div class="galeria__box" style=transform:translateX(calc(${i}*100%))>
            <img
                src="${galeriaImg[data.pageContent.galeria[i]]}.jpg"
                alt="${data.pageContent.galeria[i]}"
                class="galeria__box--img"
                data-Number="${[i]}"
            />
          </div>
        `
         );
      });
      return markUp.join('');
   };
   const galeriaIndexDots = function () {
      let markUp = [];

      data.pageContent.galeria.forEach((_, i) => {
         markUp.push(`<span data-number="${i}" class="active" >&nbsp;</span>`);
      });
      return markUp.join('');
   };

   return {
      oNas: `
            <section class="o-nas">
              <div class="o-nas__img">&nbsp;</div>
              <div class="o-nas__text">
                <h2 class="heading-2__o-nas">Witamy na stronie Fizjo-Family</h2>
                <h3 class="heading-3__o-nas">
                    Specjalistycznej Poradni Rehabilitacji dziecięcej
                </h3>
                <h3 class="heading-3__o-nas">
                    Niepublicznej Poradni psychologiczno-Pedagogicznej
                </h3>
                <p class="o-nas__text--opis">
                    Poradnia Fizjo-Family powstała w 2015 roku w wyniku
                    przekształcenia istniejącego wcześniej gabinetu rehabilitacji
                    dziecięcej. Od przeszło 8 lat działamy na rynku usług
                    rehabilitacyjnych. Nasi specjaliści sprawują opiekę nad kolejnymi
                    pokoleniami dzieci. Jako placówka niepubliczna świadczymy usługi:
                    nieodpłatne oraz komercyjne. Pracujący w naszej placówce
                    specjaliści: fizjoterapeuci, psycholodzy, pedagodzy, logopedzi,
                    neurologopedzii świadczą bezpłatną terapię dla dzieci w ramach
                    wczesnego wspomagania rozwoju oraz usługi komercyjne. Naszym
                    najważniejszym celem jest zadowolenie małych pacjentów oraz ich
                    rodzin. Mając, to na uwadze zmieniamy się zatrudniając, nowych
                    specjalistów, rozszerzając zakres usług oraz nieustannie
                    podnosząc kwalifikacje pracowników poradni.
                </p>
                <p class="o-nas__text--opis">
                    Jeśli jesteście Państwo zainteresowani rehabilitacją na
                    najwyższym poziomie to znaleźliście się w odpowiednim miejscu.
                    Specjalistyczna Poradnia rehabilitacji dziecięcej powstała z
                    myślą o mieszkańcach Tychów i nie tylko – którzy potrzebują
                    profesjonalnej oraz rzetelnie przeprowadzonej rehabilitacji dla
                    dzieci. Dzięki naszemu wieloletniemu doświadczeniu, szerokim
                    zasobom niezbędnej wiedzy oraz praktycznemu przygotowaniu do
                    zawodu, zdobyliśmy zaufanie wielu Pacjentów.
                </p>
                <p class="o-nas__text--opis o-nas__text--opis-span">
                    Indywidualnie dostosowana rehabilitacja
                </p>
                <p class="o-nas__text--opis o-nas__text--opis-span">
                    Empatia i cierpliwość
                </p>
                <p class="o-nas__text--opis o-nas__text--opis-span">
                    Praca zespołowa
                </p>
                <p class="o-nas__text--opis">
                    Bierzemy pod uwagę potrzeby Pacjenta i dokładamy wszelkich
                    starań, aby spełnić jego oczekiwania.
                </p>
                <p class="o-nas__text--opis">
                    Pracujemy z dziećmi z wadami genetycznymi, autyzmem, Mózgowym
                    Porażeniem Dziecięcym oraz z dorosłymi zmagającymi się z bólami
                    kręgosłupa.
                </p>
                <p class="o-nas__text--opis">
                    Zapraszamy także dzieci wraz z rodzicami, które potrzebują pomocy
                    logopedycznej, neurologopedycznej , psychologicznej i
                    fizjoterapeutycznej. Nieustannie się szkolimy i jesteśmy na
                    bieżąco z nowoczesnymi metodami wsparcia.
                </p>
              </div>
            </section>
         `,
      oferta: `
           <section class="oferta-index">
             <img
               src="${fale['fala-szara-top']}"
               alt=""
               class="oferta-index__fala-up"
             />
             <h3 class="heading-3__oferta-index">oferta</h3>
             <div class="oferta-index-container">
              ${ofertaIndex()}
             </div>
             <img
               src="${fale['fala-szara-botton']}"
               alt=""
               class="oferta-index__fala-down"
             />
           </section>
           `,
      aktualnosci: `
         <section class="aktualnosci-index">
         <h2 class="heading-2__aktualnosci heading-2__aktualnosci--index">
           Aktualności
         </h2>
         <div class="aktualnosci-index__wrapper">
           ${aktualnosciIndex()}
         </div>
         <img
           src="${fale['fala-pomarancz-top']}"
           alt=""
           class="aktualnosci-index__fala"
         />
         </section>
         `,
      galeria: `
         <section class="galeria">
          <h2 class="heading-2__galeria">Galeria</h2>
          <div class="galeria__wrapper">
            <button class="galeria__wrapper--left"></button>
            <div class="galeria__wrapper--center">
                ${galeriaIndex()}
            </div>
            <button class="galeria__wrapper--right"></button>
          </div>
          <div class="galeria__dots">
          ${galeriaIndexDots()}
          </div>
          <img
            src="${fale['fala-pomarancz-botton']}"
            alt=""
            class="aktualnosci-index__fala"
          />
         </section>
         `,
   };
};

const init = function () {
   indexView.galeriaZdjec(data.pageContent.galeria);
   indexView.render(controlerIndexContent());
};
init();
