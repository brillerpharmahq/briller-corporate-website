import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const team: TeamMember[] = [
  {
    name: 'Founder Name',
    role: 'Founder',
    imageUrl: 'https://picsum.photos/seed/briller-team-1/500/500',
  },
  {
    name: 'Medical Advisor',
    role: 'Advisor',
    imageUrl: 'https://picsum.photos/seed/briller-team-2/500/500',
  },
  {
    name: 'Operations Lead',
    role: 'Operations',
    imageUrl: 'https://picsum.photos/seed/briller-team-3/500/500',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 font-serif mb-3">
              About Us
            </h1>
            <p className="text-lg text-zinc-600 font-sans max-w-2xl">
              Meet the people behind Briller — the team dedicated to building trustworthy,
              science-backed wellness products.
            </p>
          </div>
          <Link
            to="/"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors"
          >
            Back to home
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{opacity: 0, y: 16}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: idx * 0.05, duration: 0.5}}
              className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={m.imageUrl}
                alt={m.name}
                className="w-full h-56 rounded-2xl object-cover mb-5"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-bold text-zinc-900 font-serif">{m.name}</h3>
              <p className="text-zinc-600 font-sans">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

