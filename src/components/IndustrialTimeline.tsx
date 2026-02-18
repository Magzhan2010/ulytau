import { motion } from 'framer-motion';

const IndustrialTimeline = () => {
  const events = [
    { year: "1926", title: "Открытие", desc: "Академик Сатпаев доказал, что Жезказган — крупнейшее месторождение меди в мире." },
    { year: "1943", title: "Первый Завод", desc: "В разгар войны Жезказган начал давать металл для фронта." },
    { year: "1973", title: "Областной центр", desc: "Первое создание Жезказганской области." },
    { year: "2022", title: "Новая Эра", desc: "Указом Президента создана Улытауская область с центром в Жезказгане." }
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-tighter">Путь становления региона</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {events.map((e, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 bg-slate-50 rounded-2xl border-t-4 border-orange-600 shadow-sm hover:shadow-xl transition-all"
            >
              <span className="text-4xl font-black text-orange-600/20 absolute top-4 right-4">{e.year}</span>
              <h4 className="text-xl font-bold mb-4">{e.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialTimeline;
