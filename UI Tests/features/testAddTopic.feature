Feature: Adding a topic to my topics to guide

  As a collaborator with multiple topics to guide
  I'd like to add new topics
  So that I can share that information with other users

  Scenario: Adding a topic that already exists on the platform
    Given I have gone to the praxis integrador home page
    And I don't have "UI topic test 1" on my topics to guide
    And I hit the button "Agregar tema"
    When I enter "UI topic test 1" on the name field
    And I choose the level of expertise "3"
    And I hit the "Agregar" button
    And I wait "2" seconds
    Then I should see "UI topic test 1" in the topics table

  Scenario: Adding a topic that doesn't exist on the platform
    Given I have gone to the praxis integrador home page
    And I hit the button "Agregar tema"
    When I enter "UI topic test new" on the name field
    And I choose the level of expertise "3"
    And I hit the "Agregar" button
    Then I have to choose again the level of expertise "3"
    And I enter the description "This is just a test"
    And I hit the "Crear" button
    And I wait "2" seconds
    Then I should see "UI topic test new" in the topics table



