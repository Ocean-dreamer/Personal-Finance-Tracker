import React from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileStats from '../components/Profile/ProfileStats';
import RecentActivity from '../components/Profile/RecentActivity';
import AccountSettings from '../components/Profile/AccountSettings';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-6 space-y-6  min-h-screen">
      <ProfileHeader />
      <ProfileStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentActivity />
        <AccountSettings />
      </div>
    </div>
  );
};

export default ProfilePage;
