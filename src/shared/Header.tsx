import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ModeToggle } from "@/components/mode-toggle";

import { Link } from "@tanstack/react-router";

function Header() {
  return (
    <>
      <nav className="container mx-auto flex h-[8svh] w-screen items-center justify-between py-4">
        <Button asChild variant="link">
          <Link to="/">
            <div>Logo</div>
          </Link>
        </Button>
        <div>
          <ul className="flex list-none items-center gap-x-2">
            <li>
              <Dialog>
                <DialogTrigger>
                  <Button className="text-sm" variant="default" size="sm">
                    Submit Ticket
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Submit A Ticket</DialogTitle>
                    <DialogDescription>
                      <Input
                        className="my-4"
                        placeholder="Search By Player Name"
                      />
                      <div className="flex w-full items-center justify-end gap-x-2">
                        <DialogClose>
                          <Button variant="destructive">Cancel</Button>
                        </DialogClose>
                        <DialogClose>
                          <Button variant="default">Save</Button>
                        </DialogClose>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="aspect-square h-[36px] w-[36px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M20 7H4m16 5H4m16 5H4"
                      />
                    </svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle>What Can Go Wrong?</SheetTitle>
                    <SheetDescription>
                      <ul className="list-none">
                        <li>
                          <Button asChild variant="link">
                            <SheetClose asChild>
                              <Link to="/">Dashboard</Link>
                            </SheetClose>
                          </Button>
                        </li>
                        <li>
                          <Button asChild variant="link">
                            <SheetClose asChild>
                              <Link to="/tickets">Tickets</Link>
                            </SheetClose>
                          </Button>
                        </li>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </li>
          </ul>
        </div>
      </nav>
      <Separator className="w-screen" />
    </>
  );
}

export default Header;
