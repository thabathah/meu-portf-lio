import { useState, useEffect, useRef } from "react";

// Star icon component for consistent use
const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 30" fill="currentColor">
    <path d="M15 0L19.0514 10.9486L30 15L19.0514 19.0514L15 30L10.9486 19.0514L0 15L10.9486 10.9486L15 0Z" />
  </svg>
);

// Hero background blur effects
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -left-28 -top-52 w-[420px] h-[650px] bg-accent-2 rounded-full blur-[150px] opacity-60 rotate-[-32deg]" />
    <div className="absolute -right-28 -top-52 w-[420px] h-[650px] bg-accent-2 rounded-full blur-[150px] opacity-60 rotate-[148deg]" />
    <div className="absolute left-32 -top-80 w-[320px] h-[500px] bg-accent-2 rounded-full blur-[150px] opacity-40 rotate-[-30deg]" />
    <div className="absolute right-32 -top-80 w-[320px] h-[500px] bg-accent-2 rounded-full blur-[150px] opacity-40 rotate-[150deg]" />
  </div>
);

// Header component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 pt-12 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <StarIcon className="w-8 h-8 text-accent-1" />
            <span className="font-bricolage text-2xl md:text-[34px] font-bold text-white">Fabiano.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-white/5 backdrop-blur-3xl border border-white/8 rounded-full px-2 py-2">
            <a href="#" className="px-5 py-3 rounded-full bg-white text-dark-color font-bricolage text-sm font-medium uppercase">
              Início
            </a>
            <a href="#services" className="px-5 py-3 rounded-full text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="px-5 py-3 rounded-full text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors">
              Portfólio
            </a>
            <a href="#about" className="px-5 py-3 rounded-full text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors">
              Sobre mim
            </a>
          </nav>

          {/* Mobile menu button & Contact button */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="bg-white text-dark-color px-4 md:px-6 py-3 md:py-4 rounded-full font-bricolage text-sm md:text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contato
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-white/5 backdrop-blur-3xl border border-white/8 rounded-full flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 bg-white/5 backdrop-blur-3xl border border-white/8 rounded-2xl p-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="px-4 py-3 rounded-xl bg-white text-dark-color font-bricolage text-sm font-medium uppercase">
                Início
              </a>
              <a href="#services" className="px-4 py-3 rounded-xl text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Serviços
              </a>
              <a href="#portfolio" className="px-4 py-3 rounded-xl text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Portfólio
              </a>
              <a href="#about" className="px-4 py-3 rounded-xl text-white font-bricolage text-sm font-medium uppercase hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Sobre mim
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center py-20">
    <HeroBackground />
    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero content */}
        <div className="space-y-8">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 backdrop-blur-3xl border border-white/8">
            <StarIcon className="w-5 h-5 text-accent-1" />
            <span className="font-bricolage text-xl font-bold text-white">Disponível Para Oportunidades</span>
          </div>

          {/* Main heading */}
          <h1 className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="block">Olá, sou Fabiano,</span>
            <span className="block">Videomaker &</span>
            <span className="block">Social Media.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-paragraph-color leading-relaxed max-w-lg">
            Criador de conteúdos estratégicos para redes sociais, especializado em ferramentas inovadores de inteligência artificial.
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="bg-white text-dark-color px-6 py-4 rounded-full font-bricolage text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Vamos Conversar
            </a>
            <a 
              href="#portfolio" 
              className="px-6 py-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/8 text-white font-bricolage text-lg font-bold hover:bg-white/10 transition-colors"
            >
              Meus Trabalhos
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ea4037c4c2e024ead0aa005ad97588d525368ff7?width=1072" 
            alt="Fabiano - Videomaker & Social Media" 
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6b8b012096dd9c75af5e15130d4a462892d86929?width=320"
              alt="Download CV"
              className="w-40 h-40 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Scrolling services carousel
