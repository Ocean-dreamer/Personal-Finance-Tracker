import React from 'react';

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
        <li>✅ Logged in from new device – 2 hours ago</li>
        <li>💳 Added new transaction – 1 day ago</li>
        <li>⚙️ Updated profile picture – 3 days ago</li>
      </ul>
    </div>
  );
};

export default RecentActivity;
