import React from "react";
import Header from "../components/header";
import FeedbackComponente from "../components/Feedback";
import Footer from "../components/footer";

export default function Feedback() {
  return (
    <>
      <Header />
      <div className="panel-card-feedback">
        <FeedbackComponente
          name="Autor: Pedro"
          title="Essa gincana foi muito boa para o meu desenvolvimento como cientista de dados. Gostei demais do desafios, descobri muita coisa nova e vivenciei novas experiências."
          resul="Paz"
          img="https://images.emojiterra.com/google/android-nougat/512px/1f44f.png"
        />
        <FeedbackComponente
          name="Autor: Pablo"
          title="Foi muito legal participar dessa gincana, sinto que poderíamos ser melhores, porém sou agradecido pela oportunidade que nos foi dada, participaria novamente com certeza."
          resul="Contente"
          img="https://cdn-icons-png.flaticon.com/128/4160/4160731.png"
        />
        <FeedbackComponente
          name="Autor: Daniel"
          title="Foi uma experiência nova e bem diferente. Descobri assuntos de uma forma que me chama-se atenção, e fizesse com eu buscasse respostas por conta própria. Fiz minha parte e mesmo se não ganhar, não me arrependo de ter participado. Espero que gostem de nosso projeto, e espero que ano que vem tenha outro desafio."
          resul="Animado"
          img="https://images.emojiterra.com/google/android-pie/512px/1f60e.png"
        />
        <FeedbackComponente
          name="Autor: Hiuri"
          title="Foi uma experiência muito legal da qual nunca havia participado, não dei o máximo de mim, podia ter me dedicado um pouco mais. Se ano que vem houver outro desafio com certeza vou participar. Obrigado e espero que gostem do nosso trabalho."
          resul="Feliz"
          img="https://images.emojiterra.com/google/android-oreo/512px/1f929.png"
        />
        <Footer />
      </div>
    </>
  );
}
