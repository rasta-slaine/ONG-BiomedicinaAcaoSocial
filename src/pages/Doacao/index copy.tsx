import { useState } from "react";
import {
  CheckCircle,
  Heart,
  CreditCard,
  Calendar,
  DollarSign,
  Users,
  Gift,
  Repeat,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

// Sample impact data
const impactItems = [
  {
    amount: "$25",
    description: "Provides clean water to a family for a month",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    amount: "$50",
    description: "Supplies educational materials for 10 children",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    amount: "$100",
    description: "Plants 20 trees in deforested areas",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    amount: "$250",
    description: "Funds a community clean water project",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    amount: "$500",
    description: "Supports a community garden for a year",
    icon: <DollarSign className="h-5 w-5" />,
  },
  {
    amount: "$1,000",
    description: "Provides solar power to a rural school",
    icon: <DollarSign className="h-5 w-5" />,
  },
];

// Sample testimonials
const testimonials = [
  {
    quote:
      "Donating to EcoHope has been one of the most rewarding experiences. I know my contributions are making a real difference in communities that need it most.",
    name: "Sarah Johnson",
    role: "Monthly Donor since 2019",
  },
  {
    quote:
      "As a business owner, partnering with EcoHope has not only helped communities in need but has also engaged our employees in meaningful ways.",
    name: "Michael Chen",
    role: "Corporate Partner",
  },
  {
    quote:
      "I've seen firsthand how EcoHope uses donations efficiently to create sustainable change. Their transparency and impact are why I continue to support them.",
    name: "Elena Rodriguez",
    role: "Major Donor",
  },
];

export function DonatePage() {
  const [donationAmount, setDonationAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    setDonationSubmitted(true);
  };

  const handleAmountChange = (value: string) => {
    setDonationAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount("custom");
  };

  const finalAmount =
    donationAmount === "custom" ? customAmount : donationAmount;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-500 to-red-500 py-24 text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Sua doação salva vidas
          </h1>
          <p className="text-lg mb-8">
            Com seu apoio, conseguimos levar saúde, informação e dignidade a
            quem mais precisa. Junte-se a nós nessa missão de cuidado e
            transformação.
          </p>
          <Button
            size="lg"
            className="px-10 py-5 text-lg shadow-lg hover:scale-105 transition"
            asChild
          >
            <Link to="/doar/formulario">Fazer Doação Agora</Link>
          </Button>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Donation Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Make a Donation</CardTitle>
                  <CardDescription>
                    Your support helps us continue our vital work in communities
                    worldwide.
                  </CardDescription>
                </CardHeader>

                {donationSubmitted ? (
                  <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium">
                      Thank You for Your Donation!
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Your generous contribution of ${finalAmount} will help us
                      make a difference. We've sent a receipt to your email
                      address.
                    </p>
                    <Button onClick={() => setDonationSubmitted(false)}>
                      Make Another Donation
                    </Button>
                  </CardContent>
                ) : (
                  <CardContent>
                    <Tabs
                      defaultValue="one-time"
                      value={donationType}
                      onValueChange={setDonationType}
                    >
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="one-time">One-Time</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      </TabsList>

                      <TabsContent value="one-time" className="mt-6">
                        <form
                          onSubmit={handleDonationSubmit}
                          className="space-y-6"
                        >
                          <div className="space-y-4">
                            <Label>Select Donation Amount</Label>
                            <RadioGroup
                              value={donationAmount}
                              onValueChange={handleAmountChange}
                              className="grid grid-cols-3 gap-4"
                            >
                              {["25", "50", "100", "250", "500", "1000"].map(
                                (amount) => (
                                  <div
                                    key={amount}
                                    className="flex items-center space-x-2"
                                  >
                                    <RadioGroupItem
                                      value={amount}
                                      id={`amount-${amount}`}
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor={`amount-${amount}`}
                                      className="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                                    >
                                      ${amount}
                                    </Label>
                                  </div>
                                )
                              )}
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="custom"
                                  id="amount-custom"
                                  className="peer sr-only"
                                  checked={donationAmount === "custom"}
                                  onChange={() => setDonationAmount("custom")}
                                />
                                <Label
                                  htmlFor="amount-custom"
                                  className="flex w-full cursor-pointer items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                                >
                                  <span className="mr-2">$</span>
                                  <Input
                                    type="number"
                                    placeholder="Custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    onClick={() => setDonationAmount("custom")}
                                    className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  />
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-4">
                            <Label>Donation Designation</Label>
                            <Select defaultValue="general">
                              <SelectTrigger>
                                <SelectValue placeholder="Select where to direct your donation" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">
                                  Where Needed Most
                                </SelectItem>
                                <SelectItem value="environment">
                                  Environmental Conservation
                                </SelectItem>
                                <SelectItem value="education">
                                  Education Programs
                                </SelectItem>
                                <SelectItem value="water">
                                  Clean Water Initiatives
                                </SelectItem>
                                <SelectItem value="community">
                                  Community Development
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Personal Information
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" required />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" required />
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Payment Information
                            </h3>

                            <div className="space-y-2">
                              <Label htmlFor="card-number">Card Number</Label>
                              <div className="relative">
                                <Input
                                  id="card-number"
                                  placeholder="1234 5678 9012 3456"
                                  required
                                />
                                <CreditCard className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              <div className="space-y-2">
                                <Label htmlFor="expiry-date">Expiry Date</Label>
                                <div className="relative">
                                  <Input
                                    id="expiry-date"
                                    placeholder="MM/YY"
                                    required
                                  />
                                  <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="zip">Zip Code</Label>
                                <Input id="zip" placeholder="12345" required />
                              </div>
                            </div>
                          </div>

                          <Button type="submit" className="w-full" size="lg">
                            <Heart className="mr-2 h-4 w-4" />
                            Donate ${finalAmount}
                          </Button>

                          <p className="text-center text-xs text-muted-foreground">
                            Your donation is tax-deductible to the extent
                            allowed by law. EcoHope is a registered 501(c)(3)
                            nonprofit organization.
                          </p>
                        </form>
                      </TabsContent>

                      <TabsContent value="monthly" className="mt-6">
                        <form
                          onSubmit={handleDonationSubmit}
                          className="space-y-6"
                        >
                          <div className="space-y-4">
                            <Label>Select Monthly Donation Amount</Label>
                            <RadioGroup
                              value={donationAmount}
                              onValueChange={handleAmountChange}
                              className="grid grid-cols-3 gap-4"
                            >
                              {["10", "25", "50", "100", "200", "500"].map(
                                (amount) => (
                                  <div
                                    key={amount}
                                    className="flex items-center space-x-2"
                                  >
                                    <RadioGroupItem
                                      value={amount}
                                      id={`monthly-amount-${amount}`}
                                      className="peer sr-only"
                                    />
                                    <Label
                                      htmlFor={`monthly-amount-${amount}`}
                                      className="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                                    >
                                      ${amount}
                                    </Label>
                                  </div>
                                )
                              )}
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="custom"
                                  id="monthly-amount-custom"
                                  className="peer sr-only"
                                  checked={donationAmount === "custom"}
                                  onChange={() => setDonationAmount("custom")}
                                />
                                <Label
                                  htmlFor="monthly-amount-custom"
                                  className="flex w-full cursor-pointer items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                                >
                                  <span className="mr-2">$</span>
                                  <Input
                                    type="number"
                                    placeholder="Custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    onClick={() => setDonationAmount("custom")}
                                    className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  />
                                </Label>
                              </div>
                            </RadioGroup>

                            <div className="rounded-md bg-muted p-4">
                              <div className="flex items-center">
                                <Repeat className="mr-2 h-4 w-4 text-primary" />
                                <p className="text-sm font-medium">
                                  Your donation will be processed monthly until
                                  canceled.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Same fields as one-time donation form */}
                          <div className="space-y-4">
                            <Label>Donation Designation</Label>
                            <Select defaultValue="general">
                              <SelectTrigger>
                                <SelectValue placeholder="Select where to direct your donation" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">
                                  Where Needed Most
                                </SelectItem>
                                <SelectItem value="environment">
                                  Environmental Conservation
                                </SelectItem>
                                <SelectItem value="education">
                                  Education Programs
                                </SelectItem>
                                <SelectItem value="water">
                                  Clean Water Initiatives
                                </SelectItem>
                                <SelectItem value="community">
                                  Community Development
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Personal Information
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="monthly-first-name">
                                  First Name
                                </Label>
                                <Input id="monthly-first-name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="monthly-last-name">
                                  Last Name
                                </Label>
                                <Input id="monthly-last-name" required />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="monthly-email">
                                Email Address
                              </Label>
                              <Input id="monthly-email" type="email" required />
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium">
                              Payment Information
                            </h3>

                            <div className="space-y-2">
                              <Label htmlFor="monthly-card-number">
                                Card Number
                              </Label>
                              <div className="relative">
                                <Input
                                  id="monthly-card-number"
                                  placeholder="1234 5678 9012 3456"
                                  required
                                />
                                <CreditCard className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                              <div className="space-y-2">
                                <Label htmlFor="monthly-expiry-date">
                                  Expiry Date
                                </Label>
                                <div className="relative">
                                  <Input
                                    id="monthly-expiry-date"
                                    placeholder="MM/YY"
                                    required
                                  />
                                  <Calendar className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="monthly-cvc">CVC</Label>
                                <Input
                                  id="monthly-cvc"
                                  placeholder="123"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="monthly-zip">Zip Code</Label>
                                <Input
                                  id="monthly-zip"
                                  placeholder="12345"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <Button type="submit" className="w-full" size="lg">
                            <Heart className="mr-2 h-4 w-4" />
                            Donate ${finalAmount}/month
                          </Button>

                          <p className="text-center text-xs text-muted-foreground">
                            Your donation is tax-deductible to the extent
                            allowed by law. EcoHope is a registered 501(c)(3)
                            nonprofit organization.
                          </p>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Impact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Your Impact</h2>
                <p className="mb-6 text-muted-foreground">
                  Your donation makes a real difference in the lives of people
                  and communities around the world. Here's how your contribution
                  can help:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {impactItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 rounded-lg border p-4"
                    >
                      <div className="rounded-full bg-primary/10 p-2">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{item.amount}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Ways to Give */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Other Ways to Give</h2>

                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                        <Gift className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg">Planned Giving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Leave a lasting legacy by including EcoHope in your
                        estate planning. Contact our development team to learn
                        more about planned giving options.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        Corporate Partnerships
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Engage your business in meaningful social
                        responsibility. We offer various partnership
                        opportunities for companies of all sizes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg">
                        In-Kind Donations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Donate goods, services, or expertise to support our
                        programs. Contact us to discuss your in-kind donation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="mb-4 text-2xl font-bold">Donor Stories</h2>

                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="mb-4 text-4xl text-primary">"</div>
                        <p className="mb-4 italic text-muted-foreground">
                          {testimonial.quote}
                        </p>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              Our Commitment to Transparency
            </h2>
            <p className="mb-8 text-muted-foreground">
              We believe in complete transparency about how your donations are
              used. At least 85% of all donations go directly to our programs,
              with the remainder covering essential administrative and
              fundraising costs.
            </p>

            <div className="mb-8 flex justify-center">
              <div className="relative h-4 w-full max-w-md overflow-hidden rounded-full bg-muted-foreground/20">
                <div className="absolute left-0 top-0 h-full w-[85%] bg-primary"></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-background p-4 text-center">
                <h3 className="text-lg font-bold text-primary">85%</h3>
                <p className="text-sm text-muted-foreground">
                  Program Expenses
                </p>
              </div>
              <div className="rounded-lg bg-background p-4 text-center">
                <h3 className="text-lg font-bold">10%</h3>
                <p className="text-sm text-muted-foreground">
                  Administrative Costs
                </p>
              </div>
              <div className="rounded-lg bg-background p-4 text-center">
                <h3 className="text-lg font-bold">5%</h3>
                <p className="text-sm text-muted-foreground">Fundraising</p>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" asChild>
                <a href="/about#financials">View Our Financial Reports</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Is my donation tax-deductible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, EcoHope is a registered 501(c)(3) nonprofit organization,
                  and all donations are tax-deductible to the extent allowed by
                  law. You will receive a receipt for your donation that can be
                  used for tax purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I specify where my donation goes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can designate your donation to support a specific
                  program or initiative. If you don't specify, your donation
                  will be used where it's needed most, allowing us to respond to
                  the most urgent needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  How do I cancel or modify my monthly donation?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can cancel or modify your monthly donation at any time by
                  contacting our donor services team at donations@ecohope.org or
                  by calling (555) 123-4567. We're happy to assist you with any
                  changes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Can I donate in someone's honor or memory?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can make a tribute gift in honor or memory of someone
                  special. During the donation process, you'll have the option
                  to dedicate your gift and send a notification to the honoree
                  or their family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
