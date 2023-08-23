const card = (project) => {
  return `
  <div class="card">
  <a class="img-thumbnail" href=${project.url}>
    <img
      src=${project.image}
      alt="screenshot of the project's homepage"
    />
  </a>
  <div class="card-text-wrapper">
    <div>
      <p>${project.category}</p>
      <div class="project-title-wrap">
      <a class="card-title" href=${project.url}
        >${project.name}</a
      >
      <a
        aria-label="link to the project's github repo"
        class="github-project-link"
        href=${project.repo}
        ><i class="fa-brands fa-square-github"></i
      ></a>
      </div>
    </div>
    <div>
      <p>
      ${project.description}
      </p>
      <p>${project.builtWith}</p>
    </div>
  </div>
  </div>
  `;
};

export default card;
