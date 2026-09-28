import { readFileSync, writeFileSync } from "fs";

const PAGES = [
  ["index", "home"],
  ["about", "about"],
  ["services", "services"],
  ["contact", "contact"],
];

// TODO: replace with the production domain
const SITE = "https://meridian-georgia.example";

const attr = (s, re) => (s.match(re) || [, ""])[1].trim();

for (const [page] of PAGES) {
  const src = readFileSync(`../meridian/web/${page}.html`, "utf8");
  const title = attr(src, /data-title-ka="([^"]*)"/);
  const desc = attr(src, /data-desc-ka="([^"]*)"/);
  const icon = attr(src, /<link rel="icon" href="([^"]*)"/);
  const canon = page === "index" ? `${SITE}/` : `${SITE}/${page}.html`;

  writeFileSync(
    `${page}.html`,
    `<!DOCTYPE html>
<html lang="ka">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${canon}">
<meta name="theme-color" content="#f7f5f2">
<meta name="color-scheme" content="light">
<meta name="robots" content="index, follow">
<meta property="og:site_name" content="Meridian Georgia">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canon}">
<meta property="og:locale" content="ka_GE">
<meta property="og:image" content="${SITE}/assets/hero.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${SITE}/assets/hero.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Noto+Sans+Georgian:wght@400;500;600&family=Noto+Serif+Georgian:wght@500&display=swap" rel="stylesheet">
<link rel="icon" href="${icon}">
<script>(function(){try{var l=new URLSearchParams(location.search).get("lang");if(l==="ka"||l==="en"||l==="ru")document.documentElement.lang=l;}catch(e){}})();</script>
<script type="module" src="/src/entries/${page}.tsx"></script>
</head>
<body>
<noscript><div style="font:16px/1.6 system-ui;padding:2rem;text-align:center;max-width:640px;margin:0 auto"><p>Meridian Georgia — <a href="index.html">Home</a> · <a href="about.html">About</a> · <a href="services.html">Services</a> · <a href="contact.html">Contact</a></p><p>Please enable JavaScript to view this page. / ჩართეთ JavaScript. / Включите JavaScript.</p></div></noscript>
<div id="root"></div>
</body>
</html>
`,
  );
}
console.log("rewrote", PAGES.length, "shells");
