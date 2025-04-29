import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isBestseller: boolean;
  category: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, description, price, image, isBestseller, category } = product;
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {isBestseller && (
          <Badge className="absolute top-3 right-3 bg-wood-dark">
            Хит продаж
          </Badge>
        )}
        <Badge className="absolute top-3 left-3 bg-wood-medium">
          {category}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{name}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="flex justify-between items-center">
        <div className="text-lg font-semibold text-wood-dark">
          {price.toLocaleString()} ₽
        </div>
        <Button size="sm" className="bg-wood-medium hover:bg-wood-dark">
          <ShoppingCart className="h-4 w-4 mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
