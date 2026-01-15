import { cva } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "ghost";
};

export const buttonStyle = cva({
  base: "rounded-full px-4 py-2 not-disabled:cursor-pointer disabled:text-neutral-500",
  variants: {
    variant: {
      default:
        "bg-green-500 hover:active:bg-green-600 disabled:bg-green-950 md:not-disabled:hover:bg-green-400",
      destructive:
        "bg-red-500 hover:active:bg-red-600 disabled:bg-red-950 md:not-disabled:hover:bg-red-400",
      ghost:
        "hover:active:bg-neutral-400/20 md:not-disabled:hover:bg-neutral-400/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={buttonStyle({ className, variant })} {...props} />;
}
