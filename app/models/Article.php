<?php
/**
 * Description of Article
 *
 * @author guilherme cunha <guilherme.cunha@cromg.org.br>
 */

namespace app\models;


class Article{
    
    protected $db;
   
    public function __construct($db) {
        $this->db = $db;
    }
}