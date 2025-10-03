console.log("promise")
new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
}).then(result => console.log(result));
