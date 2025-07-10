import React from 'react';

interface BudgetGoalCardProps {
  title: string;
  percentage: number;
  current: number;
  target: number;
  deadline: string;
}

const BudgetGoalCard: React.FC<BudgetGoalCardProps> = ({
  title,
  percentage,
  current,
  target,
  deadline,
}) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-700  hover:bg-gray-400 dark:hover:bg-gray-600  rounded-xl p-4 shadow-md w-full max-w-sm transform transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between mb-1">
        <h4 className="font-semibold text-gray-800 dark:text-white">{title}</h4>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>${current.toLocaleString()} / ${target.toLocaleString()}</span>
        <span>{deadline}</span>
      </div>
    </div>
  );
};

export default BudgetGoalCard;

