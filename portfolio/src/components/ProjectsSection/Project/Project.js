import React from 'react';
import './styles.css';

export default (props) => {
    const { project } = props;
    return (
        <div className='project'>
            {
                project.image &&
                <img className='image' src={project.image} alt='project' />
            }
            <div className='details font-mono'>
                <div className='title'>{project.title}</div>
                <div className='description'>
                    {project.description}
                </div>
                {/* <div className='projectgithub'>{project.projectgithub}</div>
                <div className='projectdeployed'>{project.projectdeployed}</div> */}
                <a class="icon" target="_blank" rel="noopener noreferrer" href={project.projectgithub}>GitHub</a>
                <a class="icon" target="_blank" rel="noopener noreferrer" href={project.projectdeployed}>Deployed</a>
            </div>
        </div>
    )
}