const News = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          🚀 <strong>Dark Mode</strong> feature added for better user
          experience.
        </li>
        <li>
          💸 Donation system improved with coin validation and success modals.
        </li>
        <li>
          🎯 FilterTabs now support campaign sorting by status: ongoing, recent,
          ended.
        </li>
        <li>
          📦 Campaigns data now loads from local JSON for easy modification.
        </li>
      </ul>
    </div>
  );
};

export default News;
