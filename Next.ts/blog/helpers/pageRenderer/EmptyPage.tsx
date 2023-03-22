import Image from 'next/image';

import classes from './pageRenderer.module.css';

const EmptyPage = () => {
   return (
      <div className={classes.emptyContainer}>
         <p>Strona w budowie...</p>
         <Image src="/images/stronaWBudowie.svg" width={500} height={300} alt="building picture" />
      </div>
   );
};

export default EmptyPage;
