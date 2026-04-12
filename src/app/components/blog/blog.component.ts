import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BLOG_POSTS, type BlogPostModel } from '../../shared/data/blog-posts.data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  readonly posts: BlogPostModel[] = BLOG_POSTS;

  postTitleKey(id: number): string {
    return `blog.post${id}.title`;
  }
  postExcerptKey(id: number): string {
    return `blog.post${id}.excerpt`;
  }
  postDateKey(id: number): string {
    return `blog.post${id}.date`;
  }
  postCategoryKey(id: number): string {
    return `blog.post${id}.category`;
  }

  trackBySlug(_index: number, post: BlogPostModel): string {
    return post.slug;
  }
}
