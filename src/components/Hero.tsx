import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1572207284369-66aa4a3f3e11?q=80&w=2070')", 
          filter: "brightness(0.4)" 
        }}
      />
      
      <div className="relative z-10 py-24 container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Лавка форточника
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Мастерская качественных форточек с 1995 года
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-wood-medium hover:bg-wood-dark">
            Наша продукция
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
            О нас
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;