import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  return (
    <header className="bg-dark text-white shadow position-relative overflow-hidden">
      {/* Arka plan deseni */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" 
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             backgroundRepeat: 'repeat'
           }}>
      </div>

      <div className="container position-relative py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <Link to="/" className="text-decoration-none">
              <h1 className="display-4 fw-bold mb-1">
                <span className="text-info">Sanat</span> Galerisi
              </h1>
              <p className="lead mb-0 text-white-50">
                Dünyanın en ünlü heykelleri
              </p>
            </Link>
          </div>
          <div className="col-md-6">
            <nav className="navbar navbar-expand-md navbar-dark">
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link 
                      className={`nav-link position-relative px-3 ${location.pathname === '/' ? 'active' : ''}`} 
                      to="/"
                    >
                      Ana Sayfa
                      <span className={`position-absolute bottom-0 start-50 translate-middle-x h-1 bg-info transition-all ${location.pathname === '/' ? 'w-100' : 'w-0'}`}></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link position-relative px-3 ${location.pathname === '/hakkimizda' ? 'active' : ''}`} 
                      to="/hakkimizda"
                    >
                      Hakkımızda
                      <span className={`position-absolute bottom-0 start-50 translate-middle-x h-1 bg-info transition-all ${location.pathname === '/hakkimizda' ? 'w-100' : 'w-0'}`}></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link position-relative px-3 ${location.pathname === '/sanatcilar' ? 'active' : ''}`} 
                      to="/sanatcilar"
                    >
                      Sanatçılar
                      <span className={`position-absolute bottom-0 start-50 translate-middle-x h-1 bg-info transition-all ${location.pathname === '/sanatcilar' ? 'w-100' : 'w-0'}`}></span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link position-relative px-3 ${location.pathname === '/iletisim' ? 'active' : ''}`} 
                      to="/iletisim"
                    >
                      İletişim
                      <span className={`position-absolute bottom-0 start-50 translate-middle-x h-1 bg-info transition-all ${location.pathname === '/iletisim' ? 'w-100' : 'w-0'}`}></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hover efektleri için CSS */}
      <style>
        {`
          .nav-link:hover span {
            width: 100% !important;
          }
          .nav-link {
            transition: all 0.3s ease;
          }
          .nav-link:hover {
            color: #0dcaf0 !important;
          }
          .navbar-nav .nav-link.active {
            color: #0dcaf0 !important;
          }
        `}
      </style>
    </header>
  )
}

export default Header 