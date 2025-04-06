"use client";

import type React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Calendar,
  Award,
  Heart,
  CheckCircle,
  Clock,
  MapPin,
  FileText,
  Send,
  ArrowRight,
  Microscope,
  Stethoscope,
  BookOpen,
  HeartPulse,
  Pill,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Sample volunteer opportunities
const volunteerOpportunities = [
  {
    id: "1",
    title: "Clinical Support Volunteer",
    description:
      "Assist healthcare professionals in our partner clinics and hospitals. Tasks include patient registration, basic health screenings, and administrative support.",
    requirements: [
      "Healthcare background or current medical/nursing student",
      "Minimum commitment of 8 hours per week",
      "Completion of our medical volunteer training program",
    ],
    icon: <Stethoscope className="h-6 w-6 text-primary" />,
    category: "Clinical",
    locations: ["Urban Health Centers", "Rural Medical Outreach"],
    commitment: "8+ hours/week",
    training: "Required (2-day program)",
    impact: "Support 20+ patients per shift",
  },
  {
    id: "2",
    title: "Medical Research Assistant",
    description:
      "Support our research teams in data collection, analysis, and documentation for ongoing biomedical research projects focused on tropical diseases and community health.",
    requirements: [
      "Background in life sciences, medicine, or related field",
      "Familiarity with research methodologies",
      "Detail-oriented with good analytical skills",
    ],
    icon: <Microscope className="h-6 w-6 text-primary" />,
    category: "Research",
    locations: ["Research Laboratories", "Field Research Sites"],
    commitment: "10+ hours/week",
    training: "Required (3-day program)",
    impact: "Contribute to published research",
  },
  {
    id: "3",
    title: "Health Education Facilitator",
    description:
      "Lead workshops and educational sessions on preventive healthcare, nutrition, hygiene, and disease prevention in schools and community centers.",
    requirements: [
      "Strong communication and presentation skills",
      "Knowledge of basic health principles",
      "Experience in education or training preferred",
    ],
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    category: "Education",
    locations: ["Schools", "Community Centers", "Public Health Events"],
    commitment: "4+ hours/week",
    training: "Required (1-day program)",
    impact: "Educate 100+ community members monthly",
  },
  {
    id: "4",
    title: "Medical Supply Coordinator",
    description:
      "Manage inventory, organize donations, and prepare medical supply kits for our healthcare initiatives and emergency response programs.",
    requirements: [
      "Organizational skills",
      "Attention to detail",
      "Ability to lift up to 25 pounds",
    ],
    icon: <Pill className="h-6 w-6 text-primary" />,
    category: "Logistics",
    locations: ["Central Warehouse", "Distribution Centers"],
    commitment: "6+ hours/week",
    training: "Required (half-day program)",
    impact: "Support medical care for 500+ patients",
  },
  {
    id: "5",
    title: "Biomedical Event Support",
    description:
      "Assist in organizing and running medical conferences, health fairs, blood drives, and other biomedical events that serve our community.",
    requirements: [
      "Event planning or customer service experience preferred",
      "Excellent interpersonal skills",
      "Availability on weekends for some events",
    ],
    icon: <Calendar className="h-6 w-6 text-primary" />,
    category: "Events",
    locations: ["Conference Centers", "Community Venues", "Hospitals"],
    commitment: "Flexible (event-based)",
    training: "Basic orientation",
    impact: "Help reach 1000+ attendees per event",
  },
  {
    id: "6",
    title: "Medical Translation Services",
    description:
      "Provide translation services for patients with limited English proficiency during medical consultations, procedures, and health education sessions.",
    requirements: [
      "Fluency in English and at least one other language (Spanish, Mandarin, Arabic, etc.)",
      "Understanding of medical terminology",
      "Cultural sensitivity",
    ],
    icon: <FileText className="h-6 w-6 text-primary" />,
    category: "Patient Support",
    locations: ["All Clinical Settings"],
    commitment: "4+ hours/week",
    training: "Required (1-day program)",
    impact: "Support 10+ patients per shift",
  },
];

