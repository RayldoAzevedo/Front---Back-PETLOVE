import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"

function showPet() {

    return (
        <>
            <TopLogin/>
            <div className="container mt-3 mb-2">
                {/* linha 1 */}
                <div className="row mb-4">
                    {/* coluna 1*/}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://image.freepik.com/fotos-gratis/cachorrinho-fofo-com-fantasia_23-2148423712.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Anne</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Aparecida
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 2 */}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato-pets.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Thor</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Goiânia
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 3 */}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://image.freepik.com/fotos-gratis/cao-pequeno-bonito-com-espaco-de-copia_23-2148423607.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'>
                            <label>Billy</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Trindade
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 4*/}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://image.freepik.com/fotos-gratis/pe-de-cachorro-pequeno-bonito_23-2148423619.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Meggie</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Goiânia
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* linha 2 */}
                <div className="row">
                    {/* coluna 1*/}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://image.freepik.com/fotos-gratis/pe-bonito-cao-lateral_23-2148423605.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Valentina</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Inhumas
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 2 */}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://image.freepik.com/fotos-gratis/cao-bonito-sentado-com-um-lenco_23-2148423585.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Stark</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Trindade
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 3 */}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Deepie</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Goiânia
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* coluna 4*/}
                    <div className="col-sm-4 col-lg-3">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gatos.jpg" className="w-100 " alt="" />
                        <div className="px-6 py-4">
                            <div className='fs-3 fw-bold text-info text-xl mb-2'> 
                            <label>Flay</label>
                            </div>
                            {/* localidade*/}
                            <ul>
                                <li>
                                    <strong>Local: </strong>
                                    Goiânia
                                </li>
                            </ul>
                            {/* botoes */}
                            <div className="row">
                                <div className="col-sm-1 col-lg-6">
                                    <button className={Styles.btn} >Saiba mais</button>
                                </div>
                                <div className="col-sm-1 col-lg-6">
                                <button className={Styles.btn} >Adotar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default showPet