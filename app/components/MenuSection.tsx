"use client";

import { useState } from "react";
import { categories } from "../data/menu";
import ProductCard from "./ProductCard";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeProducts =
    categories.find((c) => c.id === activeCategory)?.products || [];

  return (
    <section id="menu" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-dark sm:text-4xl">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-500">
            Elige tu favorito y pide directo por WhatsApp. ¡Te lo llevamos rápido!
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-dark hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
