Feature: API test

  Scenario: Should see LIST USERS of all existing users
    Given I get the default list of users for on 1st page
    When I get the list of  all users
    Then I should see total users count equals to number of user ids

  Scenario: Should see SINGLE USER data
    Given I make a search for user 3
    Then I should see following user data
      | first_name    | email         |
      | Emma | emma.wong@reqres.in |

  Scenario: Should see SINGLE USER NOT FOUND error code
    Given I make a search for user 55
    Then I receive error code 404 in response

  Scenario Outline: CREATE a user
    Given I create user with following <Name> <Job>
    Then response should contain following data
      | name | job | id | createdAt |

    Examples:
      | Name  | Job     |
      | Peter | Manager |
      | Liza  | Sales   |

  Scenario: LOGIN - SUCCESSFUL by a user
    Given I login successfully with following data
      | Email         | Password      |
      | eve.holt@reqres.in | cityslicka |

  Scenario: LOGIN - UNSUCCESSFUL by a user
    Given I login unsuccessfully with following data
      | Email         | Password      |
      | eve.holt@reqres.in |  |

  Scenario: Should see list of users with DELAYED RESPONSE
    Given I wait for user list to load
    Then I should see that every user has a unique id
