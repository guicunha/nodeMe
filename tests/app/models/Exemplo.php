<?php
/**
 * Description of Exemplo
 *
 * @author cromg
 */

require '../app/models/Exemplo.php';

class ExemploTest extends PHPUnit_Framework_TestCase {
    
    private $model;
    
    public function setUp(){
        $this->model = new app\models\Exemplo();
    }
    
    public function testVerificaTipoDoObjeto(){
        $this->assertInstanceOf('\app\models\Exemplo', $this->model );
    }
    
    public function testVerificaSePodeSomar(){
        
        $this->assertEquals(2, $this->model->somar(1, 1));
        $this->assertEquals(3, $this->model->somar(1, 2));
    }
    
    public function testeVerificaSeAsEntradasSaoNumeros(){
        try{
            $this->model->somar('a', 'a');
        }   
        catch (\Exception $e){
            $this->assertEquals('não é numerico', $e->getMessage());
        }
    }
}

?>