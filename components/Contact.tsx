"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" style={{ padding: '4rem 0', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.h2
                    className="text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    style={{ marginBottom: '2rem' }}
                >
                    Let&apos;s Connect
                </motion.h2>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                    Interested in working together or have a question?
                    Feel free to reach out on any of my social channels.
                </p>

                <div className="flex-center" style={{ gap: '2rem', marginBottom: '3rem' }}>
                    {[
                        { icon: <Mail size={24} />, href: "mailto:ankit@example.com", label: "Email" },
                        { icon: <Github size={24} />, href: "#", label: "GitHub" },
                        { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
                        { icon: <Twitter size={24} />, href: "#", label: "Twitter" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            whileHover={{ y: -5, color: 'var(--primary-glow)' }}
                            transition={{ duration: 0.2 }}
                            style={{ color: 'var(--foreground)', padding: '1rem', background: 'var(--glass-bg)', borderRadius: '50%', border: '1px solid var(--glass-border)' }}
                            aria-label={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>

                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Ankit.SecureDev. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
