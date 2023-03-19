import { useState } from "preact/hooks"

export default function TextCategory() {
    const [open, setOpen] = useState(false)
    
    return (
        <section class="md:max-w-[600px] mx-auto w-full px-2">
            <h3 class="pt-[20px] text(2xl) font-semibold text-center">Muito conforto com as cuecas Mash</h3>
            <p class="pt-[15px]">
                As cuecas da Mash são produtos de alta qualidade dos quais oferecem muito conforto para quem as utiliza.
            </p>
            <p class="pt-[15px]">Além de poderem ser encontradas em diferentes modelos, elas também podem ser feitas de materiais variados, para alcançar o que o cliente deseja.</p>
            <p class="pt-[15px]">Por serem itens indispensáveis, as cuecas fazem parte de qualquer look que você venha a compor.</p>
            <p class="pt-[15px]">Apesar de não serem itens que fiquem aparentes nas composições, ela é de extrema importância.</p>
            <p class="pt-[15px]">Quer saber mais sobre os tipos de cuecas disponíveis no nosso site? Então continue nos acompanhando neste post!</p>
            <h3 class="pt-[20px] text(2xl) font-semibold text-center">A cuecas são mais do que uma peça íntima</h3>
            <p class="pt-[15px]">As cuecas são peças indispensáveis em qualquer guarda roupa. Apesar de algumas pessoas optarem por não utilizar, praticamente todos os homens usam essa peça todos os dias.</p>
            <p class="pt-[15px]">No entanto, elas não servem apenas para guardar e proteger as partes íntimas. Isso porque elas também fazem com que o uso de outras roupas seja mais confortável.</p>
            <p class="pt-[15px]">Hoje em dia, já é possível encontrar inúmeros tipos de cuecas e, se antes as pessoas as tratavam com certo descaso, hoje elas são mais do que queridas.</p>
            <p class="pt-[15px]">Isso fez com que elas se tornassem um elemento muito importante no vestuário masculino.</p>
            <span class={`${open ? "hidden" : "block"} py-6 font-semibold text-2xl text-center cursor-pointer`} onClick={() => {setOpen(true)}}>Ver mais</span>
            <section class={`${open ? "block" : "hidden"} pb-6`}>
                <h3 class="pt-[20px] text(2xl) font-semibold text-center">Modelos de cuecas</h3>
                <p class="pt-[15px]">Como foi dito anteriormente, já é possível encontrar diferentes tipos de cuecas no mercado. Essa variedade permite que você encontre as peças que mais te agradam e que também podem te proporcionar conforto.</p>
                <p class="pt-[15px]">Veja alguns dos principais modelos:</p>
                <h3>Slip</h3>
                <p class="pt-[15px]">A cueca slip é o modelo mais tradicional e utilizado hoje em dia. Elas possuem o formato em V e, geralmente, são produzidas em tecidos de algodão.</p>
                <p class="pt-[15px]">No entanto, elas também costumam ser mais apertadas do que as outras opções.</p>
                <p class="pt-[15px]">Esse tipo de peça não cobre as partes internas das coxas, o que pode fazer com que ocorra atrito no meio das pernas ao caminhar.</p>
                <p class="pt-[15px]">A versão é usada por homens há muitas décadas, o que faz com que o modelo tenha sofrido poucas alterações com o passar dos anos.</p>
                <h3 class="pt-[20px] text(2xl) font-semibold text-center">Boxer</h3>
                <p class="pt-[15px]">Hoje em dia, as cuecas boxer são os modelos mais utilizados pelos homens.</p>
                <p class="pt-[15px]">Isso porque ela conta com um formato maior, o que faz com que ela lembre um shorts bem curto e justo.</p>
                <p class="pt-[15px]">Algumas peças contam com um bojo, que tem como função acomodar as partes íntimas de mais que fiquem mais confortáveis.</p>
                <p class="pt-[15px]">Pessoas de todos os tipos de corpos aceitam este tipo de peça, o que faz dela um modelo mais democrático.</p>
                <p class="pt-[15px]">Por ser uma versão um pouco maior que a slip, a boxer é capaz de proteger a parte interna da coxa, o que evita que ocorra atritos entre as pernas.</p>
                <h3 class="pt-[20px] text(2xl) font-semibold text-center">Samba canção</h3>
                <p class="pt-[15px]">Os homens que preferem as peças mais largas e soltinhas, costumam utilizar a cueca samba canção.</p>
                <p class="pt-[15px]">Nos dias de hoje, muitas pessoas a consideram ultrapassada, porém, tem quem ainda goste e não abra mão delas.</p>
                <p class="pt-[15px]">Elas se parecem com um shorts mais curto,feito de um tecido mais leve,, fazendo com que ela seja mais folgada e confortável.</p>
                <p class="pt-[15px]">Por ser mais comprida, a samba canção pode incomodar no momento de ser usada embaixo de outra peça de roupa.</p>
                <p class="pt-[15px]">No entanto, elas são ótimas para ficar mais confortável em casa e até mesmo dormir com elas.</p>
                <p class="pt-[15px]">Independente de qual for a sua escolha, no site da Mash você encontra as cuecas ideais para você.</p>
                <p class="pt-[15px]">Conheça as nossas opções e adquira peças de alta qualidade e que ofereçam o conforto que você tanto deseja.</p>
            </section>
        </section>
    )
}