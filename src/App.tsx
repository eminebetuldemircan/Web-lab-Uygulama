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
          <figure>
            <img 
              src="/profil.jpg" 
              alt="Emine Betül Demircan'ın profil fotoğrafı" 
              style={{maxWidth: '200px', borderRadius: '50%'}}
            />
            <figcaption>Emine Betül Demircan</figcaption>
          </figure>
          <p>Merhaba! Ben Emine Betül Demircan. Web geliştirme ile ilgileniyorum.</p>
          
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>E-Ticaret Sitesi</h3>
            <img 
              src="/eticaret.jpg" 
              alt="E-ticaret sitesi ekran görüntüsü" 
              style={{maxWidth: '100%', height: 'auto'}}
            />
            <p>React ve Node.js ile geliştirilmiş tam yığın e-ticaret uygulaması.</p>
            <p><strong>Kullanılan teknolojiler:</strong> React, Redux, Node.js, MongoDB</p>
          </article>
          
          <article>
            <h3>Blog Uygulaması</h3>
            <img 
              src="/blog.jpg" 
              alt="Blog uygulaması ekran görüntüsü" 
              style={{maxWidth: '100%', height: 'auto'}}
            />
            <p>TypeScript ile geliştirilmiş kişisel blog platformu.</p>
            <p><strong>Kullanılan teknolojiler:</strong> React, TypeScript, Express, PostgreSQL</p>
          </article>
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
        <p>&copy; 2025 Emine Betül Demircan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;