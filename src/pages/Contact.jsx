import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
    alert('Mesajınız başarıyla gönderildi!')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="row g-0">
              {/* Sol taraf - İletişim Bilgileri */}
              <div className="col-lg-5 bg-primary text-white p-5">
                <h2 className="display-6 fw-bold mb-4">İletişim Bilgileri</h2>
                
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-geo-alt-fill fs-4 me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Adres</h5>
                    <p className="mb-0">Sanat Sokak No: 123<br />34000 İstanbul, Türkiye</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-telephone-fill fs-4 me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Telefon</h5>
                    <p className="mb-0">+90 (212) 123 45 67</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-envelope-fill fs-4 me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">E-posta</h5>
                    <p className="mb-0">info@sanatgalerisi.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-clock-fill fs-4 me-3"></i>
                  <div>
                    <h5 className="fw-bold mb-1">Çalışma Saatleri</h5>
                    <p className="mb-0">
                      Pazartesi - Cumartesi: 10:00 - 18:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>

                <hr className="my-5" />

                <h5 className="fw-bold mb-3">Bizi Takip Edin</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-light rounded-circle" title="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-light rounded-circle" title="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="btn btn-light rounded-circle" title="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="btn btn-light rounded-circle" title="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Sağ taraf - İletişim Formu */}
              <div className="col-lg-7 p-5">
                <h2 className="display-6 fw-bold text-primary mb-4">Bize Ulaşın</h2>
                <p className="text-muted mb-4">
                  Sorularınız, önerileriniz veya işbirliği talepleriniz için aşağıdaki formu doldurabilirsiniz. 
                  En kısa sürede size geri dönüş yapacağız.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Adınız Soyadınız</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">E-posta Adresiniz</label>
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-3"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">Konu</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-3"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold">Mesajınız</label>
                    <textarea
                      className="form-control form-control-lg rounded-3"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg px-5 rounded-3">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 