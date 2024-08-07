import React from 'react';
import './UserList.css'

interface UserItemProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="user-item">
      <label>
        Id - {user.id}
      </label>
      <label>Nome:
        <p>{user.name}</p>
      </label>
      <label>Email:
        <p>{user.email}</p>
      </label>
    </div>
  );
};

export default UserItem;
