import React from 'react';
import Footer from '../components/Footer'
import Top from '../components/Top';
import Styles from '../styles/Show.module.css'

function Adotar() {

    const url = "http://localhost:8080/animais"
    const animal = {
        imagem: "https://image.freepik.com/fotos-gratis/cao-bonito-sentado-com-um-lenco_23-2148423585.jpg",
        nome: "Anne",
        local: "Aparecida de Goiânia"
    }

    {/* 
            1. Quantos animais você tem em casa, 
            2. Qual o motivo da adoção?
            3. Quantas pessoas moram na casa? 
            4. Qual a moradia (casa, apartamento, chácara etc.)? 
            5. Tem criança em casa? 
            6. O animal vai ficar sozinho durante o dia? por quanto tempo?  
            7. Qual sua média salarial? */}

    return (
        <>
            <Top />
            <div className="container mt-5 mb-5 justify-content-center text-center border">
                {/* l1 */}
                <div className="row d-flex justify-content-center text-center mb-3 card-header b-color-2">
                    <strong className="f-cursive"><h2 className="fs-4 f-color-1 fw-bold ">Preencha o questionário de adoção</h2></strong>
                </div>

                {/* L2 */}
                <div className="row justify-content-center inp-border-color-3">
                    <div className="col col-sm-3" id={Styles.petdetalhes}>
                        <div className="row justify-content-center">
                            <img src={animal.imagem} className={Styles.imagem} />
                            <div className="fs-2 fw-bold descricaotexto text-xl mb-2">
                                <p><label >{animal.nome} </label> - <label className="fst-italic fs-5">{animal.local} </label></p>
                            </div>
                        </div>
                    </div>
                </div>
                <th>
                    Responda todas as questões
                </th>
                {/* L3*/}
                <div className="row border mt-4">

                    <div className="col-sm-6 just-cont-l f-color-2 border">
                        <tr className="row border">
                            <td className="col-sm-6 ">
                                <label className="formadocao "><spam>1. Quantos animais você tem em casa? </spam></label>
                            </td>
                        </tr>

                        <tr className="row border d-flex justify-content-center">
                            <td className="col-sm-6 ">
                                <input type="text" onChange={(e) => handle(e)} className="b-radius-2 input-heigth inp-w-1 inp-border-color-3" id="q1" />
                            </td>
                        </tr>
                    </div>

                    <div className="col-sm-6 col-lg-6 just-cont-r f-color-2">
                        <tr className="row border col-sm-4">
                            <td className="">
                                <label className="formadocao"><spam>2. Qual o motivo da adoção? </spam></label>
                            </td>
                        </tr>
                        <tr className="row border col-sm-8">
                            <td className="col-sm-6">
                                <input type="text" onChange={(e) => handle(e)} className="b-radius-2 input-heigth inp-w-3 inp-border-color-3" id="q2" />
                            </td>
                        </tr>

                    </div>

                    <div className="border col-sm-6 col-lg-6 just-cont-l f-color-2">

                        <label className="formadocao"><spam>3. Quantas pessoas moram na casa? </spam></label>
                        <br /><input type="text" onChange={(e) => handle(e)} className="b-radius-2 input-heigth inp-w-1 inp-border-color-3" id="q3" />

                    </div>

                    <div className="border col-sm-6 col-lg-6 just-cont-r f-color-2">

                        <label className="formadocao"><spam>4. Qual a moradia (casa, apartamento, chácara etc.)?</spam></label>
                        <br /><input type="text" onChange={(e) => handle(e)} className="b-radius-2 input-heigth inp-w-3 inp-border-color-3" id="q4" />

                    </div>


                </div>
                {/* L5 */}
                <div className="row grid"></div>

            </div>
            <Footer />
        </>
    )
}
export default Adotar;