import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Home, ShoppingBasket, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo-b.svg" 
            alt="Лавка форточника" 
            className="h-10 w-10"
          />
          <Link to="/" className="text-xl font-bold text-wood-dark">
            Лавка форточника
          </Link>
        </div>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="w-4 h-4 mr-2" />
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <ShoppingBasket className="w-4 h-4 mr-2" />
                Продукция
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-wood-light/50 to-wood-medium/30 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Популярные товары
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Самые востребованные форточки и аксессуары к ним
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Деревянные форточки</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Классические форточки из натурального дерева
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Пластиковые форточки</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Современные и практичные решения из ПВХ
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="/"
                      >
                        <div className="text-sm font-medium leading-none">Фурнитура</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ручки, петли и замки для любых типов форточек
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Phone className="w-4 h-4 mr-2" />
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;