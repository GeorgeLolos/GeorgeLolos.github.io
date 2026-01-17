import { PROFILE, EXPERIENCE, SERVICES, FEATURED_PROJECTS } from '../data';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { useSEO } from '../hooks/useSEO';

export default function LandingPage() {
    // SEO for landing page
    useSEO({
        title: 'George Lolos | Fractional CTO & Engineering Leader | Ex-Google, Uber, Bain',
        description: 'Engineering Executive with 15+ years leading at Google, Uber, Bain. Fractional CTO, Technical Due Diligence, AI Transformation & Venture Building expert serving Europe & Middle East.',
        type: 'website'
    });

    return (
        <>
            <Hero profile={PROFILE} />
            <div id="services" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <Services services={SERVICES} />
            </div>
            <div id="case-studies" className="py-16 sm:py-24">
                <FeaturedProjects projects={FEATURED_PROJECTS} />
            </div>
            <div id="experience" className="py-16 sm:py-24 bg-zinc-50 dark:bg-zinc-900/30">
                <Experience experience={EXPERIENCE} />
            </div>
            <div className="py-16 sm:py-24">
                <Contact profile={PROFILE} />
            </div>
        </>
    );
}
