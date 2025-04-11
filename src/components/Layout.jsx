import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="container-fluid p-0 bg-light d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Header />
        <main className="flex-grow-1">
          {children}
        </main>
        <div className="d-flex gap-3 justify-content-md-end">
          <a href="#" className="text-white-50 social-icon">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white-50 social-icon">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-white-50 social-icon">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout 