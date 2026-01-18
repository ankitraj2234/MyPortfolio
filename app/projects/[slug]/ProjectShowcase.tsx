'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import type { Project } from '@/lib/projects';
import styles from './ProjectShowcase.module.css';

interface Props {
    project: Project;
}

export default function ProjectShowcase({ project }: Props) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Filter out poster (first image) for the gallery - poster only shows in hero carousel
    const galleryScreenshots = project.screenshots.slice(1);

    // Auto-advance hero slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % project.screenshots.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [project.screenshots.length]);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryScreenshots.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryScreenshots.length) % galleryScreenshots.length);
        }
    };

    return (
        <main className={styles.main}>
            {/* Back Navigation */}
            <motion.div
                className={styles.backNav}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/#projects" className={styles.backLink}>
                    <ArrowLeft size={20} />
                    <span>Back to Projects</span>
                </Link>
            </motion.div>

            {/* Hero Section with Slideshow */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={styles.category}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.tagline}>{project.tagline}</p>

                        <div className={styles.actions}>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                                    <Github size={18} />
                                    <span>Source Code</span>
                                </a>
                            )}
                            {project.videoUrl && (
                                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                                    <Play size={18} />
                                    <span>Watch Demo</span>
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Hero Slideshow */}
                    <motion.div
                        className={styles.heroSlideshow}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                className={styles.slideContainer}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={project.screenshots[currentSlide].src}
                                    alt={project.screenshots[currentSlide].label}
                                    fill
                                    className={styles.slideImage}
                                    priority
                                />
                                <div className={styles.slideLabel}>
                                    {project.screenshots[currentSlide].label}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className={styles.slideIndicators}>
                            {project.screenshots.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`${styles.indicator} ${idx === currentSlide ? styles.active : ''}`}
                                    onClick={() => setCurrentSlide(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Bar */}
            {project.metrics && (
                <motion.section
                    className={styles.metrics}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {project.metrics.map((metric, idx) => (
                        <div key={idx} className={styles.metricItem}>
                            <span className={styles.metricValue}>{metric.value}</span>
                            <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                    ))}
                </motion.section>
            )}

            {/* Description Section */}
            <motion.section
                className={styles.description}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>About This Project</h2>
                <p>{project.description}</p>
            </motion.section>

            {/* Tech Stack */}
            <motion.section
                className={styles.techStack}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Technology Stack</h2>
                <div className={styles.techGrid}>
                    {project.techStack.map((tech, idx) => (
                        <motion.span
                            key={idx}
                            className={styles.techBadge}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)'
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
                className={styles.features}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Key Features</h2>
                <ul className={styles.featureList}>
                    {project.features.map((feature, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.08 }}
                        >
                            <span className={styles.featureBullet}>▸</span>
                            {feature}
                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {/* Screenshot Gallery */}
            <motion.section
                className={styles.gallery}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>Screenshots</h2>
                <div className={styles.galleryGrid}>
                    {galleryScreenshots.map((screenshot, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.galleryItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 40px rgba(244, 63, 94, 0.3)'
                            }}
                            onClick={() => openLightbox(idx)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.label}
                                    fill
                                    className={styles.galleryImage}
                                />
                                <div className={styles.imageOverlay}>
                                    <span>Click to Expand</span>
                                </div>
                            </div>
                            <div className={styles.imageInfo}>
                                <h4>{screenshot.label}</h4>
                                {screenshot.description && <p>{screenshot.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Highlights */}
            <motion.section
                className={styles.highlights}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2>What Makes This Unique</h2>
                <div className={styles.highlightGrid}>
                    {project.highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.highlightCard}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{
                                boxShadow: '0 0 30px rgba(244, 63, 94, 0.25)'
                            }}
                        >
                            <span className={styles.highlightNumber}>{idx + 1}</span>
                            <p>{highlight}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className={styles.closeBtn} onClick={closeLightbox}>
                            <X size={24} />
                        </button>

                        <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); prevImage(); }} style={{ left: '1rem' }}>
                            <ChevronLeft size={32} />
                        </button>

                        <motion.div
                            className={styles.lightboxContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={galleryScreenshots[selectedImage].src}
                                alt={galleryScreenshots[selectedImage].label}
                                fill
                                className={styles.lightboxImage}
                            />
                            <div className={styles.lightboxCaption}>
                                <h4>{galleryScreenshots[selectedImage].label}</h4>
                                {galleryScreenshots[selectedImage].description && (
                                    <p>{galleryScreenshots[selectedImage].description}</p>
                                )}
                            </div>
                        </motion.div>

                        <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); nextImage(); }} style={{ right: '1rem' }}>
                            <ChevronRight size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
