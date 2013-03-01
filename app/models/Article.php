<?php
/**
 * Description of Article
 *
 * @author cromg
 */

namespace app\models;
use cromg\db\Table;

class Article extends Table{
    
    public function getNome(){
        return "Sputnick";
    }   
}