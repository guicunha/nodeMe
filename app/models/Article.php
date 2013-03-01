<?php
/**
 * Description of Article
 *
 * @author cromg
 */

namespace app\models;
use conselhos\db\Table;

class Article extends Table{
    
    public function getNome(){
        return "Sputnick";
    }   
}