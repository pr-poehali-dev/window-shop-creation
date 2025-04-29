import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Иван Петров",
    role: "Владелец частного дома",
    content: "Установил деревянные форточки от «Лавки форточника» и очень доволен. Качество отличное, дерево обработано хорошо, механизм работает плавно. Рекомендую!",
    avatar: "ИП"
  },
  {
    id: 2,
    name: "Анна Смирнова",
    role: "Дизайнер интерьеров",
    content: "Как дизайнер, я ценю качество и внимание к деталям. Форточки из «Лавки форточника» идеально вписались в проект реставрации старинного дома моего клиента.",
    avatar: "АС"
  },
  {
    id: 3,
    name: "Михаил Иванов",
    role: "Строительный подрядчик",
    content: "Сотрудничаем с «Лавкой форточника» уже несколько лет. Всегда своевременные поставки, гибкий подход к заказам и отличное качество продукции.",
    avatar: "МИ"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Отзывы наших клиентов</h2>
          <div className="w-20 h-1 bg-wood-medium mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Что говорят о нас те, кто уже выбрал наши форточки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback className="bg-wood-medium text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
