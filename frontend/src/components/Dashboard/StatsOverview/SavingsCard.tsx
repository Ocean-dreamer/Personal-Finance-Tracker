import React from 'react';
import { Briefcase } from 'lucide-react';
import StatCard from './StatCard';

const SavingsCard: React.FC = () => (
  <StatCard
    title="Savings"
    amount="$1,850.00"
    change="+12.5%"
    changeColor="text-purple-600"
    icon={<Briefcase className="text-purple-600 w-5 h-5" />}
    iconBg="bg-purple-100"
  />
);

export default SavingsCard;

