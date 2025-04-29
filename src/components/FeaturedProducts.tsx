import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Форточка классическая деревянная",
    description: "Классическая форточка из натурального дерева с ручным открыванием",
    price: 2500,
    image: "https://images.unsplash.com/photo-1592996888421-7a13d5f5c4cf?q=80&w=2670",
    isBestseller: true,
    category: "Деревянные"
  },
  {
    id: 2,
    name: "Форточка пластиковая с москитной сеткой",
    description: "Современная пластиковая форточка с встроенной москитной сеткой",
    price: 3200,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2576",
    isBestseller: false,
    category: "Пластиковые"
  },
  {
    id: 3,
    name: "Комплект фурнитуры премиум",
    description: "Набор премиальной фурнитуры для форточек любого типа",
    price: 1800,
    image: "https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a?q=80&w=2574",
    isBestseller: true,
    category: "Фурнитура"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Популярные товары</h2>
          <div className="w-20 h-1 bg-wood-medium mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Наши самые востребованные форточки и аксессуары, выбранные тысячами довольных клиентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-wood-medium hover:bg-wood-dark">
            Смотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
