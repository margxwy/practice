import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Заміни на свої правильні шляхи
import yumboxBg from '../assets/yumbox-bg.svg';
import foodBox from '../assets/foodBox.svg'; 
import badgeIcon from '../assets/badgeIcon.svg'; 

function HeroSlider() {
  // 1. Створюємо "рефи" (посилання) для наших кнопок навігації
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="hero-section">
      
      {/* 2. Виносимо кнопки ЗА межі Swiper, щоб вони не ламали його роботу.
             Прив'язуємо створені рефи через атрибут ref={...} */}
      <button ref={prevRef} className="arrow-btn hero-prev">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="35" width="34" height="34" rx="17" transform="rotate(-180 35 35)" stroke="white" strokeWidth="2"/>
          <path d="M23.8328 16.4166L14.9742 16.4166L18.8258 12.8554C19.0455 12.6516 19.169 12.3751 19.169 12.0869C19.169 11.7986 19.0455 11.5222 18.8258 11.3183C18.606 11.1145 18.3079 11 17.9971 11C17.6863 11 17.3882 11.1145 17.1684 11.3183L11.3327 16.7305C11.2264 16.8335 11.1431 16.9549 11.0876 17.0877C10.9708 17.3513 10.9708 17.6469 11.0876 17.9104C11.1431 18.0433 11.2264 18.1647 11.3327 18.2676L17.1684 23.6798C17.2769 23.7813 17.406 23.8618 17.5482 23.9168C17.6905 23.9717 17.843 24 17.9971 24C18.1512 24 18.3037 23.9717 18.4459 23.9168C18.5882 23.8618 18.7173 23.7813 18.8258 23.6798C18.9352 23.5792 19.022 23.4595 19.0812 23.3276C19.1405 23.1957 19.171 23.0542 19.171 22.9113C19.171 22.7684 19.1405 22.6269 19.0812 22.495C19.022 22.3631 18.9352 22.2434 18.8258 22.1428L14.9742 18.5815L23.8328 18.5815C24.1424 18.5815 24.4393 18.4675 24.6582 18.2645C24.877 18.0615 25 17.7862 25 17.4991C25 17.212 24.877 16.9367 24.6582 16.7337C24.4393 16.5307 24.1424 16.4166 23.8328 16.4166Z" fill="white"/>
        </svg>
      </button>
      
      <button ref={nextRef} className="arrow-btn hero-next">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
          <rect x="35" y="35" width="34" height="34" rx="17" transform="rotate(-180 35 35)" stroke="white" strokeWidth="2"/>
          <path d="M23.8328 16.4166L14.9742 16.4166L18.8258 12.8554C19.0455 12.6516 19.169 12.3751 19.169 12.0869C19.169 11.7986 19.0455 11.5222 18.8258 11.3183C18.606 11.1145 18.3079 11 17.9971 11C17.6863 11 17.3882 11.1145 17.1684 11.3183L11.3327 16.7305C11.2264 16.8335 11.1431 16.9549 11.0876 17.0877C10.9708 17.3513 10.9708 17.6469 11.0876 17.9104C11.1431 18.0433 11.2264 18.1647 11.3327 18.2676L17.1684 23.6798C17.2769 23.7813 17.406 23.8618 17.5482 23.9168C17.6905 23.9717 17.843 24 17.9971 24C18.1512 24 18.3037 23.9717 18.4459 23.9168C18.5882 23.8618 18.7173 23.7813 18.8258 23.6798C18.9352 23.5792 19.022 23.4595 19.0812 23.3276C19.1405 23.1957 19.171 23.0542 19.171 22.9113C19.171 22.7684 19.1405 22.6269 19.0812 22.495C19.022 22.3631 18.9352 22.2434 18.8258 22.1428L14.9742 18.5815L23.8328 18.5815C24.1424 18.5815 24.4393 18.4675 24.6582 18.2645C24.877 18.0615 25 17.7862 25 17.4991C25 17.212 24.877 16.9367 24.6582 16.7337C24.4393 16.5307 24.1424 16.4166 23.8328 16.4166Z" fill="white"/>
        </svg>
      </button>

      {/* 3. Сам слайдер */}
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="hero-swiper"
        // 4. Передаємо нашому Swiper посилання на створені кнопки
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {/* СЛАЙД 1 */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={yumboxBg} alt="YUMBOX background" className="yumbox-vector-bg" />
            {/* Mobile-only simplified YUMBOX SVG (shown on small screens) */}
            <svg className="mobile-yumbox-svg" width="187" height="227" viewBox="0 0 187 227" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.3715 58.5116L0 0H17.0411L27.9648 37.4067H28.2561L39.1799 0H54.7645L35.393 58.5116V101.886H19.3715V58.5116Z" fill="currentColor"/>
  <path d="M85.2861 103.341C77.5181 103.341 71.595 101.158 67.5168 96.7916C63.4386 92.328 61.3995 85.9723 61.3995 77.7244V0H77.421V78.8888C77.421 82.382 78.1007 84.9049 79.4601 86.4575C80.9166 88.01 82.9557 88.7863 85.5774 88.7863C88.1991 88.7863 90.1897 88.01 91.5491 86.4575C93.0056 84.9049 93.7338 82.382 93.7338 78.8888V0H109.173V77.7244C109.173 85.9723 107.134 92.328 103.055 96.7916C98.9772 101.158 93.0541 103.341 85.2861 103.341Z" fill="currentColor"/>
  <path d="M120.584 0H143.451L153.646 72.9212H153.937L164.133 0H187V101.886H171.852V24.7437H171.561L159.909 101.886H146.509L134.857 24.7437H134.566V101.886H120.584V0Z" fill="currentColor"/>
  <path d="M17.3715 122.937H41.5494C49.8029 122.937 55.8231 124.878 59.61 128.759C63.3969 132.544 65.2904 138.414 65.2904 146.371V150.446C65.2904 155.686 64.4165 159.956 62.6687 163.255C61.018 166.554 58.4448 168.931 54.9492 170.387V170.678C62.9114 173.395 66.8925 180.478 66.8925 191.928V200.662C66.8925 208.521 64.8049 214.537 60.6296 218.71C56.5514 222.785 50.5312 224.823 42.5689 224.823H17.3715V122.937ZM39.656 164.419C42.8603 164.419 45.2392 163.594 46.7928 161.945C48.4435 160.295 49.2689 157.53 49.2689 153.648V147.972C49.2689 144.285 48.5892 141.616 47.2298 139.967C45.9675 138.317 43.9283 137.492 41.1124 137.492H33.393V164.419H39.656ZM42.5689 210.268C45.3848 210.268 47.4725 209.54 48.8319 208.085C50.1913 206.532 50.871 203.912 50.871 200.225V191.346C50.871 186.689 50.0457 183.486 48.395 181.74C46.8414 179.896 44.2196 178.974 40.5298 178.974H33.393V210.268H42.5689Z" fill="currentColor"/>
  <path d="M99.4157 226.279C91.5506 226.279 85.5304 224.047 81.3551 219.583C77.1798 215.12 75.0922 208.812 75.0922 200.662V147.099C75.0922 138.948 77.1798 132.641 81.3551 128.177C85.5304 123.713 91.5506 121.482 99.4157 121.482C107.281 121.482 113.301 123.713 117.476 128.177C121.652 132.641 123.739 138.948 123.739 147.099V200.662C123.739 208.812 121.652 215.12 117.476 219.583C113.301 224.047 107.281 226.279 99.4157 226.279ZM99.4157 211.723C104.95 211.723 107.718 208.376 107.718 201.68V146.08C107.718 139.384 104.95 136.037 99.4157 136.037C93.881 136.037 91.1137 139.384 91.1137 146.08V201.68C91.1137 208.376 93.881 211.723 99.4157 211.723Z" fill="currentColor"/>
  <path d="M146.427 172.716L128.803 122.937H145.698L156.477 155.832H156.768L167.837 122.937H182.985L165.361 172.716L183.859 224.823H166.963L155.311 189.309H155.02L143.077 224.823H127.929L146.427 172.716Z" fill="currentColor"/>
</svg>
            <img src={foodBox} alt="Сет 21" className="hero-food-image" />
            
            <div className="hero-badge-wrapper">
              <img src={badgeIcon} alt="Найсмачніші бокси" className="hero-badge-img" />
            </div>

            <div className="hero-info-bottom">
              <span className="hero-product-title">СЕТ 21</span>
              <button className="hero-price-btn">934 ГРН</button>
            </div>
          </div>
        </SwiperSlide>

        {/* СЛАЙД 2 (Щоб Swiper розумів, що є куди гортати) */}
        <SwiperSlide>
          <div className="slide-content">
            <img src={yumboxBg} alt="YUMBOX background" className="yumbox-vector-bg" />
            <img src={foodBox} alt="Сет 22" className="hero-food-image" />
            
            <div className="hero-badge-wrapper">
              <img src={badgeIcon} alt="Найсмачніші бокси" className="hero-badge-img" />
            </div>

            <div className="hero-info-bottom">
              <span className="hero-product-title">СЕТ 22</span>
              <button className="hero-price-btn">1050 ГРН</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HeroSlider;