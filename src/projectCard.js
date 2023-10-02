const card = (project) => {
  return `
  <div class="card">
    <div class="card-inner">
    <a class="img-thumbnail" href=${project.url}>
      <img
        src=${project.image}
        alt="screenshot of the project's homepage"
      />
    </a>
    <div class="card-text-wrapper">

        <div class="project-title-wrap">
        <a class="card-title" href=${project.url}
          >${project.name}</a
        >
        <p>
        ${project.description}
        </p>
      </div>
      <div class='descriptions'>

        <div class="tools">
          <h4><i class="fa-solid fa-screwdriver-wrench" alt="tool icon"></i></h4>
          <p>${project.builtWith}</p>
        </div>
        <div class="git-hub">
        <a aria-label="link to the project's github repo"
        class="github-project-link"
        href=${project.repo}
        ><i class="fa-brands fa-square-github"></i
      ></a>GitHub Repo</div>
      </div>
    </div>
    </div>
  </div>
  `;
};

export default card;
