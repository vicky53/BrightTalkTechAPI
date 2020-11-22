package AutomationTest.BrightTalkTest;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.*;

import static AutomationTest.BrightTalkTest.HomePage.homePage;
import static AutomationTest.BrightTalkTest.RestAssuredUtils.STATUS_CODE;
import static AutomationTest.BrightTalkTest.RestAssuredUtils.RESPONSE_BODY;

public class StepDefinition {

    JsonParser jsonParser = new JsonParser();

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
        homePage();
    }

    @Given("^I get the default list of users for on (\\d+)st page$")
    public void i_get_the_default_list_of_users_for_on_st_page(int userId) {
        RestAssuredUtils.getHttp("/api/users?page=" + userId);
        Assert.assertEquals(STATUS_CODE, "200");
        System.out.println("Response Body :" + RESPONSE_BODY);
    }

    @When("^I get the list of  all users$")
    public void i_get_the_list_of_all_users() {
        jsonParser.jsonParsing(RESPONSE_BODY);
        List<String> users = jsonParser.getValue("id");
        System.out.println("Number of users returned : " + users.size());
    }

    @Then("^I should see total users count equals to number of user ids$")
    public void i_should_see_total_users_count_equals_to_number_of_user_ids() {
        List<String> users = jsonParser.getValue("id");
        String totalUsers = jsonParser.getValue(0, "per_page");
        System.out.println("Expected Total users in first page : " + totalUsers);
        System.out.println("Actual Total users in first page : " + users.size());
        Assert.assertEquals(totalUsers, String.valueOf(users.size()));
    }

    @Given("^I make a search for user (\\d+)$")
    public void i_make_a_search_for_user(int userId) throws Throwable {
        RestAssuredUtils.getHttp("/api/users/" + userId);
    }

    @Then("^I should see following user data$")
    public void i_should_see_following_user_data(DataTable table) {
        List<List<String>> stringList = table.asLists(String.class);
        Assert.assertEquals(STATUS_CODE, "200");
        System.out.println("Response Body :" + RESPONSE_BODY);
        jsonParser.jsonParsing(RESPONSE_BODY);
        String firstName = jsonParser.getValue(0,"first_name");
        String email = jsonParser.getValue(0,"email");
        System.out.println("Expected Response, First Name :" + stringList.get(1).get(0) + " Email :" + stringList.get(1).get(1));
        System.out.println("Actual Response, First Name :" + firstName + " Email :" + email);
        Assert.assertEquals(firstName, stringList.get(1).get(0));
        Assert.assertEquals(email, stringList.get(1).get(1));
    }

    @Then("^I receive error code (\\d+) in response$")
    public void i_receive_error_code_enter_value_in_response(int respCode) {
        Assert.assertEquals(STATUS_CODE, String.valueOf(respCode));
        System.out.println("Response Body :" + RESPONSE_BODY);
        Assert.assertEquals(RESPONSE_BODY, "{}");
    }

    @Given("^I create user with following ([^\\\"]+) ([^\\\"]+)$")
    public void i_create_user_with_following_name_job(String name, String job) {
        String jsonRequestBody = "{\"name\": \""+ name + "\", \"job\": \"" + job + "\"}";
        RestAssuredUtils.postHttp(jsonRequestBody,"/api/users", "POST");
        Assert.assertEquals(STATUS_CODE, "201");
        System.out.println("Response :" + RESPONSE_BODY);
    }

    @Then("^response should contain following data$")
    public void response_should_contain_following_data(DataTable table) {

        List<List<String>> lists = new ArrayList<>();
        List<String> listHeaders = table.asLists(String.class).get(0);
        lists.add(listHeaders);
        jsonParser.jsonParsing(RESPONSE_BODY);
        String name = jsonParser.getValue(0,"name");
        List<String> names = jsonParser.getValue("name");
        for(String name1 : names) System.out.println("name is:" + name1);
        String job = jsonParser.getValue(0,"job");
        String id = jsonParser.getValue(0,"id");
        String createdAt = jsonParser.getValue(0,"createdAt");
        List<String> stringList = new ArrayList<>(Arrays.asList(name, job, id, createdAt));
        lists.add(stringList);
        DataTable dataTable = table.toTable(lists, listHeaders.get(0), listHeaders.get(1), listHeaders.get(2), listHeaders.get(3));
        System.out.println(dataTable.toString());
    }

    @Given("^I login successfully with following data$")
    public void i_login_successfully_with_following_data(DataTable table) {
        List<String> stringList = table.asLists(String.class).get(1);
        String jsonRequestBody = "{\"email\": \"" + stringList.get(0) + "\", \"password\": \"" + stringList.get(1) + "\"}";
        RestAssuredUtils.postHttp(jsonRequestBody,"/api/login", "POST");
        Assert.assertEquals(STATUS_CODE, "200");
        System.out.println("Response :" + RESPONSE_BODY);
    }

    @Given("^I login unsuccessfully with following data$")
    public void i_login_unsuccessfully_with_following_data(DataTable table) {
        List<String> stringList = table.asLists(String.class).get(1);
        String jsonRequestBody = "{\"email\": \"" + stringList.get(0) + "\", \"password\": \"" + stringList.get(1) + "\"}";
        RestAssuredUtils.postHttp(jsonRequestBody,"/api/login", "POST");
        Assert.assertEquals(STATUS_CODE, "400");
        System.out.println("Response :" + RESPONSE_BODY);
    }

    @Given("^I wait for user list to load$")
    public void i_wait_for_user_list_to_load() {
        RestAssuredUtils.getHttp("/api/users?delay=3");
        Assert.assertEquals(STATUS_CODE, "200");
        System.out.println("Response Body :" + RESPONSE_BODY);
    }

    @Then("^I should see that every user has a unique id$")
    public void i_should_see_that_every_user_has_a_unique_id() {
        jsonParser.jsonParsing(RESPONSE_BODY);
        List<String> users = jsonParser.getValue("id");
        System.out.println("Number of users returned : " + users.size());
        Set<String> stringSet = new HashSet<>(users);
        Assert.assertEquals(stringSet.size(), users.size());
    }
}