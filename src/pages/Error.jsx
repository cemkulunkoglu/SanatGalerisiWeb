import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display-1 fw-bold text-primary mb-4 error-number">
            404
          </h1>
          <h2 className="h3 mb-4 error-title">
            Sayfa Bulunamadı
          </h2>
          <p className="lead mb-5 error-description">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Ana sayfaya dönerek devam edebilirsiniz.
          </p>
          <Link to="/" className="btn btn-primary btn-lg px-4 error-button">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error 