module.exports = {
    siteMetadata: {
        pathPrefix: "/fortizdev_react_mainsite",
        siteUrl: "https://www.fortizdev.cl",
        title: "fortizdev✨",
        description: "Awesome Gatsby template",
        author: "Don Moix",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "inbio",
        twitterUsername: "@rainbowit",
        getform_url:
            "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
        socials: [
            {
                id: 1,
                title: "threads",
                path: "https://www.threads.net/@don_moix",
                icon: "AtSign",
            },
            {
                id: 2,
                title: "github",
                path: "https://github.com/m01x",
                icon: "GitHub",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://www.linkedin.com/in/fortizdev/",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "",
            email: "fortiz.informatica@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "fortiz:dev",
                short_name: "f:dev",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
