module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Add a custom "take" filter to limit array length
  eleventyConfig.addFilter("take", function (array, count) {
    if (!array) return [];
    return array.slice(0, count);
  });

  // Add a custom "date" filter for formatting dates
  eleventyConfig.addFilter("date", function (date, format) {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return date;

    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = months[d.getMonth()];

    if (format === "YYYY-MM-DD") {
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
    if (format === "MMMM D, YYYY") {
      return `${monthName} ${day}, ${year}`;
    }
    return d.toDateString();
  });

  // Set the dev server port
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    port: 9000
  };
};
