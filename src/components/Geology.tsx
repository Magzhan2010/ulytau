import { motion } from 'framer-motion';

const Geography = () => {
  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          whileInView={{ x: 0, opacity: 1 }} 
          initial={{ x: -100, opacity: 0 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-black text-slate-900 uppercase italic underline decoration-orange-600 underline-offset-8">Ландшафт и Климат</h2>
          <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
            <p>
              <b>Рельеф:</b> Улытауская область расположена на юго-западе Казахского мелкосопочника. Главный объект — <b>горы Улытау</b>. Это не просто возвышенность, а древнейшая горная система, высшая точка которой — гора <i>Акмешит (1131 м)</i>.
            </p>
            <p>
              <b>Климат:</b> Регион характеризуется резко континентальным климатом. Здесь наблюдается огромный перепад температур: от <b>-45°C</b> в зимние месяцы до <b>+45°C</b> в летний зной. Это край суровых ветров и палящего солнца.
            </p>
            <p>
              <b>Водные ресурсы:</b> Реки Сарысу и Кара-Кенгир являются основными источниками воды. Из-за засушливости региона Кенгирское водохранилище считается стратегическим объектом для жизни городов.
            </p>
          </div>
        </motion.div>
        <div className="h-[500px] bg-slate-200 rounded-[60px] shadow-2xl flex items-center justify-center italic text-slate-400 border-4 border-white">
          <img src="/map.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Geography;
