
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function PetProjectModal({ isOpened, openModal }) {
  const images = [{src: '../media/img/todo1.jpg', alt: 'Main Page'},
                    {src: '../media/img/todo2.jpg', alt: 'Sign In'},
                    {src: '../media/img/todo3.jpg', alt: 'Add Card'},
                    {src: '../media/img/todo4.jpg', alt: 'Edit Card'},
                 ];

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        openModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`pet-project-modal ${isOpened ? 'active' : ''}`}>
        <div className={`pet-project-modal_container ${isOpened ? 'active' : ''}`}>
            <Swiper
                modules={[Keyboard, Mousewheel, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: "swiper-button-disabled"
                  }}
                pagination={{ clickable: true }}
                keyboard={{enabled: true}}
                mousewhee={{enabled: true}}
                style={{"--swiper-pagination-color": "rgb(137, 0, 142)"}}
            >
                {
                    images.map((img, idx) => {
                        return (
                            <SwiperSlide><img src={img.src} width={'100%'} alt={img.alt} ></img></SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div>
                <div className="swiper-button-prev" style={{color:'#fff', height: '50%', width: '100px', top: '27%'}}></div>
            </div>
            
            <div className="swiper-button-next" style={{color:'#fff', height: '50%', width: '100px', top: '27%'}}></div>
        </div>
    </div>
  )
}
