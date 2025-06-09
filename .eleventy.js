module.exports = function(eleventyConfig) {
    // Copy the `assets` directory to the output (e.g., `_site/assets`)
    eleventyConfig.addPassthroughCopy("src/assets");

    // Set the input directory for Eleventy and specify Handlebars as a template format
    return {
        dir: {
            input: "src", // <--- THIS IS CRITICAL. It tells Eleventy to look inside the 'src' folder.
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        // Ensure Eleventy processes .hbs files
        templateFormats: ["html", "njk", "md", "hbs"] // Add 'hbs' to the list
    };
};
