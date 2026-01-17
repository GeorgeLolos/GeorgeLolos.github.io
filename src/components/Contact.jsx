import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Calendar } from 'lucide-react';

export const Contact = ({ profile }) => {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: CTA */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4"
                        >
                            Let's Connect
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tighter leading-[1.1] mb-6"
                        >
                            Ready to build something{' '}
                            <span className="text-indigo-600 dark:text-indigo-400">extraordinary</span>?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8"
                        >
                            I'm available for Fractional CTO, Advisory, and Board roles. Let's discuss how I can help your organization navigate technical challenges and scale effectively.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-bold text-sm sm:text-base tracking-tight hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                Email Me
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-bold text-sm sm:text-base tracking-tight hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-3xl p-8 sm:p-10"
                    >
                        <div className="text-center mb-8">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-6 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                                GL
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{profile.name}</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">{profile.title}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl">
                                <Mail className="w-5 h-5 text-zinc-400" />
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Email</div>
                                    <div className="text-sm sm:text-base font-medium break-all">{profile.email}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl">
                                <Calendar className="w-5 h-5 text-zinc-400" />
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Location</div>
                                    <div className="text-sm sm:text-base font-medium">{profile.location}</div>
                                </div>
                            </div>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors group"
                            >
                                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">LinkedIn</div>
                                    <div className="text-sm sm:text-base font-medium break-all">linkedin.com/in/george-lolos</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
