import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useEffect, useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

import Icon from "./Icon.tsx";
import Searchbar from "../search/Searchbar.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
  showSearch?: boolean;
};

const styles = {
  "sidebar-right": "animate-slide-left sm:ml-auto",
  "sidebar-left": "animate-slide-right",
  center: "animate-slide-bottom",
};

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  onClose,
  children,
  loading,
  showSearch,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);
  const variant = styles[mode];

  useEffect(() => {
    if (ref.current?.open === true && open === false) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current.close();
    } else if (ref.current?.open === false && open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full sm:max-w-lg w-full  backdrop ${
        mode === "center" ? "h-[50%] max-w-[90%]  m-auto" : "max-h-full h-full"
      }  ${variant} ${props.class ?? ""}`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "DIALOG" && onClose?.()}
    >
      <section
        class={`${
          mode === "center" ? "md:pt-6" : "pt-6"
        } h-full bg-default flex flex-col`}
      >
        <header
          class={`flex px-4 justify-between items-center  ${
            mode === "center" ? "flex-row-reverse pb-2 md:pb-6" : "pb-6"
          } ${mode === "sidebar-right" ? "justify-start" : ""}`}
        >
          <Button variant="icon" onClick={onClose}>
            <Icon id="XMark" width={40} height={40} strokeWidth={1} />
          </Button>
          {showSearch
            ? (
              <section class="w-4/5">
                <Searchbar placeholder="Buscar" />
              </section>
            )
            : (
              <h1
                class={`${
                  mode === "center" ? "ml-[40%]" : ""
                } uppercase font-extralight`}
              >
                <Text variant="heading-2">{title}</Text>
              </h1>
            )}
        </header>
        <div class="overflow-y-auto h-full flex flex-col">
          {loading === "lazy" ? lazy.value && children : children}
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
