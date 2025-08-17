import Link from "next/link";
import Logo from "../logo/logo";

import { HeaderDropdownMenu } from "./components/header-dropdown-menu/header-dropdown-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 md:px-12">
      <Link href="/">
        <Logo />
      </Link>
      <HeaderDropdownMenu />
    </header>
  );
}
