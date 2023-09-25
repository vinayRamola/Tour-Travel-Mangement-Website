import React from 'react'
import '../styles/home.css'

import { Container ,Row ,Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/images-gallery/MasonryImagesGallery';
import Testimonal from '../components/Testimonal/Testimonals';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return <>
  {/* #######################  Hero Section starts ############################ */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className='hero__subtitle d-flex align-items-center'>
                {/* <Subtitle subtitle={'Know Before You GO'} /> */}
                <h2>Know Before You Go </h2>
                <img src={worldImg} alt='World'  />
              </div>
              <h1>Travelling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>Lorem ipsum, or lipsum as ral looking  of  (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant sdto be on design, not.
              </p>
            </div>

          </Col>

          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt='' />
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box hero-video-box mt-4'>
              <video src={heroVideo} alt='' controls />
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box mt-5 '>
              <img src={heroImg02} alt='' />
            </div>
          </Col>
        
          <SearchBar />

        </Row>
      </Container>
    </section>
  {/* ####################### Hero Section ends ############################### */}

  <section>
    <Container>
      <Row>
      <Col lg='3'>
        <h5 className='services__subtitle'>What we serve</h5>
        <h2 className='services__title'>We offer our best services</h2>
      </Col>
      <ServiceList/>
      </Row>
    </Container>
  </section>

  {/* =============== Featured tour section start ============== */}

  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'} />
          <h2 className='featured__tour-title'>Our featured tours</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
  </section>

  {/* ================== featured section end ================*/}
  
  {/*=================== experience section start ==========  */}
  
  <section>
    <Container>
      <Row>
        <Col lg='6'>
            <div className='experience__content'>
              <Subtitle subtitle={'Experience'} />

              <h2>With our all experience <br /> we will serve you</h2>
              <p>
                lorem iseinf sddsn dsnf consector adpising elit.
                <br />
                loreme algun dins nxind einfnosdn eldid.
              </p>
            </div>

            <div className='counter__wrapper d-flex align-items-center gap-5'>
              <div className='counter__box'>
                <span>13k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className='counter__box'>
                <span>3k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className='counter__box'>
                <span>15+</span>
                <h6>Year experience</h6>
              </div>
            </div>
        </Col>
        <Col lg='6'>
            <div className='experience__img'>
              <img src={experienceImg} alt='expeirence_image' ></img>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/*=================== experience section end ======================= */}

  {/* ================== gallery section start ======================= */}

  <section >
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Gallery"} />
          <h2 className='gallery__title'>Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery />
        </Col>
      </Row>
    </Container>
  </section>

  {/* ================== gallery sectione ends ====================== */}

  {/* ================== testimonal section start =================== */}

  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Our Customers'} />
          <h2 className='testimonal__title'>What our customers say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonal />
        </Col>
      </Row>
    </Container>
  </section>

  {/* ================== testimonal section ends ==================== */}

  <Newsletter />

  </>
};

export default Home