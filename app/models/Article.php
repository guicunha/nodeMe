<?php
/**
 * Description of Article
 *
 * @author cromg
 */

namespace app\models;
use conselhos\db\Table;

class Article extends Table{
    
    protected $table = "article";
    
    public function _insert(array $data){
        return "";
    }
    
    public function _update(array $data){
        return "";
    }
}