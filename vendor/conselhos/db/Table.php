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
    protected $table;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    public function fetchAll(){
        $query = "select * from ". $this->table;
        return $this->db->query($query);
    }
    
    abstract public function _insert(array $data);
    abstract public function _update(array $data); 
    
    public function save(aray $data){
        if(isset($data['id'])){
            $this->_update($data);
        }else{
            $this->_insert($data);
        }
    }
    
    public function delete($id){
        $query = "delete from ". $this->table. "where id".(int)$id;
        return $this->db->query($query);
    }
    
}