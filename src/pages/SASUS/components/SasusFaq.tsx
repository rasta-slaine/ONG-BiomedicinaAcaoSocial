import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SasusFaq = () => {
  return (
    <div className="bg-muted py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Dúvidas Frequentes
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona o SASUS?</AccordionTrigger>
              <AccordionContent>
                O SASUS é um sistema de apoio ao SUS que oferece serviços
                complementares para reduzir filas e melhorar o acesso à saúde
                pública. Através da nossa plataforma, você pode agendar
                consultas presenciais, solicitar atendimento online, obter
                informações sobre as unidades de saúde e acompanhar indicadores
                de saúde em tempo real.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Quem pode utilizar os serviços do SASUS?
              </AccordionTrigger>
              <AccordionContent>
                Qualquer pessoa que seja usuária do Sistema Único de Saúde (SUS)
                pode utilizar os serviços do SASUS. É necessário ter o Cartão
                Nacional de Saúde (Cartão SUS) para realizar agendamentos e
                consultas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                As consultas online são gratuitas?
              </AccordionTrigger>
              <AccordionContent>
                Sim, todas as consultas online oferecidas pelo SASUS são
                gratuitas, assim como os demais serviços do SUS. Nossos
                profissionais são voluntários da ONG que apoia o sistema público
                de saúde, oferecendo seu tempo e conhecimento para melhorar o
                acesso à saúde.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Como cancelar ou remarcar uma consulta?
              </AccordionTrigger>
              <AccordionContent>
                Para cancelar ou remarcar uma consulta, acesse a área "Minhas
                Consultas" no menu principal, selecione a consulta desejada e
                clique em "Cancelar" ou "Remarcar". É importante fazer isso com
                pelo menos 24 horas de antecedência para que outra pessoa possa
                utilizar o horário.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                O que devo levar no dia da consulta presencial?
              </AccordionTrigger>
              <AccordionContent>
                No dia da consulta presencial, você deve levar seu Cartão
                Nacional de Saúde (Cartão SUS), documento de identidade com
                foto, comprovante de residência e, se possível, exames
                anteriores e receitas de medicamentos que esteja utilizando.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Como funciona a consulta online?
              </AccordionTrigger>
              <AccordionContent>
                A consulta online é realizada por videochamada através da nossa
                plataforma. Após a confirmação do agendamento, você receberá um
                link por e-mail para acessar a sala virtual no horário marcado.
                É importante estar em um local com boa conexão de internet e
                privacidade para a consulta.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
