import React from 'react';
import Section from './Section';
import TournamentCard from './TournamentCard';

export default function Tournaments() {
  const items = [
    { title: 'Valorant Crown Series', game: 'Valorant', date: 'Dec 21, 2025', prize: '1,00,000', entry: '499' },
    { title: 'BGMI Royal Clash', game: 'BGMI', date: 'Jan 05, 2026', prize: '50,000', entry: '299' },
    { title: 'CS2 Imperial Cup', game: 'Counter-Strike 2', date: 'Jan 20, 2026', prize: '75,000', entry: '399' },
  ];

  return (
    <Section id="tournaments" title="Featured Tournaments" subtitle="High-stakes brackets, precision lobbies, and prize pools in ₹.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <TournamentCard key={t.title} {...t} />
        ))}
      </div>
    </Section>
  );
}
