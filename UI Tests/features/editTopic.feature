Feature: Editing a topic
  As a collaborator with multiple topics to guide
  I'd like to edit my topics
  So that I can keep the up to date

Scenario: Editing a topic on the platform
  Given I have gone to the praxis integrador home page
  Then I should see "Python" in the topics table
  When I click the edit button of the topic
  And I select the new level of expertise "2"
  And I hit the "Update" button
