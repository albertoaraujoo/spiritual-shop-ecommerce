import { Header } from "../header/header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen p-6">{children}</main>
      <footer className="p-4 text-center text-white">
        <p>&copy; 2023 My E-commerce Store</p>
      </footer>
    </>
  );
}
