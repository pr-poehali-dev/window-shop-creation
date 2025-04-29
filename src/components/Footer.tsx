import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Лавка форточника</h3>
            <p className="mb-4">
              Мастерская качественных форточек с 1995 года. 
              Мы создаем форточки, которые служат поколениям.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Деревянные форточки</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Пластиковые форточки</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Фурнитура</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Новинки</Link></li>
              <li><Link to="/" className="hover:text-gray-300">Акции</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@fortochka.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1" />
                <span>г. Москва, ул. Оконная, д. 10, стр. 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Лавка форточника. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
