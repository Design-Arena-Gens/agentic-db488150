import './globals.css';

export const metadata = {
  title: 'Hello Finder',
  description: 'Search greetings across many languages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Hello Finder</h1>
            <p className="tagline">Find how to say 'Hello' worldwide</p>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <span>Built for instant Vercel deploys</span>
          </footer>
        </div>
      </body>
    </html>
  );
}

