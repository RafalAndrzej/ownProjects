import { GetStaticProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import React from 'react';

import PageTemplate from '../components/template/PageTemplate';
import Slider from '../components/ui/Slider';

import { menuListRender, sliderPictureRender } from '../helpers/api-util';
import { MenuStructure, SliderStructure } from './../types/globalTypes';

import classes from './Index.module.css';

const HomePage: React.FC<{
   sideMenuList: MenuStructure[];
   sliderPicture: SliderStructure[];
}> = (props) => {
   return (
      <React.Fragment>
         <Head>
            <title>Nasze związki</title>
         </Head>
         <PageTemplate menuList={props.sideMenuList}>
            <div className={classes.image}>
               <Image
                  src="/images/index/mainPicture.jpg"
                  fill
                  priority={true}
                  sizes="100%"
                  alt="Main Picture"></Image>
            </div>
            <h3>Nasi partnerzy</h3>
            <div className={classes.slider}>
               <div className={classes.content}>
                  <Slider allPictures={props.sliderPicture} />
               </div>
            </div>
         </PageTemplate>
      </React.Fragment>
   );
};

export const getStaticProps: GetStaticProps<{
   sideMenuList: MenuStructure[];
   sliderPicture: SliderStructure[];
}> = async () => {
   const sideMenuList = await menuListRender(3, undefined);
   const sliderPicture = await sliderPictureRender();

   return {
      props: {
         sideMenuList,
         sliderPicture,
      },
   };
};

export default HomePage;
