
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import { IoClose } from "react-icons/io5";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function PetProjectModal({ isOpened, openModal, petProjects, projectIdx }) {
  const modalRef = React.useRef(null);

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

  const handleModalClick = (event) => {
    if(event.target === modalRef.current){
      openModal(false);
    }
  }

  return (
    <div className={`pet-project-modal ${isOpened ? 'active' : ''}`} ref={modalRef} onClick={(e) => handleModalClick(e)} >
        <div className={`pet-project-modal_container ${isOpened ? 'active' : ''}`}>
          <IoClose className='modal_container_close-btn-icon' onClick={() => openModal(false)} />
          <Swiper
              modules={[Keyboard, Mousewheel, Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
                }}
              pagination={{ clickable: true }}
              keyboard={{enabled: true}}
              mousewheel={{enabled: true}}
              style={{"--swiper-pagination-color": "rgb(137, 0, 142)"}}
          >
              {
                  petProjects[projectIdx].images.map((img, idx) => {
                      return (
                          <SwiperSlide key={idx} ><img src={img.src} width={'100%'} alt={img.alt} ></img></SwiperSlide>
                      )
                  })
              }
          </Swiper>
          <GrPrevious className="swiper-button-prev" />        
          <GrNext className="swiper-button-next" />
      </div>
    </div>
  )
}
