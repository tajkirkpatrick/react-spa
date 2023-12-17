import TypographyH2 from "./shared/TypographyH2";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

function Tickets() {
  return (
    <main className="container mx-auto flex h-full flex-col gap-4 p-4">
      <TypographyH2>Active Tickets</TypographyH2>
      <ScrollArea className="h-[600px]  w-[full] rounded-md px-4 pt-4 md:border">
        <Card className="mb-4 h-full w-full">
          <CardHeader>
            <h1>Card Header</h1>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>Card Description</p>
            </CardDescription>
          </CardContent>
        </Card>
      </ScrollArea>
    </main>
  );
}

export default Tickets;
