import ProductItem from "@/components/product-item/product-item";

import { productsData } from "@/data/products";
import { formatCategory } from "@/utils/formatCategory";
import Link from "next/link";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const data = productsData;
  const { slug } = await params;
  const products = data.filter(
    (product) => formatCategory(product.category) === slug
  );

  const areProductsAvailable = products.length > 0;

  const categoryName = products[0]?.category || "Categoria não encontrada :/";

  return (
    <div className="min-h-screen space-y-6 py-2">
      <h1
        className={`${areProductsAvailable ? "visible" : "hidden"} px-2 pt-8 text-3xl font-bold md:px-6 md:text-4xl`}
      >
        Categoria:
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {" "}
          {categoryName}
        </span>
      </h1>

      {areProductsAvailable === false && (
        <h1 className="px-2 pt-8 text-3xl font-bold md:px-6 md:text-4xl">
          Categoria
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            não encontrada :/
          </span>
        </h1>
      )}

      <p
        className={`${areProductsAvailable ? "visible" : "hidden"} px-2 text-gray-500 md:px-6 md:text-lg`}
      >
        Confira todos os produtos da categoria: {categoryName}
      </p>

      {products.length === 0 && (
        <div className="bg-card flex min-h-[200px] flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-4 py-10 text-center text-lg font-semibold text-gray-400 shadow-lg">
          <span className="text-3xl">😕</span>
          Não encontramos nenhum produto com nessa categoria, por favor
          <Link
            href="/produtos"
            className="font-semibold text-blue-500 underline"
          >
            {" "}
            confira nossa seleção completa de produtos.
          </Link>
        </div>
      )}
      <div className="grid w-full grid-cols-2 justify-items-center gap-6 pb-12 md:grid-cols-4 md:justify-items-normal md:gap-10 md:px-6">
        {products.map((product) => (
          <div className="w-[165px] md:w-full" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
