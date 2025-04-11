import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Hızlı Bağlantılar */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Hızlı Bağlantılar</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-link">Ana Sayfa</Link>
              </li>
              <li className="mb-2">
                <Link to="/hakkimizda" className="text-white-50 text-decoration-none hover-link">Hakkımızda</Link>
              </li>
              <li className="mb-2">
                <Link to="/sanatcilar" className="text-white-50 text-decoration-none hover-link">Sanatçılar</Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-white-50 text-decoration-none hover-link">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">İletişim</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-geo-alt-fill me-3"></i>
                <span className="text-white-50">Sanat Sokak No:123, Galeri Mahallesi, İstanbul</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-telephone-fill me-3"></i>
                <span className="text-white-50">+90 (212) 123 45 67</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-envelope-fill me-3"></i>
                <span className="text-white-50">info@sanatgalerisi.com</span>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Çalışma Saatleri</h5>
            <ul className="list-unstyled working-hours">
              <li className="mb-2 d-flex justify-content-between">
                <span className="text-white-50">Pazartesi - Cuma</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="mb-2 d-flex justify-content-between">
                <span className="text-white-50">Cumartesi</span>
                <span className="text-white">10:00 - 16:00</span>
              </li>
              <li className="d-flex justify-content-between">
                <span className="text-white-50">Pazar</span>
                <span className="text-white">Kapalı</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Bizi Takip Edin</h5>
            <div className="social-links">
              <a href="#" className="social-icon me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-icon me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Alt Footer */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="border-top border-secondary pt-4">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  <p className="mb-0 text-white-50">&copy; 2024 Sanat Galerisi. Tüm hakları saklıdır.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <Link to="/gizlilik" className="text-white-50 text-decoration-none me-3 hover-link">Gizlilik Politikası</Link>
                  <Link to="/kullanim" className="text-white-50 text-decoration-none hover-link">Kullanım Koşulları</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 