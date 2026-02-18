import { motion } from 'framer-motion';

const SacredPlaces = () => {
	const places = [
		{ 
			title: "Мавзолей Жошы Хана", 
			desc: "Усыпальница старшего сына Чингисхана, датируемая XIII веком.", 
			image: "/zhoshy.jpg" 
		},
		{ 
			title: "Мавзолей Алаша Хана", 
			desc: "Архитектурный шедевр XI-XII веков, посвященный предку казахов.", 
			image: "/alasha.jpg" // Замени на свое название файла
		},
		{ 
			title: "Гора Аулиетау", 
			desc: "Сакральная вершина, где по легендам находится место силы.", 
			image: "/aulietaun.jpg" // Замени на свое название файла
		}
	];

  return (
    <section className="py-32 bg-[#05070a] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-20 text-center uppercase">Сакральный Центр</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {places.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="group cursor-pointer"
            >
              <div className="h-80 bg-slate-800 rounded-3xl mb-6 overflow-hidden border border-white/10 relative bg-cover bg-no-repeat bg-center">
                <img 
									src={p.image} 
									alt={p.title} 
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
								/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
								<div className="absolute bottom-6 left-6 font-bold text-xl">{p.title}</div>
							</div>
							
							<p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-2">
								{p.desc}
							</p>
						</motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredPlaces;
