import { motion } from 'framer-motion';

const cities = [
  {
    name: "Жезказган",
    img: "/zhez.webp", // твое фото
    title: "Медная столица",
    desc: "Административный центр области. Город был основан как рабочий поселок при медном комбинате...",
    fact: "Здесь находится один из крупнейших медеплавильных заводов в мире."
  },
  {
    name: "Сатпаев",
    img: "/satpayev.webp", // твое фото
    title: "Город горняков",
    desc: "Назван в честь великого ученого Каныша Сатпаева. Почти всё население связано с шахтами...",
    fact: "Глубина некоторых шахт вокруг города превышает 500 метров."
  },
  {
    name: "Каражал",
    img: "/karazhal.webp", // твое фото
    title: "Железное сердце",
    desc: "Город на востоке области, центр добычи железных и марганцевых руд...",
    fact: "Месторождение считается одним из самых перспективных по запасам марганца."
  }
];


const CityExplorer = () => {
  return (
    <section className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}
          className="text-5xl md:text-7xl font-black mb-24 tracking-tighter text-slate-900"
        >
          ГОРОДА <br/><span className="text-orange-600">ОБЛАСТИ</span>
        </motion.h2>

        <div className="space-y-40">
          {cities.map((city, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-video bg-slate-100 rounded-[40px] border-4 border-slate-50 shadow-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-orange-600/10 group-hover:bg-transparent transition-colors" />
										<img src={city.img} alt="" />
                   <div className="w-full h-full flex items-center justify-center text-slate-300 italic">Фото {city.name}</div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-orange-600 font-black tracking-widest uppercase">{city.title}</span>
                <h3 className="text-4xl font-bold text-slate-900">{city.name}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{city.desc}</p>
                <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900 italic text-slate-500">
                  {city.fact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityExplorer;
