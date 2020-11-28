<?php
class generate_access_token
{
    private $tokenobject;
    private function generate_access_function($config)
    {
        $oauth_config = array(
            'grant_type' => 'client_credentials', 'scope' => 'public', 'client_id' => $config['client_id'],
            'client_secret' => $config['client_secret'], 'redirect_uri' => '{' . $config['redirect_uri'] . '}'
        );
        $response = json_decode(make_curl_request($config['access_token_endpoint'], $oauth_config), true);
        $this->tokenobject = $response;
    }

    private function saving_in_db()
    {
        $token = $this->tokenobject['result']['data']['access_token'];
        $time = date("H:i:s");
        $date = date("y-m-d");
        $id = 1;
        $expiry_time = $this->tokenobject['result']['data']['expires_in'];

        $sql = "UPDATE `access_token` SET `id`=$id,`token`='$token',`date`='$date',`time`='$time',`expiry_time`=$expiry_time WHERE `id`=1";
        try {
            // Get DB Object
            $db = new db();

            //connect
            $db = $db->connect();

            $stmt = $db->query($sql);
        } catch (PDOException $e) {
            echo '{"error":{"text": ' . $e->getMessage() . '}';
        }
    }
    public function main($config)
    {
        $this->generate_access_function($config);
        $this->saving_in_db();
        return $this->tokenobject['result']['data']['access_token'];
    }
}
