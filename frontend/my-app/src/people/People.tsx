
import "./People.css"
function People() {
    const people = [
        {
            id: 1,
            name: "John Doe",
            role: "Software Engineer @ Tech Corp",
            bio: "Passionate about building scalable web applications and exploring new technologies.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Product Manager @ Tech Corp",
            bio: "Focused on user-centric design and delivering high-value products.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
        },
        {
            id: 3,
            name: "Mike Johnson",
            role: "UX Designer @ Creative Studio",
            bio: "Crafting intuitive and beautiful user experiences for mobile and web.",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
        }
    ];

    return (
        <div className="people-container">
            <div className="people-header">
                <h1>People</h1>
                <p style={{ marginTop: '0.5rem', color: 'var(--secondary-text, #666)' }}>
                    Meet the team behind the magic.
                </p>
            </div>
            <div className="people-grid">
                {people.map((person) => (
                    <div key={person.id} className="person-card">
                        <img
                            src={person.image}
                            alt={person.name}
                            className="person-image"
                        />
                        <h2 className="person-name">{person.name}</h2>
                        <p className="person-role">{person.role}</p>
                        <p className="person-bio">{person.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default People;
