<?php

/**
 * Description of Container
 *
 * @author cromg
 */

namespace conselhos\di;

class Container {

    private static function getDb() {

        $db = new \PDO("mysql:host=localhost;dbname=conselhos", "root", "root");
        $db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        return $db;
    }

    public static function getClass($name, $data = "") {
        $str_class = "\\app\\models\\" . ucfirst($name);
        if ($data)
            $class = new $str_class(self::getDb, $data);
        else
            $class = new $str_class(self::getDb());
        return $class;
    }

}
