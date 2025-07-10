import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Calendar, DollarSign, Filter, MoreVertical } from 'lucide-react';

// Transaction interface
interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  merchant?: string;
  icon?: string;
}

// Props interface
interface RecentTransactionsProps {
  transactions?: Transaction[];
  maxItems?: number;
  showFilter?: boolean;
  onTransactionClick?: (transaction: Transaction) => void;
  onViewAll?: () => void;
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions = [],
  maxItems = 5,
  showFilter = true,
  onTransactionClick,
  onViewAll
}) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

  // Default sample data if no transactions provided
  const defaultTransactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 5.80,
      category: 'Food & Dining',
      description: 'Coffee',
      merchant: 'Starbucks',
      date: '2024-01-15',
      icon: '☕'
    },
    {
      id: '2',
      type: 'expense',
      amount: 23.99,
      category: 'Shopping',
      description: 'Electronics',
      merchant: 'Amazon',
      date: '2024-01-14',
      icon: '🛒'
    },
    {
      id: '3',
      type: 'expense',
      amount: 14.50,
      category: 'Entertainment',
      description: 'Video Game',
      merchant: 'Steam',
      date: '2024-01-13',
      icon: '🎮'
    },
    {
      id: '4',
      type: 'income',
      amount: 2500.00,
      category: 'Salary',
      description: 'Monthly Salary',
      merchant: 'Company Inc',
      date: '2024-01-12',
      icon: '💰'
    },
    {
      id: '5',
      type: 'expense',
      amount: 45.20,
      category: 'Transportation',
      description: 'Gas',
      merchant: 'Shell',
      date: '2024-01-11',
      icon: '⛽'
    },
    {
      id: '6',
      type: 'income',
      amount: 150.00,
      category: 'Freelance',
      description: 'Web Design',
      merchant: 'Client A',
      date: '2024-01-10',
      icon: '💻'
    }
  ];

  const displayTransactions = transactions.length > 0 ? transactions : defaultTransactions;

  // Filter and sort transactions
  const filteredTransactions = displayTransactions
    .filter(transaction => filter === 'all' || transaction.type === filter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return b.amount - a.amount;
      }
    })
    .slice(0, maxItems);

  // Get category icon
  const getCategoryIcon = (category: string, customIcon?: string) => {
    if (customIcon) return customIcon;
    
    const iconMap: { [key: string]: string } = {
      'Food & Dining': '🍽️',
      'Shopping': '🛍️',
      'Entertainment': '🎬',
      'Transportation': '🚗',
      'Salary': '💰',
      'Freelance': '💻',
      'Healthcare': '🏥',
      'Utilities': '💡',
      'Education': '📚',
      'Travel': '✈️'
    };
    
    return iconMap[category] || '💳';
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  // Get transaction amount color
  const getAmountColor = (type: 'income' | 'expense') => {
    return type === 'income' 
      ? 'text-green-600 dark:text-green-400' 
      : 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-gray-300 hover:bg-white  dark:text-gray-400 dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 w-full transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Recent Transactions
          </h3>
        </div>
        
        {showFilter && (
          <div className="flex items-center space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'all' | 'income' | 'expense')}
              className="text-xs bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            
            <button
              onClick={() => setSortBy(sortBy === 'date' ? 'amount' : 'date')}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              title={`Sort by ${sortBy === 'date' ? 'amount' : 'date'}`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <DollarSign className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>No transactions found</p>
          </div>
        ) : (
          filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => onTransactionClick?.(transaction)}
              className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-lg">
                      {getCategoryIcon(transaction.category, transaction.icon)}
                    </span>
                  </div>
                </div>
                
                {/* Transaction Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium text-gray-900 dark:text-white truncate">
                      {transaction.merchant || transaction.description}
                    </p>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{transaction.category}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Amount */}
              <div className="flex items-center space-x-2">
                <span className={`font-semibold ${getAmountColor(transaction.type)}`}>
                  {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </span>
                <MoreVertical className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))
        )}
      </div>

      {/* View All Button */}
      {displayTransactions.length > maxItems && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <button
            onClick={onViewAll}
            className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            View All Transactions ({displayTransactions.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;