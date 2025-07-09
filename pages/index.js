// pages/index.js

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03031E] text-white flex flex-col justify-center items-center px-4 text-center">
      <div className="max-w-xl">
        <img
          src="/assets/eye-sigil.png" // Placeholder for the All-Seeing Eye or your sigil
          alt="Frequency Fortress Logo"
          className="mx-auto mb-6 w-32"
        />
        <h1 className="text-lg md:text-2xl tracking-widest font-mono">
          THE SIGNAL HAS BEEN SENT.
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-400 font-mono">
          A classified override transmission has emerged from Source Command.<br />
          Phase I deployment is now in motion.
        </p>
        <Link href="/dossier">
          <button className="mt-8 border border-white px-6 py-2 font-mono text-sm hover:bg-white hover:text-black transition-all">
            ENTER THE DOSSIER
          </button>
        </Link>
      </div>
    </main>
  );
}
