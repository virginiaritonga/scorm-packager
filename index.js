var scopackager = require('simple-scorm-packager');

scopackager({
  version: '2004 4th Edition',
  organization: 'Test Company',
  title: 'Test Course',
  language: 'fr-FR',
  identifier: '00',
  masteryScore: 80,
  startingPage: 'index.html',
  source: './myProjectFolder',
  package: {
    version: "0.0.1",
    zip: true,
    outputFolder: './scormPackages'
  }
}, function(msg){
  console.log(msg);
});