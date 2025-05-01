import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface UIPopoverProps {
  triggerTitle: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  side?: UIPopoverSide;
  align?: UIPopoverAlign;
  sideOffset?: number;
}
export enum UIPopoverSide {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}
export enum UIPopoverAlign {
  START = "start",
  CENTER = "center",
  END = "end",
}

function UIPopover({
  triggerTitle,
  content,
  className,
  side,
  align,
  sideOffset,
}: UIPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger>{triggerTitle}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={className}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}

export default UIPopover;
