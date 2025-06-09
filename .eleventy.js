module.exports = (eleventyConfig) => {
    const handlebars = require('handlebars')
    const handlebarsPlugin = require("@11ty/eleventy-plugin-handlebars");
    eleventyConfig.addPlugin(handlebarsPlugin, {
        // Override the `ejs` library instance
        eleventyLibraryOverride: handlebars,
    });

    eleventyConfig.addHandlebarsHelper("jsonPrint", obj => JSON.stringify(obj, null, 2))
    eleventyConfig.addHandlebarsHelper("addOne", num => (num + 1))
    eleventyConfig.addHandlebarsHelper("eq", (a, b) => (a === b))
    eleventyConfig.addHandlebarsHelper("not", exp => !exp)

    eleventyConfig.addPassthroughCopy('assets')

    return {
        dir: {
            input: './',
            includes: 'includes',
            // data: "data",
            output: "_site"
        },
        // templateFormats: ["html", "md", "hbs"],
        passthroughFileCopy: true
    }
}
