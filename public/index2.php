<?php


function main()
{


    if (isset($_GET['code'])) {
        $oauth_details['authorization_code'] = $_GET['code'];
        $oauth_details = generate_access_token_first_time($config, $oauth_details);

        $response = make_contest_problem_api_request($config, $oauth_details);
        //$oauth_details = generate_access_token_from_refresh_token($config, $oauth_details);         //use this if you want to generate access_token from refresh_token
        $response = json_encode($response);
        echo $response;
    } else {
        take_user_to_codechef_permissions_page($config);
    }
}

main();
