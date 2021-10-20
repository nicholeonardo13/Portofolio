import "./Hero.css";
import foto from "../../img/fotoKotak.jpg";

const Hero = (props) => {
  return (
    <div>
      <div class='jumbotron text-center'>
        <img
          src={foto}
          alt='foto-ku'
          width='200px'
          className='rounded-circle img-thumbnail'
        />
        <h1 class='display-4'>Hello, I'm Nicholas Leonardo!</h1>
        <p class='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ffffff'
            fill-opacity='1'
            d='M0,96L26.7,96C53.3,96,107,96,160,90.7C213.3,85,267,75,320,101.3C373.3,128,427,192,480,186.7C533.3,181,587,107,640,117.3C693.3,128,747,224,800,256C853.3,288,907,256,960,213.3C1013.3,171,1067,117,1120,101.3C1173.3,85,1227,107,1280,133.3C1333.3,160,1387,192,1413,208L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};
export default Hero;
