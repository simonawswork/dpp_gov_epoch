import { getAllEvents } from '@/lib/events';

export default function Home() {
  const events = getAllEvents();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">dpp_gov_epoch</h1>
      
      <div className="relative border-l-2 border-blue-500 ml-4">
        {events.map((event) => (
          <div key={event.id} className="mb-10 ml-6 relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
              <span className="text-sm font-mono text-blue-600 dark:text-blue-400 font-bold">
                {event.date} {event.time}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                {event.location}
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
              {event.event}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="text-xs text-gray-500">
                <span className="font-bold">人物:</span> {event.people.join(', ')}
              </div>
              <div className="text-xs text-gray-500">
                <span className="font-bold">標籤:</span> {event.tags.map(tag => `#${tag}`).join(' ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
