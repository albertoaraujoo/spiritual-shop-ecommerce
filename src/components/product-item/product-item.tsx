import Image from "next/image";
import Link from "next/link";

import { ProductProps } from "@/app/page";
import { BottomCardItem } from "./components/bottom-card-item/bottom-card-item";

interface ProductItemProps {
  product: ProductProps;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link
      href={`/`}
      className="bg-card flex w-full flex-col gap-2 rounded-b-xl md:mr-4 md:gap-4"
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        sizes="100vw"
        width={0}
        height={0}
        className="h-full w-full rounded-t-xl"
      />

      <BottomCardItem product={product} />
    </Link>
  );
};

export default ProductItem;
