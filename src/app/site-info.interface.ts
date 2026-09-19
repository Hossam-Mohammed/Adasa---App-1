import type { Social } from './social.interface.js';

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: Social[];
}
