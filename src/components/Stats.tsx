import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    { label: "Население области", val: "221 000+", desc: "Большинство — городские жители" },
    { label: "Уровень урбанизации", val: "79%", desc: "Высокая концентрация в городах" },
    { label: "Территория", val: "189к км²", desc: "Центральная часть Сарыарки" },
    { label: "Крупных города", val: "3", desc: "Жезказган, Сатпаев, Каражал" }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statsData.map((s, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: i * 0.1 }}
            className="p-10 bg-slate-50 rounded-[40px] border-b-8 border-orange-600 shadow-lg hover:shadow-2xl transition-all"
          >
            <p className="text-5xl font-black text-slate-900 mb-2">{s.val}</p>
            <p className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4">{s.label}</p>
            <p className="text-slate-500 text-sm italic leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
