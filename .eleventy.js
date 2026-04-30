module.exports = function(eleventyConfig) {
  // এটি অ্যাডমিন ফোল্ডারটিকে আউটপুট ফোল্ডারে কপি করে দেয়
  eleventyConfig.addPassthroughCopy("admin");
  
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
