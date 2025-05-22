import React from 'react';
import './App.css';

function ProfilePage() {
  const user = {
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bio: 'Software engineer passionate about React and UI/UX design.',
    location: 'New York, USA',
    email: 'jane.doe@example.com',
    website: 'https://janedoe.dev',
    skills: ['React', 'JavaScript', 'CSS', 'Node.js'],
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h1>{user.name}</h1>
        <p className="bio">{user.bio}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p><strong>Website:</strong> <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

        <h3>Skills</h3>
        <ul className="skills-list">
          {user.skills.map((skill, index) => (
            <li key={index} className="skill">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
