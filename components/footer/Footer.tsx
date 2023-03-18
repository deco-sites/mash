import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

import Newsletter, { TextNewsletter } from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";
import SocialFooter from "./SocialFooter.tsx";
import PaymentFlags, { Flag } from "./PaymentFlags.tsx";
import SegurtyTechFlags from "./SegurtyTechFlags.tsx";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

export type CardFooter = {
  title: string;
  text?: string;
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse" class="text-black">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

function CardFooter(
  { class: _class = "", card }: {
    class?: string;
    card: CardFooter;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>
    <Text variant="body" tone="default-inverse" class="text([#000] xs) font-semibold">
      {card.title}
    </Text>
    <Text variant="body" tone="default-inverse" class="text([#000] xs)">
      {card.text}
    </Text>
  </div>;
}

export interface Link {
  image: {
      src: Image;
      alt: string;
  }
  href: string;
}

export interface Props {
  sections?: Section[];
  cardsFooter?: CardFooter[];
  links?: Link[];
  titlePaymentFlags?: string;
  flags?: Flag[];
  titleSegurityTechFlags?: string;
  flagsTS?: Flag[];
  TextNewsletter: TextNewsletter;
  text: string;
}

function Footer({ sections = [], cardsFooter = [], links = [], flags = [], flagsTS = [], TextNewsletter, titlePaymentFlags, titleSegurityTechFlags, text}: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col">
      <div>
        <Container class="max-w-full w-full flex flex-col">
          <Newsletter text={TextNewsletter}/>

          <FooterContainer>
            <section class="flex justify-between max-w-[950px] mx-auto flex-wrap">
              {cardsFooter.map((card) => <CardFooter class="flex flex-col gap-[11px] w-[440px]" card={card}/>)}
            </section>
          </FooterContainer>

          <SocialFooter links={links}/>

          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row justify-between max-w-[1205px] mx-auto">
              <section class="flex justify-evenly w-full">
              {sections.map((section) => (
                <li>
                  <div>
                    <Text variant="heading-3" tone="default-inverse" class="text-black">
                      {section.label}
                    </Text>

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
              </section>
              <section class="max-w-[300px] w-full flex flex-col gap-10">
                <PaymentFlags flags={flags} title={titlePaymentFlags} />
                <SegurtyTechFlags flags={flagsTS} title={titleSegurityTechFlags} />
              </section>
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <Text variant="body" tone="default-inverse" class="text-black">
                    <details id="summary-details">
                      <summary id="summary-menu" class="w-full px-[10px] flex justify-between">
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </Text>
                </li>
              ))}
              <section class="w-full flex flex-col gap-10">
                <PaymentFlags flags={flags} title={titlePaymentFlags} />
                <SegurtyTechFlags flags={flagsTS} title={titleSegurityTechFlags} />
              </section>
            </ul>
          </FooterContainer>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <FooterContainer class="max-w-[1205px] mx-auto py-[20px]">
            <Text
              class="flex items-center gap-1 text(black [8px]) leading-[16px]"
              variant="body"
              tone="default-inverse"
            >
              {text}
            </Text>
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
