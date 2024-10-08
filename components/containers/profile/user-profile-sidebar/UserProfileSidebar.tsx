import ProfileLeftMenu from '@/components/shared/profile-left-menu/ProfileLeftMenu';
import React from 'react';

const UserProfileSidebar = ({ setActiveProfileTab, activeProfileTab }: any) => {
  return (
    <div className="bg-background sticky top-20 h-fit rounded-lg border p-4 md:w-[260px]">
      <ProfileLeftMenu {...{ activeProfileTab, setActiveProfileTab }} />
    </div>
  );
};

export default UserProfileSidebar;
