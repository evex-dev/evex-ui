import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { RichText } from "@evex-ui";

export function HeaderMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon width={20} height={20} />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center gap-y-10 pt-24">
        <div className="flex flex-col justify-center items-start gap-y-3">
          <div>
            <RichText>
              Docs
            </RichText>
          </div>
          <div>
            <RichText>
              Components
            </RichText>
          </div>
          <div>
            <RichText> Template </RichText>
          </div>
          <div>
            <RichText>
              Showcase
            </RichText>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <a
            href="https://github.com/evex-dev/evex-ui"
            target="_blank"
          >
            <img
              src="/icons/github.svg"
              className="dark:invert"
              width="18"
              height="18"
              alt="github"
            />
          </a>
          <a href="https://x.com/amex2189" target="_blank">
            <img
              src="/icons/x.svg"
              className="dark:invert"
              width="18"
              height="18"
              alt="x"
            />
          </a>
          <a href="https://evex.land" target="_blank">
            <img
              src="/icons/discord.svg"
              className="dark:invert"
              width="18"
              height="18"
              alt="discord"
            />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
