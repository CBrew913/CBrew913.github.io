import Skill from './Skill'

function Skills() {
    return (
        <div className="skills">
                <h2>I have experience with these technologies</h2>
            <div className="skillsGrid">
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/python/python-original-wordmark.svg" alt="The logo icon for python" title="Python"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/r/r-original.svg" alt="The logo icon for R" title="R"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/javascript/javascript-original.svg" alt="The logo icon for JavaScript" title="JavaScript"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML5" title="HTML5"/>
                <Skill source="https://github.com/devicons/devicon/blob/v2.15.1/icons/git/git-original-wordmark.svg" alt="The logo icon for Git" title="Git"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/postgresql/postgresql-original-wordmark.svg" alt="The logo icon for PostgreSQL" title="PostgreSQL"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/mongodb/mongodb-original-wordmark.svg" alt="The logo icon for mongoDB" title="mongoDB"/>
                <Skill source="https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="The logo icon for AWS" title="AWS"/>
            </div>            
        </div>
    )
}
export default Skills