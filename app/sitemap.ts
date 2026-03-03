import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rackline.ai";
  const now = new Date();

  return [
    { url: baseUrl,                                     lastModified: now, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${baseUrl}/download`,                       lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${baseUrl}/deer-score-calculator`,          lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${baseUrl}/for-outfitters`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${baseUrl}/blog`,                           lastModified: now, changeFrequency: "weekly",  priority: 0.8  },
    { url: `${baseUrl}/blog/how-to-score-a-deer`,       lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${baseUrl}/blog/deer-age-estimator`,        lastModified: now, changeFrequency: "monthly", priority: 0.7  },
    { url: `${baseUrl}/blog/trail-cam-deer-scoring`,    lastModified: now, changeFrequency: "monthly", priority: 0.7  },
    { url: `${baseUrl}/blog/velvet-antler-scoring`,     lastModified: now, changeFrequency: "monthly", priority: 0.7  },
    { url: `${baseUrl}/blog/gross-score-vs-net-score`,  lastModified: now, changeFrequency: "monthly", priority: 0.6  },
    { url: `${baseUrl}/blog/boone-and-crockett-scoring`,lastModified: now, changeFrequency: "monthly", priority: 0.8  },
  ];
}
