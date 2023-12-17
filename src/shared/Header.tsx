import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <>
      <nav className="container mx-auto flex h-fit w-screen items-center justify-between py-2">
        <div>Logo</div>
        <div>
          <ul className="flex list-none items-center gap-x-2">
            <li>
              <Button className="text-sm" variant="default" size="sm">
                Submit Ticket
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
      <Separator className="w-screen" />
    </>
  );
}

export default Header;
