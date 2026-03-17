import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title = "Mina Samir | Front-end Developer | مينا سمير مبرمج واجهات أمامية", 
  description = "Portfolio of Mina Samir - Front-end Developer specializing in React, Next.js, and modern UI design. مينا سمير مبرمج واجهات أمامية ومطور ويب.", 
  url = "https://minasamir.com",
  image = "https://minasamir.com/preview-image.png",
  author = "Mina Samir (مينا سمير)",
  twitterUsername = "@minasamir1401",
  language = "ar"
}) => {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author,
    "url": url,
    "sameAs": [
      "https://www.linkedin.com/in/mina-samir",
      "https://github.com/minasamir1401"
    ],
    "jobTitle": "Front-end Developer",
    "image": image,
    "description": description,
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": url,
    "name": title,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": url
      }
    ]
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="مينا سمير مبرمج, مينا سمير فرونت اند, مينا سمير, Mina Samir, Front-End Developer, React, Next.js, Modern UI, Programmer" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mina Samir Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(personStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbStructuredData)}</script>
    </Helmet>
  );
};

export default SEO;
