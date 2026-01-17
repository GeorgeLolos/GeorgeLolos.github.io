import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Building2, Rocket, Brain, TrendingUp, Briefcase } from 'lucide-react';

const categoryIcons = {
    "Private Equity": Building2,
    "Banking": Building2,
    "Venture Building": Rocket,
    "AI & Digital": Brain,
    "Digital Transformation": TrendingUp,
    "Advisory": Briefcase,
};

const categoryColors = {
    "Private Equity": "from-blue-500 to-indigo-600",
    "Banking": "from-emerald-500 to-teal-600",
    "Venture Building": "from-orange-500 to-red-500",
    "AI & Digital": "from-purple-500 to-pink-500",
    "Digital Transformation": "from-cyan-500 to-blue-500",
    "Advisory": "from-amber-500 to-orange-500",
};

export const FeaturedProjects = ({ projects }) => {
    return (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Section Header - Centered */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4"
                    >
                        Case Studies
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4"
                    >
                        Selected Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Real-world examples of technology leadership, from PE due diligence to venture builds.
                    </motion.p>
                </div>

                {/* Featured Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {projects.map((project, index) => {
                        const CategoryIcon = categoryIcons[project.category] || TrendingUp;
                        const gradientClass = categoryColors[project.category] || "from-zinc-500 to-zinc-600";

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group"
                            >
                                <Link to={`/blog/${project.id}`} className="block h-full">
                                    <div className="h-full flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl lg:rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-xl overflow-hidden">
                                        {/* Header with gradient */}
                                        <div className={`p-6 bg-gradient-to-br ${gradientClass}`}>
                                            <div className="flex items-center justify-between mb-4">
                                                <CategoryIcon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                                                <span className="text-xs font-bold text-white/90 uppercase tracking-wide">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="text-sm font-bold text-white">
                                                {project.outcome}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-6">
                                            <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                                Read Case Study
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        );
                    })}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        View All Case Studies
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
