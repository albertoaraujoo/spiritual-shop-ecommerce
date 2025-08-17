import { ProductProps } from "@/app/page";
import ProductItem from "../product-item/product-item";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
} from "@/components/ui/carousel";

interface ProductListProps {
  title: string;
  products: ProductProps[];
}

export function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="space-y-6 md:px-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto md:hidden [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <div className="hidden max-h-fit w-full flex-col justify-start space-y-6 py-4 pr-12 md:visible md:flex">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="min-w-[100%]"
        >
          <CarouselContent className="ml-1">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </CarouselContent>

          <CarouselNext className="bg-brand-main hidden cursor-pointer border-none hover:opacity-70 sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
