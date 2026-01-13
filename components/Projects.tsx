"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";
import { Github, PlayCircle } from "lucide-react";

type Category = "All" | "Android" | "Desktop";

const projects = [
    {
        id: 1,
        title: "Tourism Guide Android App",
        category: "Android",
        image: "/project-placeholder.png",
        desc: "Android app for exploring tourist spots with Google Maps integration, location-based services, favorites section, and weather/location APIs. Features interactive Grid & List Views and SQLite + Firebase storage.",
        tech: ["Kotlin", "Room Database", "SQLite", "Google Maps API", "Firebase"],
        date: "Nov 2024 - Present",
        links: { demo: "#", code: "#" }
    },
    {
        id: 2,
        title: "Algorithm Simulator V2",
        category: "Desktop",
        image: "/project-placeholder.png",
        desc: "Professional JavaFX application with modern UI (AtlantaFX themes, dark/light mode) visualizing 20+ algorithms across stacks, linked lists, sorting, searching, and graph theory with real-time animations and performance analysis.",
        tech: ["JavaFX", "AtlantaFX", "MVC Architecture", "Service/Repository Pattern"],
        date: "Aug 2025 - Present (V2)",
        links: { demo: "#", code: "#" }
    },
    {
        id: 3,
        title: "Algorithm Simulator V1",
        category: "Desktop",
        image: "/project-placeholder.png",
        desc: "Interactive Java Swing desktop app to visualize core sorting algorithms and data structures with modular text-based visualization and comprehensive error handling.",
        tech: ["Java Swing", "Data Structures", "Algorithm Visualization"],
        date: "Jun 2023 - Jul 2023",
        links: { demo: "#", code: "#" }
    }
];

export default function Projects() {
    const [filter, setFilter] = useState<Category>("All");

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

                    <motion.div
                        className={styles.filterContainer}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {(["All", "Android", "Desktop"] as Category[]).map((cat) => (
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
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className={`glass-panel ${styles.card}`}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(109, 40, 217, 0.3)'
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.category}>{project.category}</div>
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.date}>{project.date}</div>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.desc}>{project.desc}</p>

                                    <div className={styles.tags}>
                                        {project.tech.map((t) => (
                                            <motion.span
                                                key={t}
                                                className={styles.tag}
                                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                                                transition={{ duration: 0.15 }}
                                            >
                                                {t}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <div className={styles.links}>
                                        <a href={project.links.demo} className={`${styles.linkBtn} ${styles.demoBtn}`}>
                                            <PlayCircle size={18} /> Demo
                                        </a>
                                        <a href={project.links.code} className={`${styles.linkBtn} ${styles.codeBtn}`}>
                                            <Github size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
