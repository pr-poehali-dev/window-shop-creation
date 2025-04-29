import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <div className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg bg-gray-50 shadow-sm flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-wood-light/50 flex items-center justify-center">
                  <span className="text-2xl">🌳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Натуральные материалы</h3>
                <p className="text-gray-600">Мы используем только экологически чистые материалы высшего качества</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-50 shadow-sm flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-wood-light/50 flex items-center justify-center">
                  <span className="text-2xl">⚒️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ручная работа</h3>
                <p className="text-gray-600">Каждая форточка изготавливается вручную нашими опытными мастерами</p>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-50 shadow-sm flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-wood-light/50 flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Гарантия 5 лет</h3>
                <p className="text-gray-600">Мы уверены в качестве нашей продукции и даем расширенную гарантию</p>
              </div>
            </div>
          </div>
        </div>
        <FeaturedProducts />
        <div className="py-16 bg-wood-light/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Наша история</h2>
            <div className="w-20 h-1 bg-wood-medium mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              С 1995 года мы занимаемся производством качественных форточек. Всё началось с небольшой мастерской, 
              а сегодня мы – лидеры рынка, сохранившие традиции ручного изготовления и внедрившие современные технологии.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Наши изделия украшают тысячи домов по всей России. 
              Мы гордимся каждой изготовленной форточкой и вкладываем душу в наше дело.
            </p>
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
