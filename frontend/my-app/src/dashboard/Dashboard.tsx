import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="dashboard-container">
            {/* Sidebar Navigation */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <span className="logo-text">Mindtrace</span>
                </div>
                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
                        onClick={() => setActiveTab("overview")}
                    >
                        <span className="icon">📊</span> Overview
                    </button>
                    <button
                        className={`nav-item ${activeTab === "interviews" ? "active" : ""}`}
                        onClick={() => setActiveTab("interviews")}
                    >
                        <span className="icon">💼</span> Interviews
                    </button>
                    <button
                        className={`nav-item ${activeTab === "questions" ? "active" : ""}`}
                        onClick={() => setActiveTab("questions")}
                    >
                        <span className="icon">🧠</span> Questions
                    </button>
                    <button
                        className={`nav-item ${activeTab === "people" ? "active" : ""}`}
                        onClick={() => setActiveTab("people")}
                    >
                        <span className="icon">👥</span> People
                    </button>
                    <button
                        className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
                        onClick={() => setActiveTab("settings")}
                    >
                        <span className="icon">⚙️</span> Settings
                    </button>
                </nav>
                <div className="sidebar-footer">
                    <div className="user-mini-profile">
                        <div className="avatar">JD</div>
                        <div className="user-info">
                            <span className="name">John Doe</span>
                            <span className="role">Product Manager</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main">
                <header className="main-header">
                    <div>
                        <h1>Dashboard</h1>
                        <p className="welcome-text">Welcome back, get ready for your next big role.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn--secondary">Need Help?</button>
                        <button className="btn btn--primary">
                            + New Trace
                        </button>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon orange">🔥</div>
                        <div className="stat-content">
                            <span className="stat-value">14</span>
                            <span className="stat-label">Day Streak</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon blue">📝</div>
                        <div className="stat-content">
                            <span className="stat-value">28</span>
                            <span className="stat-label">Questions Solved</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon green">🤝</div>
                        <div className="stat-content">
                            <span className="stat-value">12</span>
                            <span className="stat-label">New Contacts</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon purple">💼</div>
                        <div className="stat-content">
                            <span className="stat-value">3</span>
                            <span className="stat-label">Active Interviews</span>
                        </div>
                    </div>
                </div>

                {/* Content Layout */}
                <div className="dashboard-content-grid">
                    {/* Recent Activity / Content */}
                    <div className="content-section">
                        <div className="section-header">
                            <h2>Upcoming Interviews</h2>
                            <button className="btn-link">View All</button>
                        </div>

                        <div className="card interview-card">
                            <div className="card-header">
                                <div>
                                    <h3>Senior Product Analyst</h3>
                                    <p className="company-name">TechFlow Inc.</p>
                                </div>
                                <span className="status-pill upcoming">In 2 Days</span>
                            </div>
                            <div className="card-body">
                                <div className="info-row">
                                    <span className="label">Round</span>
                                    <span className="value">Technical Screen</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">Focus</span>
                                    <span className="value">SQL, Product Metrics</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn--small">Prepare</button>
                                <button className="btn btn--ghost-small">Reschedule</button>
                            </div>
                        </div>

                        <div className="card interview-card">
                            <div className="card-header">
                                <div>
                                    <h3>Product Manager</h3>
                                    <p className="company-name">Horizon Labs</p>
                                </div>
                                <span className="status-pill planning">Planning</span>
                            </div>
                            <div className="card-body">
                                <div className="info-row">
                                    <span className="label">Status</span>
                                    <span className="value">Application Sent</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">Next Step</span>
                                    <span className="value">Follow up with recruiter</span>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button className="btn btn--small">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Side Details */}
                    <div className="side-section">
                        <div className="card progress-card">
                            <h3>Solution Accuracy</h3>
                            <div className="progress-circle">
                                <span className="percentage">85%</span>
                                <span className="sub-text">Accuracy</span>
                            </div>
                            <p className="progress-note">You're doing great! Keep practicing SQL problems.</p>
                        </div>

                        <div className="card quick-links-card">
                            <h3>Quick Access</h3>
                            <ul className="quick-links">
                                <li>
                                    <span className="icon">📚</span>
                                    <span>Question Bank</span>
                                </li>
                                <li>
                                    <span className="icon">🖊️</span>
                                    <span>My Notes</span>
                                </li>
                                <li>
                                    <span className="icon">📅</span>
                                    <span>Calendar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
