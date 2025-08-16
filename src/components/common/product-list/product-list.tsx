import { ProductProps } from "@/app/page";
import ProductItem from "../product-item/product-item";

interface ProductListProps {
  title: string;
  products: ProductProps[];
}

export function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="space-y-6">
      <h3 className="px-5 text-xl font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
