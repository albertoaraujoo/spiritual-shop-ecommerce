interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="p-8">
      <header>
        <h1>My E-commerce Store</h1>
      </header>
      <main className="min-h-screen bg-gray-800">{children}</main>
      <footer className="p-4 text-center text-white">
        <p>&copy; 2023 My E-commerce Store</p>
      </footer>
    </div>
  );
}
