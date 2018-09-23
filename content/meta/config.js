const colors = require('../../src/styles/colors');

module.exports = {
    siteTitle: 'Zahed Shareef', // <title>
    shortSiteTitle: 'Zahed', // <title> ending for posts and pages
    siteDescription: 'Zahed Shareef - Software Engineer',
    siteUrl: 'https://zahedshareef.com/blog',
    pathPrefix: '',
    siteImage: 'preview.jpg',
    siteLanguage: 'en',
    // author
    authorName: 'zahed shareef',
    authorTwitterAccount: 'realzahed',
    // info
    infoTitle: 'zahed shareef',
    infoTitleNote: 'software engineer',
    // manifest.json
    manifestName: 'Zahed Shareef',
    manifestShortName: 'Zahed Blog', // max 12 characters
    manifestStartUrl: '/projects',
    manifestBackgroundColor: colors.background,
    manifestThemeColor: colors.background,
    manifestDisplay: 'standalone',
    // contact
    contactEmail: 'zahedkw@gmail.com',
    // social
    authorSocialLinks: [
        { name: 'linkedin', url: 'https://www.linkedin.com/in/zahedshareef/' },
        { name: 'github', url: 'https://github.com/zahedshareef' },
        // { name: 'twitter', url: 'https://twitter.com/realzahed' },
        {
            name: 'resume',
            url: 'https://docs.google.com/document/d/1pAingUZ44Q54rKsXRwdVF_o40SDrUY86LT77WV08RMk/export?format=pdf'
        },
        { name: 'stackoverflow', url: 'https://stackoverflow.com/users/3918206/zahed' }
    ]
};
