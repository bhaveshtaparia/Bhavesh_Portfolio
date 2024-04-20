import React from 'react';
import './Achievement.css'; 

function Achievement() {

  const achievements = [
    {
      title: "LeetCode",
      description: "Achieved a maximum rating of 2092 (Knight Badge) and solved 750+ problems.",
      link: "https://leetcode.com/Bhavesh_T/"
    },
    {
      title: "CodeChef",
      description: "Proficient in competitive programming with a 4-star rating (1863) on CodeChef.",
      link: "https://www.codechef.com/users/cu_21bcs11461"
    },
    {
      title: "Codeforces",
      description: "Recognized as an Expert on Codeforces (1604).",
      link: "https://codeforces.com/profile/Bhavesh_T"
    },
    {
      title: "Haryana Police Hackathon",
      description: "Ranked among the top 10 teams in the Haryana Police Hackathon."
    },
    {
      title: "TCS Codevita Season 11",
      description: "In TCS Codevita Season 11, secured a global ranking of 972, highlighting strong coding abilities."
    }
  ];

  return (
    <div className="achievement-container">
      <div className="achievement-wrapper">
        <h2>My Achievements</h2>
        {/* Map through the achievements array and render each achievement */}
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-bg">
            <div className="achievement">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
         
              {achievement.link && (
                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                  {achievement.title}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievement;
