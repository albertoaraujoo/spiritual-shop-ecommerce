import Link from "next/link";
import Logo from "../logo/logo";

import { HeaderDropdownMenu } from "./components/header-dropdown-menu/header-dropdown-menu";

export function Header() {
  return (
    <header className="bg-card flex items-center justify-between px-6 py-4 shadow md:px-12">
      <Link href="/">
        <Logo />
      </Link>
      <HeaderDropdownMenu />
    </header>
  );
}
