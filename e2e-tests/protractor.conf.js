exports.config = {
  framework: "jasmine",
  directConnect: true,
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["*.js"],
  baseUrl: "http://127.0.0.1:4000/",
};
