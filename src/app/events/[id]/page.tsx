import { getAllEvents, getEventContent } from '@/lib/events';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const events = getAllEvents();
  const eventInfo = events.find((e) => e.id === id);

  if (!eventInfo) {
    notFound();
  }

  const content = getEventContent(eventInfo.source_file);

  // Filter out "人時事地物" and "相關資訊" sections from markdown content
  const filteredContent = content
    .split(/(?=^## )/m)
    .filter(section => !section.trim().startsWith('## 人時事地物') && !section.trim().startsWith('## 相關資訊'))
    .join('');

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="text-blue-500 hover:underline mb-8 inline-block"
      >
        ← 返回列表
      </Link>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-8 border border-gray-200 dark:border-gray-800">
        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{filteredContent}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    id: event.id,
  }));
}
