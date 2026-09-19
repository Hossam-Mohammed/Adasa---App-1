import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ArticleComponent } from './article/article.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'عدسة - عالم التصوير | الصفحة الرئيسية' },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'عدسة - عالم التصوير | المدونة',
    children: [
      {
        path: 'article',
        component: ArticleComponent,
      },
    ],
  },
  {
    path: 'article/:slug',
    component: ArticleComponent,
    title: 'عدسة - عالم التصوير',
  },
  { path: 'about', component: AboutComponent, title: 'عدسة - عالم التصوير | من نحن' },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'عدسة - عالم التصوير | الصفحة غير موجودة',
  },
];
