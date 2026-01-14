import { cva } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "destructive" | "ghost";
};

export const buttonStyle = cva({
  base: "rounded-full px-4 py-1 not-disabled:cursor-pointer disabled:text-neutral-500",
  variants: {
    variant: {
      default:
        "bg-green-500 not-disabled:hover:bg-green-400 disabled:bg-green-950",
      destructive:
        "bg-red-500 not-disabled:hover:bg-red-400 disabled:bg-red-950",
      ghost: "not-disabled:hover:bg-neutral-400/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={buttonStyle({ className, variant })} {...props} />;
}
