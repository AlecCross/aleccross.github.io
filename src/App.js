import projectList from "./data/projectList";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination'
import 'swiper/components/scrollbar'
import styles from './css/fonts.module.css'

function App() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel, Keyboard])
    return <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>alec_cross.github.io</h1>
        <Swiper
            autoplay={
                { delay: 7000 }
            }
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            mousewheel={{ forceToAxis: true }}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: false }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            speed={600}
        >
            <div slot="container-start" className="parallax-bg"
                style={{ backgroundImage: `url(${'/Placeholder.jpg'})` }}
                data-swiper-parallax="-23%"></div>
            {projectList.map(
                project => <SwiperSlide key={project.image}>
                    <a style={{ textDecoration: "none" }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div style={{ border: "1px dashed gray", paddingBottom: 30, display: "flex", justifyContent: "space-around", alignItems: "stretch" }} data-swiper-parallax="-200">
                            <img src={project.image} alt={project.title} />
                            <div style={{ display: "column", justifyContent: "space-between" }}>
                                <h2 className={styles.amazone}>{project.title}</h2>
                                <h3>{project.description}</h3>
                                <h3></h3>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}

export default App
