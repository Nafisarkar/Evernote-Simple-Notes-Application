import { PlusIcon } from "@phosphor-icons/react";
import Button from "./Button";
import { UserIcon } from "@phosphor-icons/react";
import { Sidebaritem } from "./Sidebaritem";
import Dialog from "./Dialog";

function Sidebar() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <aside className="w-64 shrink-0 border-2 border-retro-border bg-retro-bg rounded-none flex flex-col p-4 relative ">
      {/* Sidebar head content */}
      <div className="flex gap-4 ">
        <Button ariaLabel="User Profile" className="w-full bg-retro-accent">
          <UserIcon weight="bold" aria-hidden="true" />
        </Button>
        <Dialog
          trigger={
            <Button
              handler={handleButtonClick}
              ariaLabel="Add Note"
              className="w-full bg-retro-accent"
            >
              <PlusIcon weight="bold" aria-hidden="true" />
            </Button>
          }
        >
          <div className="">
            <input
              type="text"
              className="outline-none focus:outline-none border-2 border-retro-border rounded-none w-full bg-retro-bg text-retro-fg p-2"
            />
          </div>
        </Dialog>
      </div>

      {/* Devider */}
      <div className="border-t-2 border-retro-border my-4 border-dashed" />

      {/* Sidebar body content */}
      <div className="flex flex-col gap-4 overflow-y-auto flex-1  pb-4">
        {/* Example sidebar items */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="animate-slide-in"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <Sidebaritem title={`Note ${i + 1}`} createdAt="2024-06-01" />
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
