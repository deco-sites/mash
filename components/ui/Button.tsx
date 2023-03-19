import { forwardRef } from "preact/compat";

import type { ComponentType, JSX } from "preact";

import Spinner from "./Spinner.tsx";

export type Props =
  & Omit<JSX.IntrinsicElements["button"], "as" | "size" | "loading">
  & {
    as?: keyof JSX.IntrinsicElements | ComponentType;
    variant?: keyof typeof variants;
    loading?: boolean;
  };

const variants = {
  primary:
    "h-[36px] px-3 bg-interactive font-button text-button text-default-inverse border-transparent   hover:text-default hover:border-interactive active:bg-interactive active:text-default-inverse active:border-transparent disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none ",
  secondary:
    "h-[36px] px-3 rounded bg-interactive-inverse font-button text-button border-default  active:bg-interactive active:text-interactive-inverse disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none",
  tertiary:
    "h-[36px] px-3 rounded bg-interactive-inverse font-button text-button border-transparent  active:border-interactive disabled:border-transparent disabled:text-subdued focus:outline-none",
  icon:
    "h-[36px] px-2 rounded-full bg-transparent text-default border-transparent disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none transform transition-transform duration-150 ease-in",
  quantity:
    "h-[36px] px-2 bg-mash-grey text-default border-transparent disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none transform transition-transform duration-150 ease-in font-bold",
  coupon:
    "h-[36px] px-3 bg-interactive font-button text-white text-default-inverse border-transparent hover:text-black hover:bg-mash-grey hover:border-interactive active:bg-interactive active:text-default-inverse active:border-transparent disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none uppercase",
  purchase:
    "px-3 py-4 h-[60px] bg-green-400 font-button text-white text-default-inverse border-transparent hover:text-black hover:bg-mash-grey hover:border-interactive active:bg-interactive active:text-default-inverse active:border-transparent disabled:border-default disabled:text-subdued disabled:bg-interactive-inverse focus:outline-none uppercase",
  productCard:
    "bg-[#24b26d] text-white px-4 py-2 absolute bottom-0 left-0 right-0 mx-auto mb-4 opacity-0 transform translate-y-full transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-center",
};

const Button = forwardRef<HTMLButtonElement, Props>(({
  variant = "primary",
  as = "button",
  type = "button",
  class: _class = "",
  children,
  loading,
  disabled,
  ...props
}, ref) => {
  const Component = as as ComponentType<
    { disabled?: boolean; className: string; type: string }
  >;
  const styles = variants[variant];

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed transition-colors duration-150 ease-in ${styles} ${_class}`}
      disabled={disabled || loading}
      type={type}
      ref={ref}
    >
      {loading === true ? <Spinner size={24} /> : children}
    </Component>
  );
});

export default Button;
