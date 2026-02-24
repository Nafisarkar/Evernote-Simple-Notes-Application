import { useState } from "react";
import Button from "./Button";
import { CheckIcon, XIcon } from "@phosphor-icons/react";

type Props = {
  actionFunction?: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

const Dialog = ({ actionFunction, trigger, children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDialog = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div onClick={toggleDialog}>{trigger}</div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-10"
          onClick={closeDialog}
        >
          <div
            className="z-20 bg-retro-bg border-2 border-retro-border rounded-none flex
            flex-col p-4 relative gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {children}

            <div className="flex flex-row items-start justify-end">
              <Button
                handler={() => {
                  actionFunction?.();
                  closeDialog();
                }}
                size="icon"
                className=" bg-green-500 w-full"
              >
                <CheckIcon
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="text-black"
                />
              </Button>
              <Button
                handler={closeDialog}
                size="icon"
                className="w-full bg-retro-accent"
              >
                <XIcon
                  size={16}
                  weight="bold"
                  aria-hidden="true"
                  className="text-black "
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dialog;
