import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Building2, Rocket, Brain, TrendingUp, Briefcase } from 'lucide-react';
import privateEquityImg from '../assets/private_equity.webp';
import bankingImg from '../assets/banking.webp';
import ventureBuildingImg from '../assets/venture_building.webp';
import aiDigitalImg from '../assets/ai_digital.webp';
import digitalTransformationImg from '../assets/digital_transformation.webp';
import advisoryImg from '../assets/advisory.webp';

const categoryIcons = {
    "Private Equity": Building2,
    "Banking": Building2,
    "Venture Building": Rocket,
    "AI & Digital": Brain,
    "Digital Transformation": TrendingUp,
    "Advisory": Briefcase,
};

const categoryImages = {
    "Private Equity": privateEquityImg,
    "Banking": bankingImg,
    "Venture Building": ventureBuildingImg,
    "AI & Digital": aiDigitalImg,
    "Digital Transformation": digitalTransformationImg,
    "Advisory": advisoryImg,
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
                        const bgImage = categoryImages[project.category] || null;

                        return (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                            >
                                <Link to={`/blog/${project.id}`} className="flex flex-col h-full">
                                    {/* Top: Image Area */}
                                    <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        {bgImage ? (
                                            <img
                                                src={bgImage}
                                                alt={project.category}
                                                loading="lazy"
                                                width="800"
                                                height="600"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                                                <CategoryIcon className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
                                            </div>
                                        )}
                                        {/* Category Tag (Floating) */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                                                <CategoryIcon className="w-3.5 h-3.5" />
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom: Content Area */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Impact Section */}
                                        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                                                Impact & Results
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                                                    {project.outcome}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
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
