import ProductItem from "@/components/product-item/product-item";
import SearchProductInput from "@/components/search-product-input/search-product-input";
import { productsData } from "@/data/products";

interface ProductPageProps {
  searchParams: Promise<{
    search?: string | undefined;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const data = productsData;
  const params = await searchParams;
  const search = params?.search?.toLowerCase() || "";
  const filteredData =
    search.length > 0
      ? data.filter((product) => product.name.toLowerCase().includes(search))
      : data;

  console.log(search);
  console.log(filteredData);

  return (
    <div className="min-h-screen space-y-6">
      <h1 className="px-2 pt-8 text-3xl font-bold md:px-6 md:text-4xl">
        Todos os produtos
      </h1>
      <SearchProductInput />
      <p className="px-2 text-gray-500 md:px-6 md:text-lg">
        Confira nossa seleção completa de produtos exclusivos para todos os
        estilos.
      </p>
      <div className="grid w-full grid-cols-2 justify-items-center gap-6 pb-12 md:grid-cols-4 md:justify-items-normal md:gap-10 md:px-6">
        {filteredData.map((product) => (
          <div className="w-[165px] md:max-w-[350px]" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
