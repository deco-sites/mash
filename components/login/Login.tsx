import Icon from "$store/components/ui/Icon.tsx";

function Login() {
  return (
    <section class="max-w-[80%] mx-auto">
      <section class="font-bold text-[#aaa] text-center">
        Escolha uma opção para entrar
      </section>
      <section class="mt-4 gap-y-2 md:gap-y-4 flex flex-col">
        <button class="bg-[#3b5998] text-white w-full py-2 px-10 focus:outline-none">
          <span class="text-white uppercase font-bold md:text-sm text-xs">
            Entrar com o Facebook
          </span>
        </button>
        <button class="bg-[#DD4C3A] text-white w-full py-2 px-10 focus:outline-none">
          <span class="text-white uppercase font-bold md:text-sm text-xs">
            Entrar com uma conta google
          </span>
        </button>
        <section>
          <section class="flex items-center justify-center flex-col gap-y-4">
            <span>Entrar com email e senha</span>
            <form
              onSubmit={(e) => e.preventDefault()}
              class="w-full flex flex-col gap-y-4"
            >
              <input
                type="email"
                required
                placeholder="Email"
                class="border-2 py-2 px-4 focus:outline-none w-full"
              />
              <input
                type="password"
                required
                placeholder="Senha"
                autocomplete="current-password"
                class="border-2 py-2 px-4 focus:outline-none w-full"
              />
            </form>
            <button
              class="bg-black text-white w-full py-2 px-10 focus:outline-none"
              type="submit"
            >
              <span class="text-white uppercase font-bold md:text-sm text-xs">
                Entrar
              </span>
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Login;
