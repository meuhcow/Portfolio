<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Béatrice Phung Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=VT323&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand" href="#home">beatrice.exe</a>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#gallery">Photos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <div class="sky-layer" aria-hidden="true">
          <span class="cloud cloud-one"></span>
          <span class="cloud cloud-two"></span>
          <span class="cloud cloud-three"></span>
          <span class="spark spark-one"></span>
          <span class="spark spark-two"></span>
        </div>

        <div class="hero-shell reveal">
          <div class="window-bar">
            <span>BÉATRICE PHUNG'S PORTFOLIO.EXE</span>
            <span class="window-actions" aria-hidden="true">○ ○</span>
          </div>
          <div class="hero-grid">
            <figure class="portrait-window">
              <div class="window-title">Digital Me</div>
              <div class="portrait-placeholder" role="img" aria-label="Portrait photo placeholder">
                <span>Portrait</span>
              </div>
            </figure>

            <div class="hero-copy">
              <p class="eyebrow">Bioinformatics student moving toward data engineering</p>
              <h1>Béatrice Phung</h1>
              <p>
                Building a foundation in data, programming, and healthcare operations through
                bioinformatics studies, pharmacy work, and student leadership.
              </p>
              <div class="hero-actions">
                <a class="button primary" href="mailto:beatrice.nha.chi.phung@umontreal.ca">Email</a>
                <a class="button ghost" href="#experience">View work</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="programs-section" id="skills">
        <div class="section-window reveal">
          <div class="window-bar">
            <span>INSTALLED PROGRAMS</span>
            <span class="window-actions" aria-hidden="true">○ ○</span>
          </div>
          <div class="program-grid">
            <article class="mini-window">
              <h2>Education</h2>
              <p><strong>Université de Montréal</strong></p>
              <p>BAC in Bioinformatics, expected December 2026</p>
              <p><strong>Champlain College Saint-Lambert</strong></p>
              <p>DEC in Health Science, June 2023</p>
            </article>

            <article class="mini-window">
              <h2>Data Toolkit</h2>
              <ul class="meter-list">
                <li><span>Python</span><i style="--level: 88%"></i></li>
                <li><span>R</span><i style="--level: 76%"></i></li>
                <li><span>Data analysis</span><i style="--level: 82%"></i></li>
                <li><span>Databases</span><i style="--level: 70%"></i></li>
              </ul>
            </article>

            <article class="mini-window wide">
              <h2>Languages + Tools</h2>
              <div class="tag-cloud">
                <span>Java</span>
                <span>Matlab</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>JSON</span>
                <span>XML</span>
                <span>Git/GitHub</span>
                <span>Microsoft Office</span>
                <span>French</span>
                <span>English</span>
                <span>Vietnamese</span>
              </div>
            </article>

            <article class="mini-window about-window">
              <h2>About Me</h2>
              <p>
                Béatrice connects scientific coursework with practical healthcare experience.
                Her next step is data engineering: structuring reliable datasets, improving
                workflows, and turning complex information into useful systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="experience-section" id="experience">
        <div class="timeline-intro reveal">
          <p class="eyebrow">Experience</p>
          <h2>Healthcare, tutoring, and leadership with a data-minded path.</h2>
        </div>

        <div class="timeline">
          <article class="timeline-item reveal">
            <div class="date">05/2025 - Present</div>
            <div>
              <h3>Pharmacy Technical Assistant, Hôpital Pierre-Boucher</h3>
              <p>
                Supports pharmacists through aseptic technique, established protocols,
                medication preparation, inventory documentation, and traceability.
              </p>
            </div>
          </article>

          <article class="timeline-item reveal">
            <div class="date">11/2024 - Present</div>
            <div>
              <h3>Math, Science, and English Tutor, Succès Scolaire</h3>
              <p>
                Guides students with personalized sessions, clear explanations, and trust-based
                communication with families.
              </p>
            </div>
          </article>

          <article class="timeline-item reveal">
            <div class="date">08/2023 - 10/2024</div>
            <div>
              <h3>Pharmacy Technical Assistant, Jean Coutu</h3>
              <p>
                Managed prescriptions, pill organizers, laboratory hygiene, customer service,
                information collection, and quality control support.
              </p>
            </div>
          </article>

          <article class="timeline-item reveal">
            <div class="date">2021 - Present</div>
            <div>
              <h3>Campus + Community Involvement</h3>
              <p>
                Dance club leadership, university performance involvement, Maison Jonathan
                volunteering, piano teaching, and youth support.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section class="gallery-section" id="gallery">
        <div class="section-heading reveal">
          <p class="eyebrow">Photo placeholders</p>
          <h2>Ready for real portfolio images.</h2>
        </div>
        <div class="photo-grid">
          <figure class="photo-frame reveal">
            <div class="placeholder-art dataset"></div>
            <figcaption>Data project screenshot</figcaption>
          </figure>
          <figure class="photo-frame reveal">
            <div class="placeholder-art lab"></div>
            <figcaption>Bioinformatics or lab moment</figcaption>
          </figure>
          <figure class="photo-frame reveal">
            <div class="placeholder-art portrait-alt"></div>
            <figcaption>Professional portrait</figcaption>
          </figure>
          <figure class="photo-frame reveal">
            <div class="placeholder-art community"></div>
            <figcaption>Community or dance leadership</figcaption>
          </figure>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="contact-window reveal">
          <div class="window-bar">
            <span>CONNECT.EXE</span>
            <span class="window-actions" aria-hidden="true">○ ○</span>
          </div>
          <div class="contact-content">
            <h2>Let’s build useful data systems.</h2>
            <p>Open to internships and early data engineering opportunities.</p>
            <a href="mailto:beatrice.nha.chi.phung@umontreal.ca">beatrice.nha.chi.phung@umontreal.ca</a>
            <span>438-922-9113</span>
          </div>
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
