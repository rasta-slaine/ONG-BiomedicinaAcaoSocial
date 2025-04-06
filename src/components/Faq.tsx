import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqData {
  quest: string;
  answer: string;
}

export interface FaqProps {
  data: FaqData[];
}

export const Faq = ({ data }: FaqProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Perguntas Frequentes
        </h2>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {data.map((item: FaqData, index: number) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger>{item.quest}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
