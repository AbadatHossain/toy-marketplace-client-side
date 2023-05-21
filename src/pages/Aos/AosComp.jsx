import 'aos';
import "aos/dist/aos.css"
import AOS from "aos";
import { useEffect } from 'react';

 const AosComp = ()=> {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

;

  return (
    <div className='text-pink-500 border-2 text-center' data-aos="fade-up">Subscribes Please!</div>
  );
}
export default AosComp;