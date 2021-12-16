import Styles from "../styles/User.module.css";
import React from "react";
import { useState } from "react";
import TopLogin from "../components/TopLogin";
import Footer from "../components/Footer";
import axios from "axios";

function FormPet() {
    var status = false
    const url = "http://localhost:8080/animais";

    const [data, setData] = useState({
        nome: "",
        idade: "",
        tempo: "",
        raca: "",
        caracteristicas: "",
        especie: "",
        sexo: "",
        tamanho: "",
        comportamento: "",
        imagem: "",
        emailUser: "",
    });

    function submit(e) {
        e.preventDefault();

        axios
            .post(url, {
                nome: data.nome,
                idade: data.idade,
                tempo: data.tempo,
                raca: data.raca,
                caracteristicas: data.caracteristicas,
                especie: data.especie,
                sexo: data.sexo,
                tamanho: data.tamanho,
                comportamento: data.comportamento,
                imagem: data.imagem,
                emailUser: global.localStorage.getItem("email"),
            })
            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    window.location.href = "http://localhost:3000/inicio";
                } else {
                    alert("Erro ao cadastrar Pet");
                }
            });
    }

    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setData((old) => ({ ...old, imagem: reader.result }));
        };
    };

    return (
        <div>
            <TopLogin />
                {
                    
                }

            <Footer />
        </div>
    );
}
export default FormPet;
