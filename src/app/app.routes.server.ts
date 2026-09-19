import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'article/:slug',
    renderMode: RenderMode.Server, // Renders on the server on request instead of prerendering at build time
  },
  {
    path: '**',
    renderMode: RenderMode.Server, // Prerenders static routes like /home and /about
  },
];
