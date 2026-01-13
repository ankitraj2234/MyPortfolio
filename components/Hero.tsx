"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";
import { ArrowRight, Download } from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

export default function Hero() {
    return (
        <section className={styles.hero} id="home">
            <div className={styles.glow} />

            <motion.div
                className={`container ${styles.content}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className={styles.greeting} variants={itemVariants}>
                    Hello, I&apos;m
                </motion.p>

                <motion.h1 className={styles.title} variants={itemVariants}>
                    Ankit<span className="text-gradient">.SecureDev</span>
                </motion.h1>

                <motion.p className={styles.subtitle} variants={itemVariants}>
                    Solutions Engineer specializing in <span className={styles.highlight}>secure architecture</span>,
                    <span className={styles.highlight}> infrastructure design</span>, and <span className={styles.highlight}>end-to-end development</span>.
                    I deliver secure solutions whether leading teams, managing projects, or building robust applications from the ground up.
                </motion.p>

                <motion.div className={styles.actions} variants={itemVariants}>
                    <Link href="#projects" className={`${styles.primaryBtn} flex-center`}>
                        View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Link>
                    <Link href="/resume.pdf" className={`${styles.secondaryBtn} flex-center`}>
                        Download CV <Download size={18} style={{ marginLeft: '8px' }} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
