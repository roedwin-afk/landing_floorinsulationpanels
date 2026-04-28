export const en = {
    nav: {
        features: 'Features',
        techDetails: 'Tech Details',
        installation: 'Installation',
        specs: 'Specs',
        contact: 'Contact Us',
    },
    hero: {
        badge: 'Engineering Excellence',
        title1: 'Industrial',
        title2: 'Floor Insulation',
        desc: 'High-density panel systems designed to withstand extreme structural loads while maintaining superior thermal efficiency in logistics and cold storage.',
        cta1: 'Technical Data',
        cta2: 'Installation Guide',
        meta1: 'LOAD RATING: HEAVY-DUTY',
        meta2: 'CERTIFIED ISO 9001',
    },
    features: {
        heading: 'Industrial Performance',
        heavy: {
            title: 'Heavy-Duty Support',
            desc: 'Perfectly suited for automated warehouses and heavy forklift traffic without structural fatigue or compression issues.',
        },
        thermal: {
            title: 'Thermal Precision',
            desc: 'Maintains stable temperatures for cold storage logistics, preventing thermal bridges and significantly reducing energy costs.',
        },
        rapid: {
            title: 'Rapid Assembly',
            desc: 'Engineered tongue-and-groove system allows for fast dry-installation on site, reducing project timelines by 30%.',
        },
    },
    anatomy: {
        heading: 'Panel Anatomy',
        subheading: 'High-performance multi-layered approach for structural integrity and thermal management.',
        badge: 'Technical Visualization',
        layers: [
            {
                title: 'Protective Surface Layer',
                desc: 'Fiber-reinforced surface for maximum impact resistance and wear protection.',
            },
            {
                title: 'Insulation Core (PIR/XPS)',
                desc: 'High-density core available in various thicknesses to achieve specific R-values.',
            },
            {
                title: 'Moisture Control System',
                desc: 'Integrated vapor barrier to protect the core and prevent ground moisture migration.',
            },
        ],
    },
    process: {
        heading: 'Industrial Workflow',
        subheading: 'Optimized on-site procedures to ensure project milestones are met.',
        badge: 'Precision Engineering',
        steps: [
            {
                number: '01',
                title: 'Surface Preparation',
                desc: 'Subfloor leveling and moisture analysis for substrate stability.',
            },
            {
                number: '02',
                title: 'Panel Interlocking',
                desc: 'Quick dry-installation using standardized alignment tools.',
            },
            {
                number: '03',
                title: 'Joint Sealing',
                desc: 'Thermal bridge elimination through specialized joint sealing.',
            },
            {
                number: '04',
                title: 'Final Inspection',
                desc: 'Load capacity verification and project handover.',
            },
        ],
    },
    specs: {
        heading: 'Tech Matrix',
        cta: {
            title: 'Specific R-Value requirements?',
            desc: 'Our lab can manufacture panels with custom core densities to match your building\'s specific energy model.',
            button: 'Consult Technical Dept',
        },
        rows: [
            { label: 'Compressive Strength', value: '750 - 1200 kPa' },
            { label: 'Thermal Conductivity', value: '0.022 W/m·K' },
            { label: 'Fire Classification', value: 'Euroclass B-s1, d0' },
            { label: 'Standard Width', value: '1150 mm (Nominal)' },
            { label: 'Available Thickness', value: '60 - 200 mm' },
            { label: 'Panel Length', value: 'Up to 6000 mm' },
        ],
    },
    contact: {
        heading: 'Technical Inquiry',
        subheading: 'Our structural engineers are ready to assist with your load calculations and insulation specs.',
        cta: 'Request Quote',
        badge: 'Get in Touch',
    },
    footer: {
        tagline: 'A subsidiary of Constructive Solutions Group, defining the standards for industrial slab insulation across Europe and America.',
        company: {
            heading: 'Company',
            links: [
                { label: 'About Us', href: '#' },
                { label: 'Certifications', href: '#' },
                { label: 'Case Studies', href: '#' },
            ],
        },
        support: {
            heading: 'Support',
            links: [
                { label: 'BIM Objects', href: '#' },
                { label: 'CAD Details', href: '#' },
                { label: 'Documentation', href: '#' },
                { label: 'Contact', href: '#' },
            ],
        },
        legal: {
            copyright: '© 2025 Constructive Solutions Group | Floor Insulation Division',
            privacy: 'Privacy Policy',
            compliance: 'Industrial Compliance',
        },
    },
    notFound: {
        code: '404',
        title: 'Page Not Found',
        desc: 'The page you are looking for does not exist or has been moved.',
        cta: 'Back to Home',
    },
} as const;

type DeepString<T> = {
    [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;