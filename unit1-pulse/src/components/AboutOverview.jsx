const benefits = [
    {icon: "✓", title: "Track", text:"Log activity, water, sleep and mindfulness." },
    {icon: "↗", title: "Track", text:"Log activity, water, sleep and mindfulness." },
    {icon: "*", title: "Track", text:"Log activity, water, sleep and mindfulness." }
];

function AboutOverview(){
    return(
        <article className="about-card about-overview">
            <h2>About Us</h2>
            <p> 
                We created Pulse to give people one simple place to record healthy
                choices. Clear information helps you stay focused without making 
                wellness feel complicated.
            </p>
            <div className="benefits-list">
                {benefits.map((benefit)=>(
                <div className="benefit" key={benefits.title}>
                    <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
                    <div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.text}</p>
                    </div>
                </div>
                ))}
            </div>

        </article>
    )
}

export default AboutOverview