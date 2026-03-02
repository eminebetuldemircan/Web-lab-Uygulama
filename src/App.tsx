import './App.css';

function App() {
  return (
    <>
      {/* Skip Link - Ana içeriğe atla */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* Header ve Navigasyon */}
      <header>
        <h1>Emine Betül Demircan - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Ana İçerik */}
      <main id="main-content">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-container">
            <figure className="profile-figure">
              <img 
                src="/profil.jpg" 
                alt="Emine Betül Demircan'ın profil fotoğrafı" 
              />
             
            </figure>
            <div className="about-content">
              <p>Merhaba! Ben Emine Betül Demircan. Web ve mobil uygulama geliştirme ile aktif olarak ilgileniyorum. Şu anda full-stack geliştirme konusunda kendimi geliştirerek hem front-end hem de back-end teknolojilerinde yetkinlik kazanmaya çalışıyorum.</p>
              
              <div className="tech-stack">
                <h3>Kullandığım Teknolojiler</h3>
                <ul className="tech-list">
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>C# & ASP.NET Core</li>
                  <li>SQL Server</li>
                  <li>Entity Framework Core</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <div className="projects-grid">
            {/* Restoran Otomasyonu */}
            <article className="project-card">
              <div className="project-header">
                <h3>Restoran Otomasyonu</h3>
                <span className="project-tech">Java</span>
              </div>
              <p>Java ile geliştirilmiş kapsamlı restoran yönetim sistemi. Sipariş takibi, stok yönetimi, masa düzeni ve raporlama özellikleri içerir.</p>
              <div className="project-details">
                <h4>Özellikler:</h4>
                <ul>
                  <li>Sipariş yönetimi</li>
                  <li>Stok takibi</li>
                  <li>Masa düzeni</li>
                  <li>Raporlama</li>
                </ul>
              </div>
            </article>

            {/* SkinSafe - Cilt Analiz Platformu */}
            <article className="project-card">
              <div className="project-header">
                <h3>SkinSafe</h3>
                <span className="project-tech">TypeScript & Node.js</span>
              </div>
              <p>Cilt analizi yapan mobil platform. Kullanıcıların cilt tiplerini analiz eden ve ürün önerileri sunan yapay zeka destekli uygulama.</p>
              <div className="project-details">
                <h4>Özellikler:</h4>
                <ul>
                  <li>Cilt analizi</li>
                  <li>Kişisel ürün önerileri</li>
                  <li>Takip sistemi</li>
                  <li>Backend: Node.js</li>
                </ul>
              </div>
            </article>

            {/* E-Ticaret Sitesi */}
            <article className="project-card">
              <div className="project-header">
                <h3>E-Ticaret Platformu</h3>
                <span className="project-tech">C# & ASP.NET Core</span>
              </div>
              <p>ASP.NET Core Web API, Entity Framework Core ve SQL Server ile geliştirilmiş kapsamlı e-ticaret platformu.</p>
              <div className="project-details">
                <h4>Kullanılan Teknolojiler:</h4>
                <ul>
                  <li>ASP.NET Core Web API</li>
                  <li>Entity Framework Core</li>
                  <li>SQL Server</li>
                  <li>Swagger (API Dokümantasyonu)</li>
                  <li>Visual Studio 2022</li>
                </ul>
              </div>
              <div className="project-modules">
                <h4>Geliştirilen Modüller:</h4>
                <ul>
                  <li>Admin Panel (Dashboard)</li>
                  <li>Kullanıcı Mağaza Arayüzü</li>
                  <li>RESTful API Servisleri</li>
                  <li>MVC / Razor View</li>
                </ul>
              </div>
            </article>

            {/* Online Diş Kliniği Randevu Sistemi */}
            <article className="project-card">
              <div className="project-header">
                <h3>Online Diş Kliniği Randevu Sistemi</h3>
                <span className="project-tech">React.js</span>
              </div>
              <p>React.js ile geliştirilmiş modern ve kullanıcı dostu diş kliniği randevu sistemi.</p>
              <div className="project-details">
                <h4>Özellikler:</h4>
                <ul>
                  <li>Online randevu alma</li>
                  <li>Doktor takvimi</li>
                  <li>Hasta kayıt sistemi</li>
                  <li>Randevu hatırlatma</li>
                </ul>
              </div>
            </article>
            
    {/* Authentication Sistemi */}
    <article className="project-card">
      <div className="project-header">
        <h3>ASP.NET Core Authentication Sistemi</h3>
        <span className="project-tech">ASP.NET Core</span>
      </div>
      <p>ASP.NET Core ile geliştirilmiş kapsamlı kimlik doğrulama (Authentication) ve yetkilendirme (Authorization) sistemi.</p>
      <div className="project-details">
        <h4>Kullanılan Teknolojiler:</h4>
        <ul>
          <li>ASP.NET Core Identity</li>
          <li>JWT (JSON Web Token)</li>
          <li>Entity Framework Core</li>
          <li>SQL Server</li>
        </ul>
      </div>
      <div className="project-modules">
        <h4>Özellikler:</h4>
        <ul>
          <li>Kullanıcı kayıt ve giriş işlemleri</li>
          <li>JWT token tabanlı authentication</li>
          <li>Role-based authorization</li>
          <li>Email doğrulama</li>
          <li>Şifre sıfırlama</li>
          <li>Refresh token mekanizması</li>
        </ul>
      </div>
    </article>

            {/* Blog Uygulaması */}
            <article className="project-card">
              <div className="project-header">
                <h3>Blog Uygulaması</h3>
                <span className="project-tech">TypeScript</span>
              </div>
              <p>TypeScript ile geliştirilmiş kişisel blog platformu. Modern ve hızlı bir blog deneyimi sunar.</p>
              <div className="project-details">
                <h4>Teknolojiler:</h4>
                <ul>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* İletişim Bölümü */}
        <section id="iletisim">
          <h2>İletişim</h2>
          
          <form noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              {/* Ad Soyad */}
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2}
                  aria-describedby="name-error" 
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              {/* E-posta */}
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              {/* Konu */}
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">Seçiniz</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              {/* Mesaj */}
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              {/* Gönder Butonu */}
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Emine Betül Demircan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;