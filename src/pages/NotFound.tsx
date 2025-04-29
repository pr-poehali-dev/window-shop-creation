import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-md text-center">
          <div className="text-6xl font-bold text-wood-dark mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-gray-600 mb-8">
            Форточка, которую вы искали, куда-то улетела. Возможно, её унесло ветром.
          </p>
          <Link to="/">
            <Button className="bg-wood-medium hover:bg-wood-dark">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
