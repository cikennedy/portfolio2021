import React, { Component } from 'react';
import { IntroSection, ProjectsSection, SkillsSection } from './components';
import User from './User';
import './assets/styles.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <IntroSection user={User} />
        <ProjectsSection projects={User.projects} />
        <SkillsSection skills={User.skills} />
      </React.Fragment>
    );
  }
}

export default App;

{/* <main className="text-gray-400 bg-gray-900 body-font">
<Navbar />
</main> */}
