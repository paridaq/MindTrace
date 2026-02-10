
import React, { useState } from 'react';
import './Questions.css';

interface Question {
    id: number;
    name: string;
    link: string;
    topic: string;
    solutionApproach: string;
    date: string;
}

const Questions: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>([
        { id: 1, name: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', topic: 'Arrays', solutionApproach: 'Use a hash map to store .', date: '2023-10-27' },
        { id: 2, name: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', topic: 'Linked List', solutionApproach: 'Iterate with prev, curr, and next pointers.', date: '2023-10-28' },
        { id: 3, name: 'Binary Search', link: 'https://leetcode.com/problems/binary-search/', topic: 'Algorithms', solutionApproach: 'Divide search space in half each step.', date: '2023-10-29' },
    ]);

    const [newQuestion, setNewQuestion] = useState({
        name: '',
        link: '',
        topic: '',
        solutionApproach: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewQuestion(prev => ({ ...prev, [name]: value }));
    };

    const handleAddQuestion = () => {
        if (!newQuestion.name || !newQuestion.link || !newQuestion.topic || !newQuestion.solutionApproach) return;

        const question: Question = {
            id: questions.length + 1,
            name: newQuestion.name,
            link: newQuestion.link,
            topic: newQuestion.topic,
            solutionApproach: newQuestion.solutionApproach,
            date: new Date().toISOString().split('T')[0]
        };

        setQuestions([...questions, question]);
        setNewQuestion({ name: '', link: '', topic: '', solutionApproach: '' });
    };

    return (
        <div className="questions-container">
            <div className="questions-header">
                <h1>Track Your Progress</h1>
                <p>Add and manage your coding questions efficiently.</p>
            </div>

            <div className="input-section">
                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Question Name"
                        value={newQuestion.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="link"
                        placeholder="Question Link"
                        value={newQuestion.link}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="topic"
                        placeholder="Topic"
                        value={newQuestion.topic}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <input
                        type="text"
                        name="solutionApproach"
                        placeholder="Solution Approach"
                        value={newQuestion.solutionApproach}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="add-btn" onClick={handleAddQuestion}>
                    ADD QUESTION
                </button>
            </div>

            <div className="table-container">
                <table className="questions-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Question Name</th>
                            <th>Link</th>
                            <th>Topic</th>
                            <th>Solution Approach</th>
                            <th>Adding Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((q, index) => (
                            <tr key={q.id}>
                                <td>{index + 1}</td>
                                <td>{q.name}</td>
                                <td>
                                    <a href={q.link} target="_blank" rel="noreferrer" className="question-link">
                                        Open Link
                                    </a>
                                </td>
                                <td><span className="topic-tag">{q.topic}</span></td>
                                <td>{q.solutionApproach}</td>
                                <td>{q.date}</td>
                            </tr>
                        ))}
                        {questions.length === 0 && (
                            <tr>
                                <td colSpan={6} className="empty-message">No questions added yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Questions;