const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">How CrowdFund Connect Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="text-gray-700 bg-white shadow rounded p-4 border">
          <h3 className="text-lg font-semibold mb-2">1. Add Coins</h3>
          <p>
            Add virtual coins to your balance using the "Add Coins" page.
          </p>
        </div>
        <div className="text-gray-700 bg-white shadow rounded p-4 border">
          <h3 className="text-lg font-semibold mb-2">2. Browse Campaigns</h3>
          <p>
            Explore different fundraising campaigns and learn about their goals.
          </p>
        </div>
        <div className="text-gray-700 bg-white shadow rounded p-4 border">
          <h3 className="text-lg font-semibold mb-2">3. Donate Coins</h3>
          <p>
            Use your coins to support campaigns you care about.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
