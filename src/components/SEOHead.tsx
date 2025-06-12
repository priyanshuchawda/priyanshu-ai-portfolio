
import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title = "Priyanshu Chawda - AI & Full-Stack Developer | Portfolio",
  description = "Priyanshu Chawda is an AI & Full-Stack Developer who builds intelligent solutions and scalable applications. Expert in Python, React, Machine Learning, and more.",
  keywords = "Priyanshu Chawda, AI Developer, Full-Stack Developer, Machine Learning, Python, React, Portfolio, Freelance Developer, Web Development, AI Solutions",
  image = "https://priyanshutech.xyz/og-image.jpg",
  url = "https://priyanshutech.xyz",
  type = "website",
  author = "Priyanshu Chawda",
  publishedTime,
  modifiedTime,
  noindex = false
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false, httpEquiv = false) => {
      let selector: string;
      if (httpEquiv) {
        selector = `meta[http-equiv="${name}"]`;
      } else if (property) {
        selector = `meta[property="${name}"]`;
      } else {
        selector = `meta[name="${name}"]`;
      }
      
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (httpEquiv) {
          meta.setAttribute("http-equiv", name);
        } else if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    updateMetaTag("googlebot", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    updateMetaTag("bingbot", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Priyanshu Chawda Portfolio", true);
    updateMetaTag("og:locale", "en_US", true);

    // Article specific tags
    if (type === "article" && publishedTime) {
      updateMetaTag("article:published_time", publishedTime, true);
    }
    if (type === "article" && modifiedTime) {
      updateMetaTag("article:modified_time", modifiedTime, true);
    }
    if (type === "article") {
      updateMetaTag("article:author", author, true);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@priyanshu_tech4");
    updateMetaTag("twitter:site", "@priyanshu_tech4");

    // Additional SEO tags
    updateMetaTag("language", "en");
    updateMetaTag("revisit-after", "7 days");
    updateMetaTag("theme-color", "#00d9ff");
    updateMetaTag("msapplication-TileColor", "#0f0f23");

    // LinkedIn specific
    updateMetaTag("linkedin:owner", "priyanshuchawda", true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Alternate URLs for different languages (if needed in future)
    let alternate = document.querySelector('link[rel="alternate"][hreflang="en"]') as HTMLLinkElement;
    if (!alternate) {
      alternate = document.createElement("link");
      alternate.setAttribute("rel", "alternate");
      alternate.setAttribute("hreflang", "en");
      document.head.appendChild(alternate);
    }
    alternate.setAttribute("href", url);

    // JSON-LD Structured Data for the current page
    const currentPageData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "image": image,
      "author": {
        "@type": "Person",
        "name": author,
        "url": "https://priyanshutech.xyz"
      },
      "publisher": {
        "@type": "Person",
        "name": "Priyanshu Chawda",
        "url": "https://priyanshutech.xyz"
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    let pageScript = document.querySelector('script[data-page-schema]');
    if (!pageScript) {
      pageScript = document.createElement("script");
      pageScript.setAttribute("type", "application/ld+json");
      pageScript.setAttribute("data-page-schema", "true");
      document.head.appendChild(pageScript);
    }
    pageScript.textContent = JSON.stringify(currentPageData);

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, noindex]);

  return null;
};

export default SEOHead;
