"use client";
import { ProductProps } from "@/app/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SeeMoreButtonProps {
  product: ProductProps;
}

export function BottomCardItem({ product }: SeeMoreButtonProps) {
  const pathname = usePathname();
  const isProductPage = pathname.includes("/produtos");

  return (
    <>
      <div
        className={`w-full px-1 md:w-[350px] md:px-4 ${
          isProductPage ? "pb-0" : "pb-5"
        }`}
      >
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate pr-6 text-xs font-medium">
          {product.description}
        </p>

        <p className="mt-2 truncate text-sm font-semibold">
          R$ {""}
          {product.price}
        </p>
      </div>
      <Button
        asChild
        className={
          isProductPage
            ? "flex rounded-t-none rounded-b-xl bg-gradient-to-r from-blue-400 to-purple-500 px-1 hover:from-blue-500 hover:to-purple-600 hover:text-white md:px-4"
            : "hidden"
        }
      >
        <Link href={`/produtos/${product.slug}`}>Ver mais</Link>
      </Button>
    </>
  );
}
