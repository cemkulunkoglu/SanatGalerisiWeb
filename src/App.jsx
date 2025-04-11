import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Artists from './pages/Artists'
import About from './pages/About'
import Error from './pages/Error'
import Layout from './components/Layout'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      image: "https://images.pexels.com/photos/15119322/pexels-photo-15119322.jpeg",
      title: "Pietà",
      artist: "Michelangelo",
      description: "1498-1499 yılları arasında yapılan bu mermer heykel, Rönesans döneminin en önemli eserlerinden biridir."
    },
    {
      image: "https://images.pexels.com/photos/11130610/pexels-photo-11130610.jpeg",
      title: "Milo Venüsü",
      artist: "Alexandros of Antioch",
      description: "M.Ö. 130-100 yılları arasında yapılan bu mermer heykel, Helenistik dönemin en ünlü eserlerindendir."
    },
    {
      image: "https://images.pexels.com/photos/20423091/pexels-photo-20423091/free-photo-of-siyah-ve-beyaz-kent-sehir-sanat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Davut Heykeli",
      artist: "Michelangelo",
      description: "1501-1504 yılları arasında yapılan bu mermer heykel, Rönesans döneminin en ünlü eserlerinden biridir."
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselItems.length])

  return (
    <Router>
      <Layout>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <section className="position-relative overflow-hidden py-5" style={{ backgroundColor: '#1a1a1a' }}>
                  {/* Background Carousel */}
                  <div className="position-absolute top-0 start-0 w-100 h-100">
                    <div className="carousel-container h-100">
                      {carouselItems.map((item, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(0.4)',
                            borderRadius: '0'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="container position-relative">
                    <div className="row align-items-center py-5">
                      <div className="col-lg-6" data-aos="fade-right">
                        <h1 className="display-2 fw-bold text-white mb-4 hero-title">
                          Sanatın Zamansız Yolculuğu
                        </h1>
                        <p className="lead text-white-50 mb-5">
                          Eşsiz Heykellerle Tarihe Dokunun
                        </p>
                        <div className="d-flex gap-3">
                          <Link to="/sanatcilar" className="btn btn-primary btn-lg px-4">
                            Sanatçıları Keşfet
                          </Link>
                          <Link to="/hakkimizda" className="btn btn-outline-light btn-lg px-4">
                            Daha Fazla Bilgi
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Öne Çıkan Eserler */}
                <section className="featured-works py-5" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="container">
                    <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Öne Çıkan Eserler</h2>
                    <div className="row g-4">
                      {carouselItems.map((item, index) => (
                        <div key={index} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                          <div className="featured-work-item">
                            <div className="work-image-container">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="work-image"
                              />
                              <div className="work-overlay">
                                <div className="work-content">
                                  <h3 className="work-title">{item.title}</h3>
                                  <p className="work-artist">{item.artist}</p>
                                  <p className="work-description">{item.description}</p>
                                  <Link to="/sanatcilar" className="btn btn-outline-light mt-3">
                                    Detayları Gör
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Öne Çıkan Bölüm */}
                <section className="py-5">
                  <div className="container">
                    <div className="row g-4">
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-4">
                            <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                              <i className="bi bi-bank2 fs-2 p-3"></i>
                            </div>
                            <h3 className="fs-4 fw-bold">Klasik Dönem</h3>
                            <p className="text-muted">Antik Yunan ve Roma döneminin muhteşem eserlerini keşfedin.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-4">
                            <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                              <i className="bi bi-easel2 fs-2 p-3"></i>
                            </div>
                            <h3 className="fs-4 fw-bold">Rönesans</h3>
                            <p className="text-muted">Sanatın yeniden doğuşunu ve ustalarını tanıyın.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="card border-0 shadow-sm h-100">
                          <div className="card-body p-4">
                            <div className="feature-icon bg-primary bg-gradient text-white rounded-3 mb-3">
                              <i className="bi bi-pentagon-half fs-2 p-3"></i>
                            </div>
                            <h3 className="fs-4 fw-bold">Modern Sanat</h3>
                            <p className="text-muted">Çağdaş sanatçıların yenilikçi eserlerini inceleyin.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Sanatçılar Bölümü */}
                <section className="py-5 bg-light">
                  <div className="container">
                    <h2 className="text-center mb-5 fw-bold" data-aos="fade-up">Ünlü Sanatçılar</h2>
                    <div className="row g-4">
                      <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="card border-0 shadow-sm h-100">
                          <img
                            src="https://images.pexels.com/photos/15119322/pexels-photo-15119322.jpeg"
                            className="card-img-top"
                            alt="Michelangelo"
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                          <div className="card-body p-4">
                            <h3 className="fs-5 fw-bold">Michelangelo</h3>
                            <p className="text-muted">Rönesans döneminin en büyük heykeltıraşlarından biri.</p>
                            <Link to="/sanatcilar" className="btn btn-primary btn-sm">
                              Eserleri Gör
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="card border-0 shadow-sm h-100">
                          <img
                            src="https://images.pexels.com/photos/11130610/pexels-photo-11130610.jpeg"
                            className="card-img-top"
                            alt="Auguste Rodin"
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                          <div className="card-body p-4">
                            <h3 className="fs-5 fw-bold">Auguste Rodin</h3>
                            <p className="text-muted">Modern heykel sanatının öncülerinden.</p>
                            <Link to="/sanatcilar" className="btn btn-primary btn-sm">
                              Eserleri Gör
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                        <div className="card border-0 shadow-sm h-100">
                          <img
                            src="https://images.unsplash.com/photo-1561642769-1bca263542e0"
                            className="card-img-top"
                            alt="Donatello"
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                          <div className="card-body p-4">
                            <h3 className="fs-5 fw-bold">Donatello</h3>
                            <p className="text-muted">Erken Rönesans döneminin önemli heykeltıraşı.</p>
                            <Link to="/sanatcilar" className="btn btn-primary btn-sm">
                              Eserleri Gör
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                        <div className="card border-0 shadow-sm h-100">
                          <img
                            src="https://images.pexels.com/photos/2031775/pexels-photo-2031775.jpeg"
                            className="card-img-top"
                            alt="Bernini"
                            style={{ height: "300px", objectFit: "cover" }}
                          />
                          <div className="card-body p-4">
                            <h3 className="fs-5 fw-bold">Bernini</h3>
                            <p className="text-muted">Barok döneminin en önemli heykeltıraşı.</p>
                            <Link to="/sanatcilar" className="btn btn-primary btn-sm">
                              Eserleri Gör
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* İstatistikler */}
                <section className="statistics py-5" style={{ background: 'linear-gradient(45deg, #1a1a1a, #2c2c2c)' }}>
                  <div className="container">
                    <div className="row g-4 text-center">
                      <div className="col-md-3">
                        <div className="stat-item" data-aos="fade-up">
                          <h2 className="stat-number">100+</h2>
                          <p className="stat-label">Sanatçı</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
                          <h2 className="stat-number">500+</h2>
                          <p className="stat-label">Eser</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                          <h2 className="stat-number">1000+</h2>
                          <p className="stat-label">Ziyaretçi</p>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                          <h2 className="stat-number">50+</h2>
                          <p className="stat-label">Sergi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Neden Bizi Seçmelisiniz */}
                <section className="why-us py-5">
                  <div className="container">
                    <h2 className="text-center mb-5" data-aos="fade-up">Neden Bizi Seçmelisiniz?</h2>
                    <div className="row g-4">
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="why-us-item text-center p-4">
                          <div className="why-us-icon mb-4">
                            <i className="bi bi-award fs-1 text-primary"></i>
                          </div>
                          <h3 className="h4 mb-3">Uzman Küratörler</h3>
                          <p className="text-muted mb-0">Alanında uzman küratörlerimiz, en değerli eserleri sizin için özenle seçiyor ve sergiliyor.</p>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="why-us-item text-center p-4">
                          <div className="why-us-icon mb-4">
                            <i className="bi bi-gem fs-1 text-primary"></i>
                          </div>
                          <h3 className="h4 mb-3">Özel Koleksiyonlar</h3>
                          <p className="text-muted mb-0">Dünya çapında tanınmış sanatçıların özel koleksiyonlarına ev sahipliği yapıyoruz.</p>
                        </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="why-us-item text-center p-4">
                          <div className="why-us-icon mb-4">
                            <i className="bi bi-calendar-event fs-1 text-primary"></i>
                          </div>
                          <h3 className="h4 mb-3">Düzenli Etkinlikler</h3>
                          <p className="text-muted mb-0">Her ay düzenlediğimiz özel etkinliklerle sanat dünyasını ayağınıza getiriyoruz.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/sanatcilar" element={<Artists />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Error />} />
            <Route path="/iletisim" element={
              <div className="contact-page">
                <div className="container py-5">
                  <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary mb-3">İletişim</h1>
                    <p className="lead text-muted">Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.</p>
                  </div>

                  <div className="row g-4">
                    {/* İletişim Formu */}
                    <div className="col-lg-6">
                      <div className="contact-form-card p-4">
                        <h2 className="h4 mb-4">Bize Ulaşın</h2>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Adınız Soyadınız</label>
                            <input type="text" className="form-control" id="name" placeholder="Adınız Soyadınız" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-posta Adresiniz</label>
                            <input type="email" className="form-control" id="email" placeholder="ornek@email.com" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Konu</label>
                            <input type="text" className="form-control" id="subject" placeholder="Konu" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">Mesajınız</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Mesajınızı buraya yazın..."></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary w-100">Gönder</button>
                        </form>
                      </div>
                    </div>

                    {/* İletişim Bilgileri */}
                    <div className="col-lg-6">
                      <div className="contact-info-card p-4">
                        <h2 className="h4 mb-4">İletişim Bilgileri</h2>
                        <div className="contact-info-item mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-geo-alt-fill text-primary me-3 fs-4"></i>
                            <div>
                              <h3 className="h6 mb-1">Adres</h3>
                              <p className="mb-0">Sanat Sokak No:123, Galeri Mahallesi, İstanbul</p>
                            </div>
                          </div>
                        </div>
                        <div className="contact-info-item mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-telephone-fill text-primary me-3 fs-4"></i>
                            <div>
                              <h3 className="h6 mb-1">Telefon</h3>
                              <p className="mb-0">+90 (212) 123 45 67</p>
                            </div>
                          </div>
                        </div>
                        <div className="contact-info-item mb-4">
                          <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-envelope-fill text-primary me-3 fs-4"></i>
                            <div>
                              <h3 className="h6 mb-1">E-posta</h3>
                              <p className="mb-0">info@sanatgalerisi.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="contact-info-item">
                          <div className="d-flex align-items-center mb-3">
                            <i className="bi bi-clock-fill text-primary me-3 fs-4"></i>
                            <div>
                              <h3 className="h6 mb-1">Çalışma Saatleri</h3>
                              <p className="mb-0">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                              <p className="mb-0">Pazar: Kapalı</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Harita */}
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="map-card p-4">
                        <h2 className="h4 mb-4">Konum</h2>
                        <div className="ratio ratio-16x9">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.96336983393!2d28.978358315414!3d41.037004979298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1645521234567!5m2!1str!2str"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </Layout>
    </Router>
  )
}

export default App