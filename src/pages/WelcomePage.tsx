import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

const WelcomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data: User = await response.json();
        setUser(data);
      } catch (err: unknown) {
        console.error('Failed to fetch user data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Welcome Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p>Hello, {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Failed to load user data</p>
      )}
    </div>
  );
};

export default WelcomePage;
