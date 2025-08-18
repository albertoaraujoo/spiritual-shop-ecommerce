import Image from "next/image";
import Link from "next/link";

import { ProductProps } from "@/app/page";

interface ProductItemProps {
  product: ProductProps;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link
      href={`/`}
      className="bg-card flex flex-col gap-2 rounded-b-xl pb-2 md:mr-4 md:gap-4"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        sizes="100vw"
        width={0}
        height={0}
        className="min-h-[124px] min-w-[124px] rounded-t-xl md:h-[350px] md:min-w-[350px]"
      />

      <div className="max-w-[124px] px-1 md:max-w-[350px] md:px-4">
        <p className="truncate text-sm font-medium">{product.name}</p>
        <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p>

        <p className="mt-2 truncate text-sm font-semibold md:pb-2">
          R$ {""}
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
