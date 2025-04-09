import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "🗺️ ZAP.",
    category: "Live map of Dispensary sales.",
    url: "https://zap.dispo.social",
  },
  {
    name: "🤳 ZATV.",
    category: "The ZA TikTok",
    url: "https://zatv.dispo.social",
  },
  {
    name: "🪴 PRODUCTS.",
    category: "DISPO.SOCIAL dispensary products",
    url: "https://products.dispo.social",
  },
  {
    name: "🤖 STRAIN.",
    category: "Ask AI about a strain",
    url: "https://strain.weedw3w.com",
  },
  {
    name: "✍️ BLOG.",
    category: "DISPO.SOCIAL Blogs",
    url: "https://blog.weedw3w.com",
  },
  {
    name: "🎮 NAME. GAME",
    category: "Weed name guessing game",
    url: "https://name.dispo.social",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">🌌 PORTALS</h2>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {stacks.map((stack) => {
          return (
            <li
              key={stack.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center w-6">
                  {/* Emoji from the name serves as the icon */}
                  <span className="text-xl">{stack.name.match(/^\p{Emoji}+/u)?.[0]}</span>
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                    {stack.name.replace(/^\p{Emoji}+/u, '').trim()}
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {stack.category}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={stack.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
