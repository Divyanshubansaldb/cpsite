<?php

function take_user_to_codechef_permissions_page($config)
{
    $params = array('response_type' => 'code', 'client_id' => $config['client_id'], 'redirect_uri' => $config['redirect_uri'], 'state' => 'xyz');
    $url = 'Location: ' . $config['authorization_code_endpoint'] . '?' . http_build_query($params);
    header($url);
    die();
}
