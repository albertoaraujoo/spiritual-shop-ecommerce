import { ProductList } from "@/components/common/product-list/product-list";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { productsData } from "@/data/products";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  category: string;
  slug: string;
  description: string;
  soldCount: number;
  imageUrl: string;
}

export default function Home() {
  const data = productsData;
  const mostSellingProducts = [...data]
    .sort((a, b) => b.soldCount - a.soldCount)
    .slice(0, 10);

  return (
    <div className="min-h-screen space-y-6">
      <HeroSection />

      <ProductList products={mostSellingProducts} title="Mais vendidos" />
    </div>
  );
}
