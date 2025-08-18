import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card px-8 py-6 text-center text-white">
      <p>&copy; {year} Spiritual Shop E-commerce Test</p>
      <span className="text-xs text-gray-300">
        Developed by:{" "}
        <Link
          target="_blank"
          className="text-sm text-white"
          href="https://www.linkedin.com/in/albertoaraujoo/"
        >
          Alberto Araújo
        </Link>
      </span>
    </footer>
  );
}
