<?php
require_once __DIR__ . './../config/db.php';
require_once __DIR__ . './generating_access_token.php';
class get_token
{
    private $token_date;
    private $token_time;
    private $token;
    private $expiry_time;
    //query sql for access token expiry time and date;
    private function fetchdata()
    {
        $sql = "SELECT * FROM access_token Where id =1";

        try {
            // Get DB Object
            $db = new db();

            //connect
            $db = $db->connect();

            $stmt = $db->query($sql);
            $entry = $stmt->fetchAll(PDO::FETCH_OBJ);
            $db = null;

            // echo json_encode($entry[0]);
            $this->token = $entry[0]->token;
            $this->token_date = $entry[0]->date;
            $this->token_time = $entry[0]->time;
            $this->expiry_time = $entry[0]->expiry_time;
            // return 1;
            // echo json_encode($entry);
        } catch (PDOException $e) {
            echo '{"error":{"text": ' . $e->getMessage() . '}';
            // return 0;
        }
    }

    private function isexpired()
    {
        $currentdate = date("y-m-d");
        $currenttime = date("H:i:s");
        $pre = strtotime($this->token_date . ' ' . $this->token_time);
        $curr = strtotime($currentdate . ' ' . $currenttime);
        $interval = $curr - $pre;
        // echo $interval;
        if ($interval < ($this->expiry_time - 100)) return 1;
        else return 0;
    }

    public function ispresent($config)
    {
        $this->fetchdata();
        if (!($this->isexpired())) {
            $tokenobj = new generate_access_token();
            $this->token = $tokenobj->main($config);
        } else {
            $response = json_decode(make_contest_problem_api_request($config, $this->token));
            if ($response->status === 'error' && $response->result->errors[0]->code == 'unauthorized') {
                $tokenobj = new generate_access_token();
                $this->token = $tokenobj->main($config);
            }
        }
        return $this->token;
    }
}
