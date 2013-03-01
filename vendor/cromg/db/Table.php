<?php
/**
 * Description of Table
 *
 * @author cromg
 */

namespace cromg\db;
use cromg\di\Container;
    

    

abstract class Table {
    
    protected $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
}