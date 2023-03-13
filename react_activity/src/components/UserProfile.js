import React from 'react';

const UserProfile = ({ user }) => {
  const { firstName, lastName, school, email, profilePicture, classLevel } = user;
  return (
    <div className="user-profile">
      <img src={profilePicture} alt={`${firstName} ${lastName}`} />
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{school}</p>
      <p className={classLevel === 'Freshmen' ? 'green-text' : ''}>{classLevel}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default UserProfile;
