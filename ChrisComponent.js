import React from 'react';
import { useParams } from 'react-router-dom';

function ChrisComponent() {
  const { email, session } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Hello Chris!</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Session Details:</strong> {session}</p>
    </div>
  );
}

export default ChrisComponent;
