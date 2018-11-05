interface Project{
  name: string,
  image: string
  content: string[],
  siteLink: string,
  codeLink: string,
  skills: string[]
}

const getProjectData = () => {
  fetch('./projects.json').then(response => {
    return response.json();
  }).then(data => {
      buildProjectCards(data.projectsArray);
  }).catch(err => {
    console.error(err);
  });
}

const buildProjectCards = (projectData: Project[]) => {
  for (let project of projectData){
    const newCard = createCardContent(project);
    document.getElementById("projects-container").innerHTML += newCard;
  }
}

const createCardContent = (project: Project) => {
  return `
    <div class="project-card">
    <img src="${project.image}" class='card-image'/>
    <div class='card-content'>
      <div class="card-title-row">
          <div class='card-title'>${project.name}</div>
          <div class="card-button-wrapper">
              <a href='${project.siteLink}' class='visit'><span class="buttonText">Visit Site</span> <i class="fas fa-external-link-alt"></i></a>
              <a href='${project.codeLink}' class='code'><span class="buttonText">View Code </span><i class="far fa-code"></i></a>
          </div>
      </div>
      ${project.content.join(' ')}
      <div class='chip-wrapper'>
        ${project.skills.map((skill) => `<span class='card-chip'>${skill}</span>`)}
      </div>
    </div>
  </div>
  `
}

const onLoad = () => { getProjectData(); }
onLoad();

