import { Separator } from "@/components/ui/separator";

function Sidebar() {
  return (
    <>
      <div className="hidden h-screen md:flex">
        <div className="w-[12rem]">
          <h2>Sidebar</h2>
        </div>
        <Separator orientation="vertical" />
      </div>
    </>
  );
}

export default Sidebar;
