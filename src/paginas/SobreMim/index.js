import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.jpg";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Eu sou Jennifer, graduanda em Engenharia de Computação e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou em 2022 quando ingressei na faculdade. 
            </p>
            <p className={styles.paragrafo}>
                Antes de começar a graduação, não conhecia nada sobre a área, caí de paraquedas e foi a melhor queda que já me aconteceu.
            </p>
            <p className={styles.paragrafo}>
                Depois de me formar como Técnica em Edificações no Instituto Federal de Pernambuco (IFPE), meu plano era cursar arquitetura, contudo, acabei optando por cursar Engenharia de Computação no Instituto Federal da Paraíba (IFPB) e que bom que mudei de ideia, pois na área da tecnologia foi onde realmente me encontrei. 
            </p>
            <p className={styles.paragrafo}>
                Em junho de 2022 comecei a me interessar pelo desenvolvimento web e, desde então, tem sido meu foco principal, além da faculdade.
            </p>
            <p className={styles.paragrafo}>
                Apesar de ainda ser iniciante no Front-end, espero que meus poucos conhecimentos compartilhados lhe sejam úteis de alguma forma.
            </p>
            <p className={styles.paragrafo}>
                Então, obrigada por estar aqui e vamos juntos em busca da evolução!
            </p>
            <p className={styles.paragrafo}>
                <hr/>Todos os conteúdos apresentados foram retirados do curso <br/> "React: desenvolvendo em React Router com JavaScript" da <a href="https://alura.com.br">Alura</a>.<hr/>
            </p>
        </PostModelo>
    )
}