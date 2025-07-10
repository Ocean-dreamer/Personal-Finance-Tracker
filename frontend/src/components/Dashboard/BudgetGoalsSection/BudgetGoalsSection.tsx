import React from 'react';
import BudgetGoalCard from './BudgetGoalCard';

const BudgetGoalsSection: React.FC = () => {
  return (
    <div className="bg-gray-300 hover:bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md w-full space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Budget Goals</h3>
        <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md transform transition-transform duration-300 hover:scale-105">
          Add New Goal
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BudgetGoalCard
          title="Emergency Fund"
          percentage={75}
          current={7500}
          target={10000}
          deadline="Dec 2023"
        />
        <BudgetGoalCard
          title="Emergency Fund"
          percentage={75}
          current={7500}
          target={10000}
          deadline="Dec 2023"
        />
        <BudgetGoalCard
          title="New Car"
          percentage={30}
          current={6000}
          target={20000}
          deadline="Jun 2024"
        />
        <BudgetGoalCard
          title="Vacation"
          percentage={40}
          current={1200}
          target={3000}
          deadline="Mar 2024"
        />
        
        <BudgetGoalCard
          title="New Laptop"
          percentage={60}
          current={900}
          target={1500}
          deadline="Jan 2024"
        />
      </div>
    </div>
  );
};

export default BudgetGoalsSection;

