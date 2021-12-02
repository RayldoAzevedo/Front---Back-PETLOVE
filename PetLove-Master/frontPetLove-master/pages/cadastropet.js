import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from "reactstrap";
import Styles from "../styles/User.module.css"
import React from 'react';
import { ReactDOM } from 'react-dom';
import { useEffect, useState } from "react";

import TopLogin from '../components/TopLogin';
import CadastroPet from '../components/CadastroPet'
import Footer from '../components/Footer'

import axios, { Axios } from "axios";

function FormPet(){

   
    const url="http://localhost:8080/animais"
    const [data,setData] = useState({
        nome:"",
        nascimento:"",
        raca:"",
        caracteristicas:"",
        especie:"",
        sexo:"",
        tamanho:"",
        comportamento:"",
        emailUser:""
    })
    
    function submit(e){
        e.preventDefault();

        axios.post(url,
        {
            
          nome:data.nome,
          nascimento:data.nascimento,
          raca:data.raca,
          caracteristicas:data.caracteristicas,
          especie:data.especie,
          sexo:data.sexo,
          tamanho:data.tamanho,
          comportamento:data.comportamento,
          emailUser:global.localStorage.getItem( 'email') 
        })
        
        .then(res =>{
            
            console.log(res.data)

    if (res.data) {
      window.location.href = "http://localhost:3000/inicio";
    } else {
      alert("Erro ao cadastrar Pet");
    }
   
        })

    }


    function handle (e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
  return (
    <div >
        <TopLogin/> 
        <div className="container corpo">
            <Row className={Styles.borda}>
                <Col ><Image src="/pegadas.png" alt="dogCadastro" width={256} height={105} /></Col>
                <Col ><Image src="/cadastroDog.png" alt="dogCadastro" width={170} height={240} /></Col>
            </Row>

            <div className="card" id={Styles.corpo}>
                <div className="card-header text-center" id={Styles.h1}>
                    <h2 className={Styles.h2} id={Styles.pad}>Adicione seu pet para adoção</h2>
                </div>

                {/* formulario */}
                <div className='text-center' id={Styles.h1, Styles.h2}></div>
                <form onSubmit={(e)=> submit(e)} id="userdados">
                    {/* nome */}
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3 mt-3">
                                <input type="text" onChange={(e)=>handle(e)} value={data.nome}
                                    className="form-control"
                                    id="nome"
                                    placeholder="Nome do pet"
                                />
                                <label htmlFor="floatingInputNome">Nome do pet</label>
                            </div>
                        </div>

                        {/* nascimento */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3 mt-3">
                                <input type="date" onChange={(e)=>handle(e)} value={data.nascimento}
                                    className="form-control"
                                    id="nascimento"
                                    placeholder="Data de nascimento"
                                />
                                <label htmlFor="floatingInputNascimento">Data de nascimento</label>
                            </div>
                        </div>
                    </div>

                    <div className="row my-3">
                        {/* raça */}
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" onChange={(e)=>handle(e)} value={data.raca}
                                    className="form-control"
                                    id="raca"
                                    placeholder="Raça do pet"
                                />
                                <label htmlFor="floatingInputRaca">Raça do pet</label>
                            </div>
                        </div>

                        {/* caracteristica */}
                        <div className="col-sm-12 col-md-auto col-lg-6">
                            <div className="form-floating mb-3">
                                <input type="text" onChange={(e)=>handle(e)} value={data.caracteristicas}
                                    className="form-control"
                                    id="caracteristicas"
                                    placeholder="Características"
                                />
                                <label htmlFor="floatingInputCaracteristicas">Características</label>
                            </div>
                        </div>

                    </div>

                    {/* sexo */}
                    <div className="row my-3">
                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <div className="form-floating">
                                <select name="Especie" className="form-select" id="especie" onChange={(e)=>handle(e)}  value={data.especie}>
                                    <option  value="sel" >Espécie</option>
                                    <option  value="can">Canino</option>
                                    <option value="del">Felino</option>
                                </select>
                                <label htmlFor="floatingSelectEspecie">Especie</label>
                            </div>
                        </div>

                        {/* especie */}
                        <div className="col-sm-12 col-md-12 col-lg-3 col">
                            <div className="form-floating">
                                <select name="Sexo" className="form-select" id="sexo" onChange={(e)=>handle(e)}  value={data.sexo}>
                                    <option value="sel">Sexo</option>
                                    <option value="M">Macho</option>
                                    <option value="F">Fêmea</option>
                                </select>
                                <label htmlFor="floatingSelectSexo">Sexo</label>
                            </div>
                        </div>

                        {/* Porte */}
                        <div className="col-sm-12 col-md-auto col-lg-3 col" >
                            <div className="form-floating">
                                <select name="Porte" className="form-select" id="tamanho"onChange={(e)=>handle(e)}  value={data.tamanho}>
                                    <option value="sel">Porte</option>
                                    <option value="pequeno">Pequeno</option>
                                    <option value="medio">Médio</option>
                                    <option value="grande">Grande</option>
                                </select>
                                <label htmlFor="floatingSelectPorte">Porte</label>
                            </div>
                        </div>

                        {/* comportamento */}
                        <div className="col-sm-12 col-md-auto col-lg-3 col">
                            <div className="form-floating">
                                <select name="Comportamento" className="form-select" id="comportamento"onChange={(e)=>handle(e)}  value={data.comportamento}>
                                    <option value="sel">Comportamento</option>
                                    <option value="docil">Dócil</option>
                                    <option value="bravo">Bravo</option>
                                    <option value="bipolar">Bipolar</option>
                                    <option value="desconhecido">Desconhecido</option>
                                </select>
                                <label htmlFor="floatingSelectComportamento">Comportamento</label>
                            </div>
                        </div>
                    </div>

                    {/* Origem */}
                    {/* <div className="row my-3">
                        <div className="col-sm-12 col-md-auto col-lg-3 col">
                            <div className="form-floating">
                                <select name="Origem" className="form-select" id="floatingSelectOrigem">
                                    <option value="Origem">Origem</option>
                                    <option value="Pessoa">Pessoa</option>
                                    <option value="ONG">ONG</option>
                                    <option value="Abrigo">Abrigo</option>
                                </select>
                                <label htmlFor="floatingSelectOrigem">Origem</label>
                            </div>
                        </div>
                    </div> */}


                    {/* teste Origem */}
                    {/*}
                    <div className="container">
                        <div className="row my-3">
                            <div className="col-sm-12 col-md-auto col-lg-2" id={Styles.radio}>
                                <label htmlFor="floatingSelectOrigens">Origem*</label>
                            </div>
                            <div className="row my-2" id={Styles.teste}>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>Pessoa</label>
                                    <input type="radio" value="pessoa" name="Origem"/>
                                </div>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>ONG</label>
                                    <input type="radio" value="ONG" name="Origem"/>
                                </div>
                                <div className="col-sm-12 col-md-auto col-lg-4">
                                    <label>Abrigo</label>
                                    <input type="radio" value="Abrigo" name="Origem"/>
                                </div>
                            </div>
                        </div>
                    </div>
                                         botao registrar */}
                    <div className="card-footer">
                        <div className="container d-flex justify-content-center mb-2 mt-2">
                            <button className={Styles.btregistrar} >Cadastrar</button>
                        </div>
                    </div>
                </form>
                {/* form end */}
            </div>
        </div>
    


        <Footer/>
    </div>
  )
}export default FormPet;
