import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardLayoutProps {
  Icon: React.ElementType;
  title: string;
  content: string;
}

const CardLayout = (props: CardLayoutProps) => {
  const { Icon, title, content } = props;
  return (
    <div>
      <section className="flex p-2.5">
        <div className="container">
          <div>
            <Card className="border-8 border-green-100 transition-all hover:border-green-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                  {Icon && <Icon className="h-6 w-6 text-green-600" />}
                </div>
                <CardTitle className="text-2xl leading-none font-semibold">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="h-32">
                <p className="text-muted-foreground text-md p-2"> {content}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardLayout;
