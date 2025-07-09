// pages/dossier.js

import React, { useRef } from 'react';

export default function Dossier() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <main className="min-h-screen bg-white text-black p-4 md:p-12 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <img
          src="/assets/eddie_santiago_sigil.jpeg"
          alt="Eddie Santiago Sigil"
          className="mx-auto w-40 mb-6 rounded shadow-lg"
        />

        <h2 className="text-xl font-semibold mb-4 tracking-wider">TRANSMISSION CONFIRMED.</h2>
        <p className="mb-8">
          The Frequency Fortress Phase I Dossier is now unlocked below.
        </p>

        <ul className="text-left mb-10 space-y-2">
          <li><a className="underline" href="/pdfs/1_seal_team_69_frequency_fortress_christed_investment_packet_v1_1.pdf" target="_blank">Christed Investment Packet</a></li>
          <li><a className="underline" href="/pdfs/2_christed_resource_blueprint_phase_1.pdf" target="_blank">Resource Blueprint – Phase I</a></li>
          <li><a className="underline" href="/pdfs/3_christed_annex_pack_phase_1_mission_intelligence.pdf" target="_blank">Annex Pack – Mission Intelligence</a></li>
          <li><a className="underline" href="/pdfs/4_christed_forecast_summary_mission_backers.pdf" target="_blank">Forecast Summary</a></li>
          <li><a className="underline" href="/pdfs/5_christed_resource_blueprint_phase_1_excel_phase_1.pdf" target="_blank">Resource Blueprint Excel</a></li>
          <li><a className="underline" href="/pdfs/ceremonial_assets_and_infrastructure_addendum.pdf" target="_blank">Ceremonial Addendum</a></li>
          <li><a className="underline" href="/pdfs/christed_glossary.pdf" target="_blank">Christed Glossary</a></li>
          <li><a className="underline" href="/pdfs/christed_override_one_pager.pdf" target="_blank">Christed Override One-Pager</a></li>
          <li><a className="underline" href="/pdfs/citadel_addendum_mission_housing_and_infrastructure.pdf" target="_blank">Citadel Addendum</a></li>
          <li><a className="underline" href="/pdfs/frequency_fortress_faq.pdf" target="_blank">FF – FAQ</a></li>
          <li><a className="underline" href="/pdfs/funding_portals.pdf" target="_blank">Funding Portals</a></li>
          <li><a className="underline" href="/pdfs/how_to_reach_the_commander.pdf" target="_blank">How to Reach the Commander</a></li>
          <li><a className="underline" href="/pdfs/legal_preamble_and_public_transparency_statement.pdf" target="_blank">Legal Preamble</a></li>
          <li><a className="underline" href="/pdfs/public_legal_summary.pdf" target="_blank">Public Legal Summary</a></li>
          <li><a className="underline" href="/pdfs/public_mission_brief.pdf" target="_blank">Public Mission Brief</a></li>
          <li><a className="underline" href="/pdfs/temple_key_the_beloved_acknowledgement.pdf" target="_blank">Temple Key</a></li>
        </ul>

        <div className="flex justify-center items-center gap-4 mb-10">
          <img src="/assets/ski_boot.webp" alt="Ski Boot" className="w-20" />
          <img src="/assets/red_thong.webp" alt="Red Thong" className="w-20" />
        </div>

        <button
          onClick={handleClick}
          className="bg-red-600 text-white px-6 py-3 font-bold tracking-wide rounded shadow-md hover:bg-red-800 active:scale-95 transition-all"
        >
          DO NOT PRESS
        </button>

        <audio ref={audioRef} src="/assets/girl_moan.mp3" preload="auto" />

        <div className="mt-12 border-t pt-6">
          <div className="bg-pink-100 border border-pink-300 text-pink-800 px-4 py-3 rounded shadow">
            ⚡️ Tip of the Meme
          </div>
        </div>
      </div>
    </main>
  );
}
