
Copy
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
          <h1 className="font-medium text-lg lg:text-3xl">TREE.</h1>
          <h2 className="font-medium text-2xl lg:text-xl">ZA LINK-TREE</h2>
        </div>
      </div>

      <div>
        TREE is the first page of the WEEDW3W metaverse of portals to branches of Dispensary TREES featuring their Z🅰️DDY merch and 🎦 LIVE.
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://t.me/hahznft" target="_blank" aria-label="GitHub">
          <span className="text-xl">🧙🏼‍♂️ Wizard of Hahz</span>
        </Button>
      </div>
    </div>
  );
};
