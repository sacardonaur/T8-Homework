'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


var firstExampleSteps;
firstExampleSteps = function () {
    this.Given(/^I have gone to the praxis integrador home page/, function () {
        return browser.get('https://frontend-copy.herokuapp.com');

    });

    this.Given(/^I hit the button "Agregar tema"/, function () {
        var addTopicButton = element(by.css('body > app-root > app-topic > div > div > div.button-row > button'));
        return addTopicButton.click();
    });

    this.When(/^I enter "([^"]*)" on the name field/, function (topicName) {
        var nameInput = element(by.css('#mat-input-1'));
        return nameInput.sendKeys(topicName);
    });

    this.Given(/^I choose the level of expertise "([^"]*)"/, function (expertise) {
        var expertiseSelector = element(by.css('.mat-select-arrow-wrapper'));
        expertiseSelector.click();
        if (expertise === "2") {
            var expertise2 = element(by.css('#mat-option-0 > span:nth-child(1)'));
            return expertise2.click();
        } else if (expertise === "3") {
            var expertise3 = element(by.css('#mat-option-1 > span:nth-child(1)'));
            return expertise3.click();
        }

    });

    this.Given(/^I hit the "([^"]*)" button$/, function (text) {
        var Button = element(by.buttonText(text));
        return Button.click();
    });

    this.Then(/^I have to choose again the level of expertise "([^"]*)"/, function (expertise) {
        var expertiseSelector = element(by.css('#mat-select-1 > div:nth-child(1) > div:nth-child(2)'));
        expertiseSelector.click();
        if (expertise === "2") {
            var expertise2 = element(by.css('#mat-option-2 > span:nth-child(1)'));
            return expertise2.click();
        } else if (expertise === "3") {
            var expertise3 = element(by.css('#mat-option-3 > span:nth-child(1)'));
            return expertise3.click();
        }

    });

    this.Given(/^I enter the description "([^"]*)"$/, function (description) {
        var descriptionForm = element(by.css('#mat-input-4'));
        return descriptionForm.sendKeys(description);
    });

    this.Given(/^I wait "([^"]*)" seconds$/, function (seconds) {
        return browser.sleep(seconds * 1000);
    });


    this.Then(/^I should see "([^"]*)" in the topics table$/, function (topicName) {
        var topicsList = element.all(by.css("body > app-root > app-topic > div > div > div.example-container.mat-elevation-z2 > mat-table > mat-row > mat-cell.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted"));
        return topicsList.count().then(function (count) {
            var lastTopic = topicsList.get(count - 1);
            return expect(lastTopic.getText()).to.eventually.equal(topicName);
        });
    });

    this.Then(/^I click the edit button of the topic/, function () {
        var topicsList = element.all(by.css("body > app-root > app-topic > div > div > div.example-container.mat-elevation-z2 > mat-table > mat-row > mat-cell.mat-cell.cdk-column-edit.mat-column-edit.ng-star-inserted > a"));
        return topicsList.count().then(function (count) {
            var lastTopicButton = topicsList.get(count - 1);
            return lastTopicButton.click();
        });
    });

    this.Given(/^I select the new level of expertise "([^"]*)"/, function (expertise) {
        var expertiseSelector = element(by.css('.mat-select-arrow-wrapper'));
        expertiseSelector.click();
        if (expertise === "2") {
            var expertise2 = element(by.css('#mat-option-0 > span:nth-child(1)'));
            return expertise2.click();
        } else if (expertise === "3") {
            var expertise3 = element(by.css('#mat-option-0 > span:nth-child(2)'));
            return expertise3.click();
        }
    });

    this.Then(/^I don't have "([^"]*)" on my topics to guide$/, function (topicName) {
        var topicsList = element.all(by.css("body > app-root > app-topic > div > div > div.example-container.mat-elevation-z2 > mat-table > mat-row > mat-cell.mat-cell.cdk-column-name.mat-column-name.ng-star-inserted"))
            .each(function(elem,index){
                elem.getText().then(function (text) {
                    return expect(text).to.not.equal(topicName)
                })
            });
    });



};
module.exports = firstExampleSteps;