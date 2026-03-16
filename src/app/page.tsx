import { getAllEvents } from '@/lib/events';
import Link from 'next/link';

export default function Home() {
  const events = getAllEvents();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">dpp_gov_epoch</h1>
      
      <div className="relative border-l-2 border-blue-500 ml-4">
        {events.map((event) => (
          <div key={event.id} className="mb-10 ml-6 relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 group-hover:scale-125 transition-transform" />
            
            <Link href={`/events/${event.id}`} className="block">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                {event.title}
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                {event.event}
              </p>
              
              <div className="text-blue-500 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                閱讀更多 <span>→</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
