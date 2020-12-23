<?php

function generate_access_token_first_time($config, $oauth_details)
{

    $oauth_config = array(
        'grant_type' => 'authorization_code', 'code' => $oauth_details['authorization_code'], 'client_id' => $config['client_id'],
        'client_secret' => $config['client_secret'], 'redirect_uri' => $config['redirect_uri']
    );
    $response = json_decode(make_curl_request($config['access_token_endpoint'], $oauth_config), true);
    $result = $response['result']['data'];
    $oauth_details['access_token'] = $result['access_token'];
    $oauth_details['refresh_token'] = $result['refresh_token'];
    $oauth_details['scope'] = $result['scope'];

    return $oauth_details;
}
