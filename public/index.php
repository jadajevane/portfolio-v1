<!DOCTYPE html>
<html lang="nl">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio van Jada Hooper">
  <title>Portfolio - Jada Hooper</title>
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/card.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <script defer src="../assets/js/main.js" type="module"></script>
  <script defer src="../json/json.js" type="module"></script>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jada Hooper",
      "url": "http://localhost",
      "sameAs": [
        "https://www.linkedin.com/in/jada-h-abab87258/",
        "https://github.com/jadajevane",
        "https://www.instagram.com/jadajevane/"
      ],
      "affiliation": {
        "@type": "Organization",
        "name": "Bit Academy"
      }
    }
  </script>
</head>

<body>

<div id="progress-bar" 
class="fixed top-0 left-0 h-1 bg-pink-500 z-50 w-full" 
style="position: fixed; width: 100%; height: 0.25rem; z-index: 50; background-color: #ec4899;">
</div>

  <header>
    <?php require_once '../components/header.html'; ?>
  </header>
    
  <main>
    <?php
    require_once '../content/hero.html';
    require_once '../content/about.html';
    require_once '../content/vaardigheden.html';
    require_once '../content/certificaten.html';
    require_once '../content/project.html';
    require_once '../content/contact.html';
    ?>
  </main>

  <footer>
    <?php require_once '../components/footer.html'; ?>
  </footer>

  <button id="backToTop"
    name="Back to top button"
    style="position: fixed; bottom: 1rem; right: 1rem; width: 3.5rem; height: 3.5rem; color: #ec4899; background-color: white; border-radius: 50%; box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease-in-out; z-index: 1000;"
    class="hidden">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

</body>

</html>