import React from 'react';
import { ArrowUp } from 'lucide-react';
import StatCard from './StatCard';

const IncomeCard: React.FC = () => (
  <StatCard
    title="Income"
    amount="$6,520.00"
    change="+4.3%"
    changeColor="text-blue-600"
    icon={<ArrowUp className="text-blue-600 w-5 h-5" />}
    iconBg="bg-blue-100"
  />
);

export default IncomeCard;