const ServicesCarousel = () => {
  const services = [
    "Edição de Vídeo",
    "Produção Audiovisual",
    "Design Gráfico",
    "Social Media",
    "Marketing Digital"
  ];

  return (
    <div className="relative bg-gradient-to-r from-accent-1 to-accent-2 py-6 md:py-8 overflow-hidden">
      <div className="absolute inset-0 bg-white transform -rotate-1 origin-center"></div>
      <div className="relative z-10 transform -rotate-1">
        <div className="flex items-center justify-between container mx-auto px-6 max-w-7xl">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <StarIcon className="w-5 h-5 md:w-7 md:h-7 text-accent-1 flex-shrink-0" />
              <span className="font-bricolage text-sm md:text-2xl lg:text-3xl font-bold text-dark-color whitespace-nowrap">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About section
const AboutSection = () => (
  <section id="about" className="relative py-20 bg-dark-bg">
    {/* Background blur effects */}
    <div className="absolute left-0 top-48 w-[500px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-30" />
    <div className="absolute right-0 top-48 w-[500px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-30" />
    
    <div className="container mx-auto px-6 max-w-7xl relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* About image */}
        <div className="relative">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ec01af8ab071ea0aebdbfa73c22667e23c322495?width=1012" 
            alt="About Fabiano" 
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* About content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-accent-1 font-medium text-xl tracking-widest uppercase">Quem sou eu?</h3>
            <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-white leading-tight">
              Eu sou um Profissional de<br />
              Audiovisual e Marketing Digital.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-paragraph-color leading-relaxed">
              Apaixonado por criar conteúdos visuais estratégicos e impactantes, combino técnicas de edição, design e narrativa para gerar engajamento e resultados.
            </p>
            <p className="text-lg text-paragraph-color leading-relaxed">
              Meu objetivo é entregar soluções criativas que conectem marcas ao público e fortaleçam sua presen��a no ambiente digital.
            </p>
            <a 
              href="#" 
              className="inline-block bg-white text-dark-color px-6 py-4 rounded-full font-bricolage text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </div>

      {/* Achievement stats */}
      <div className="grid md:grid-cols-3 gap-5 mt-20">
        {[
          { number: "06+", label: "Anos de experiência" },
          { number: "50+", label: "Projetos finalizados" },
          { number: "100%", label: "Clientes satisfeitos" }
        ].map((stat, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-3xl border border-white/12 rounded-3xl p-12 text-center">
            <div className="text-5xl lg:text-6xl font-bold font-bricolage mb-6">
              <span className="text-white">{stat.number.replace('+', '').replace('%', '')}</span>
              <span className="text-accent-1">{stat.number.includes('+') ? '+' : '%'}</span>
            </div>
            <p className="text-white font-bricolage text-2xl font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Services section  
const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 60 51" fill="currentColor">
          <path d="M55.3846 0H4.61539C3.39131 0 2.21737 0.488472 1.35181 1.35796C0.486262 2.22745 0 3.40672 0 4.63636V46.3636C0 47.5933 0.486262 48.7726 1.35181 49.642C2.21737 50.5115 3.39131 51 4.61539 51H55.3846C56.6087 51 57.7826 50.5115 58.6482 49.642C59.5137 48.7726 60 47.5933 60 46.3636V4.63636C60 3.40672 59.5137 2.22745 58.6482 1.35796C57.7826 0.488472 56.6087 0 55.3846 0ZM4.61539 13.9091H27.6923V37.0909H4.61539V13.9091ZM32.3077 9.27273V4.63636H41.5385V9.27273H32.3077ZM27.6923 9.27273H18.4615V4.63636H27.6923V9.27273ZM27.6923 41.7273V46.3636H18.4615V41.7273H27.6923ZM32.3077 41.7273H41.5385V46.3636H32.3077V41.7273ZM32.3077 37.0909V13.9091H55.3846V37.0909H32.3077ZM55.3846 9.27273H46.1538V4.63636H55.3846V9.27273ZM13.8462 4.63636V9.27273H4.61539V4.63636H13.8462ZM4.61539 41.7273H13.8462V46.3636H4.61539V41.7273ZM55.3846 46.3636H46.1538V41.7273H55.3846V46.3636Z" />
        </svg>
      ),
      title: "Edição de Vídeo",
      description: "Vídeos criativos e impactantes com técnicas cinematográficas que elevam a narrativa e engajam o público."
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 60 58" fill="currentColor">
          <path d="M57.6001 24.1648H23.4291L55.8002 15.558C56.1066 15.4767 56.394 15.3351 56.6458 15.1413C56.8976 14.9476 57.1088 14.7056 57.2672 14.4292C57.4256 14.1528 57.5281 13.8476 57.5688 13.5311C57.6094 13.2147 57.5875 12.8932 57.5041 12.5853L55.0563 3.52235C54.7194 2.30304 53.919 1.26646 52.8287 0.637131C51.7383 0.00779898 50.4456 -0.163628 49.2306 0.159979L3.54617 12.3044C2.93789 12.4634 2.36722 12.743 1.86757 13.1269C1.36793 13.5108 0.949346 13.9911 0.636333 14.5399C0.321571 15.082 0.118211 15.6822 0.0383344 16.305C-0.0415418 16.9277 0.00369548 17.5603 0.171359 18.1651L2.40323 26.4487C2.40323 26.491 2.40323 26.5363 2.40323 26.5816V53.1664C2.40323 54.4484 2.90892 55.6778 3.80904 56.5843C4.70917 57.4907 5.93 58 7.20296 58H55.2003C56.4732 58 57.6941 57.4907 58.5942 56.5843C59.4943 55.6778 60 54.4484 60 53.1664V26.5816C60 25.9406 59.7472 25.3259 59.2971 24.8727C58.847 24.4195 58.2366 24.1648 57.6001 24.1648ZM50.4485 4.83044L52.2484 11.4978L45.4628 13.3104L37.0273 8.40428L50.4485 4.83044ZM30.4427 10.1474L38.8782 15.0535L27.7968 17.999L19.3613 13.0989L30.4427 10.1474ZM6.624 23.6271L4.8241 16.9567L12.7737 14.842L21.2092 19.7542L6.624 23.6271ZM55.2003 53.1664H7.20296V28.9984H55.2003V53.1664Z" />
        </svg>
      ),
      title: "Produção Audiovisual",
      description: "Desenvolvendo roteiros, captação e finalização de vídeos com qualidade profissional e foco estratégico."
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 57 60" fill="currentColor">
          <path d="M48.4409 8.96743C43.1348 3.21492 35.967 -0.00836461 28.4995 1.63026e-05H28.2063C20.6987 0.0845856 13.5248 3.40917 8.24338 9.25143C2.96194 15.0937 -0.000397341 22.9816 3.99747e-08 31.2015C3.99747e-08 44.1021 7.28382 54.9206 19.007 59.4538C20.3292 59.9641 21.744 60.12 23.1326 59.9082C24.5212 59.6964 25.8431 59.1232 26.9876 58.2366C28.1321 57.3501 29.0658 56.176 29.7103 54.8129C30.3548 53.4497 30.6914 51.9373 30.6918 50.4023C30.6918 49.1292 31.1537 47.9083 31.976 47.0081C32.7982 46.1079 33.9135 45.6021 35.0763 45.6021H47.7394C49.7286 45.6127 51.6612 44.8781 53.2164 43.5203C54.7716 42.1625 55.8559 40.2632 56.2893 38.1378C56.7793 35.7758 57.0174 33.3595 56.999 30.9374C56.9711 26.8376 56.2003 22.7847 54.7312 19.0134C53.2622 15.2421 51.1241 11.8275 48.4409 8.96743ZM52.0034 37.0817C51.7856 38.1406 51.2444 39.0865 50.4691 39.7629C49.6937 40.4393 48.7308 40.8059 47.7394 40.8019H35.0763C32.7506 40.8019 30.5202 41.8134 28.8756 43.6138C27.2311 45.4142 26.3072 47.8562 26.3072 50.4023C26.3062 51.1691 26.1375 51.9244 25.8151 52.605C25.4927 53.2857 25.0261 53.8719 24.4543 54.3146C23.8825 54.7573 23.2221 55.0436 22.5285 55.1496C21.8349 55.2555 21.1282 55.178 20.4676 54.9236C10.5476 51.0924 4.38454 42.002 4.38454 31.2015C4.3842 24.2465 6.89062 17.5723 11.3593 12.6288C15.8279 7.68543 21.8978 4.87216 28.2501 4.80024H28.4968C34.8494 4.82725 40.9378 7.5867 45.449 12.4835C49.9602 17.3803 52.5327 24.0221 52.6117 30.9764C52.628 33.0299 52.4276 35.0786 52.0143 37.0817H52.0034ZM31.7879 15.6007C31.7879 16.3128 31.595 17.0088 31.2337 17.6009C30.8724 18.1929 30.3588 18.6544 29.7579 18.9269C29.157 19.1993 28.4959 19.2706 27.858 19.1317C27.2201 18.9928 26.6341 18.6499 26.1742 18.1464C25.7144 17.6429 25.4012 17.0015 25.2743 16.3031C25.1474 15.6047 25.2125 14.8809 25.4614 14.223C25.7103 13.5652 26.1318 13.0029 26.6726 12.6073C27.2133 12.2117 27.8491 12.0006 28.4995 12.0006C29.3716 12.0006 30.2081 12.3799 30.8248 13.055C31.4414 13.7302 31.7879 14.6459 31.7879 15.6007ZM19.7304 22.8011C19.7304 23.5131 19.5376 24.2092 19.1762 24.8012C18.8149 25.3933 18.3013 25.8547 17.7004 26.1272C17.0996 26.3997 16.4384 26.471 15.8005 26.3321C15.1626 26.1931 14.5767 25.8503 14.1168 25.3468C13.6569 24.8433 13.3437 24.2018 13.2168 23.5034C13.0899 22.8051 13.155 22.0812 13.4039 21.4233C13.6528 20.7655 14.0743 20.2032 14.6151 19.8076C15.1559 19.412 15.7916 19.2009 16.442 19.2009C17.3142 19.2009 18.1506 19.5802 18.7673 20.2554C19.384 20.9305 19.7304 21.8462 19.7304 22.8011ZM19.7304 39.6018C19.7304 40.3139 19.5376 41.0099 19.1762 41.602C18.8149 42.194 18.3013 42.6555 17.7004 42.928C17.0996 43.2005 16.4384 43.2718 15.8005 43.1328C15.1626 42.9939 14.5767 42.651 14.1168 42.1475C13.6569 41.6441 13.3437 41.0026 13.2168 40.3042C13.0899 39.6058 13.155 38.882 13.4039 38.2241C13.6528 37.5663 14.0743 37.004 14.6151 36.6084C15.1559 36.2128 15.7916 36.0017 16.442 36.0017C17.3142 36.0017 18.1506 36.381 18.7673 37.0561C19.384 37.7313 19.7304 38.647 19.7304 39.6018ZM43.8454 22.8011C43.8454 23.5131 43.6525 24.2092 43.2912 24.8012C42.9299 25.3933 42.4163 25.8547 41.8154 26.1272C41.2145 26.3997 40.5533 26.471 39.9154 26.3321C39.2776 26.1931 38.6916 25.8503 38.2317 25.3468C37.7718 24.8433 37.4586 24.2018 37.3318 23.5034C37.2049 22.8051 37.27 22.0812 37.5189 21.4233C37.7678 20.7655 38.1893 20.2032 38.73 19.8076C39.2708 19.412 39.9066 19.2009 40.557 19.2009C41.4291 19.2009 42.2655 19.5802 42.8822 20.2554C43.4989 20.9305 43.8454 21.8462 43.8454 22.8011Z" />
        </svg>
      ),
      title: "Design Gráfico",
      description: "Produzindo artes e identidades visuais que comunicam com clareza e fortalecem a presença de marcas."
    },
    {
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 39 60" fill="currentColor">
          <path d="M32.5 0H6.5C4.77609 0 3.12279 0.677294 1.90381 1.88289C0.68482 3.08848 0 4.72361 0 6.42857V53.5714C0 55.2764 0.68482 56.9115 1.90381 58.1171C3.12279 59.3227 4.77609 60 6.5 60H32.5C34.2239 60 35.8772 59.3227 37.0962 58.1171C38.3152 56.9115 39 55.2764 39 53.5714V6.42857C39 4.72361 38.3152 3.08848 37.0962 1.88289C35.8772 0.677294 34.2239 0 32.5 0ZM4.33333 12.8571H34.6667V47.1429H4.33333V12.8571ZM6.5 4.28571H32.5C33.0746 4.28571 33.6257 4.51148 34.0321 4.91334C34.4384 5.31521 34.6667 5.86025 34.6667 6.42857V8.57143H4.33333V6.42857C4.33333 5.86025 4.56161 5.31521 4.96794 4.91334C5.37426 4.51148 5.92536 4.28571 6.5 4.28571ZM32.5 55.7143H6.5C5.92536 55.7143 5.37426 55.4885 4.96794 55.0867C4.56161 54.6848 4.33333 54.1397 4.33333 53.5714V51.4286H34.6667V53.5714C34.6667 54.1397 34.4384 54.6848 34.0321 55.0867C33.6257 55.4885 33.0746 55.7143 32.5 55.7143Z" />
        </svg>
      ),
      title: "Social Media",
      description: "Planejando, criando e gerenciando conteúdos digitais que aumentam engajamento e consolidam online."
    },
    {
      title: "SEO & Marketing",
      description: "Aplicando estratégias de tráfego, copywriting e campanhas para atrair clientes e ampliar resultados.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 60 64" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M38 46V58C38 59.0609 37.5786 60.0783 36.8284 60.8284C36.0783 61.5786 35.0609 62 34 62H26C24.9391 62 23.9217 61.5786 23.1716 60.8284C22.4214 60.0783 22 59.0609 22 58V46" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 54H38" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 2V6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 30H6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10L10.9333 12.8267" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M58 30H54" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M51.9997 10L49.0664 12.8267" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 28.6667C23.0609 28.6667 24.0783 29.0882 24.8284 29.8383C25.5786 30.5885 26 31.6059 26 32.6667V46.0001" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 46.0001V32.6667C34 31.6059 34.4214 30.5885 35.1716 29.8383C35.9217 29.0882 36.9391 28.6667 38 28.6667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.7869 46H38.2136C41.1874 44.527 43.6842 42.2433 45.4158 39.4123C47.1474 36.5812 48.0434 33.3183 48.0003 30C47.918 25.2518 45.9952 20.721 42.6372 17.3631C39.2792 14.0051 34.7485 12.0822 30.0003 12C25.2521 12.0822 20.7213 14.0051 17.3633 17.3631C14.0053 20.721 12.0825 25.2518 12.0003 30C11.9571 33.3183 12.8531 36.5812 14.5847 39.4123C16.3164 42.2433 18.8131 44.527 21.7869 46Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Brand Strategy",
      description: "Criando posicionamento estratégico que conecta com o público e gera crescimento sustentável para marcas.",
      icon: (
        <svg className="w-14 h-14" viewBox="0 0 64 66" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M57.9998 21.9998V5.99996C57.9998 4.9391 57.5783 3.9217 56.8282 3.17156C56.078 2.42142 55.0606 2 53.9998 2H5.99998C4.93912 2 3.92171 2.42142 3.17157 3.17156C2.42143 3.9217 2 4.9391 2 5.99996V49.9995C2 51.0603 2.42143 52.0777 3.17157 52.8279C3.92171 53.578 4.93912 53.9994 5.99998 53.9994H21.9999" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 13.9998H57.9998" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.9993 41.9996C27.9993 43.8381 28.3614 45.6586 29.0649 47.3571C29.7685 49.0557 30.7997 50.599 32.0998 51.899C33.3998 53.199 34.9431 54.2302 36.6417 54.9338C38.3402 55.6373 40.1607 55.9995 41.9992 55.9995C43.8377 55.9995 45.6582 55.6373 47.3568 54.9338C49.0553 54.2302 50.5986 53.199 51.8987 51.899C53.1987 50.599 54.2299 49.0557 54.9335 47.3571C55.637 45.6586 55.9991 43.8381 55.9991 41.9996C55.9991 40.1611 55.637 38.3406 54.9335 36.6421C54.2299 34.9436 53.1987 33.4002 51.8987 32.1002C50.5986 30.8002 49.0553 29.769 47.3568 29.0654C45.6582 28.3619 43.8377 27.9998 41.9992 27.9998C40.1607 27.9998 38.3402 28.3619 36.6417 29.0654C34.9431 29.769 33.3998 30.8002 32.0998 32.1002C30.7997 33.4002 29.7685 34.9436 29.0649 36.6421C28.3614 38.3406 27.9993 40.1611 27.9993 41.9996Z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M62.0007 62.0002L51.8994 51.9016" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background blur */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[720px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-30" />
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-accent-1 font-medium text-xl tracking-widest uppercase mb-4">Serviços</h3>
          <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-white">Minhas Especializações</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-3xl border border-white/12 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-bricolage text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-paragraph-color leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio section
const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Tudo");
  const filters = ["Tudo", "Design para Social Media", "Vídeos", "Marketing", "Branding de Marcas"];
  
  const portfolioItems = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/7fc667c63b80379be19cbdb52571c25367a02eac?width=1046",
      category: "DESIGN PARA SOCIAL MEDIA",
      title: "Clínica Veterinária"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F194b28cd781e4a4097f562639b030e10%2F5521e393cdc341159f7b41b5cabf2a32",
      category: "DESIGN PARA SOCIAL MEDIA",
      title: "Clínica Odontológica e Estética"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F194b28cd781e4a4097f562639b030e10%2Faea1488d997e4475b3dcd6b3d128bda3",
      category: "Vídeos",
      title: "Produtora Audiovisual - TAY Productions"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F194b28cd781e4a4097f562639b030e10%2Fcfe9b19d4029431f9967133f4694c5c8",
      category: "Vídeos",
      title: "Produtora Audiovisual - Brizzi Produções"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F194b28cd781e4a4097f562639b030e10%2Fc9c13a92a298428480f968dd9901452d",
      category: "Vídeos",
      title: "Loja de Roupas e Utilidades Domésticas"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F194b28cd781e4a4097f562639b030e10%2F0fef9651bd9d4fee885fb1f13f687645",
      category: "DESIGN PARA SOCIAL MEDIA",
      title: "Agência de Marketing"
    }
  ];

  // Filtering & pagination
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const filteredItems = activeFilter === "Tudo" ? portfolioItems : portfolioItems.filter((i) => normalize(i.category) === normalize(activeFilter));
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  useEffect(() => setCurrentPage(0), [activeFilter]);
  const itemsToShow = filteredItems.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

  return (
    <section id="portfolio" className="relative py-20 bg-dark-bg">
      {/* Background blur effects */}
      <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-50" />
      <div className="absolute right-0 bottom-20 w-[500px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-50" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-accent-2 rounded-full blur-[200px] opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-accent-1 font-medium text-xl tracking-widest uppercase mb-4">Portfólio</h3>
          <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-white mb-8">Projetos</h2>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full font-bricolage text-lg font-bold transition-colors ${
                  activeFilter === filter
                    ? "bg-white text-dark-color"
                    : "bg-white/5 backdrop-blur-3xl border border-white/8 text-white hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-3xl border border-white/12 rounded-[32px] p-4 hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full h-[398px] object-cover group-hover:scale-105 transition-transform duration-300${index === 1 ? ' ml-[-4px]' : ''}`}
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-accent-1 font-medium text-lg tracking-widest uppercase mb-2">{item.category}</p>
                  <h3 className="font-bricolage text-3xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-dark-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Jason is a talented UI/UX Designer who helped us develop our business website with a modern and professional design. His work enhanced both the look and usability of our site, making it more user-friendly and engaging. Communication was excellent throughout. I highly recommend Jason for UI/UX projects!",
      name: "Victor Conceição",
      role: "analista de marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Jason is an excellent Mobile App Designer who helped us develop a modern and professional app for our business. His design improved usability and created an engaging user experience. Communication was clear and timely throughout. I highly recommend Jason for any mobile app design needs!",
      name: "Cristina Lima", 
      role: "Cantora",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background blur */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[560px] bg-accent-2 rounded-full blur-[200px] opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-accent-1 font-medium text-xl tracking-widest uppercase mb-4">depoimentos</h3>
          <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-white">Avaliação dos Clientes</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-3xl border border-white/12 rounded-3xl p-8">
              <blockquote className="text-paragraph-color text-lg leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bricolage text-2xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-paragraph-color uppercase text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <svg className="w-10 h-7 text-accent-1" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M14.6154 0.5H3.07692C2.26087 0.5 1.47824 0.821615 0.90121 1.39409C0.324175 1.96657 0 2.74302 0 3.55263V15.7632C0 16.5728 0.324175 17.3492 0.90121 17.9217C1.47824 18.4942 2.26087 18.8158 3.07692 18.8158H14.6154V20.3421C14.6154 21.9613 13.967 23.5142 12.813 24.6592C11.6589 25.8041 10.0936 26.4474 8.46154 26.4474C8.05351 26.4474 7.6622 26.6082 7.37368 26.8944C7.08517 27.1807 6.92308 27.5689 6.92308 27.9737C6.92308 28.3785 7.08517 28.7667 7.37368 29.053C7.6622 29.3392 8.05351 29.5 8.46154 29.5C10.9089 29.4975 13.2553 28.5318 14.9859 26.8149C16.7164 25.098 17.6898 22.7702 17.6923 20.3421V3.55263C17.6923 2.74302 17.3681 1.96657 16.7911 1.39409C16.2141 0.821615 15.4314 0.5 14.6154 0.5ZM14.6154 15.7632H3.07692V3.55263H14.6154V15.7632ZM36.9231 0.5H25.3846C24.5686 0.5 23.7859 0.821615 23.2089 1.39409C22.6319 1.96657 22.3077 2.74302 22.3077 3.55263V15.7632C22.3077 16.5728 22.6319 17.3492 23.2089 17.9217C23.7859 18.4942 24.5686 18.8158 25.3846 18.8158H36.9231V20.3421C36.9231 21.9613 36.2747 23.5142 35.1207 24.6592C33.9666 25.8041 32.4013 26.4474 30.7692 26.4474C30.3612 26.4474 29.9699 26.6082 29.6814 26.8944C29.3929 27.1807 29.2308 27.5689 29.2308 27.9737C29.2308 28.3785 29.3929 28.7667 29.6814 29.053C29.9699 29.3392 30.3612 29.5 30.7692 29.5C33.2166 29.4975 35.563 28.5318 37.2936 26.8149C39.0241 25.098 39.9975 22.7702 40 20.3421V3.55263C40 2.74302 39.6758 1.96657 39.0988 1.39409C38.5218 0.821615 37.7391 0.5 36.9231 0.5ZM36.9231 15.7632H25.3846V3.55263H36.9231V15.7632Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

// Footer section
const FooterSection = () => (
  <footer id="contact" className="relative bg-dark-bg rounded-t-[100px] pt-32 pb-16">
    <div className="container mx-auto px-6 max-w-7xl">
      {/* Call to action */}
      <div className="text-center mb-32">
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5 backdrop-blur-3xl border border-white/8 mb-8">
          <StarIcon className="w-5 h-5 text-accent-1" />
          <span className="font-bricolage text-xl font-bold text-white">Disponível Para Oportunidades</span>
        </div>
        
        <h2 className="font-bricolage text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Vamos trabalhar juntos e<br />
          transformar nossas ideias em<br />
          conteúdos impactantes?
        </h2>
        
        <a 
          href="#" 
          className="inline-block bg-white text-dark-color px-6 py-4 rounded-full font-bricolage text-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Fale Comigo Agora!
        </a>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <StarIcon className="w-7 h-7 text-accent-1" />
            <span className="font-bricolage text-3xl font-bold text-white">Fabiano.</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/fd5d4238e1b0dfccbe81e582a5e2525377851550?width=448" 
              alt="Social Media Links" 
              className="h-11"
            />
          </div>

          {/* Copyright */}
          <p className="text-paragraph-color">© 2025 Fabiano. Todos Direitos Reservados.</p>
        </div>
      </div>
    </div>
  </footer>
);

// Main Index component
export default function Index() {
  return (
    <div className="min-h-screen bg-dark-color">
      <Header />
      <HeroSection />
      <ServicesCarousel />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
}
