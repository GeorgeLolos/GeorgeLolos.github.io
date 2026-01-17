import { motion } from 'framer-motion';
import { Cpu, Search, Rocket, BrainCircuit, Code } from 'lucide-react';

// Import service images
import fractionalCtoImg from '../assets/images/service_fractional_cto.webp';
import dueDiligenceImg from '../assets/images/service_due_diligence.webp';
import ventureBuildingImg from '../assets/images/service_venture_building.webp';
import aiTransformationImg from '../assets/images/service_ai_transformation.webp';

// Map icon names to actual components for tree-shaking
const iconMap = {
    Cpu,
    Search,
    Rocket,
    BrainCircuit,
    Code,
};

const serviceImages = {
    "Fractional CTO": fractionalCtoImg,
    "Technical Due Diligence": dueDiligenceImg,
    "Venture Building": ventureBuildingImg,
    "AI Transformation": aiTransformationImg,
};

export const Services = ({ services }) => {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header - Centered */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4"
                    >
                        What I Do
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4"
                    >
                        Services & Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Strategic technology leadership for companies navigating digital transformation, scaling challenges, or investment decisions.
                    </motion.p>
                </div>

                {/* Services Grid - Visual Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Code;
                        const gradientClass = service.gradient || "from-indigo-500 to-purple-600";
                        const image = serviceImages[service.title];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden"
                            >
                                {/* Visual Area with Image */}
                                <div className="aspect-[16/10] rounded-2xl lg:rounded-3xl mb-6 overflow-hidden relative bg-zinc-200 dark:bg-zinc-800">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={service.title}
                                            loading="lazy"
                                            width="800"
                                            height="600"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                                            <Icon className="w-20 h-20 sm:w-24 sm:h-24 text-white/30" strokeWidth={0.75} />
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
                                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{service.title}</h3>
                                    </div>
                                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pl-[52px]">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
