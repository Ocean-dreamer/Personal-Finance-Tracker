import React from 'react';
import { DollarSign } from 'lucide-react';
import StatCard from './StatCard';

const TotalBalanceCard: React.FC = () => (
  <StatCard
    title="Total Balance"
    amount="$4,250.00"
    change="+2.5%"
    changeColor="text-green-600"
    icon={<DollarSign className="text-green-600 w-5 h-5" />}
    iconBg="bg-green-100"
  />
);

export default TotalBalanceCard;

