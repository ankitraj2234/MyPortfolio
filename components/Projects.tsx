"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

type Category = "All" | "Web" | "Full-Stack" | "Desktop";

// Thumbnail carousel component for each project card
function ThumbnailCarousel({ project }: { project: Project }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (project.screenshots.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % project.screenshots.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [project.screenshots.length]);

    return (
        <div className={styles.carouselWrapper}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={styles.carouselSlide}
                >
                    <Image
                        src={project.screenshots[currentIndex].src}
                        alt={project.screenshots[currentIndex].label}
                        fill
                        className={styles.image}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className={styles.carouselDots}>
                {project.screenshots.map((_, idx) => (
                    <span
                        key={idx}
                        className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                    />
                ))}
            </div>

            {/* Current label */}
            <div className={styles.slideLabel}>
                {project.screenshots[currentIndex].label}
            </div>
        </div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState<Category>("All");

    const categories: Category[] = ["All", "Web", "Full-Stack"];

    const filteredProjects = projects.filter(
        (p) => filter === "All" || p.category === filter
    );

    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        className="text-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        Featured Projects
                    </motion.h2>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.1 }}
                    >
                        Industry-grade applications built with modern technologies
                    </motion.p>

                    <motion.div
                        className={styles.filterContainer}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`${styles.filterBtn} ${filter === cat ? styles.activeFilter : ""}`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.slug}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className={`glass-panel ${styles.card}`}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(244, 63, 94, 0.3)'
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17, delay: index * 0.1 }}
                            >
                                <Link href={`/projects/${project.slug}`} className={styles.cardLink}>
                                    <div className={styles.imageWrapper}>
                                        <ThumbnailCarousel project={project} />
                                        <div className={styles.category}>{project.category}</div>
                                    </div>

                                    <div className={styles.content}>
                                        <h3 className={styles.title}>{project.title}</h3>
                                        <p className={styles.tagline}>{project.tagline}</p>

                                        <div className={styles.tags}>
                                            {project.techStack.slice(0, 4).map((t) => (
                                                <motion.span
                                                    key={t}
                                                    className={styles.tag}
                                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(244, 63, 94, 0.2)' }}
                                                    transition={{ duration: 0.15 }}
                                                >
                                                    {t}
                                                </motion.span>
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className={styles.moreTag}>+{project.techStack.length - 4}</span>
                                            )}
                                        </div>

                                        <div className={styles.cardFooter}>
                                            <div className={styles.metrics}>
                                                {project.metrics?.slice(0, 2).map((m, i) => (
                                                    <div key={i} className={styles.metricBadge}>
                                                        <span className={styles.metricValue}>{m.value}</span>
                                                        <span className={styles.metricLabel}>{m.label}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className={styles.viewProject}>
                                                <span>View Project</span>
                                                <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.liveButton}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
