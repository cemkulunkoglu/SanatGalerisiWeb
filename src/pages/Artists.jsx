const artists = [
  {
    id: 1,
    name: "Michelangelo",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/800px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg",
    period: "Rönesans Dönemi",
    nationality: "İtalyan",
    birthYear: 1475,
    deathYear: 1564,
    famousWorks: ["David Heykeli", "Pietà", "Musa"],
    description: "İtalyan Rönesansı'nın en önemli sanatçılarından biri olan Michelangelo, heykel, resim ve mimari alanlarında çığır açan eserler vermiştir."
  },
  {
    id: 2,
    name: "Auguste Rodin",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Auguste_Rodin_1893_Nadar.jpg/800px-Auguste_Rodin_1893_Nadar.jpg",
    period: "Modern Dönem",
    nationality: "Fransız",
    birthYear: 1840,
    deathYear: 1917,
    famousWorks: ["Düşünen Adam", "Öpücük", "Cehennem Kapıları"],
    description: "Modern heykelin öncüsü sayılan Rodin, geleneksel akademik heykeli reddederek daha doğal ve ifadeci bir stil geliştirmiştir."
  },
  {
    id: 3,
    name: "Alberto Giacometti",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Alberto-Giacometti%2C-etching-%28author-Jan-Hlad%C3%ADk-2002%29.jpg/800px-Alberto-Giacometti%2C-etching-%28author-Jan-Hlad%C3%ADk-2002%29.jpg",
    period: "Modern Dönem",
    nationality: "İsviçreli",
    birthYear: 1901,
    deathYear: 1966,
    famousWorks: ["Yürüyen Adam", "Şehir Meydanı", "Chariot"],
    description: "İnce, uzun figürleriyle tanınan Giacometti, varoluşçu felsefeden etkilenen eserleriyle 20. yüzyıl heykel sanatına damga vurmuştur."
  },
  {
    id: 4,
    name: "Henry Moore",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Henry_Moore_in_workshop_Allan_Warren_%28cropped%29.jpg/800px-Henry_Moore_in_workshop_Allan_Warren_%28cropped%29.jpg",
    period: "Modern Dönem",
    nationality: "İngiliz",
    birthYear: 1898,
    deathYear: 1986,
    famousWorks: ["Uzanan Figür", "Kral ve Kraliçe", "Atom Parçası"],
    description: "Soyut ve figüratif heykelleriyle tanınan Moore, doğal formlardan ilham alarak modern heykele yeni bir boyut kazandırmıştır."
  },
  {
    id: 5,
    name: "Constantin Brâncuși",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Edward_Steichen_-_Brancusi.jpg/800px-Edward_Steichen_-_Brancusi.jpg",
    period: "Modern Dönem",
    nationality: "Rumen",
    birthYear: 1876,
    deathYear: 1957,
    famousWorks: ["Kuş Uzayda", "Sonsuz Sütun", "Öpüş"],
    description: "Modern heykelin öncülerinden olan Brâncuși, soyut formları ve minimal yaklaşımıyla heykel sanatına yeni bir soluk getirmiştir."
  },
  {
    id: 6,
    name: "Barbara Hepworth",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Barbara_Hepworth_%281966%29_by_Erling_Mandelmann.jpg/800px-Barbara_Hepworth_%281966%29_by_Erling_Mandelmann.jpg",
    period: "Modern Dönem",
    nationality: "İngiliz",
    birthYear: 1903,
    deathYear: 1975,
    famousWorks: ["Pelagos", "İki Form", "Tek Form"],
    description: "Soyut heykel alanında öncü çalışmalar yapan Hepworth, doğadan ilham alan organik formlarıyla tanınmıştır."
  },
  {
    id: 7,
    name: "Louise Bourgeois",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Louise_Bourgeois%2C_c._2000.jpg/800px-Louise_Bourgeois%2C_c._2000.jpg",
    period: "Modern/Çağdaş Dönem",
    nationality: "Fransız-Amerikan",
    birthYear: 1911,
    deathYear: 2010,
    famousWorks: ["Maman", "Hücre", "Örümcek"],
    description: "Psikolojik temalı eserleriyle tanınan Bourgeois, kişisel deneyimlerini ve duygularını heykellerine yansıtmıştır."
  },
  {
    id: 8,
    name: "Isamu Noguchi",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Isamu_Noguchi%2C_1983_%28cropped%29.jpg/800px-Isamu_Noguchi%2C_1983_%28cropped%29.jpg",
    period: "Modern Dönem",
    nationality: "Amerikan-Japon",
    birthYear: 1904,
    deathYear: 1988,
    famousWorks: ["Kırmızı Küp", "Siyah Güneş", "Bulut"],
    description: "Doğu ve Batı kültürlerini harmanlayan Noguchi, heykel ve peyzaj tasarımında yenilikçi yaklaşımlar geliştirmiştir."
  }
]

function Artists() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="display-4 fw-bold text-center text-primary mb-5">Sanatçılarımız</h2>
          
          <div className="row g-4">
            {artists.map(artist => (
              <div key={artist.id} className="col-12">
                <div className="card border-0 shadow-lg rounded-4">
                  <div className="row g-0">
                    <div className="col-md-3 position-relative" style={{ minHeight: '300px' }}>
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="position-absolute w-100 h-100 rounded-start-4"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center top'
                        }}
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h3 className="card-title fw-bold text-primary mb-0">{artist.name}</h3>
                          <span className="badge bg-info rounded-pill px-3 py-2">
                            {artist.period}
                          </span>
                        </div>
                        <p className="card-text text-muted mb-3">
                          <small>
                            {artist.nationality}, {artist.birthYear}-{artist.deathYear}
                          </small>
                        </p>
                        <p className="card-text mb-3">{artist.description}</p>
                        <div className="mb-0">
                          <h6 className="fw-bold mb-2">Ünlü Eserleri:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {artist.famousWorks.map((work, index) => (
                              <span key={index} className="badge bg-light text-dark border">
                                {work}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artists 