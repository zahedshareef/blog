const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog", // <title>
  shortSiteTitle: "PersonalBlog", // <title> ending for posts and pages
  siteDescription: "PersonalBlog",
  siteUrl: "https://zahedshareef.com/blog",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "zahed shareef",
  authorTwitterAccount: "realzahed",
  // info
  infoTitle: "zahed shareef",
  infoTitleNote: "",
  // manifest.json
  manifestName: "PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "zahedkw@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/zahedshareef" },
    { name: "twitter", url: "https://twitter.com/realzahed" },
    { name: "facebook", url: "https://www.linkedin.com/in/zahedshareef/" }
  ]
};
