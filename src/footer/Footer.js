import fbb from'./fbb.png'
import ins from'./in.png'
import './footer.css'

export default function Appp() {
  return (
    <>
    <div className="foot">
    <h2> Merci pour votre visite</h2>
    <h3>contact: </h3>

    <div className='contact'>
  
  <img className='img' src={fbb} alt="profile "></img>
  <img className='img' src={ins} alt="profile "></img>
 </div>
 </div>
 </>
  );
}
