import React from 'react';
import Button from '../components/ui/Button.jsx'; // or just use a regular button if not using shadcn/ui


const Logout = () => {
  // Placeholder for logout logic
  const handleLoginRedirect = () => {
    // Replace with actual navigation later
    console.log('Redirect to login page...');
  };

  return (
    <div className="logout-page flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      {/* Placeholder for logout icon */}
      <div className="logout-icon mb-4 text-5xl">🔒</div>

      <h2 className="text-2xl font-semibold mb-2">You have been logged out</h2>
      <p className="text-gray-600 mb-6">Thank you for banking with us.</p>

      <Button onClick={handleLoginRedirect} className="bg-primary text-white px-4 py-2 rounded">
        Go to Login
      </Button>
    </div>
  );
};

export default Logout;
