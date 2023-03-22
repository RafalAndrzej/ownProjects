import Image from 'next/image';
import Link from 'next/link';

import classes from './Logo.module.css';

const Logo: React.FC<{ onClickFn: () => void; currentSheme: boolean }> = (props) => {
   const imageSrc = !props.currentSheme
      ? '/icons/icons8-day-and-night-50-day.png'
      : '/icons/icons8-day-and-night-50-night.png';

   return (
      <div className={classes.logo}>
         <Link href="/">
            <Image src="/icons/sample-logo.svg" alt="Logo firmowe" fill sizes="100%"></Image>
         </Link>
         <Image
            onClick={props.onClickFn}
            src={imageSrc}
            alt="change color theme image"
            width={50}
            height={50}></Image>
      </div>
   );
};

export default Logo;
