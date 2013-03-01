<?php
/**
 * Description of Table
 *
 * @author cromg
 */

namespace conselhos\db;
use conselhos\di\Container;
    

    

abstract class Table {
    
    protected $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
}