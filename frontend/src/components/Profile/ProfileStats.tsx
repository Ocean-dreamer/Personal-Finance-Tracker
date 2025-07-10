import React from 'react';

const ProfileStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
        <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Total Balance</h4>
        <p className="text-xl font-bold text-gray-900 dark:text-white">$12,560.00</p>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
        <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Transactions</h4>
        <p className="text-xl font-bold text-gray-900 dark:text-white">135</p>
      </div>
      <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md">
        <h4 className="text-gray-500 dark:text-gray-400 text-sm mb-1">Goals Achieved</h4>
        <p className="text-xl font-bold text-gray-900 dark:text-white">4</p>
      </div>
    </div>
  );
};

export default ProfileStats;
