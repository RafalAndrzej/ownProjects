import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import AppStateContext from '../../../context/AppStateContext';

import classes from './MenuItem.module.css';

const MenuItem: React.FC<{ href: string; title: string }> = (props) => {
   const appStateCtx = useContext(AppStateContext);
   const router = useRouter();

   if (appStateCtx.isLogin) {
      if (router.query.slug && router.query.slug[0] === props.href.slice(1)) {
         return (
            <Link className={classes.active} href={props.href}>
               {props.title}
            </Link>
         );
      } else {
         return <Link href={props.href}>{props.title}</Link>;
      }
   } else {
      if (router.query.slug && router.query.slug[0] === props.href.slice(1)) {
         return (
            <button disabled className={classes.btn}>
               {props.title}
            </button>
         );
      } else {
         return (
            <button disabled className={classes.btn}>
               {props.title}
            </button>
         );
      }
   }
};

export default MenuItem;
