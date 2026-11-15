import { Link } from "react-router-dom"
import { features, stats, techStack } from "../data/aboutData"

const About = () => {
    return (
        <div className="page-scroll">
            <section className="info-page">
                <div className="about-hero">
                    <h1>A simple AI chat, built to learn everything.</h1>
                    <p>Maverick AI is a frontend-only demo inspired by modern AI assistants.
                        It has no backend and no real AI model. It shows how components,
                        hooks, routing and Context work together in a real interface.</p>
                    <Link to='/' className="primary-link">Start a chat</Link>
                </div>

                <div className="stats-grid">
                    {stats.map(stat => (
                        <div key={stat.id} className='stat-card'>
                            <i className={stat.icon}></i>
                            <h3>{stat.value}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>

                <h2 className="section-heading">what you can do</h2>
                <div className="feauture-grid">
                    {features.map(feature => (
                        <div key={feature.id} className="feature-card">
                            <i className={feature.icon}></i>
                            <h4>{feature.title}</h4>
                            <p>{feature.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="section-heading">Built with</h2>
                <div className="tech-list">
                    {techStack.map(tech => (
                        <span key={tech} className="tech-chip">{tech}</span>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About