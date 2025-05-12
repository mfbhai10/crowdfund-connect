import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterTabs from "./FilterTabs";

const FundingEvents = () => {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const filteredEvents =
    activeTab === "all"
      ? events
      : events.filter((e) => e.status === activeTab);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Funding Campaigns</h2>
      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const progress = Math.min((event.raised / event.goal) * 100, 100);

          return (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 shadow p-4 rounded border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {event.description}
              </p>
              <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded-full mb-2">
                <div
                  className="h-3 bg-green-500 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Raised: {event.raised} / {event.goal} Coins
              </p>
              <Link
                to={`/donate/${event.id}`}
                className="inline-block bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
              >
                Donate
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundingEvents;