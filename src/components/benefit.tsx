import { motion } from 'framer-motion';

const Benefit = () => {
  const benefits = [
    { title: "Медный Пояс", text: "Жезказганское месторождение — это фундамент экономики. Медь Улытау славится чистотой и востребована во всем мире." },
    { title: "Марганцевый Гигант", text: "Месторождения Жайрем и Каражал обеспечивают 70% добычи марганца в Казахстане для металлургии." },
    { title: "Космическая Гавань", text: "Степь Улытау — это точка возвращения человечества на Землю. Здесь приземляются международные экипажи МКС." },
    { title: "Сакральный Центр", text: "Мавзолеи Жошы-хана и Алаша-хана делают регион главным историческим хабом страны." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-16 text-center tracking-tight">ЧЕМ ПОЛЕЗЕН РЕГИОН?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 20 }}
              className="p-8 bg-white/5 border-l-4 border-amber-500 rounded-r-3xl hover:bg-white/10 transition-all"
            >
              <h4 className="text-2xl font-bold mb-4 text-amber-500 uppercase">{b.title}</h4>
              <p className="text-slate-300 text-lg leading-relaxed italic">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
