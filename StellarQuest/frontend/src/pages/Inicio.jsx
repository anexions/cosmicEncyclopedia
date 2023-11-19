//Importamos react-srtict-mode
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../assets/styles.css";
import Explorador from "../assets/components/Explorador";

const Inicio = () => {
  return (
    <div className="parallax-container">
      <Parallax pages={3}>
        <ParallaxLayer offset={0.5} factor={4} speed={0.4}>
          <h1>Welcome to Stellar Quest!</h1>
        </ParallaxLayer>
        <ParallaxLayer
          className="layer02"
          offset={0.1}
          factor={4}
          speed={0.9}
        ></ParallaxLayer>
        <ParallaxLayer
          className="layer04"
          offset={0.1}
          factor={4}
          speed={0.6}
        ></ParallaxLayer>
        <ParallaxLayer
          className="layer03"
          offset={0.3}
          factor={4}
          speed={1.9}
        ></ParallaxLayer>
        <ParallaxLayer className="layer02" offset={1} speed={0.6}>
          <h2>The junior enciclopedie for kids!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          className="planet01"
          offset={0.8}
          factor={4}
          speed={1}
        ></ParallaxLayer>
        <ParallaxLayer
          className="planet03"
          offset={1.2}
          factor={4}
          speed={0.4}
        ></ParallaxLayer>
        <ParallaxLayer
          className="layer02"
          offset={0.1}
          factor={4}
          speed={0.9}
        ></ParallaxLayer>
        <ParallaxLayer
          className="layer02"
          offset={2}
          factor={3}
          speed={0.9}
        ></ParallaxLayer>
        <ParallaxLayer
          className="planet02"
          offset={2}
          factor={3}
          speed={0.8}
        ></ParallaxLayer>
        <ParallaxLayer
          className="layer03"
          offset={1.5}
          factor={4}
          speed={1.9}
        ></ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.7}>
          <h1>Let´s go...</h1>
          <h2>And discover the universe!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          className="layer02"
          offset={1.5}
          factor={4}
          speed={1.5}
        ></ParallaxLayer>
        <ParallaxLayer className="layer04" offset={2} factor={4} speed={1.5}>
          <div className="container-tittle">
            <h1>Stellar Quest V.1</h1>
          </div>
          <div className="container-text">
        <Explorador />
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Inicio;
