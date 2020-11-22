$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/API-Test.feature");
formatter.feature({
  "line": 1,
  "name": "API test",
  "description": "",
  "id": "api-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1888615491,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Should see LIST USERS of all existing users",
  "description": "",
  "id": "api-test;should-see-list-users-of-all-existing-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I get the default list of users for on 1st page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I get the list of  all users",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see total users count equals to number of user ids",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "StepDefinition.i_get_the_default_list_of_users_for_on_st_page(int)"
});
formatter.result({
  "duration": 2298630840,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_get_the_list_of_all_users()"
});
formatter.result({
  "duration": 140872807,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_total_users_count_equals_to_number_of_user_ids()"
});
formatter.result({
  "duration": 78978,
  "status": "passed"
});
formatter.after({
  "duration": 82281772,
  "status": "passed"
});
formatter.before({
  "duration": 1157298712,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Should see SINGLE USER data",
  "description": "",
  "id": "api-test;should-see-single-user-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I make a search for user 3",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see following user data",
  "rows": [
    {
      "cells": [
        "first_name",
        "email"
      ],
      "line": 11
    },
    {
      "cells": [
        "Emma",
        "emma.wong@reqres.in"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(int)"
});
formatter.result({
  "duration": 641951278,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_following_user_data(DataTable)"
});
formatter.result({
  "duration": 1973687,
  "status": "passed"
});
formatter.after({
  "duration": 79007037,
  "status": "passed"
});
formatter.before({
  "duration": 1062629226,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Should see SINGLE USER NOT FOUND error code",
  "description": "",
  "id": "api-test;should-see-single-user-not-found-error-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I make a search for user 55",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I receive error code 404 in response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 25
    }
  ],
  "location": "StepDefinition.i_make_a_search_for_user(int)"
});
formatter.result({
  "duration": 491510660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "StepDefinition.i_receive_error_code_enter_value_in_response(int)"
});
formatter.result({
  "duration": 120242,
  "status": "passed"
});
formatter.after({
  "duration": 79733834,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following \u003cName\u003e \u003cJob\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "api-test;create-a-user;",
  "rows": [
    {
      "cells": [
        "Name",
        "Job"
      ],
      "line": 24,
      "id": "api-test;create-a-user;;1"
    },
    {
      "cells": [
        "Peter",
        "Manager"
      ],
      "line": 25,
      "id": "api-test;create-a-user;;2"
    },
    {
      "cells": [
        "Liza",
        "Sales"
      ],
      "line": 26,
      "id": "api-test;create-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1062642128,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following Peter Manager",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Peter",
      "offset": 29
    },
    {
      "val": "Manager",
      "offset": 35
    }
  ],
  "location": "StepDefinition.i_create_user_with_following_name_job(String,String)"
});
formatter.result({
  "duration": 460559091,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_following_data(DataTable)"
});
formatter.result({
  "duration": 7582813,
  "status": "passed"
});
formatter.after({
  "duration": 78734247,
  "status": "passed"
});
formatter.before({
  "duration": 1016207972,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "CREATE a user",
  "description": "",
  "id": "api-test;create-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I create user with following Liza Sales",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "response should contain following data",
  "rows": [
    {
      "cells": [
        "name",
        "job",
        "id",
        "createdAt"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Liza",
      "offset": 29
    },
    {
      "val": "Sales",
      "offset": 34
    }
  ],
  "location": "StepDefinition.i_create_user_with_following_name_job(String,String)"
});
formatter.result({
  "duration": 458749662,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.response_should_contain_following_data(DataTable)"
});
formatter.result({
  "duration": 693187,
  "status": "passed"
});
formatter.after({
  "duration": 82994870,
  "status": "passed"
});
formatter.before({
  "duration": 1023862376,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "LOGIN - SUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---successful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I login successfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 30
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        "cityslicka"
      ],
      "line": 31
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_successfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 293591664,
  "status": "passed"
});
formatter.after({
  "duration": 82874316,
  "status": "passed"
});
formatter.before({
  "duration": 997337188,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "LOGIN - UNSUCCESSFUL by a user",
  "description": "",
  "id": "api-test;login---unsuccessful-by-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I login unsuccessfully with following data",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 35
    },
    {
      "cells": [
        "eve.holt@reqres.in",
        ""
      ],
      "line": 36
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.i_login_unsuccessfully_with_following_data(DataTable)"
});
formatter.result({
  "duration": 449034035,
  "status": "passed"
});
formatter.after({
  "duration": 79425438,
  "status": "passed"
});
formatter.before({
  "duration": 1012758784,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Should see list of users with DELAYED RESPONSE",
  "description": "",
  "id": "api-test;should-see-list-of-users-with-delayed-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I wait for user list to load",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I should see that every user has a unique id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.i_wait_for_user_list_to_load()"
});
formatter.result({
  "duration": 579718607,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_should_see_that_every_user_has_a_unique_id()"
});
formatter.result({
  "duration": 608358,
  "status": "passed"
});
formatter.after({
  "duration": 80196992,
  "status": "passed"
});
formatter.uri("src/test/java/SampleTest.feature");
formatter.feature({
  "line": 1,
  "name": "BrightTalk  Sample Test",
  "description": "",
  "id": "brighttalk--sample-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1015366648,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sample",
  "description": "",
  "id": "brighttalk--sample-test;sample",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 788315066,
  "status": "passed"
});
formatter.after({
  "duration": 88769140,
  "status": "passed"
});
});