import { cn } from "@/utils";
import { ComponentPropsWithRef, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ className, ...props }: BoxProps) => {
		return <div {...props} className={cn(className)} />;
	}
);
