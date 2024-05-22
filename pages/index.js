import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="landing-page">
        <Image src="/images/logo.png" alt="Calorie Tracker Logo" width={200} height={200} />
        <h1>Calorie Tracker</h1>
        <button onClick={() => router.push('/home')}>Enter</button>
      </div>
    </div>
  );
};

export default LandingPage;
