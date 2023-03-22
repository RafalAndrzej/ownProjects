import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import React from 'react';

import PageTemplate from '../../components/template/PageTemplate';

import EmptyPage from '../../helpers/pageRenderer/EmptyPage';
import AllEventsPage from '../../helpers/pageRenderer/AllEventsPage';
import { getAllData, menuListRender, findHeadTitle, getAllAnnouncements } from '../../helpers/api-util';

import { IParams, MenuStructure, Announcements, Turystyka } from '../../types/globalTypes';

import SelectedEventsPage from '../../helpers/pageRenderer/SelectedEventPage';

function MainPage({ headTitle, sideMenuList, content }: InferGetStaticPropsType<typeof getStaticProps>) {
   const router = useRouter();

   // Rendering Page
   function renderPageContent() {
      let pageContent;

      switch (true) {
         case router.query.slug && router.query.slug.length === 1:
            pageContent = (
               <PageTemplate menuList={sideMenuList}>
                  {content ? <AllEventsPage content={content} /> : <EmptyPage />}
               </PageTemplate>
            );
            break;
         case router.query.slug && router.query.slug.length === 2:
            pageContent = (
               <PageTemplate menuList={sideMenuList}>
                  {content ? <SelectedEventsPage content={content} /> : <EmptyPage />}
               </PageTemplate>
            );
            break;
      }
      return (
         <React.Fragment>
            <Head>
               <title>{headTitle}</title>
            </Head>
            {pageContent}
         </React.Fragment>
      );
   }

   return renderPageContent();
}

export const getStaticProps: GetStaticProps<{
   headTitle: string;
   sideMenuList: MenuStructure[];
   content: (Announcements & Turystyka)[];
}> = async (context) => {
   const { slug } = context.params as IParams;

   const filter = await findHeadTitle(slug![0]);
   const sideMenuList = await menuListRender(3, undefined);
   const content = (await getAllAnnouncements(slug![0])) as (Announcements & Turystyka)[];

   return {
      props: {
         headTitle: filter!.title,
         sideMenuList,
         content,
      },
   };
};

export async function getStaticPaths() {
   const data = await getAllData();

   // slug for aside menu
   const mainPaths = data.menu.map((path) => ({ params: { slug: [path.href.slice(1)] } }));
   // slug for selected event
   const allPaths: { params: { slug: string[] } }[] = [];

   data.content.map((content) => {
      allPaths.push({ params: { slug: Object.keys(content) } });

      return Object.values(content).forEach((el) =>
         el.forEach((el) => {
            allPaths.push({ params: { slug: [...Object.keys(content), el.id] } });
         })
      );
   });

   return {
      paths: allPaths.concat(mainPaths),
      fallback: false,
   };
}

export default MainPage;
