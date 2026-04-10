import { Component, ChangeDetectionStrategy } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  category: string;
  categoryUrl: string;
  imageUrl: string;
  imageSrcset: string;
  postUrl: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly browseUrl = 'https://graphica-marketing.com/blog/';

  readonly posts: BlogPost[] = [
    {
      id: 1,
      title: 'لماذا أصبح التصوير الفوتوغرافي عنصرًا حاسمًا في نجاح العلامة التجارية؟',
      excerpt: 'في عالم التسويق الرقمي المعاصر، لم يعد التصوير الفوتوغرافي مجرد لقطات جميلة تُزيّن المنشورات والمواقع. بل أصبح ركيزةً استراتيجية تُحدد كيف يُدرك العملاء علامتك التجارية.',
      date: 'يناير 15, 2026',
      dateIso: '2026-01-15',
      category: 'التصوير الإحترافي',
      categoryUrl: 'https://graphica-marketing.com/category/photography/',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/10-1024x576.jpg',
      imageSrcset: 'https://graphica-marketing.com/wp-content/uploads/2025/12/10-1024x576.jpg 1024w, https://graphica-marketing.com/wp-content/uploads/2025/12/10-300x169.jpg 300w, https://graphica-marketing.com/wp-content/uploads/2025/12/10-768x432.jpg 768w',
      postUrl: 'https://graphica-marketing.com/%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d8%a3%d8%b5%d8%a8%d8%ad-%d8%a7%d9%84%d8%aa%d8%b5%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%81%d9%88%d8%aa%d9%88%d8%ba%d8%b1%d8%a7%d9%81%d9%8a-%d8%b9%d9%86%d8%b5%d8%b1%d9%8b%d8%a7-%d8%ad%d8%a7%d8%b3%d9%85%d9%8b%d8%a7/',
    },
    {
      id: 2,
      title: 'لماذا لم يعد تطوير الهوية التجارية يعتمد على التصميم فقط؟',
      excerpt: 'في عالم الأعمال الحديث، لم يعد بناء الهوية التجارية مجرد اختيار لون مناسب أو تصميم شعار جذاب، بل أصبح علمًا قائمًا بذاته يجمع بين الفن والاستراتيجية وعلم النفس السلوكي.',
      date: 'ديسمبر 21, 2025',
      dateIso: '2025-12-21',
      category: 'تطوير الهويات البصرية',
      categoryUrl: 'https://graphica-marketing.com/category/brand-identity/',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/01-1024x576.jpg',
      imageSrcset: 'https://graphica-marketing.com/wp-content/uploads/2025/12/01-1024x576.jpg 1024w, https://graphica-marketing.com/wp-content/uploads/2025/12/01-300x169.jpg 300w, https://graphica-marketing.com/wp-content/uploads/2025/12/01-768x432.jpg 768w',
      postUrl: 'https://graphica-marketing.com/%d9%84%d9%85%d8%a7%d8%b0%d8%a7-%d9%84%d9%85-%d9%8a%d8%b9%d8%af-%d8%aa%d8%b7%d9%88%d9%8a%d8%b1-%d8%a7%d9%84%d9%87%d9%88%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d9%8a%d8%a9/',
    },
    {
      id: 3,
      title: 'كيف يغيّر الذكاء الاصطناعي مفهوم بناء العلامة التجارية؟',
      excerpt: 'لم يعد الذكاء الاصطناعي مجرد أداة تقنية تُستخدم في الخلفية، بل أصبح شريكًا استراتيجيًا في بناء العلامات التجارية وتشكيل هويتها وتوجيه قراراتها.',
      date: 'ديسمبر 21, 2025',
      dateIso: '2025-12-21',
      category: 'تسويق رقمي',
      categoryUrl: 'https://graphica-marketing.com/category/digital-marketing/',
      imageUrl: 'https://graphica-marketing.com/wp-content/uploads/2025/12/AI-Brand-Building-1024x576.jpg',
      imageSrcset: 'https://graphica-marketing.com/wp-content/uploads/2025/12/AI-Brand-Building-1024x576.jpg 1024w, https://graphica-marketing.com/wp-content/uploads/2025/12/AI-Brand-Building-300x169.jpg 300w',
      postUrl: 'https://graphica-marketing.com/%d9%83%d9%8a%d9%81-%d9%8a%d8%ba%d9%8a%d9%91%d8%b1-%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%a7%d8%b5%d8%b7%d9%86%d8%a7%d8%b9%d9%8a/',
    },
  ];

  trackById(_index: number, post: BlogPost): number {
    return post.id;
  }
}
