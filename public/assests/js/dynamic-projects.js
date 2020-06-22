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
    description: "Fitness and health web application meant to helps users change their lifestyle by monitoring daily effort and energy intake. In addition to monitoring, the application through various expert provides users with a wide range of options(training plans, nutrition plans) specially created for the fulfillment of certain physical objectives. This application communicates with the another application(Mobile Data Transfer) for receiving data from users who use different products from Xiaomi. This data are displayed as tables or graphs.",
    siteUrl: "",
    gitHubUrl: "https://github.com/mincualexandru/Licenta",
    mainImage: "img/main-imag-fit-buddy.png",
    technologiesUsed: [
      "spring-logo",
      "bootstrap-logo",
      "mysql-logo",
      "thymeleaf-logo",
      "hibernate-logo",
      "html-logo",
      "css-logo",
      "javascript-logo",
      "jquery-logo"
    ]
  },
  {
    nameOfProject: "Mobile Data Transfer",
    alias: "mdt",
    description: "It's main purpose is to help customers upload their data file(number of calories burned, sleep analysis, steps taken, etc.) from Xiaomi products, which will be viewed in another application(Fit Buddy). Data is transferred by coomunicating with a server developed in Spring through various http methods.",
    siteUrl: "https://mobile-data-transfer-2020.web.app/auth",
    gitHubUrl: "https://github.com/mincualexandru/Licenta",
    mainImage: "img/main-img-mdt.png",
    technologiesUsed: [
      "angular-logo",
      "firebase-logo",
      "spring-logo"
    ]
  },
  {
    nameOfProject: "Salariometru",
    alias: "salary",
    description: "The user that accesses this application has the opportunity to find, based on his gross salary, different deductions of the employer, the net salary, the full salary and to visualize a chart divided into different tax categories.",
    siteUrl: "",
    gitHubUrl: "https://github.com/mincualexandru/salariometru",
    mainImage: "img/main-img-salariometru.png",
    technologiesUsed: [
      "angular-logo",
      "html-logo",
      "css-logo",
      "charts-logo"
    ]
  },
  {
    nameOfProject: "Refresh",
    alias: "refresh",
    description: "Refresh is a personal project developed to promote smoothies. Users can view a wide range of smoothies and they can delete or add ingredients based on their preferences. At the end, they can visualize their products added to the shopping cart and purchase them.",
    siteUrl: "",
    gitHubUrl: "",
    mainImage: "img/main-img-refresh.png",
    technologiesUsed: [
      "html-logo",
      "sass-logo",
      "javascript-logo"
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
    parent.className = 'container-skills-tech no-height';
    child.className = 'image-tech static-size-img dynamic-logo';
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