import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { SiteInfo } from '../site-info.interface.js';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  siteInfos: SiteInfo = {
    name: 'عدسة',
    tagline: 'عالم التصوير الفوتوغرافي',
    description:
      'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
    email: 'hello@adasah.com',
    social: [
      { name: 'twitter', link: 'https://twitter.com/adasah' },
      { name: 'github', link: 'https://github.com/adasah' },
      { name: 'linkedin', link: 'https://linkedin.com/company/adasah' },
      { name: 'youtube', link: 'https://youtube.com/@adasah' },
    ],
  };
}
