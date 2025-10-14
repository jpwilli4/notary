import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Hero = () => {
    const [date, setDate] = useState(new Date().getHours());
    // const now = new Date();
    // setDate(now);

    return (
    <motion.section 
        id="home" 
        className="hero" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
    >
        <div className="hero-container" variants={staggerContainer} initial="initial" animate="animate">
            <motion.div className="hero-content">
                <motion.div className="hero-badge">
                    <span>⚡ ⚡   
                        {date < 12 ? "Good Morning" : date < 16 ? "Good Afternoon" : "Good Evening"}
                         , I'm   ⚡ ⚡</span>
                </motion.div>
                <motion.h1 className="glitch" variants={fadeInUp} whileHover={{ scale: 1.02 }}>Justin Williams</motion.h1>
                <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                    {" "}
                    Senior Software Engineer
                </motion.h2>
                <motion.p className="hero-description" variants={fadeInUp}>
                    I am a seasoned software professional with over 16 years of experience spanning the full software development lifecycle, including hands-on development, solution design, testing, and leadership. Throughout my career, I have focused on driving innovation, leading high-performing teams, and applying deep technical expertise combined with strategic thinking to help organizations achieve their goals. I am passionate about delivering scalable, high-quality solutions, fostering a culture of excellence, and continuously expanding my knowledge to stay ahead of emerging technologies and industry trends.
                </motion.p>

                <motion.div 
                    className="cta-buttons" 
                    variants={staggerContainer}
                >
                    <motion.a 
                        href="#projects" 
                        className="cta-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {" "}
                        Work
                    </motion.a>

                    <motion.a 
                        href="#education" 
                        className="cta-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {" "}
                        Education
                    </motion.a>
                </motion.div>

                <motion.div 
                    className="cta-buttons" 
                    variants={staggerContainer}
                >
                    <motion.a 
                        href="#contact" 
                        className="cta-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {" "}
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div 
                    className="social-links" 
                    variants={staggerContainer}
                >
                    <motion.a
                        href="https://github.com/jpwilli4"
                        target="_blank"
                    >
                        <i className="fab fa-github"></i>
                    </motion.a>

                    <motion.a 
                        href="https://www.linkedin.com/in/justin-williams-61a510118/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin"></i>
                    </motion.a>

                    {/* <motion.a 
                        href="https://twitter.com"
                        target="_blank"
                    >
                        <i className="fab fa-twitter"></i>
                    </motion.a> */}
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-image-container"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="code-display">
                    <SyntaxHighlighter
                        language="typescript"
                        customStyle={{ 
                            margin: 0, 
                            padding: "2rem", 
                            height: "100%", 
                            borderRadius: "20px",
                            background: "rgba(30, 41, 59, 0.8)",
                            backdropFilter: "blur(10px)",
                            marginBottom: 50    
                        }}
                        style={vscDarkPlus}
                    >
                        {`const aboutMe: DeveloperProfile = {
  codename: "jpwilliams2324",
  origin: "😎 Either in front of a keyboard or next to the Keurig ☕ ",
  role: "Senior Software Engineer and Professional learner",
  stack: {
    languages: ["C#", "JavaScript", "TypeScript", "Python", "React.js", "PostgreSQL", "GraphQL"],
    frameworks: ["React.js", "Node.js", ".NET", "Entity" ],
  },
  traits: [
    "Constant learner",
    "API whisperer",
    "Very personable",
    "Problem solver",
    "Strong collaborator",
    "Critical thinker"
  ],
  missionStatement:
    "To build systems that are reliable, efficient, and user-friendly, because crashing apps and clunky interfaces help no one. I thrive on solving complex problems, turning “impossible” into “already deployed,” and fostering innovation that moves both teams and technology forward. Above all, I aim to deliver solutions that create real value for customers and society—preferably before the coffee runs out.",
  availability: "Available for hire",
};`}
                    </SyntaxHighlighter>
                </div>

                <motion.div 
                    className = "floating-card" 
                    animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                >
                    <div className="card-content">
                        <span className="card-icon">(☞ﾟヮﾟ)☞</span>
                        <span className="card-text">
                            {" "}
                            Currently fixing a bug!!</span>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    </motion.section>
    );
};