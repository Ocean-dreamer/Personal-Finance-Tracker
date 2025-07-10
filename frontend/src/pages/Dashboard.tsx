import React from 'react';
import StatsOverview from '../components/Dashboard/StatsOverview/StatsOverview';
import InsightsSection from '../components/Dashboard/InsightsSection/InsightsSection';
import BudgetGoalsSection from '../components/Dashboard/BudgetGoalsSection/BudgetGoalsSection';


const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6 min-h-screen">
      <StatsOverview />
      <InsightsSection />
	    <BudgetGoalsSection />
    </div>
  );
};

export default Dashboard;

