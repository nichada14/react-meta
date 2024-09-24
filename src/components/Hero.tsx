import { BiPlayCircle } from 'react-icons/bi';
import HeroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <>
        <div className="py-12 overflow-hidden duration-300 sm:py-0 dark:bg-black dark:text-white">
            <div className="container min-h-[700px] flex relative">
                <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 place-items-center">
                    {/* text section */}
                    <div className="relative z-30 order-2 space-y-5 lg:pr-20 sm:order-1">
                        <h1 data-aos="fade-up" className="text-4xl font-semibold">
                            GET READY TO ENJOY VR <br /> 
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
                                GAME WITH OUR PLATFORM
                            </span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias commodi praesentium harum!
                        </p>
                        {/* button section */}
                        <div className='flex gap-6'>
                            <button 
                                data-aos="fade-up" 
                                data-aos-delay="500" 
                                className="primary-btn"
                            >
                                Get Started
                            </button>
                            <button 
                                data-aos="fade-up" 
                                data-aos-delay="700" 
                                className='flex items-center gap-2'
                            >
                                <BiPlayCircle className='text-3xl' />
                                See Demo
                            </button>
                        </div>
                    </div>
                    {/* image section */}
                    <div 
                        data-aos="fade-up" 
                        data-aos-offset="0" 
                        className="order-1 sm:order-2"
                    >
                        <img 
                            src={HeroImg} 
                            alt=""  
                            className=''
                        />
                    </div>
                </div>
                <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero