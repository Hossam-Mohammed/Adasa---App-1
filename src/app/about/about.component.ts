import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import type { Auther } from '../auther.interface.js';

@Component({
  selector: 'app-about',
  imports: [MatIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  authers: Auther[] = [
    {
      name: 'سالم أحمد',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      role: 'مصور محترف',
    },
    {
      name: 'محمد علي',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      role: 'مصور بورتريه',
    },
    {
      name: 'إبراهيم حسن',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'مصور طبيعة',
    },
    {
      name: 'داود خالد',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      role: 'مدرب تصوير',
    },
    {
      name: 'ليث محمود',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
      role: 'فنان بصري',
    },
    {
      name: 'جمال عبدالله',
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
      role: 'مصور ومراجع تقني',
    },
    {
      name: 'خالد الفيصل',
      avatar:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
      role: 'مصور فلكي',
    },
    {
      name: 'نادر سعيد',
      avatar:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face',
      role: 'مصور شوارع',
    },
    {
      name: 'هاني الشمري',
      avatar:
        'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face',
      role: 'مصور طعام',
    },
    {
      name: 'عمر الراشد',
      avatar:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face',
      role: 'مصور حياة برية',
    },
    {
      name: 'فارس العلي',
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
      role: 'فنان فوتوغرافي',
    },
    {
      name: 'سامي الحربي',
      avatar:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face',
      role: 'خبير تعديل صور',
    },
    {
      name: 'رامي الخطيب',
      avatar:
        'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face',
      role: 'مصور ماكرو',
    },
    {
      name: 'باسم المصري',
      avatar:
        'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face',
      role: 'مصور فني',
    },
    {
      name: 'منصور الزهراني',
      avatar:
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face',
      role: 'مصور زفاف',
    },
    {
      name: 'فيصل الدوسري',
      avatar:
        'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face',
      role: 'مصور جوي',
    },
    {
      name: 'لؤي الصالح',
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face',
      role: 'مصور تجاري',
    },
    {
      name: 'طارق النعيمي',
      avatar:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face',
      role: 'مصور معماري',
    },
    {
      name: 'أحمد الشهري',
      avatar:
        'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face',
      role: 'مصور رياضي',
    },
    {
      name: 'ماجد القحطاني',
      avatar:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face',
      role: 'مصور استوديو',
    },
    {
      name: 'ياسر العتيبي',
      avatar:
        'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face',
      role: 'مصور رحالة',
    },
    {
      name: 'دحام الحسيني',
      avatar:
        'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face',
      role: 'فنان بصري',
    },
    {
      name: 'نايف المطيري',
      avatar:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
      role: 'مصور مواليد',
    },
    {
      name: 'عبدالله الغامدي',
      avatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face',
      role: 'مصور عقارات',
    },
    {
      name: 'كريم الفهد',
      avatar:
        'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face',
      role: 'خبير تقني',
    },
    {
      name: 'سلطان الراجحي',
      avatar:
        'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face',
      role: 'فنان تصوير',
    },
    {
      name: 'فهد السبيعي',
      avatar:
        'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face',
      role: 'مراجع معدات',
    },
    {
      name: 'راشد الجاسر',
      avatar:
        'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face',
      role: 'فنان بصري',
    },
  ];
}
