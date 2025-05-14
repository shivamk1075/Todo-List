import React from 'react';

const About = () => {
    let myStyle = {
        minHeight: "90vh",
        margin: "40px auto",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
        lineHeight: "1.7",
        fontSize: "1.1rem",
        color: "#333"
    };

    let headingStyle = {
        fontSize: "2rem",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#2c3e50"
    };

    return (
        <div className="about-container" style={myStyle}>
            <h2 style={headingStyle}>About Our To-Do List App</h2>
            <p><em>Stay organized, focused, and in control of your day.</em></p>

            <p>Our to-do list app is designed to help you manage your tasks effortlessly. Whether you're planning your daily schedule, tracking long-term goals, or just trying to remember what to buy at the store, we've got you covered.</p>

            <p>With a clean interface and easy-to-use features, you can:</p>

            <ul style={{ display: "inline-block", textAlign: "left", marginTop: "15px" }}>
                <li>Add and manage tasks in seconds</li>
                <li>Set deadlines and reminders</li>
                <li>Organize tasks by categories or priority</li>
                <li>Sync across devices</li>
            </ul>

            <p style={{ marginTop: "20px" }}><strong>No clutter, no confusion — just a better way to stay productive.</strong></p>
        </div>
    );
};

export default About;
