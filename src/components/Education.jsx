import { motion } from 'framer-motion';

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

export const Education = () => {
  return (
        <motion.section 
            id="education"
            className="projects" 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                My Education
            </motion.h2>

                <motion.div
                    className="project-grid"
                    variants={staggerContainer}
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div 
                            className="project-image" 
                            style={{ backgroundImage: "url('/projects/xu.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>Xavier University of Louisiana</h3>
                                <h3>Bachelor of Science</h3>
                                <h3>Computer Engineering</h3>
                            </div>
                            
                            {/* <div className="project-tech">
                                <span>.NET</span>
                                <span>C#</span>
                                <span>Entity</span>
                                <span>PostgreSQL</span>
                                <span>GraphQL</span>
                                <span>REST</span>
                            </div> */}
                    </motion.div>

                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div 
                            className="project-image" 
                            style={{ backgroundImage: "url('/projects/southern.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>Southern Methodist University</h3>
                                <h3>Executive Masters</h3>
                                <h3>Software Engineering</h3>
                            </div>
                            
                            {/* <div className="project-tech">
                                <span>Javascript</span>
                                <span>Typescript</span>
                                <span>GraphQL</span>
                                <span>REST</span>
                                <span>SQL</span>
                                <span>Azure</span>
                                <span>Provenir</span>
                                <span>Design</span>
                                <span>Release Management</span>
                                <span>Leadership</span>
                            </div> */}
                    </motion.div>

                </motion.div>
        </motion.section>
    )
}

