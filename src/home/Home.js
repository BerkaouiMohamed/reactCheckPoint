import '../home/Home.css'
import logo1 from '../home/logo1.png'
function Home() {
    return (
        <div className="home">
<h1 className="titre">Salut je suis Mohamed </h1>
<p>Bienvenu! je me nomme Mohamed âgé de 29 ans j'habite à Tunis. titulaire d'un BTS en automatisme et informatique industrielle,ayons un baccalauréat en informatique .je suis développeur full stack certifié, Mordu d’informatique, j’ai appris à coder dès mon plus jeune âge dans divers langages informatiques (Javascript, PHP, AngularJS…) .Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web ; de la compréhension des besoins utilisateurs, au développement frontend et backend en passant par la maintenance..</p>
        <img className='imge' src={logo1} alt="profile "></img>
        
        </div>
    )
    }
    export default Home