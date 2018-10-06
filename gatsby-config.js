module.exports = {
    siteMetadata: {
        title: "Aidan O'Grady",
        siteUrl: "https://www.aidanogrady.com",
        description: "The personal website of Aidan O'Grady"
    },
    plugins: [
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.js"
            }
        }
    ]
};
