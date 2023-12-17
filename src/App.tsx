import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import TypographyH2 from "@/shared/TypographyH2";
import TypographyP from "./shared/TypographyP";

function App() {
  return (
    <main className="container mx-auto flex h-full flex-col gap-4 p-4">
      <TypographyH2>Dashboard</TypographyH2>
      <div className="h-[50%] w-full">
        <Card className="h-full w-full">
          <CardHeader>
            <h1>Card Header</h1>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>Card Description</p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="col-span-1 h-[170px] md:col-span-2">
          <CardHeader>
            <h1>Card Header</h1>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>Card Description</p>
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="col-span-1 h-[170px] md:col-span-2">
          <CardHeader>
            <h1>Card Header</h1>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <p>Card Description</p>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="flex w-full gap-x-4">
        <TypographyP>Badges: </TypographyP>
        <ul className="flex list-none gap-x-2">
          <li>
            <Badge>Badge</Badge>
          </li>
          <li>
            <Badge variant="destructive">Badge</Badge>
          </li>
          <li>
            <Badge variant="secondary">Badge</Badge>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
