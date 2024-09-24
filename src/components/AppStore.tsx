import AppStoreImg from '../assets/app_store.png';
import PlayStoreImg from '../assets/play_store.png';

const AppStore = () => {
  return (
    <>
        <div className="container py-10 sm:min-h-[400px] sm:grid sm:place-items-center">
            <div className="max-w-xl mx-auto space-y-6">
                <h1 data-aos="fade-up" className='text-2xl font-semibold text-center sm:text-4xl'>
                    Get Started with our app
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className='text-center sm:px-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita excepturi eligendi impedit alias.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="#" data-aos="fade-up" data-aos-delay="500">
                        <img 
                            src={AppStoreImg} 
                            alt="" 
                            className='max-w-[150px] sm:max-w-[200px] md:max-w-[200px]' 
                        />
                    </a>
                    <a href="#" data-aos="fade-up" data-aos-delay="700">
                        <img 
                            src={PlayStoreImg} 
                            alt="" 
                            className='max-w-[150px] sm:max-w-[200px] md:max-w-[200px]'
                        />
                    </a>
                </div>
            </div>
        </div> 
    </>
  )
}

export default AppStore