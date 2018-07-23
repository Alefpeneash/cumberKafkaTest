const reporter = require('cucumber-html-reporter');
 
let testPage = () => {
    let options = {
        theme: 'bootstrap',
        jsonFile: './features/reports/reports.json',
        output: './features/reports/reports.html',
        reportSuiteAsScenarios: true,
        launchReport: false
    };
    reporter.generate(options)
}

module.exports = testPage;
