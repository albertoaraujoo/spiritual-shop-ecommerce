import { Truck, Shield, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Frete grátis para todo Brasil em compras acima de R$ 299",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Seus dados protegidos com certificado SSL e garantia total",
  },
  {
    icon: CreditCard,
    title: "Pagamento Fácil",
    description: "Parcele em até 12x sem juros no cartão de crédito",
  },
  {
    icon: Headphones,
    title: "Atendimento 24/7",
    description: "Suporte especializado pronto para te ajudar a qualquer hora",
  },
];

export function FeaturesSection() {
  return (
    <section className="from-gray-900 via-gray-800 to-black py-8">
      <div className="container mx-auto px-1">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Spiritual Shop
            </span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-700/30 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-gray-700/60 hover:to-gray-800/60"
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
