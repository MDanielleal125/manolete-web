import { popularProducts } from "../data/menu";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Los favoritos
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">
            Productos <span className="text-primary">Destacados</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Estos son los más pedidos por nuestros clientes. ¡Pruébalos!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
