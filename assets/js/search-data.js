// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Past and present projects I have worked on, either as a lead or through collaborations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Thanks for checking out my repos! This page will be updated periodically at the termination of projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Mentors and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-new-phd-position-is-available-in-our-group-click-the-link-for-details",
          title: 'A new PhD position is available in our group! Click the link for...',
          description: "",
          section: "News",},{id: "news-we-published-a-new-paper-on-the-role-of-oct-in-prediction-of-cardiovascular-disease",
          title: 'We published a new paper on the role of OCT in prediction of...',
          description: "",
          section: "News",},{id: "news-we-ve-updated-our-study-on-the-relationship-between-the-eye-and-systemic-health-updated-an-pre-print-link-is-coming-soon-eyes",
          title: 'We’ve updated our study on the relationship between the eye and systemic health...',
          description: "",
          section: "News",},{id: "news-man-scientist-our-pre-print-focussed-on-exploring-the-mechanistic-links-between-the-appearance-of-the-eye-and-systemic-health-using-deep-learning-robot-and-multi-omics-dna-data-is-now-updated-check-it-out-here",
          title: ':man_scientist: Our pre-print focussed on exploring the mechanistic links between the appearance of...',
          description: "",
          section: "News",},{id: "news-brain-check-out-our-collaborative-work-with-the-great-team-at-sitran-focussed-on-exploring-metabolites-with-causal-roles-in-mnd-risk-here",
          title: ':brain: Check out our collaborative work with the great team at SITraN -...',
          description: "",
          section: "News",},{id: "news-we-have-published-a-review-surrounding-the-retinal-features-present-in-people-with-stroke-in-current-eye-research-read-it-here",
          title: '📖 We have published a review surrounding the retinal features present in people...',
          description: "",
          section: "News",},{id: "projects-oculomics",
          title: 'Oculomics',
          description: "Our work exploring how the eye links to systemic health",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-genomics",
          title: 'Genomics',
          description: "We are using genetic data to explore the biology of health and imaging traits",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-causal-inference",
          title: 'Causal Inference',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%6F%6D%61%73.%6A%75%6C%69%61%6E@%6D%61%6E%63%68%65%73%74%65%72.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TomJulian", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Tom-Julian/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=dZLN9mQAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/TomJulian18", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
