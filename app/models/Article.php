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
    
    protected function _insert(array $data){
            $stmt = $this->db->prepare("insert into article (nome, descricao) values (:nome, :descricao)");
            $stmt->bindParam(":nome", $data['nome']);
            $stmt->bindParam(":descricao", $data['descricao']);
            $stmt->execute();
            return $this->db->lastInsertId();
    }
    
    protected function _update(array $data){
            $stmt = $this->db->prepare("update article set nome=:nome, descricao=:descricao where id=:id");
            $stmt->bindParam(":nome", $data['nome']);
            $stmt->bindParam(":descricao", $data['descricao']);
            $stmt->bindParam(":id", $data['id']);
            $stmt->execute();
            return $data['id'];
    }
    
    public function find($id){
            $stmt = $this->db->prepare("select * from article where id=:id");
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            return $stmt->fetch();
    }
    
    public function delete($id){
            $stmt = $this->db->prepare("delete from article where id=:id");
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            return true;
    }
    
    public function fetchAll(){
            $stmt = $this->db->prepare("select * from article");
            $stmt->execute();
            return $stmt->fetchAll();
    }
    
    public function save(array $data){
        if(!isset($data['id'])){
            return $this->_insert($data);
        }else{
            return $this->_update($data);
        }
    }
}