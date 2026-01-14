"use client";

import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Lovely Professional University",
        year: "Aug 2021 - Present",
        grade: "CGPA: 7.75"
    },
    {
        degree: "Intermediate",
        institution: "DAV Public School",
        year: "Apr 2019 - Mar 2021",
        grade: "Percentage: 72.8%"
    },
    {
        degree: "Matriculation",
        institution: "DAV Public School",
        year: "Apr 2017 - Mar 2019",
        grade: "Percentage: 83%"
    }
];

export default function Education() {
    return (
        <section id="education" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <GraduationCap size={40} style={{ color: 'var(--primary-glow)' }} />
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', textAlign: 'center' }}>
                        Education
                    </h2>
                </motion.div>

                <div className={styles.timeline}>
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <motion.div
                                className={`glass-panel ${styles.leftContent}`}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 20px rgba(244, 63, 94, 0.3)'
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <div className={styles.degree}>{item.degree}</div>
                                <div className={styles.institution}>{item.institution}</div>
                            </motion.div>

                            <div className={styles.center}>
                                <div className={styles.dot} />
                            </div>

                            <motion.div
                                className={`glass-panel ${styles.rightContent}`}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 20px rgba(244, 63, 94, 0.3)'
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                <div className={styles.year}>{item.year}</div>
                                <div className={styles.grade}>{item.grade}</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