// Sample upcoming volunteer events
const upcomingEvents = [
  {
    id: "1",
    title: "Community Health Screening Day",
    date: "2023-12-10",
    time: "9:00 AM - 3:00 PM",
    location: "Central Community Center",
    description:
      "Volunteers will assist healthcare professionals in providing free health screenings, including blood pressure, glucose levels, and BMI calculations for community members.",
    volunteersNeeded: 15,
    category: "Clinical",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Biomedical Research Symposium",
    date: "2023-12-15",
    time: "10:00 AM - 4:00 PM",
    location: "University Medical Center",
    description:
      "Support our annual research symposium where medical professionals and researchers present their latest findings. Volunteers will help with registration, guide attendees, and assist presenters.",
    volunteersNeeded: 10,
    category: "Events",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Rural Medical Outreach",
    date: "2024-01-20",
    time: "8:00 AM - 5:00 PM",
    location: "Highland Village (2 hours from city center)",
    description:
      "Join our medical team for a day of providing essential healthcare services to an underserved rural community. Volunteers will assist with patient flow, basic screenings, and health education.",
    volunteersNeeded: 20,
    category: "Clinical",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Medical Supply Sorting Day",
    date: "2024-01-05",
    time: "1:00 PM - 5:00 PM",
    location: "Main Warehouse",
    description:
      "Help sort and package donated medical supplies that will be distributed to our partner clinics and international medical missions.",
    volunteersNeeded: 12,
    category: "Logistics",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// Sample volunteer testimonials
const volunteerTestimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Clinical Support Volunteer",
    duration: "Volunteer for 3 years",
    quote:
      "Volunteering with BioMedHope has been the most rewarding experience of my medical career. I've been able to apply my skills to help those who need it most while learning from diverse healthcare challenges.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Miguel Rodriguez",
    role: "Health Education Facilitator",
    duration: "Volunteer for 1 year",
    quote:
      "As a medical student, this volunteer program has given me invaluable experience in communicating complex health information to diverse audiences. I've seen firsthand how education can prevent health issues.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Aisha Patel",
    role: "Medical Research Assistant",
    duration: "Volunteer for 2 years",
    quote:
      "Working alongside experienced researchers has deepened my understanding of how biomedical research translates to real-world healthcare solutions. I've contributed to studies that are making a difference.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

// Sample impact statistics
const impactStats = [
  {
    value: "10,000+",
    label: "Patients Served Annually",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
  },
  {
    value: "500+",
    label: "Active Volunteers",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    value: "50+",
    label: "Medical Outreach Events",
    icon: <Calendar className="h-6 w-6 text-primary" />,
  },
  {
    value: "25",
    label: "Research Projects Supported",
    icon: <Microscope className="h-6 w-6 text-primary" />,
  },
];

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export function VolunteerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    experience: "",
    availability: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      experience: "",
      availability: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary py-20 text-primary-foreground md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Volunteer With Us
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Join our team of dedicated volunteers making a difference in
              biomedical care, research, and education. Your skills and passion
              can help transform lives and advance medical care for those who
              need it most.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="#volunteer-form">Apply Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a href="#opportunities">View Opportunities</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-background"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Why Volunteer With Us?
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              As a biomedical and healthcare-focused organization, we offer
              unique opportunities to make a direct impact on patient care,
              medical research, and health education.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hands-On Medical Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gain practical experience in healthcare settings, working
                  alongside medical professionals and researchers on real cases
                  and challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contribute to Medical Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Support groundbreaking biomedical research projects that
                  address pressing health challenges and develop new treatments
                  and approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Make a Direct Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See the immediate difference your work makes in patients'
                  lives, community health outcomes, and medical knowledge
                  advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Volunteer Impact
          </h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background">
                  {stat.icon}
                </div>
                <h3 className="mb-1 text-3xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="opportunities" className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Volunteer Opportunities
          </h2>

          <Tabs defaultValue="all" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="clinical">Clinical</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {volunteerOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="flex h-full flex-col">
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-primary/10 p-3 w-fit">
                        {opportunity.icon}
                      </div>
                      <Badge className="mb-2 w-fit">
                        {opportunity.category}
                      </Badge>
                      <CardTitle>{opportunity.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="mb-4 text-sm text-muted-foreground">
                        {opportunity.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.commitment}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.locations.join(", ")}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Award className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{opportunity.training}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="#volunteer-form">Apply Now</a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["clinical", "research", "education", "logistics", "events"].map(
              (category) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {volunteerOpportunities
                      .filter(
                        (opportunity) =>
                          opportunity.category.toLowerCase() === category
                      )
                      .map((opportunity) => (
                        <Card
                          key={opportunity.id}
                          className="flex h-full flex-col"
                        >
                          <CardHeader className="pb-2">
                            <div className="mb-2 rounded-full bg-primary/10 p-3 w-fit">
                              {opportunity.icon}
                            </div>
                            <Badge className="mb-2 w-fit">
                              {opportunity.category}
                            </Badge>
                            <CardTitle>{opportunity.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-1">
                            <p className="mb-4 text-sm text-muted-foreground">
                              {opportunity.description}
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm">
                                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span>{opportunity.commitment}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span>{opportunity.locations.join(", ")}</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <Award className="mr-2 h-4 w-4 text-muted-foreground" />
                                <span>{opportunity.training}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <a href="#volunteer-form">Apply Now</a>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                  </div>

                  {volunteerOpportunities.filter(
                    (opportunity) =>
                      opportunity.category.toLowerCase() === category
                  ).length === 0 && (
                    <div className="my-12 text-center">
                      <h3 className="text-xl font-medium">
                        No opportunities in this category
                      </h3>
                      <p className="text-muted-foreground">
                        Please check back later or explore other categories
                      </p>
                    </div>
                  )}
                </TabsContent>
              )
            )}
          </Tabs>
        </div>
      </section>

      {/* Upcoming Volunteer Events */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Upcoming Volunteer Events
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="grid md:grid-cols-3">
                  <div className="aspect-square w-full overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{event.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-1">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3 space-y-1">
                        <div className="flex items-center text-sm">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>
                            {event.volunteersNeeded} volunteers needed
                          </span>
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link to={`/events/${event.id}`}>Sign Up</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Volunteer Stories
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {volunteerTestimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="mb-6 italic text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.duration}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Process */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            How to Become a Volunteer
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 font-bold">Apply</h3>
                <p className="text-sm text-muted-foreground">
                  Complete our volunteer application form with your interests
                  and qualifications
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 font-bold">Interview</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our volunteer coordinator to discuss opportunities
                  that match your skills
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 font-bold">Training</h3>
                <p className="text-sm text-muted-foreground">
                  Complete role-specific training to prepare you for your
                  volunteer position
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mb-2 font-bold">Begin Volunteering</h3>
                <p className="text-sm text-muted-foreground">
                  Start making an impact with ongoing support from our volunteer
                  team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer FAQ */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What qualifications do I need to volunteer?
                </AccordionTrigger>
                <AccordionContent>
                  Qualifications vary by role. Clinical positions typically
                  require relevant medical background or education, while many
                  support roles are open to volunteers with various skills and
                  experience levels. Each opportunity listing includes specific
                  requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How much time do I need to commit?
                </AccordionTrigger>
                <AccordionContent>
                  We offer flexible opportunities ranging from one-time events
                  to regular weekly commitments. Most ongoing roles request a
                  minimum commitment of 4-10 hours per week for at least three
                  months to provide consistency for our programs and patients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Is training provided?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all volunteers receive role-specific training. Depending
                  on the position, training may range from a brief orientation
                  to comprehensive multi-day programs, especially for clinical
                  and research roles. All training is provided free of charge.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Can students volunteer for academic credit?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we partner with many educational institutions to provide
                  volunteer opportunities that qualify for academic credit or
                  fulfill practicum requirements. Please mention your academic
                  needs in your application, and we'll work with you and your
                  institution.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Are there any age restrictions for volunteers?
                </AccordionTrigger>
                <AccordionContent>
                  Most of our volunteer opportunities require volunteers to be
                  at least 18 years old, especially for clinical roles. However,
                  we do offer some supervised programs for volunteers aged 16-17
                  in educational and event support roles. All volunteers under
                  18 need parental consent.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Can I volunteer if I have no medical background?
                </AccordionTrigger>
                <AccordionContent>
                  While some roles require medical expertise, many critical
                  volunteer positions need other skills like organization,
                  communication, language abilities, or event planning. Everyone
                  has something valuable to contribute to our mission.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section
        id="volunteer-form"
        className="bg-primary py-16 text-primary-foreground"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Apply to Volunteer
            </h2>
            <p className="mb-8 text-center">
              Ready to make a difference? Fill out the form below to start your
              volunteer journey with us. Our volunteer coordinator will contact
              you within 3-5 business days.
            </p>

            <Card className="bg-white text-foreground">
              <CardHeader>
                <CardTitle>Volunteer Application</CardTitle>
                <CardDescription>
                  Please provide your information and areas of interest
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-medium">
                      Application Received!
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      Thank you for your interest in volunteering with us. We've
                      received your application and will contact you within 3-5
                      business days to discuss next steps.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)}>
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select
                        name="interest"
                        value={formData.interest}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, interest: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clinical">
                            Clinical Support
                          </SelectItem>
                          <SelectItem value="research">
                            Medical Research
                          </SelectItem>
                          <SelectItem value="education">
                            Health Education
                          </SelectItem>
                          <SelectItem value="logistics">
                            Medical Supply Coordination
                          </SelectItem>
                          <SelectItem value="events">Event Support</SelectItem>
                          <SelectItem value="translation">
                            Medical Translation
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Briefly describe any relevant experience or qualifications"
                        rows={3}
                        required
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Select
                        name="availability"
                        value={formData.availability}
                        onValueChange={(value) =>
                          setFormData((prev) => ({
                            ...prev,
                            availability: value,
                          }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekdays">Weekdays</SelectItem>
                          <SelectItem value="evenings">Evenings</SelectItem>
                          <SelectItem value="weekends">Weekends</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                          <SelectItem value="events-only">
                            Special Events Only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Any additional information you'd like to share"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Application
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Join Our Medical Mission
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you're a healthcare professional, student, or simply
              passionate about making a difference in biomedical care, we have a
              place for you on our team. Together, we can advance healthcare
              access and quality for all.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <a href="#volunteer-form">Become a Volunteer</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Volunteer Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
