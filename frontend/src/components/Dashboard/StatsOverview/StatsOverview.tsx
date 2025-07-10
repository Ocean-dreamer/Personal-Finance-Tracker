import React from 'react';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpensesCard from './ExpensesCard';
import SavingsCard from './SavingsCard';

const StatsOverview: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <TotalBalanceCard />
      <IncomeCard />
      <ExpensesCard />
      <SavingsCard />
    </div>
  );
};

export default StatsOverview;

