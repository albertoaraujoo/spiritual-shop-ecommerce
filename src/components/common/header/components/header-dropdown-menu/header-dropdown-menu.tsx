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
          <DropdownMenuItem className="hidden md:block">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 p-0">
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
          </DropdownMenuItem>

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
