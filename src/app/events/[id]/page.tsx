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

  // Filter out the "人時事地物" section from markdown content
  const filteredContent = content
    .split(/(?=^## )/m)
    .filter(section => !section.trim().startsWith('## 人時事地物'))
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
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-6 border-b pb-6 border-gray-100 dark:border-gray-800">
          <span className="text-lg font-mono text-blue-600 dark:text-blue-400 font-bold">
            {eventInfo.date} {eventInfo.time}
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            {eventInfo.location}
          </span>
          <span className="text-sm px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
            {eventInfo.category}
          </span>
        </div>

        <article className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{filteredContent}</ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">相關人物</h3>
              <div className="flex flex-wrap gap-2">
                {eventInfo.people.map(person => (
                  <span key={person} className="text-sm text-gray-700 dark:text-gray-300">
                    {person}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">標籤</h3>
              <div className="flex flex-wrap gap-2">
                {eventInfo.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-600 dark:text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
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
