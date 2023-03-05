var badge = "";
var licenseSection = "";

function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    badge = "![license badge](https://img.shields.io/badge/license-MIT-green)";
    licenseSection = `This application is licensed under the ${data.license} license.`;
  } else if (data.license === "APACHE 2.0") {
    badge =
      "![license badge](https://img.shields.io/badge/license-APACHE_2.0-green)";
    licenseSection = `This application is licensed under the ${data.license} license.`;
  } else if (data.license === "GPL 3.8") {
    badge =
      "![license badge](https://img.shields.io/badge/license-GPL_3.8-green)";
    licenseSection = `This application is licensed under the ${data.license} license.`;
  } else if (data.license === "BSD 3") {
    badge =
      "![license badge](https://img.shields.io/badge/license-BSD_3-green)";
    licenseSection = `This application is licensed under the ${data.license} license.`;
  } else {
    badge = "";
    licenseSection = `${data.license}`;
  }
}

function generateMarkdown(data) {
  renderLicenseBadge(data);

  return `# ${data.project}

${badge}  

## Description
${data.description}

## Table of Contents
[Installation](#installation)    
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)

## Installation
To install the necessary dependencies, run the following command:  
~~~
${data.installation}
~~~

## Usage
${data.info}

## License
${licenseSection}

## Contributing
${data.contribution}

## Tests
To run tests, run the following command:  
~~~
${data.testing}
~~~

## Questions
If you have any questions about the repository, you can contact me directly at ${data.email}. You can view more of my work on GitHub [${data.username}](https://github.com/${data.username}): (https://github.com/${data.username}).`;
}

module.exports = generateMarkdown;
