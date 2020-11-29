const DirectoryItems = {
  "/users/MattMarsden/Home/": [
    "$AboutMe",
    "$Contact",
    "$Portfolio",
    "$Languages&Tools",
  ],
  "/users/MattMarsden/Home/AboutMe/": ["#AboutMe.txt", "$Home"],
  "/users/MattMarsden/Home/Contact/": ["mattmarsdendev@gmail.com", "$Home"],
  "/users/MattMarsden/Home/Portfolio/": [
    "mmarsden89.github.io/#/portfolio",
    "#portfolioWebsite.txt",
    "#trividuh.txt",
    "#nationalParks.txt",
    "$Home",
  ],
  "/users/MattMarsden/Home/Languages&Tools/": ["#languages&tools.txt", "$Home"],
  aliases: {
    "/users/MattMarsden/Home/$AboutMe/": "/users/MattMarsden/Home/AboutMe/",
    "/users/MattMarsden/$Home/": "/users/MattMarsden/Home/",
    "/users/MattMarsden/$Home/$Home": "/users/MattMarsden/Home/",
    "/users/MattMarsden/Home/$Home": "/users/MattMarsden/Home/",
    "/users/MattMarsden/Home/Home/": "/users/MattMarsden/Home/",
  },
};

export default DirectoryItems;
