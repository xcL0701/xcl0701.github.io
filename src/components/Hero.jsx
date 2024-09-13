import { styles } from '../styles';
import foto from './foto.png';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start justify-center gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className='flex flex-col items-start'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eef]'>Nicholas Abel Williem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student at BINUS UNIVERSITY 6th semester majoring in computer science.<br/> 
            I have an interest in front end developer.
          </p>
          <div className='container mx-auto flex justify-center items-center'>
            <div className='animated-box in relative'>
              <img 
                className='foto'
                src={foto} 
                alt="Nicholas Abel Williem" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
