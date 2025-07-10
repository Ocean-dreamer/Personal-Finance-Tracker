import React from 'react';
import SpendingChart from './SpendingChart';
import RecentTransactions from './RecentTransactions';

const InsightsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      <SpendingChart />
      <RecentTransactions />
    </div>
  );
};

export default InsightsSection;

