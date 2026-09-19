import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component.js';
import { BlogComponent } from './blog/blog.component.js';
import { AboutComponent } from './about/about.component.js';
import { NotfoundComponent } from './notfound/notfound.component.js';
import { ArticleComponent } from './article/article.component.js';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'عدسة - عالم التصوير | الصفحة الرئيسية' },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'عدسة - عالم التصوير | المدونة ',
    children: [
      {
        path: 'article',
        component: ArticleComponent,
      },
    ],
  },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'about', component: AboutComponent, title: 'عدسة - عالم التصوير |  من نحن' },
  { path: '**', component: NotfoundComponent, title: 'عدسة - عالم التصوير |  الصفحة غير موجودة' },
];
