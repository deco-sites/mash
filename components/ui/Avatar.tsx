import Button from "$store/components/ui/Button.tsx";
import type { JSX } from "preact";

/**
 * This component renders the filter and selectors for skus.
 * TODO: Figure out a better name for this component.
 */

interface Abbreviation {
  variant: "abbreviation";
  content: string;
}

interface Color {
  variant: "color";
  content: keyof typeof colors;
}

interface Idempotent {
  variant: "idempotent";
  content: string;
}

const colors = {
  "AMARELO": "#f5ff00",
  "AZUL": "#104ae6",
  "BRANCO": "#FFFFFF",
  "CAQUI": "#e7d749",
  "CINZA": "#dbdbdb",
  "MISTO": "#c1c8cece",
  "ROSA": "#ffcbdb",
  "PRETO": "#000",
  "ROXO": "#c62bff",
  "VERDE": "#3fb922",
  "VERMELHO": "#ff2b2b",
  "AZUL MARINHO": "#13273d",
};

type Props =
  & JSX.IntrinsicElements["button"]
  & (Abbreviation | Color | Idempotent);

function Avatar({ variant, content, class: _class = "", ...btnProps }: Props) {
  if (variant === "color") {
    return (
      <button
        {...btnProps}
        class={`border  w-6 h-6 md:(w-[32px] h-[32px]) ${_class}`}
        style={{ backgroundColor: colors[content] ?? "#FFF" }}
      />
    );
  }

  if (variant === "abbreviation") {
    return (
      <button
        {...btnProps}
        class={`text-caption font-caption  border border-default w-8 h-8 flex justify-center items-center hover:bg-interactive hover:border-interactive hover:text-default-inverse disabled:bg-interactive disabled:text-default-inverse disabled:border-interactive ${_class}`}
      >
        {content.substring(0, 2)}
      </button>
    );
  }

  return <button {...btnProps} class={_class}>{content}</button>;
}

export default Avatar;
