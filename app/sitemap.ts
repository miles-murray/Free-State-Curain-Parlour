import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/showroom", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/process", priority: 0.7, changeFrequency: "yearly" },
  { path: "/workshop", priority: 0.7, changeFrequency: "yearly" },
  { path: "/team", priority: 0.6, changeFrequency: "yearly" },
  { path: "/history", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  {
    path: "/services/curtains-fabrics/examples",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/blinds/examples",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/wallpaper/examples",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/upholstery-soft-furnishings/examples",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/rugs-lighting-decor/examples",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/interior-guidance/examples",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/wall-units/examples",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/services/furniture-decor/examples",
    priority: 0.6,
    changeFrequency: "monthly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    priority,
    changeFrequency,
  }));
}
