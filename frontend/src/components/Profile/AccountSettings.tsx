import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account Settings</h3>
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Change Password
      </button>
      <button className="w-full px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 dark:hover:bg-red-900">
        Logout
      </button>
    </div>
  );
};

export default AccountSettings;
