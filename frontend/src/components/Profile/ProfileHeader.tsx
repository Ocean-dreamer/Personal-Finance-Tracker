import React from 'react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md flex items-center gap-6">
      <img
        src="/avatar.jpg"
        alt="User"
        className="w-20 h-20 rounded-full object-cover border-4 border-blue-600"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Athmane El Amine</h2>
        <p className="text-gray-500 dark:text-gray-400">athmane@example.com</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
