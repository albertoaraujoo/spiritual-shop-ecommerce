import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils/formatPrice";
import { ProductProps } from "@/app/page";

interface ProductItemProps {
  product: ProductProps;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/`} className="flex flex-col gap-4">
      <Image
        src={product.imageUrl}
        alt={product.name}
        sizes="100vw"
        width={0}
        height={0}
        className="min-h-[124px] min-w-[124px] rounded-3xl"
      />

      <div>
        <p className="truncate text-sm font-medium">{product.name}</p>
        {/* <p className="text-muted-foreground truncate text-xs font-medium">
          {product.description}
        </p> */}

        <p className="truncate text-sm font-semibold">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
