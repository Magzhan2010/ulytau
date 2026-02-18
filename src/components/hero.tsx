import { motion } from 'framer-motion';
import { MapPin, MoveDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#05070a] overflow-hidden text-white">
      
      {/* 1. ФОНОВЫЙ СЛОЙ (КАРТИНКА + ГРАДИЕНТ) */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }} 
        animate={{ scale: 1, opacity: 0.4 }} 
        transition={{ duration: 2.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/natureUl.jpg" // Поставь сюда красивый пейзаж гор
          className="w-full h-full object-cover"
          alt="Ulytau Nature"
        />
        {/* Затемнение снизу и сверху для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-transparent to-[#05070a]" />
      </motion.div>

      {/* 2. ДЕКОРАТИВНАЯ СЕТКА (КАК НА КАРТАХ) */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com')]" />

      {/* 3. ОСНОВНОЙ КОНТЕНТ */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* ПЛАШКА С ЛОКАЦИЕЙ */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <MapPin size={16} className="text-orange-500 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Казахстан • Сарыарка</span>
          </div>

          {/* ЗАГОЛОВОК С ЭФФЕКТОМ ТЕНИ */}
          <h1 className="text-[10vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter mb-4 select-none drop-shadow-2xl">
            УЛЫ<span className="text-orange-600">ТАУ</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
             <h2 className="text-xl md:text-3xl font-light tracking-widest uppercase italic">Центр Земли</h2>
             <div className="hidden md:block w-12 h-px bg-white/30" />
             <h2 className="text-xl md:text-3xl font-light tracking-widest uppercase italic">Колыбель Нации</h2>
          </div>
        </motion.div>

        {/* 4. ПЛАВАЮЩИЕ ФАКТЫ (ДЛЯ ОБЪЕМА) */}
        <div className="absolute bottom-20 left-10 hidden lg:block">
           <motion.div 
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 1 }}
             className="p-4 bg-white/5 backdrop-blur-lg border-l-4 border-orange-600 rounded-r-xl"
           >
             <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Статус области</p>
             <p className="text-lg font-black tracking-tight">Вновь создана в 2022</p>
           </motion.div>
        </div>

        <div className="absolute bottom-20 right-10 hidden lg:block text-right">
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 1.2 }}
             className="p-4 bg-white/5 backdrop-blur-lg border-r-4 border-orange-600 rounded-l-xl"
           >
             <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">Админ-центр</p>
             <p className="text-lg font-black tracking-tight">г. Жезказган</p>
           </motion.div>
        </div>

        {/* ИНДИКАТОР СКРОЛЛА */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Исследовать</span>
          <MoveDown size={20} />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
