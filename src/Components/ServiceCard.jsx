import React from 'react';
import { icons } from './Shared';

export default function ServiceCard({ title, description, icon, highlighted }) {
    return (
        <div className={`group rounded-2xl border transition-all duration-300 cursor-pointer p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/30 ${highlighted
                ? "bg-zinc-800/80 border-zinc-600/60 hover:border-purple-500/50"
                : "bg-zinc-900/50 border-zinc-800/50 hover:border-zinc-600/60 hover:bg-zinc-800/60"
            }`}>
            <div className={`w-9 h-9 rounded-full border flex items-center justify-center mb-4 transition-colors ${highlighted ? "bg-purple-600/20 border-purple-500/40 text-purple-400" : "bg-zinc-800 border-zinc-700 text-zinc-400"
                } group-hover:border-purple-500/50`}>
                {icons[icon]}
            </div>
            <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
        </div>
    );
}