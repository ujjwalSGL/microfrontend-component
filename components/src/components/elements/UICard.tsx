import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface UICardProps {
  heading?: React.ReactNode;
  subheading?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function UICard({
  heading,
  subheading,
  content,
  footer,
  className,
}: UICardProps) {
  return (
    <Card className={cn("min-w-xs gap-2", className)}>
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        {subheading && <CardDescription>{subheading}</CardDescription>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
