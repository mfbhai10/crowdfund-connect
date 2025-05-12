const FilterTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["all", "ongoing", "recent", "ended"];

  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize py-1 px-4 rounded ${
            activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;