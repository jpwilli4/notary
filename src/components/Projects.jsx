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

export const Projects = () => {
     return (
        <motion.section 
            id="projects"
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
                My Work
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
                            style={{ backgroundImage: "url('/projects/code1.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>CatalystTek</h3>
                                <h3>Senior Software Engineering Contractor</h3>
                                <p>Developed and maintained enhancements for loan management, application processing, and payroll systems by implementing scalable new features and optimizing existing functionality using .NET, C#, Entity Framework, GraphQL, and REST APIs, resulting in improved system performance and user experience.</p>
                                <p>Worked closely with product, QA, and business teams to collect requirements and develop technical specs, ensuring successful deployment of payroll enhancements tailored to client objectives.</p>
                            </div>
                            
                            <div className="project-tech">
                                <span>.NET</span>
                                <span>C#</span>
                                <span>Entity</span>
                                <span>PostgreSQL</span>
                                <span>GraphQL</span>
                                <span>REST</span>
                            </div>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div 
                            className="project-image" 
                            style={{ backgroundImage: "url('/projects/code2.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>GoFi Financial</h3>
                                <h3>Assistant Director of Decision Engineering</h3>
                                <p>Lead a team of Software Engineers in the development and delivery of scalable features, ensuring alignment with business goals, deadlines, and software development best practices.</p>
                                <p>Collaborate with cross-functional teams and executive leadership to define requirements, create technical specifications, and establish project roadmaps using Now/Next/Later planning.</p>
                                <p>Drive system reliability and performance through proactive monitoring and alerting using DataDog and Retool, implementing feature flagging, and maintaining key platforms including the decision engine and external REST/GraphQL APIs.</p>
                                <p>Champion process improvements and code quality through design sessions, code reviews, and fostering a collaborative team culture; utilize tools like Miro for visual planning and lead complex production releases.</p>
                                <p>Troubleshoot and resolve production issues, analyze decision engine processes, and lead efforts to identify test cases and reduce bugs, enhancing overall system reliability and delivery confidence.</p>
                            </div>
                            
                            <div className="project-tech">
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
                            </div>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div 
                            className="project-image" 
                            style={{ backgroundImage: "url('/projects/code3.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>Elevate Credit</h3>
                                <h3>Senior Software Engineer/Team Lead</h3>
                                <p>Lead a cross-functional offshore team of Developers and QA engineers in migrating on-premise systems to the Azure cloud platform, ensuring performance, scalability, and reliability throughout the transition.</p>
                                <p>Serve as the primary liaison between business stakeholders and the technical team to translate feature requirements into actionable user stories, minimizing requirement gaps and ensuring alignment.</p>
                                <p>Drive Agile ceremonies including sprint planning, backlog refinement, and daily stand-ups to ensure timely delivery, clear prioritization, and accurate estimation through collaborative story point assessments.</p>
                                <p>Oversee the end-to-end software delivery lifecycle, including design and code reviews, development, QA test scenario creation and execution, demos for stakeholders, and production releases.</p>
                                <p>Manage release planning and coordination, including implementation plans, IT notices, scheduling, and collaboration with the Release Management team to ensure smooth deployments and post-release stability.</p>
                                <p>Develop and maintain scalable C# .NET 5/Core APIs and web services, leveraging JSON-based data communication to support business-critical applications and ensure seamless data exchange.</p>
                                <p>Lead backend development of financial decision engine logic for loan qualification using the Provenir platform, including testing, production deployment, and ongoing support across global markets (e.g., UK platform migration).</p>
                                <p>Drive code quality and engineering excellence through code reviews, platform upgrades, and hands-on troubleshooting of production issues, ensuring high availability and accuracy of decisioning systems.</p>
                            </div>
                            
                            <div className="project-tech">
                                <span>Javascript</span>
                                <span>REST</span>
                                <span>SQL</span>
                                <span>Azure</span>
                                <span>Provenir</span>
                                <span>Design</span>
                                <span>Release Management</span>
                                <span>Leadership</span>
                            </div>
                    </motion.div>

                    <motion.div
                        className="project-card"
                        variants={fadeInUp}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <motion.div 
                            className="project-image" 
                            style={{ backgroundImage: "url('/projects/code4.jpg')"}}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        />
                            <div className='work-experience'>
                                <h3>Lockheed Martin</h3>
                                <h3>Senior Software Engineer/Test Lead</h3>
                                <p>Developed and maintained backend software solutions for the F-35 aircraft project using Java, Spring, and MVC architecture, adhering to system engineering documentation and leveraging design patterns for maintainability and scalability.</p>
                                <p>Participated in full Agile lifecycle—including sprint planning, daily stand-ups, and demos to deliver iterative software releases aligned with customer requirements and timelines.</p>
                                <p>Built diagnostic and emulator tools to test Java client/server socket communications, XML byte transfers (JAXB), and data integrity, enhancing system reliability and test coverage.</p>
                                <p>Integrated front-end components using JavaScript, JSP, and AJAX with Java servlets and beans, deployed applications on WebLogic, and performed SQL operations with Oracle databases for dynamic data presentation and manipulation.</p>
                                <p>Led comprehensive testing efforts for developed software, including black box and white box testing, script-based input validation using UNIX/Jade, and verification of software output to ensure functional accuracy and stability.</p>
                                <p>Authored detailed test documentation and scripts, conducted code reviews, and stepped through Java code to identify and resolve bugs prior to code check-in, supporting high-quality releases and streamlined defect resolution.</p>
                            </div>
                            
                            <div className="project-tech">
                                <span>Java</span>
                                <span>MVC</span>
                                <span>Javascript</span>
                                <span>JSP</span>
                                <span>AJAX</span>
                                <span>Oracle</span>
                                <span>UNIX</span>
                                <span>Design</span>
                                <span>Release Management</span>
                            </div>
                    </motion.div>

                </motion.div>
        </motion.section>
    )
    
};