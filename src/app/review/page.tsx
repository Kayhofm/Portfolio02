"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ReviewPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Set cookie and redirect
    document.cookie = 'portfolio_review=true; path=/; max-age=604800'; // 7 days
    router.push('/');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Enabling portfolio review mode...</p>
    </div>
  );
}