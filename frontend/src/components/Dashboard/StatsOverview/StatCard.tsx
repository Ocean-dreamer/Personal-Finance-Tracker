import React from 'react';

interface StatCardProps {
  title: string;
  amount: string;
  change: string;
  changeColor: string;
  icon: React.ReactNode;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  amount,
  change,
  changeColor,
  icon,
  iconBg,
}) => {
  return (
    <div className="p-6 rounded-2xl shadow-md flex items-center justify-between w-full max-w-sm bg-gray-300 hover:bg-white  dark:bg-gray-900  dark:text-gray-400">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{amount}</h2>
        <p className={`text-sm ${changeColor} mt-1`}>{change} from last month</p>
      </div>
      <div className={`p-3 rounded-full ${iconBg}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
