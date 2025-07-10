import React from 'react';
import { ArrowDown } from 'lucide-react';
import StatCard from './StatCard';

const ExpensesCard: React.FC = () => (
  <StatCard
    title="Expenses"
    amount="$2,270.00"
    change="+1.8%"
    changeColor="text-red-600"
    icon={<ArrowDown className="text-red-600 w-5 h-5" />}
    iconBg="bg-red-100"
  />
);

export default ExpensesCard;

