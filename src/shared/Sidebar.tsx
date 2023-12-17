import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";

function Sidebar() {
  return (
    <>
      <div className="hidden h-full md:flex">
        <div className="flex w-[12rem] justify-center text-center">
          <ul className="flex list-none flex-col gap-y-4 p-4">
            <li>
              <Button variant="link" asChild>
                <Link to="/" className="font-semibold tracking-wide">
                  Dashboard
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" asChild>
                <Link to="/tickets" className="font-semibold tracking-wide">
                  Tickets
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <Separator orientation="vertical" />
      </div>
    </>
  );
}

export default Sidebar;
