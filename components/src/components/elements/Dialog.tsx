import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface UIAlertDialogueProps {
  trigger: React.ReactNode;
  className?: string;
  cancel: React.ReactNode;
  action: React.ReactNode | ActionConfig;
  title: React.ReactNode;
  footer?: React.ReactNode;
  actionButtonLabel?: string;
  description: React.ReactNode;
  setOpen?: (open: boolean) => void;
  open?: boolean;
}
interface ActionConfig {
  handler: () => void;
  label: string;
}

function isActionConfig(
  action: React.ReactNode | ActionConfig
): action is ActionConfig {
  return typeof action === "object" && action !== null && "handler" in action;
}
export default function Dialog({
  trigger,
  description,
  className,
  cancel,
  action,
  title,
  open,
  setOpen,
}: UIAlertDialogueProps) {
  // close dialog when click outside
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (open && setOpen && contentRef.current) {
        if (!contentRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, setOpen]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className={cn(className)}>
        {trigger}
      </AlertDialogTrigger>
      <AlertDialogContent ref={contentRef}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction>
            {action && isActionConfig(action) ? (
              <p onClick={action.handler}>{action.label}</p>
            ) : (
              action
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
