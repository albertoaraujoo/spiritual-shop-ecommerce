import { notFound } from "next/navigation";
import Image from "next/image";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Truck, Shield, RotateCcw } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const sizes = ["PP", "P", "M", "G", "GG"];

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen pb-6 md:py-6">
      <div className="lg:container lg:mx-auto lg:px-4 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Imagem do Produto */}
          <div className="relative left-1/2 order-1 w-screen -translate-x-1/2 lg:left-auto lg:w-full lg:translate-x-0">
            <div className="lg:sticky">
              <div className="relative -mx-4 lg:mx-0">
                <div className="aspect-square overflow-hidden bg-gray-100 lg:rounded-xl">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    sizes="100vw"
                    width={0}
                    height={0}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="order-2 space-y-6 px-4 py-2 lg:px-0 lg:py-0">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-1 text-sm font-medium text-white">
                  {product.category}
                </span>
                <span className="rounded-full border border-green-600 px-3 py-1 text-sm font-medium text-green-600">
                  {product.soldCount} vendidos
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {product.name}
              </h1>

              <p className="text-lg leading-relaxed text-gray-600">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-white">
                R$ {product.price.toFixed(2)}
                <span className="ml-2 text-base font-normal text-gray-500">
                  ou 12x de R$ {(product.price / 12).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Seletor de Tamanhos */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Tamanho</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-300 font-semibold transition-colors hover:border-blue-500 hover:bg-blue-50"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-500 py-6 text-lg font-semibold text-white hover:from-blue-500 hover:to-purple-600">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Adicionar ao Carrinho
              </Button>

              <Button variant="outline" className="w-full py-6 text-lg">
                <Heart className="mr-2 h-5 w-5" />
                Adicionar aos Favoritos
              </Button>
            </div>

            {/* Informações de Entrega e Garantias */}
            <div className="bg-card space-y-4 rounded-xl p-6">
              <h3 className="text-lg font-semibold">Informações Importantes</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">
                    Frete grátis para todo Brasil em compras acima de R$ 299
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">
                    Produto original com garantia de 1 ano
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">
                    Troca grátis em até 30 dias após a compra
                  </span>
                </div>
              </div>
            </div>

            {/* Especificações Técnicas */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Especificações</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Material:</span>
                  <p className="text-gray-600">100% Algodão Premium</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Origem:</span>
                  <p className="text-gray-600">Nacional</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Cuidados:</span>
                  <p className="text-gray-600">Lavar à máquina</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Modelo:</span>
                  <p className="text-gray-600">Unissex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
