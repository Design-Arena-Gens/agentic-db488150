'use client';

import { useMemo, useState } from 'react';

const GREETINGS = [
  { language: 'English', greeting: 'Hello' },
  { language: 'Spanish', greeting: 'Hola' },
  { language: 'French', greeting: 'Bonjour' },
  { language: 'German', greeting: 'Hallo' },
  { language: 'Italian', greeting: 'Ciao' },
  { language: 'Portuguese', greeting: 'Ol?' },
  { language: 'Russian', greeting: '??????' },
  { language: 'Chinese (Mandarin)', greeting: '??' },
  { language: 'Japanese', greeting: '?????' },
  { language: 'Korean', greeting: '?????' },
  { language: 'Arabic', greeting: '?????' },
  { language: 'Hindi', greeting: '??????' },
  { language: 'Bengali', greeting: '??????' },
  { language: 'Urdu', greeting: '????' },
  { language: 'Turkish', greeting: 'Merhaba' },
  { language: 'Dutch', greeting: 'Hallo' },
  { language: 'Swedish', greeting: 'Hej' },
  { language: 'Norwegian', greeting: 'Hei' },
  { language: 'Danish', greeting: 'Hej' },
  { language: 'Finnish', greeting: 'Hei' },
  { language: 'Polish', greeting: 'Cze??' },
  { language: 'Czech', greeting: 'Ahoj' },
  { language: 'Slovak', greeting: 'Ahoj' },
  { language: 'Hungarian', greeting: 'Szia' },
  { language: 'Greek', greeting: '????' },
  { language: 'Hebrew', greeting: '????' },
  { language: 'Persian', greeting: '????' },
  { language: 'Thai', greeting: '??????' },
  { language: 'Vietnamese', greeting: 'Xin ch?o' },
  { language: 'Indonesian', greeting: 'Halo' },
  { language: 'Swahili', greeting: 'Hujambo' },
  { language: 'Zulu', greeting: 'Sawubona' },
  { language: 'Xhosa', greeting: 'Molo' },
  { language: 'Yoruba', greeting: 'Bawo' },
  { language: 'Amharic', greeting: '???' },
  { language: 'Filipino', greeting: 'Kamusta' },
  { language: 'Malay', greeting: 'Halo' },
  { language: 'Romanian', greeting: 'Salut' },
  { language: 'Ukrainian', greeting: '??????' },
  { language: 'Bulgarian', greeting: '???????' },
  { language: 'Serbian', greeting: '??????' },
  { language: 'Croatian', greeting: 'Bok' },
  { language: 'Slovenian', greeting: '?ivjo' }
];

function highlight(text, query) {
  if (!query) return text;
  try {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')})`, 'ig');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
    );
  } catch {
    return text;
  }
}

export default function Page() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GREETINGS;
    return GREETINGS.filter(
      g =>
        g.language.toLowerCase().includes(q) ||
        g.greeting.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section>
      <div className="search">
        <input
          type="text"
          placeholder="Type to find a greeting or language?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search greetings"
        />
      </div>

      <ul className="results">
        {results.map(({ language, greeting }) => (
          <li key={language} className="result-item">
            <div className="greeting">{highlight(greeting, query)}</div>
            <div className="language">{highlight(language, query)}</div>
          </li>
        ))}
        {results.length === 0 && (
          <li className="empty">No matches found.</li>
        )}
      </ul>
    </section>
  );
}

