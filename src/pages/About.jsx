import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="position-relative overflow-hidden py-5" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container position-relative">
          <div className="row min-vh-80 align-items-center py-5">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-2 fw-bold text-white mb-4">
                Sanat Galerisi
              </h1>
              <p className="lead text-white-50 mb-5">
                Dünyanın en ünlü heykelleri ve sanatçılarıyla tanışın. 
                Her bir eser, bir hikaye anlatır ve bir duyguyu yaşatır.
              </p>
              <div className="d-flex gap-3">
                <Link to="/sanatcilar" className="btn btn-primary btn-lg px-4">
                  Sanatçıları Keşfet
                </Link>
                <Link to="/iletisim" className="btn btn-outline-light btn-lg px-4">
                  İletişime Geç
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="position-relative">
                <img 
                  src="https://images.pexels.com/photos/2031775/pexels-photo-2031775.jpeg"
                  alt="Sanat Galerisi"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ 
                    filter: 'brightness(0.95) contrast(1.1)',
                    transform: 'perspective(1000px) rotateY(-5deg)'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" 
                     style={{ 
                       background: 'linear-gradient(45deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.3) 100%)',
                       backdropFilter: 'blur(5px)'
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 about-card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-bullseye fs-2 p-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Misyonumuz</h3>
                  <p className="text-muted">
                    Sanatı herkes için erişilebilir kılmak ve toplumda sanat bilincini geliştirmek. 
                    Dünya çapındaki en önemli heykel sanatçılarının eserlerini sergileyerek, 
                    sanatseverlere unutulmaz deneyimler sunmak. Her yaştan ve her kesimden 
                    insanın sanatla buluşmasını sağlamak.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 about-card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-eye fs-2 p-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Vizyonumuz</h3>
                  <p className="text-muted">
                    Dünyanın önde gelen heykel sanatı merkezlerinden biri olmak. 
                    Yeni nesil sanatçıları destekleyerek, çağdaş heykel sanatının 
                    gelişimine katkıda bulunmak. Sanat ve teknolojiyi birleştirerek, 
                    ziyaretçilere yenilikçi ve etkileyici deneyimler sunmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Değerlerimiz</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 about-card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-heart fs-2 p-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Sanata Saygı</h3>
                  <p className="text-muted">
                    Her eserin kendine özgü hikayesine ve değerine saygı duyuyoruz. 
                    Sanatçıların emeklerini ve yaratıcılıklarını takdir ediyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 about-card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-people fs-2 p-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Toplumsal Sorumluluk</h3>
                  <p className="text-muted">
                    Sanatı toplumun her kesimine ulaştırmayı hedefliyoruz. 
                    Eğitim programları ve sosyal projelerle topluma katkı sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 about-card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-lightbulb fs-2 p-3"></i>
                  </div>
                  <h3 className="fs-4 fw-bold">Yenilikçilik</h3>
                  <p className="text-muted">
                    Sanat ve teknolojiyi birleştirerek yenilikçi sergileme yöntemleri geliştiriyoruz. 
                    Ziyaretçilerimize unutulmaz deneyimler sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarihçe */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Tarihçemiz</h2>
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="position-relative">
                <img 
                  src="https://images.pexels.com/photos/15119322/pexels-photo-15119322.jpeg"
                  alt="Galeri Tarihçesi"
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ 
                    filter: 'brightness(0.95) contrast(1.1)',
                    transform: 'perspective(1000px) rotateY(5deg)'
                  }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4" 
                     style={{ 
                       background: 'linear-gradient(45deg, rgba(26,26,26,0.7) 0%, rgba(26,26,26,0.3) 100%)',
                       backdropFilter: 'blur(5px)'
                     }}>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="ps-lg-5">
                <p className="lead text-muted mb-4">
                  1995 yılında kurulan Sanat Galerisi, başlangıçta küçük bir sergi salonu olarak 
                  faaliyetlerine başladı. Zamanla büyüyerek dünyanın önde gelen heykel sanatı 
                  merkezlerinden biri haline geldi.
                </p>
                <p className="text-muted">
                  Bugüne kadar 100'den fazla uluslararası sergiye ev sahipliği yaptık ve 
                  binlerce sanatseveri ağırladık. Modern sanatın öncü isimlerinden çağdaş 
                  sanatçılara kadar geniş bir yelpazede eserleri sergiledik.
                </p>
                <p className="text-muted">
                  Galerimiz, sadece bir sergi mekanı değil, aynı zamanda bir sanat okulu 
                  ve kültür merkezi olarak da hizmet veriyor. Sanat eğitimleri, atölye 
                  çalışmaları ve kültürel etkinliklerle topluma katkı sağlamaya devam ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 