import { ArticleCard } from '@/components/ArticleCard'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'

export const metadata = {
  title: 'Articles',
  description: 'Announcements and articles from the Ramzan Talent Scholarship.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      eyebrow="News & articles"
      title="Latest updates"
      intro="Scholarship announcements, application news and thoughts on education in Pakistan."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.slug}
            article={article}
            featured={index === 0}
          />
        ))}
      </div>
    </SimpleLayout>
  )
}
