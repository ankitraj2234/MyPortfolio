"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";



const experiences = [
    {
        id: 1,
        role: "Solutions Engineer",
        company: "AccOps Systems",
        date: "Feb 2025 - Present",
        desc: "Leading technical demos and proof-of-concept deployments with 95% client conversion rates. Designing secure remote access and VDI solutions, troubleshooting complex networking issues using Wireshark and TCPdump, and analyzing client environments for optimized VM specifications and infrastructure design."
    },
    {
        id: 2,
        role: "Core Java Trainee",
        company: "Cipher Schools",
        date: "Jan 2024 - Oct 2024",
        desc: "Mastered Object-Oriented Programming principles including inheritance, encapsulation, polymorphism, and abstraction. Gained proficiency in Java Collections Framework (ArrayList, LinkedList, HashMap, HashSet). Constructed Java backend for university agriculture management system."
    }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className="container">
                <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1]
                        }}
                        style={{
                            fontSize: '3rem',
                            position: 'relative'
                        }}
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(6, 182, 212, 0.3)',
                                    '0 0 40px rgba(6, 182, 212, 0.6)',
                                    '0 0 20px rgba(6, 182, 212, 0.3)'
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                            style={{
                                borderRadius: '50%',
                                padding: '0.5rem',
                                display: 'inline-block'
                            }}
                        >
                            🧠
                        </motion.div>
                    </motion.div>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>
                        My Experience
                    </h2>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={styles.item}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className={styles.dot} />
                            <div className={styles.content}>
                                <motion.div
                                    className={`glass-panel ${styles.card}`}
                                    style={{ padding: '1.5rem', borderRadius: '1rem' }}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: '0 10px 40px rgba(109, 40, 217, 0.3)'
                                    }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                >
                                    <div className={styles.date}>{exp.date}</div>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.company}>{exp.company}</div>
                                    <p className={styles.desc}>{exp.desc}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
