const projectName = document.getElementById("projectName");
const descriptionName = document.getElementById("descriptionName");
const liveSite = document.getElementById("liveSite");
const gitHubLink = document.getElementById("gitHubLink");
const image = document.getElementById("image");
const existingProject = document.getElementById("existingProject");
const nonExistingProject = document.getElementById("nonExistingProject");
const dynamicLogos = document.getElementsByClassName("dynamic-logo");
const listOfTechnologies = document.getElementById("list-of-technologies");
const contactMe = document.getElementById("contact-me");

const allProjects = [
  {
    nameOfProject: "Fit Buddy",
    alias: "fitbuddy",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum facere repellat laborum sit atque cum numquam. Consequuntur porro delectus magni quae ad non recusandae, ducimus voluptas perferendis animi excepturi maiores!",
    siteUrl: "/",
    gitHubUrl: "/",
    mainImage: "img/main-imag-fit-buddy.png",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "angular-logo"
    ]
  },
  {
    nameOfProject: "Mobile Data Transfer",
    alias: "mdt",
    description: "tralala mobile data transfer",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "img/angular-logo.png",
    technologiesUsed: [
      "bootstrap-logo",
      "angular-logo"
    ]
  },
  {
    nameOfProject: "Salarioumetru",
    alias: "salary",
    description: "tralala salariometru",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "angular-logo"
    ]
  },
  {
    nameOfProject: "Covid-19 Tracker",
    alias: "covid",
    description: "tralala covid-19 Tracker",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "angular-logo"
    ]
  },
  {
    nameOfProject: "Grocery Store",
    alias: "grocery",
    description: "tralala grocery store",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "angular-logo"
    ]
  },
  {
    nameOfProject: "Carfy",
    alias: "carfy",
    description: "tralala carfy",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "angular-logo"
    ]
  }
];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlParam = urlParams.get('project');

function findProject() {
  projectExist = false;
  allProjects.some(selectedNameOfProject => {
    if (selectedNameOfProject.alias == urlParam) {
      projectExist = true;
      modifyPropertiesOfProject(selectedNameOfProject);
      modifyTechnologiesOfProject(selectedNameOfProject);
      modifyTextOfContactMeSection();
      return true;
    }
  });
  if (!projectExist) {
    nonExistingProject.style.display = "block";
    modifyTextOfContactMeSection();
  }
}

function modifyPropertiesOfProject(selectedNameOfProject) {
  existingProject.style.display = "block";
  projectName.innerHTML = selectedNameOfProject.nameOfProject;
  descriptionName.innerHTML = selectedNameOfProject.description;
  image.src = selectedNameOfProject.mainImage;
  selectedNameOfProject.siteUrl === "" ? liveSite.style.display = "none" : liveSite.href = selectedNameOfProject.siteUrl;
  selectedNameOfProject.gitHubUrl === "" ? gitHubLink.style.display = "none" : gitHubLink.href = selectedNameOfProject.gitHubUrl;
}

function modifyTechnologiesOfProject(selectedNameOfProject) {
  selectedNameOfProject.technologiesUsed.forEach(technology => {
    srcImage = "img/" + technology + ".png";
    let parent = document.createElement('div');
    let child = document.createElement('img');
    parent.className = 'container-skills no-height';
    child.className = 'image static-size-img dynamic-logo';
    parent.setAttribute('data-aos', 'zoom-in-right');
    child.setAttribute('src', srcImage);
    parent.appendChild(child);
    listOfTechnologies.appendChild(parent);
  });
}

function modifyTextOfContactMeSection() {
  if(existingProject.style.display == "block") {
    contactMe.innerHTML = "02. What's Next?";
  } else if(nonExistingProject.style.display == "block") {
    contactMe.innerHTML = "01. What's Next?";
  }
}

findProject();