import { Avatar, Button } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-3xl">ATL5D</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🅰️TL 🔗 link in bio</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3">
  <p className="font-bold">Digital Ad Campaigns:</p>
  
  <div className="flex items-start gap-3">
    <span>🔗</span>
    <span>Add a link ✅</span>
  </div>

  <div className="flex items-start gap-3">
    <span>📢</span>
    <span>Paid ATL5D post (TikTok, IG, FB, X)</span>
  </div>

  <div className="flex items-start gap-3">
    <span>✨</span>
    <span>Convert service/product to d-commerce to accept crypto</span>
  </div>

  <div className="flex items-start gap-3">
    <span>💫</span>
    <span>Livestream event</span>
  </div>

  <p className="mt-2">
    🪄 Go see the 🧙🏼‍♂️ <strong>Wizard of Hahz</strong> on Telegram to get started.
  </p>
</div>

      <div className="flex self-stretch justify-end">
        <Button 
          as="a" 
          href="https://t.me/hahznft" 
          target="_blank" 
          aria-label="Contact Wizard of Hahz on Telegram"
          className="bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          <span className="text-xl flex items-center gap-2">
            🧙🏼‍♂️ Wizard of Hahz
          </span>
        </Button>
      </div>
    </div>
  );
};
