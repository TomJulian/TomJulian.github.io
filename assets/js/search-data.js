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
          description: "Journal articles, preprints, conference abstracts, and chapters in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "The connected themes and questions that shape my research programme.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code-amp-resources",
          title: "code &amp; resources",
          description: "Reusable research tools and model resources that can be shared publicly.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-background",
          title: "background",
          description: "Clinical, academic, and research background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-collaborations",
          title: "collaborations",
          description: "How I work with academic and industry partners.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-we-published-a-review-examining-the-potential-role-of-optical-coherence-tomography-in-cardiovascular-risk-prediction",
          title: 'We published a review examining the potential role of optical coherence tomography in...',
          description: "",
          section: "News",},{id: "news-our-collaborative-work-with-the-team-at-sitran-investigates-metabolites-with-potential-causal-roles-in-motor-neurone-disease-risk-read-the-paper",
          title: 'Our collaborative work with the team at SITraN investigates metabolites with potential causal...',
          description: "",
          section: "News",},{id: "news-we-published-a-review-in-current-eye-research-examining-retinal-features-reported-in-people-with-stroke-read-the-paper",
          title: 'We published a review in Current Eye Research examining retinal features reported in...',
          description: "",
          section: "News",},{id: "news-our-multi-omic-study-of-deep-learning-derived-ophthalmic-imaging-phenotypes-is-now-published-in-nature-cardiovascular-research-the-work-links-imaging-features-with-genetic-metabolic-anatomical-cardiovascular-and-neurological-traits-read-the-paper",
          title: 'Our multi-omic study of deep learning-derived ophthalmic imaging phenotypes is now published in...',
          description: "",
          section: "News",},{id: "projects-imaging-phenotyping",
          title: 'Imaging phenotyping',
          description: "Deriving detailed and reproducible phenotypes from ophthalmic images",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-genetic-and-multi-omic-discovery",
          title: 'Genetic and multi-omic discovery',
          description: "Investigating the biology underlying imaging phenotypes and ophthalmic disease",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-the-eye-and-systemic-health",
          title: 'The eye and systemic health',
          description: "Exploring what ophthalmic imaging can reveal about health elsewhere in the body",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-research-datasets-and-clinical-translation",
          title: 'Research datasets and clinical translation',
          description: "Building the evidence needed to develop and evaluate clinically useful AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
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
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/thomas-julian-3ab293210", "_blank");
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
