import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

const portals = [
  {
    name: "🗺️ MAP",
    category: "Live map of ATL5D flash sales",
    url: "https://zap.dispo.social",
  },
  {
    name: "🤳 ZATV",
    category: "The ZA TikTok",
    url: "https://zatv.dispo.social",
  },
  {
    name: "🪴 PRODUCTS",
    category: "DISPO.SOCIAL dispensary products",
    url: "https://products.dispo.social",
  },
  {
    name: "🤖 STRAIN",
    category: "Ask AI about a strain",
    url: "https://strain.weedw3w.com",
  },
  {
    name: "✍️ BLOG",
    category: "DISPO.SOCIAL Blogs",
    url: "https://blog.weedw3w.com",
  },
  {
    name: "🎮 NAME GAME",
    category: "Weed name guessing game",
    url: "https://name.dispo.social",
  },
];

export default () => {
  return (
    <div className="space-y-3">
      <h2 className="font-medium text-xl">🌌 PORTALS</h2>
      <ul className="grid grid-cols-2 gap-3">
        {portals.map((portal) => {
          const emojiMatch = portal.name.match(/^[\p{Emoji}\uFE0F]+/u);
          const emoji = emojiMatch ? emojiMatch[0] : "";
          const title = portal.name.replace(/^[\p{Emoji}\uFE0F]+/u, "").trim();
          
          return (
            <li
              key={portal.name}
              className={cn(
                "group flex items-center justify-between p-4",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1",
                "transition-colors duration-200"
              )}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{emoji}</span>
                <div>
                  <h3 className="text-sm font-medium text-neutral-12 group-hover:translate-x-1 transition-transform">
                    {title}
                  </h3>
                  <p className="text-xs text-neutral-10 group-hover:text-neutral-11 transition-colors">
                    {portal.category}
                  </p>
                </div>
              </div>

              <IconButton 
                as="a" 
                href={portal.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Open ${title}`}
                className="group/icon"
              >
                <Lucide.IconExternalLink
                  className="size-4 text-neutral-10 group-hover/icon:text-primary-11 transition-colors"
                  aria-hidden="true"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};