import { Footer } from "../footer/footer";
import { Header } from "../header/header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen px-6">{children}</main>
      <Footer />
    </>
  );
}
