<?php
class db
{
    //properties

    private $dbhost = "localhost";
    private $dbuser = "root";
    private $dbpass = "";
    private $dbname = "test";

    //connect
    public function connect()
    {
        $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
        try {
            $dbConnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
        } catch (PDOException $e) {
            echo "a problem occured";
        }
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbConnection;
    }
}
