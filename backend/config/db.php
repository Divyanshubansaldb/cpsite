<?php
class db
{
    //properties

    private $dbhost = "b8r4pl1i8l3ypxjl6z94-mysql.services.clever-cloud.com";
    private $dbuser = "ujsgtzlx75vcs3nk";
    private $dbpass = "dHW9r74QNbyjZfQU1EZo";
    private $dbname = "b8r4pl1i8l3ypxjl6z94";

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
