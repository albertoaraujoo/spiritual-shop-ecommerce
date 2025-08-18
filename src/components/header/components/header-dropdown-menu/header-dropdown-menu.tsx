import { formatCategory } from "@/utils/formatCategory";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { productsData } from "@/data/products";
import Link from "next/link";
import { AlignJustify, House, Layers, ShoppingBag } from "lucide-react";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export function HeaderDropdownMenu() {
  const categories = new Set(productsData.map((product) => product.category));

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href="/">
            <DropdownMenuItem>
              <House color="#fff" size={14} /> Home
            </DropdownMenuItem>
          </Link>

          <Link href="/produtos">
            <DropdownMenuItem>
              <ShoppingBag color="#fff" size={14} /> Produtos
            </DropdownMenuItem>
          </Link>

          {/* Desktop - Submenu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex hidden cursor-default items-center gap-2 rounded-sm p-0 px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 md:flex [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
              <Layers color="#fff" size={14} />
              Categorias
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {Array.from(categories).map((category) => (
                  <Link
                    href={`/categoria/${formatCategory(category)}`}
                    key={category}
                  >
                    <DropdownMenuItem>{category}</DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          {/* Mobile */}
          <DropdownMenuSeparator className="md:hidden" />

          <DropdownMenuItem
            disabled
            className="text-muted-foreground font-semibold md:hidden"
          >
            <Layers color="#fff" size={14} />
            Categorias
          </DropdownMenuItem>

          {Array.from(categories).map((category) => (
            <Link
              href={`/category/${formatCategory(category)}`}
              key={category}
              className="md:hidden"
            >
              <DropdownMenuItem className="pl-8">{category}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
