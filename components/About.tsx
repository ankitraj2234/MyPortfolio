"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import { Server, Cloud, Network, Shield, Smartphone, Globe, Monitor } from "lucide-react";

const interests = [
    {
        icon: <Cloud size={24} />,
        title: "Cloud Services",
        desc: "Azure, AWS, Apache CloudStack",
    },
    {
        icon: <Network size={24} />,
        title: "Networking Architecture",
        desc: "VDI Solutions, Remote Access",
    },
    {
        icon: <Server size={24} />,
        title: "Solution Engineering",
        desc: "POC Deployments, Infrastructure Design",
    },
    {
        icon: <Shield size={24} />,
        title: "Security & Compliance",
        desc: "MFA, Network Security, Troubleshooting",
    },
    {
        icon: <Smartphone size={24} />,
        title: "Secure Android Development",
        desc: "Industry-level Apps, Kotlin, Room DB",
    },
    {
        icon: <Globe size={24} />,
        title: "Secure Web Applications",
        desc: "Next.js, React, Node.js Backend",
    },
    {
        icon: <Monitor size={24} />,
        title: "Desktop App Development",
        desc: "JavaFX, Electron, Cross-platform",
    },
];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
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
                                    '0 0 20px rgba(109, 40, 217, 0.3)',
                                    '0 0 40px rgba(109, 40, 217, 0.6)',
                                    '0 0 20px rgba(109, 40, 217, 0.3)'
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
                            ❤️
                        </motion.div>
                    </motion.div>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>
                        About Me
                    </h2>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        className={`glass-panel ${styles.bioCard}`}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)'
                        }}
                        transition={{ duration: 0.15 }}
                    >
                        <h3 style={{ marginBottom: '1.5rem' }}>Solutions Engineer & Developer</h3>
                        <p className={styles.bioText}>
                            I&apos;m a Solutions Engineer at AccOps Systems, specializing in designing and implementing
                            secure remote access and VDI solutions. My expertise spans cloud infrastructure, networking
                            architecture, and troubleshooting complex technical environments.
                        </p>
                        <p className={styles.bioText}>
                            With a strong foundation in Java, Kotlin, and cloud technologies, I build robust applications
                            ranging from Android apps to desktop automation tools. I&apos;m passionate about translating
                            client requirements into scalable, secure solutions that enhance performance and compliance.
                        </p>
                    </motion.div>

                    <div className={styles.interests}>
                        {interests.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`glass-panel ${styles.interestCard}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)'
                                }}
                                transition={{ duration: 0.15 }}
                            >
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <div>
                                    <div className={styles.interestTitle}>{item.title}</div>
                                    <div className={styles.interestDesc}>{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
