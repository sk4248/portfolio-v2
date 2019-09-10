module.exports = {
  siteTitle: 'Sreekanth Korampally | Web Developer',
  siteDescription:
    'Sreekanth Korampally is a web developer based in Rochester, NY who loves developing great Websites and writing clean code',
  siteKeywords: 'Sreekanth Korampally, Sreekanth, Korampally, web developer, javascript, rit',
  siteUrl: 'https://sreekanthkorampally.com',
  siteLanguage: 'en_US',

  name: 'Sreekanth Korampally',
  location: 'Rochester, NY',
  email: 'sk4248@g.rit.edu',
  github: 'https://github.com/sk4248/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/sk4248/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sreekanth-korampally-50092286/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kanth3474',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kanth_07/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#1f1fc2',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
