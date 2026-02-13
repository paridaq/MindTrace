import { useState } from 'react';
import "./People.css"

interface Person {
    id: number;
    name: string;
    role: string;
    company?: string;
    email?: string;
    linkedin_url?: string;
    bio?: string;
    image?: string;
}

function People() {
    const [people, setPeople] = useState<Person[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        designation: '',
        linkedin_url: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/api/people/52', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const newPersonData = await response.json();

                // Map backend response to frontend Person structure
                const newPerson: Person = {
                    id: newPersonData.id,
                    name: newPersonData.name,
                    role: newPersonData.designation,
                    company: newPersonData.company,
                    email: newPersonData.email,
                    linkedin_url: newPersonData.linkedin_url,
                    bio: `${newPersonData.designation} at ${newPersonData.company}`,
                    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newPersonData.name}` // Generate avatar based on name
                };

                setPeople([...people, newPerson]);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    designation: '',
                    linkedin_url: ''
                });
                alert('Person added successfully!');
            } else {
                alert('Failed to add person');
            }
        } catch (error) {
            console.error('Error adding person:', error);
            alert('An error occurred while adding the person.');
        }
    };

    return (
        <div className="people-container">
            <div className="people-header">
                <h1>People</h1>
                <p style={{ marginTop: '0.5rem', color: 'var(--secondary-text, #666)' }}>
                    Meet the team behind the magic.
                </p>
            </div>

            <div className="people-layout">
                <aside className="people-sidebar">
                    <form className="add-person-form" onSubmit={handleSubmit}>
                        <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Add New Person</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="designation"
                                placeholder="Designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="url"
                                name="linkedin_url"
                                placeholder="LinkedIn URL"
                                value={formData.linkedin_url}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Add Person</button>
                    </form>
                </aside>

                <main className="people-main">
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
                                {person.linkedin_url && (
                                    <a href={person.linkedin_url} target="_blank" rel="noopener noreferrer" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#0077b5' }}>
                                        LinkedIn Profile
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default People;
