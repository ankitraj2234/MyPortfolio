// Project data types and content for the portfolio

export interface Screenshot {
    src: string;
    label: string;
    description?: string;
}

export interface Project {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: 'Web' | 'Desktop' | 'Mobile' | 'Full-Stack';
    techStack: string[];
    features: string[];
    screenshots: Screenshot[];
    liveUrl?: string;
    githubUrl?: string;
    videoUrl?: string; // Future support
    highlights: string[];
    metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
    {
        slug: 'algovision',
        title: 'AlgoVision',
        tagline: 'Next-Generation Algorithm Visualization Platform',
        description: 'A professional-grade, open-source educational web application that transforms complex data structures and algorithms into interactive, immersive 3D learning experiences. Features real-time variable tracking, interactive graph building, and a comprehensive suite of visualization tools.',
        category: 'Web',
        techStack: ['React 18', 'TypeScript', 'React Three Fiber', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        features: [
            'Real-time 3D algorithm visualizations',
            'Variable Watcher with live state tracking',
            'Interactive Graph Builder',
            '15+ algorithms & 5 data structures',
            'Camera automation following active nodes',
            'Pseudocode highlighting synchronized with execution',
            'Mobile responsive design'
        ],
        screenshots: [
            { src: '/projects/algovision/AlgoVision Poster.png', label: 'AlgoVision', description: 'Next-Generation Algorithm Visualization Platform' },
            { src: '/projects/algovision/Home Tab.png', label: 'Main Dashboard', description: 'Clean, intuitive homepage with algorithm selection' },
            { src: '/projects/algovision/Algorithm Collection.png', label: 'Algorithm Library', description: 'Comprehensive collection of sorting, searching, and graph algorithms' },
            { src: '/projects/algovision/3D Playground.png', label: 'Immersive 3D Visualization', description: 'WebGL-powered 3D environment for spatial algorithm understanding' },
            { src: '/projects/algovision/Stack Operations.png', label: 'Stack Data Structure', description: 'Interactive stack visualization with push/pop animations' },
            { src: '/projects/algovision/Queue Operations.png', label: 'Queue Operations', description: 'FIFO queue visualization with enqueue/dequeue effects' }
        ],
        liveUrl: 'https://algo-vision-ankit.vercel.app/',
        highlights: [
            'True 3D immersion unlike any other visualizer',
            'Live variable state tracking for debugging',
            'Build graphs by clicking—no code needed',
            'Camera auto-follows during traversals'
        ],
        metrics: [
            { label: 'Algorithms', value: '15+' },
            { label: 'Data Structures', value: '5' },
            { label: 'Visualization Modes', value: '2D & 3D' },
            { label: 'TypeScript Coverage', value: '100%' }
        ]
    },
    {
        slug: 'srams',
        title: 'SRAMS',
        tagline: 'Secure Role-Based Access Management System',
        description: 'An enterprise-grade document security platform implementing Zero Trust architecture with a unique Dual-Interface Security Model. Standard users access via web while administrative privileges are strictly gated behind a custom-built secure Desktop Launcher with cryptographic verification.',
        category: 'Full-Stack',
        techStack: ['Go (Golang)', 'Gin Framework', 'React', 'TypeScript', 'Electron', 'SQLite', 'JWT', 'TOTP MFA'],
        features: [
            'Desktop-Gated Admin Security Model',
            'Dynamic PDF Watermarking with viewer identity',
            'Forensic-level audit logging with page tracking',
            'Zero-leak document viewer (no downloads)',
            'Multi-factor authentication (TOTP)',
            'Cryptographic session verification',
            'Scalable to multi-tenant SaaS'
        ],
        screenshots: [
            { src: '/projects/srams/SRAMS Poster.png', label: 'SRAMS', description: 'Secure Role-Based Access Management System' },
            { src: '/projects/srams/Admin Login.png', label: 'Secure Admin Authentication', description: 'Desktop-only admin login with cryptographic headers' },
            { src: '/projects/srams/Admin Dahboard.png', label: 'Administration Control Center', description: 'Complete system oversight and configuration' },
            { src: '/projects/srams/User Login.png', label: 'User Portal Access', description: 'Secure web-based user authentication' },
            { src: '/projects/srams/User Dashboard.png', label: 'User Document Portal', description: 'Document access and management interface' },
            { src: '/projects/srams/Document managment.png', label: 'Document Management System', description: 'Secure document upload and organization' },
            { src: '/projects/srams/PDF Watermark.png', label: 'Dynamic Watermark Engine', description: 'Real-time watermarks with viewer identity and timestamp' },
            { src: '/projects/srams/User Managment.png', label: 'User Role Management', description: 'Granular role-based access control' },
            { src: '/projects/srams/Audit Logs.png', label: 'Forensic Audit Trail', description: 'Immutable logs of every system interaction' }
        ],
        highlights: [
            'Admin access physically restricted to desktop app',
            'Watermarks include viewer IP & timestamp',
            'Page-level view tracking for compliance',
            'Documents never exposed as download links'
        ],
        metrics: [
            { label: 'Security Layers', value: '5+' },
            { label: 'Audit Events Tracked', value: 'All' },
            { label: 'MFA Support', value: 'TOTP' },
            { label: 'Platform', value: 'Desktop + Web' }
        ]
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map(p => p.slug);
}
