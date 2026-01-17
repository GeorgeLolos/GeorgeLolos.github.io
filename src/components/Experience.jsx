import { motion } from 'framer-motion';

export const Experience = ({ experience }) => {
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
                        Track Record
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        15+ years of engineering leadership at the world's most innovative companies.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        {experience.map((job, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`relative md:grid md:grid-cols-2 md:gap-8 md:py-8 ${isEven ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-950 z-10" />

                                    {/* Content */}
                                    <div className={`${isEven ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
                                        <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                            <span className="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-500 block mb-2">
                                                {job.period}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold mb-1">{job.company}</h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{job.role}</p>
                                            <p className="text-sm text-zinc-500 mb-4">{job.location}</p>
                                            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4">
                                                {job.description}
                                            </p>

                                            <ul className={`space-y-2 ${isEven ? 'md:text-right' : ''}`}>
                                                {job.highlights.slice(0, 3).map((highlight, i) => (
                                                    <li key={i} className={`flex items-start gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5"></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
