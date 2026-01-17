import { motion } from 'framer-motion';

export const Hero = ({ profile }) => {
    return (
        <section className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
                    >
                        <span className="w-8 sm:w-12 h-[1px] bg-zinc-400 dark:bg-zinc-600"></span>
                        <span className="text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase text-xs sm:text-sm">
                            Based in {profile.location}
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-100 mb-6 sm:mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Engineering<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            Leadership
                        </span>
                        <br />
                        & Strategy.
                    </motion.h1>

                    <motion.p
                        className="text-base sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light mb-8 sm:mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {profile.subtitle}
                    </motion.p>

                    <motion.p
                        className="text-sm sm:text-base text-zinc-500 dark:text-zinc-500 max-w-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {profile.summary}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
