import Text from "$store/components/ui/Text.tsx";

export interface Props {
  text: TextNewsletter;
}

export interface TextNewsletter {
  /**
   * @title Title newsletter
   * @description text to be displayed in the newsletter title
   * @default NÃO PARE DE MUDAR
   */
  title: string;
  /**
   * @title Text newsletter
   * @description text to be displayed in the newsletter text
   * @default E RECEBA AS NOVIDADES MASH
   */
  text: string;
  /**
   * @title Placeholder name
   * @description placeholder to be displayed in the name input
   * @default Seu Nome
   */
  placeholderName?: string;
  /**
   * @title Placeholder email
   * @description placeholder to be displayed in the email input
   * @default Seu E-mail
   */
  placeholderEmail?: string;
  /**
   * @title Text button
   * @description text to be displayed in the button
   * @default Cadastrar
   */
  textButton?: string;
}

function Newsletter({ text }: Props) {
  return (
    <div class="flex bg-newsletter flex-col items-center gap-8 pt-[40px] px-[20px] pb-[35px]">
      <div class="flex flex-col items-center gap-0.5 max-w-[400px] text-center md:text-left">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="text(black md:[24px] [20px]) font-semibold uppercase"
        >
          {text?.title}
        </Text>
        <Text
          variant="body"
          tone="default-inverse"
          class="text(black md:[24px] [20px]) uppercase"
        >
          {text?.text}
        </Text>
      </div>
      <form class="flex flex-col justify-center gap-2 font-body text-body w-full max-w-[828px]">
        <section class="flex flex-col gap-4 md:flex-row items-center">
          <input
            class="h-[52px] w-full md:w-[198px] px-[20px] md:mr-[10px] flex-grow bg-white text-[#7D7D7D] border(1 [#EBEBEB])"
            placeholder={text?.placeholderName
              ? text.placeholderName
              : "Seu Nome"}
          />
          <input
            class="h-[52px] w-full md:w-[198px] px-[20px] md:mr-[10px] flex-grow bg-white text-[#7D7D7D] border(1 [#EBEBEB])"
            placeholder={text?.placeholderEmail
              ? text.placeholderEmail
              : "Seu E-mail"}
          />
          <section class="flex">
            <label
              name="gender_radio"
              class="flex items-center gap-1 pr-[10px]"
            >
              <input
                id="gender_radio"
                type="radio"
                name="gender_radio"
                class="appearance-none bg-white h-[21px] w-[21px] border(1 [#EBEBEB])"
              />

              M
            </label>
            <label
              name="gender_radio"
              class="flex items-center gap-1 pr-[10px] md:pr-[50px]"
            >
              <input
                id="gender_radio"
                type="radio"
                name="gender_radio"
                class="appearance-none bg-white h-[21px] w-[21px] border(1 [#EBEBEB])"
              />

              F
            </label>
          </section>
          <button
            class="w-[208px] bg-black h-[48px] text(white xl) font-bold uppercase"
            type="bgutton" // prevent form's default behavior
          >
            {text?.textButton ? text.textButton : "Cadastrar"}
          </button>
        </section>
        <label name="newsletter-concordo" class="flex items-center">
          <input
            id="newsletter-concordo"
            type="checkbox"
            name="newsletter-concordo"
            class="mr-[10px] appearance-none bg-white border(1 [#EBEBEB]) h-[15px] w-[15px]"
          />
          <span class="max-w-[300px] md:max-w-full">
            Li e concordo com a política e termos de privacidade.
          </span>
        </label>
      </form>
    </div>
  );
}

export default Newsletter;
