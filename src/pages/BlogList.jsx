import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Rocket, Brain, TrendingUp, Briefcase } from 'lucide-react';
import { useSEO, generateBlogListSchema } from '../hooks/useSEO';
import privateEquityImg from '../assets/private_equity.png';
import bankingImg from '../assets/banking.png';
import ventureBuildingImg from '../assets/venture_building.png';

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
};

export const BlogList = ({ posts }) => {
    // SEO for blog listing
    useSEO({
        title: 'Case Studies & Insights | George Lolos',
        description: 'Deep dives into technology leadership, due diligence findings, and lessons learned from building ventures at Google, Uber, Bain and beyond.',
        type: 'website',
        structuredData: generateBlogListSchema(posts)
    });

    return (
        <div className="pt-24 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4"
                    >
                        Insights & Case Studies
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6"
                    >
                        Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Deep dives into technology leadership, due diligence findings, and lessons learned from building ventures across industries.
                    </motion.p>
                </div>

                {/* Featured Post */}
                {posts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12 lg:mb-16"
                    >
                        <Link to={`/blog/${posts[0].id}`} className="block group">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 shadow-sm hover:shadow-xl">
                                {/* Image Area */}
                                <div className="relative h-64 lg:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                    {categoryImages[posts[0].category] ? (
                                        <img
                                            src={categoryImages[posts[0].category]}
                                            alt={posts[0].category}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
                                            {(() => {
                                                const Icon = categoryIcons[posts[0].category] || TrendingUp;
                                                return <Icon className="w-20 h-20 text-zinc-400 dark:text-zinc-600" />;
                                            })()}
                                        </div>
                                    )}
                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                                            Featured
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center p-8 lg:p-12">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                                            {posts[0].category}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {posts[0].title}
                                    </h2>
                                    <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                                        {posts[0].description}
                                    </p>
                                    <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-1">
                                                Outcome
                                            </div>
                                            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                                {posts[0].outcome}
                                            </span>
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                                            Read Case Study
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* All Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.slice(1).map((post, index) => {
                        const CategoryIcon = categoryIcons[post.category] || TrendingUp;
                        const bgImage = categoryImages[post.category] || null;

                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
                            >
                                <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                                    {/* Image Area */}
                                    <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                        {bgImage ? (
                                            <img
                                                src={bgImage}
                                                alt={post.category}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800">
                                                <CategoryIcon className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
                                            </div>
                                        )}
                                        {/* Category Tag (Floating) */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                                                <CategoryIcon className="w-3.5 h-3.5" />
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6 flex flex-col">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-6 flex-1">
                                            {post.description}
                                        </p>

                                        {/* Impact Section */}
                                        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                                                Impact
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400 line-clamp-1">
                                                    {post.outcome}
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
            </div>
        </div>
    );
};
