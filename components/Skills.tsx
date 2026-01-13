"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const skills = [
    "Java", "Kotlin", "C++", "MySQL",
    "Linux", "VMware", "Apache CloudStack", "Azure",
    "AWS", "Networking", "FxLogix", "Wireshark"
];

const certifications = [
    {
        title: "Oracle Cloud Infrastructure 2024 Foundations Associate",
        issuer: "Oracle Cloud",
        date: "Aug 2024"
    },
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud",
        date: "May 2024"
    },
    {
        title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        issuer: "IBM",
        date: "May 2024"
    },
    {
        title: "Security Compliance and Identity Fundamental SC-900",
        issuer: "Microsoft Azure",
        date: "Jan 2023"
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera",
        date: "Nov 2022"
    }
];

export default function Skills() {
    return (
        <section id="skills" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Award size={40} style={{ color: 'var(--primary-glow)' }} />
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>Skills & Certifications</h2>
                </motion.div>

                <div style={{ marginBottom: '5rem' }}>
                    <h3 style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Technical Skills
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                className="glass-panel"
                                style={{ padding: '0.75rem 1.5rem', borderRadius: '99px', fontSize: '0.95rem', cursor: 'default' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{
                                    scale: 1.1,
                                    borderColor: 'var(--primary-glow)',
                                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)'
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '3rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        Professional Certifications
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="glass-panel"
                                style={{ padding: '2rem', borderRadius: '1rem' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + (index * 0.1) }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: '0 10px 30px rgba(109, 40, 217, 0.3)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <Award size={24} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '0.25rem' }} />
                                    <div>
                                        <h4 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{cert.title}</h4>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer}</p>
                                        <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', marginTop: '0.25rem', fontWeight: 600 }}>{cert.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
