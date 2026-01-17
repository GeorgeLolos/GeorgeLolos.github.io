import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Building2, Rocket, Brain, Briefcase, User } from 'lucide-react';
import { useSEO, generateBlogPostingSchema } from '../hooks/useSEO';

const categoryIcons = {
    "Private Equity": Building2,
    "Banking": Building2,
    "Venture Building": Rocket,
    "AI & Digital": Brain,
    "Digital Transformation": TrendingUp,
    "Advisory": Briefcase,
};



export const BlogPost = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    // SEO for individual blog post (must be called before any conditional returns for hooks rules)
    useSEO({
        title: post ? `${post.title} | George Lolos` : 'Blog | George Lolos',
        description: post ? post.description : 'Case studies and insights from George Lolos',
        type: 'article',
        structuredData: post ? generateBlogPostingSchema(post) : null
    });

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const currentIndex = posts.findIndex(p => p.id === id);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    const CategoryIcon = categoryIcons[post.category] || TrendingUp;

    return (
        <div className="pt-24 sm:pt-32 pb-16 md:pb-24">
            {/* Header Section */}
            <div className="px-4 sm:px-6 lg:px-8 pb-12">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Category */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                            <CategoryIcon className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
                        </div>
                        <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                            {post.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-tight"
                    >
                        {post.title}
                    </motion.h1>

                    {/* Meta: Role */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                    >
                        <User className="w-4 h-4" />
                        <span className="text-sm font-medium">Role: <span className="text-zinc-900 dark:text-zinc-100">{post.role}</span></span>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-4xl mx-auto"
                >
                    <div className="py-8 border-t border-zinc-200 dark:border-zinc-800">
                        {/* Overview */}
                        <section className="mb-12">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6">
                                Overview
                            </h2>
                            <p className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-200 leading-relaxed font-light">
                                {post.description}
                            </p>
                        </section>

                        {/* Impact & Results Highlight Box */}
                        <section className="mb-12 p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
                                        Key Outcome
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                                        <span className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                                            {post.outcome}
                                        </span>
                                    </div>
                                </div>
                                <div className="sm:max-w-md border-l-2 border-zinc-200 dark:border-zinc-700 pl-6">
                                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                                        {post.impact}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            {/* Challenge */}
                            <section>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
                                    The Challenge
                                </h2>
                                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    {post.category === "Private Equity" && "The client needed rapid, comprehensive assessment of the target company's technology infrastructure to inform investment decisions. With tight deal timelines and high stakes, the due diligence had to be both thorough and efficient."}
                                    {post.category === "Banking" && "Legacy systems, siloed data, and regulatory constraints made transformation complex. The organization needed a clear roadmap that balanced innovation with risk management while securing stakeholder buy-in."}
                                    {post.category === "Venture Building" && "Building a new venture from scratch required establishing everything from technology stack to team culture. Speed to market was critical, but so was building a foundation that could scale."}
                                    {post.category === "AI & Digital" && "Integrating AI into existing business processes required careful change management and technical integration. The challenge was proving value quickly while building sustainable capabilities."}
                                    {post.category === "Digital Transformation" && "Modernizing legacy systems while maintaining business continuity required careful planning and execution. The organization needed to see results while managing the complexity of large-scale change."}
                                    {post.category === "Advisory" && "Providing strategic guidance required understanding both technical realities and business objectives. The challenge was translating complex technical concepts into actionable business recommendations."}
                                </p>
                            </section>

                            {/* Approach */}
                            <section>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
                                    The Approach
                                </h2>
                                <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    <p className="mb-4">
                                        As {post.role}, I brought a structured methodology combining deep technical expertise with strategic business thinking.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-base text-zinc-600 dark:text-zinc-400">
                                        <li>Stakeholder mapping & requirement gathering</li>
                                        <li>Technical deep-dives & architecture review</li>
                                        <li>Risk identification & mitigation strategy</li>
                                        <li>Clear communication to all audiences</li>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        {/* Key Takeaways */}
                        <section className="mb-8">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-6">
                                key takeaways
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                                    <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Technical Leadership</div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Deep technical expertise combined with strategic vision drives lasting impact.</p>
                                </div>
                                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
                                    <div className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Stakeholder Alignment</div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Success requires bringing together technical teams, executives, and external partners.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>

            {/* Navigation */}
            <div className="px-4 sm:px-6 lg:px-8 mt-12 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-12">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between gap-6">
                        {prevPost ? (
                            <Link
                                to={`/blog/${prevPost.id}`}
                                className="flex-1 group p-6 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
                            >
                                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Previous Case Study
                                </div>
                                <div className="font-bold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                                    {prevPost.title}
                                </div>
                            </Link>
                        ) : <div className="flex-1" />}

                        {nextPost ? (
                            <Link
                                to={`/blog/${nextPost.id}`}
                                className="flex-1 group p-6 bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-right"
                            >
                                <div className="flex items-center justify-end gap-2 text-sm text-zinc-500 mb-2">
                                    Next Case Study
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                                <div className="font-bold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                                    {nextPost.title}
                                </div>
                            </Link>
                        ) : <div className="flex-1" />}
                    </div>
                </div>
            </div>
        </div>
    );
};
