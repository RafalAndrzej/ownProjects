import Link from 'next/link';
import { ReactNode } from 'react';

import classes from './Button.module.css';

const Button: React.FC<{
   href?: string;
   children: ReactNode;
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   className?: string;
}> = (props) => {
   if (props.href) {
      return (
         <Link className={props.className} href={props.href}>
            <button className={classes.btn}>{props.children}</button>
         </Link>
      );
   }

   return (
      <button
         className={props.className ? `${classes.btn} ${props.className}` : classes.btn}
         onClick={props.onClick}>
         {props.children}
      </button>
   );
};

export default Button;
