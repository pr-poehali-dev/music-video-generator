import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const playWelcomeMessage = () => {
      if (hasPlayed) return;
      
      const utterance = new SpeechSynthesisUtterance(
        "Добро пожаловать! Создайте свою уникальную песню с помощью искусственного интеллекта. Нажмите на кнопку и начните творить прямо сейчас!"
      );
      utterance.lang = 'ru-RU';
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 0.8;
      
      const playAudio = () => {
        window.speechSynthesis.speak(utterance);
        setHasPlayed(true);
        document.removeEventListener('click', playAudio);
        document.removeEventListener('touchstart', playAudio);
        document.removeEventListener('keydown', playAudio);
      };

      document.addEventListener('click', playAudio, { once: true });
      document.addEventListener('touchstart', playAudio, { once: true });
      document.addEventListener('keydown', playAudio, { once: true });
    };

    playWelcomeMessage();
  }, [hasPlayed]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#1a0f2e]">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/4df0425a-e896-40c2-bcf0-664f08447a88/files/3ca1bdfc-2fea-48a6-a704-ddb0d315efbe.jpg" 
              alt="AI Music Generator Logo" 
              className="w-32 h-32 rounded-3xl animate-pulse-glow"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Нейросеть для создания песен
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
            Без регистрации
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Создавайте уникальную музыку и видео с помощью искусственного интеллекта. 
            Быстро, просто и бесплатно.
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 animate-pulse-glow"
            asChild
          >
            <a href="https://t.me/easysongbot?start=ref_242592920" target="_blank" rel="noopener noreferrer">
              <Icon name="Music" className="mr-3" size={28} />
              Создать песню сейчас
            </a>
          </Button>
        </header>

        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/4df0425a-e896-40c2-bcf0-664f08447a88/files/be975618-6446-46e6-b82a-3038ea05c7c6.jpg" 
                alt="AI генерация музыки и видео"
                className="rounded-3xl shadow-2xl animate-float"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Возможности AI генератора
              </h2>
              
              <div className="space-y-4">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Icon name="Music" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Генерация музыки</h3>
                      <p className="text-muted-foreground">
                        Создавайте уникальные треки в любом жанре за считанные минуты. 
                        AI понимает ваши идеи и воплощает их в музыку.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/20">
                      <Icon name="Video" size={28} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Создание видео</h3>
                      <p className="text-muted-foreground">
                        Превращайте музыку в визуальные шедевры. 
                        Автоматическая генерация видеоклипов под вашу композицию.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/20">
                      <Icon name="Sparkles" size={28} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Без ограничений</h3>
                      <p className="text-muted-foreground">
                        Никакой регистрации, никаких скрытых платежей. 
                        Начните творить прямо сейчас.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Как это работает?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Опишите идею</h3>
              <p className="text-muted-foreground">
                Расскажите нейросети, какую музыку или видео вы хотите создать
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20 hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI создаёт</h3>
              <p className="text-muted-foreground">
                Искусственный интеллект обрабатывает ваш запрос и генерирует контент
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/20 hover:scale-105 transition-transform">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Получите результат</h3>
              <p className="text-muted-foreground">
                Скачайте готовую композицию или видео и делитесь с миром
              </p>
            </Card>
          </div>
        </section>

        <section className="text-center py-16 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы создать свою первую песню?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже создают музыку с помощью AI
          </p>
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-primary transition-all duration-300 animate-pulse-glow"
            asChild
          >
            <a href="https://t.me/easysongbot?start=ref_242592920" target="_blank" rel="noopener noreferrer">
              <Icon name="Rocket" className="mr-3" size={28} />
              Начать создавать музыку
            </a>
          </Button>
        </section>

        <footer className="text-center mt-20 py-8 border-t border-border/50">
          <p className="text-muted-foreground">
            AI Music Generator © 2024 | Нейросеть для создания песен и видео
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://t.me/easysongbot?start=ref_242592920" className="text-primary hover:text-secondary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;