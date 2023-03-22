import fs from 'fs/promises';
import path from 'path';

import { DataStructure, Turystyka, Announcements } from '../types/globalTypes';

export async function getAllData() {
   const filePatch = path.join(process.cwd(), 'public/data', 'demo.json');
   const jsonData = await fs.readFile(filePatch, 'utf8');
   const data: DataStructure = JSON.parse(jsonData);
   return data;
}

export async function menuListRender(start: number | undefined, end: number | undefined) {
   const allData = await getAllData();
   return allData.menu.slice(start, end);
}

export async function findHeadTitle(currentUrl: string) {
   const filterHeadTitle = await getAllData();
   return filterHeadTitle.menu.find((title) => title.href.slice(1) === currentUrl);
}

export async function sliderPictureRender() {
   const allData = await getAllData();
   return allData.slider;
}

export async function getAllAnnouncements(params: string) {
   const allData = await getAllData();

   const [result] = allData.content.filter((obj) => Object.hasOwn(obj, params));

   if (result) {
      return Object.values(result)[0] as (Announcements & Turystyka)[];
   }
   return null;
}
