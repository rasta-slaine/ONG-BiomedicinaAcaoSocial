import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  TrendingUp,
  Users,
  HeartPulse,
  Microscope,
  Stethoscope,
  GraduationCap,
  Globe,
  Calendar,
  Pill,
  FileText,
  Download,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample impact statistics by year
const yearlyStatistics = {
  "2023": {
    patientsServed: 12500,
    researchProjects: 28,
    medicalOutreach: 65,
    volunteersActive: 580,
    countriesServed: 12,
    publicationsReleased: 18,
    trainingPrograms: 42,
    fundingSecured: 3800000,
    medicinesDistributed: 85000,
    livesImpacted: 45000,
  },
  "2022": {
    patientsServed: 10200,
    researchProjects: 24,
    medicalOutreach: 52,
    volunteersActive: 490,
    countriesServed: 10,
    publicationsReleased: 15,
    trainingPrograms: 36,
    fundingSecured: 3200000,
    medicinesDistributed: 72000,
    livesImpacted: 38000,
  },
  "2021": {
    patientsServed: 8500,
    researchProjects: 19,
    medicalOutreach: 45,
    volunteersActive: 420,
    countriesServed: 8,
    publicationsReleased: 12,
    trainingPrograms: 30,
    fundingSecured: 2700000,
    medicinesDistributed: 65000,
    livesImpacted: 32000,
  },
  "2020": {
    patientsServed: 7200,
    researchProjects: 15,
    medicalOutreach: 38,
    volunteersActive: 350,
    countriesServed: 7,
    publicationsReleased: 10,
    trainingPrograms: 25,
    fundingSecured: 2200000,
    medicinesDistributed: 58000,
    livesImpacted: 28000,
  },
};

// Sample awards and recognitions
const awardsAndRecognitions = [
  {
    year: 2023,
    title: "Excellence in Medical Innovation",
    organization: "Global Health Initiative",
    description:
      "Recognized for groundbreaking research in tropical disease treatment and prevention strategies.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    year: 2023,
    title: "Outstanding Nonprofit Healthcare Provider",
    organization: "International Healthcare Association",
    description:
      "Awarded for exceptional service delivery and impact in underserved communities.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    year: 2022,
    title: "Biomedical Research Impact Award",
    organization: "Medical Research Foundation",
    description:
      "Honored for significant contributions to advancing biomedical research with practical applications.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    year: 2022,
    title: "Community Health Champion",
    organization: "National Public Health Institute",
    description:
      "Recognized for innovative community health programs that have measurably improved health outcomes.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    year: 2021,
    title: "Healthcare Volunteer Program of the Year",
    organization: "Volunteer Health Alliance",
    description:
      "Awarded for excellence in volunteer management and impactful healthcare volunteer initiatives.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    year: 2021,
    title: "Transparency in Nonprofit Management",
    organization: "Charity Excellence Foundation",
    description:
      "Recognized for exceptional transparency in financial reporting and program impact measurement.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

// Sample key achievements
const keyAchievements = [
  {
    title: "Developed Rapid Diagnostic Test",
    description:
      "Created an affordable, rapid diagnostic test for tropical diseases that can be used in resource-limited settings without laboratory infrastructure.",
    year: 2023,
    category: "Research",
    icon: <Microscope className="h-6 w-6 text-primary" />,
  },
  {
    title: "Expanded Telemedicine Program",
    description:
      "Connected 50+ remote communities to specialist medical care through our telemedicine network, providing over 5,000 virtual consultations.",
    year: 2023,
    category: "Healthcare Access",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "Launched Medical Training Initiative",
    description:
      "Trained over 1,000 local healthcare workers in essential medical skills, creating sustainable healthcare capacity in underserved regions.",
    year: 2022,
    category: "Education",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    title: "Established Biomedical Research Center",
    description:
      "Opened a state-of-the-art research facility focused on neglected tropical diseases, employing 30 researchers and supporting 15 research projects.",
    year: 2022,
    category: "Infrastructure",
    icon: <Microscope className="h-6 w-6 text-primary" />,
  },
  {
    title: "Completed Vaccine Distribution Campaign",
    description:
      "Successfully distributed essential vaccines to 100,000 children in hard-to-reach communities, achieving 95% coverage in target areas.",
    year: 2021,
    category: "Public Health",
    icon: <Pill className="h-6 w-6 text-primary" />,
  },
  {
    title: "Published Groundbreaking Research",
    description:
      "Our research team published findings on an innovative treatment approach for malaria in the world's leading medical journal.",
    year: 2021,
    category: "Research",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

// Sample program impact data
const programImpact = [
  {
    program: "Clinical Care Initiative",
    metrics: [
      {
        label: "Patients Treated",
        value: 8500,
        icon: <HeartPulse className="h-5 w-5 text-primary" />,
      },
      {
        label: "Clinics Established",
        value: 24,
        icon: <Stethoscope className="h-5 w-5 text-primary" />,
      },
      {
        label: "Healthcare Workers Trained",
        value: 350,
        icon: <Users className="h-5 w-5 text-primary" />,
      },
    ],
    description:
      "Our Clinical Care Initiative provides essential medical services to underserved communities through established clinics and mobile medical units.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    program: "Biomedical Research Program",
    metrics: [
      {
        label: "Research Projects",
        value: 28,
        icon: <Microscope className="h-5 w-5 text-primary" />,
      },
      {
        label: "Publications",
        value: 18,
        icon: <FileText className="h-5 w-5 text-primary" />,
      },
      {
        label: "Research Partnerships",
        value: 12,
        icon: <Users className="h-5 w-5 text-primary" />,
      },
    ],
    description:
      "Our research program focuses on developing innovative solutions for neglected tropical diseases and improving healthcare delivery in resource-limited settings.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    program: "Medical Education & Training",
    metrics: [
      {
        label: "Healthcare Professionals Trained",
        value: 1200,
        icon: <GraduationCap className="h-5 w-5 text-primary" />,
      },
      {
        label: "Training Programs Conducted",
        value: 42,
        icon: <Calendar className="h-5 w-5 text-primary" />,
      },
      {
        label: "Training Centers Established",
        value: 8,
        icon: <MapPin className="h-5 w-5 text-primary" />,
      },
    ],
    description:
      "We build healthcare capacity through comprehensive training programs for doctors, nurses, community health workers, and other medical professionals.",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    program: "Medical Supply Distribution",
    metrics: [
      {
        label: "Medicines Distributed",
        value: 85000,
        icon: <Pill className="h-5 w-5 text-primary" />,
      },
      {
        label: "Medical Equipment Provided",
        value: 1200,
        icon: <Stethoscope className="h-5 w-5 text-primary" />,
      },
      {
        label: "Communities Reached",
        value: 320,
        icon: <Globe className="h-5 w-5 text-primary" />,
      },
    ],
    description:
      "Our supply chain ensures essential medicines and medical equipment reach communities with limited access to healthcare resources.",
    image: "/placeholder.svg?height=300&width=500",
  },
];

// Sample funding allocation data
const fundingAllocation = [
  { category: "Clinical Programs", percentage: 45 },
  { category: "Research Initiatives", percentage: 25 },
  { category: "Education & Training", percentage: 15 },
  { category: "Medical Supplies", percentage: 10 },
  { category: "Administrative", percentage: 5 },
];

// Sample upcoming recognition events
const upcomingEvents = [
  {
    id: "1",
    title: "Annual Impact Awards Ceremony",
    date: "2023-12-15",
    time: "6:00 PM - 9:00 PM",
    location: "Grand Medical Center Auditorium",
    description:
      "Join us for our annual celebration recognizing outstanding contributions to our mission. Awards will be presented to exceptional volunteers, staff, donors, and partners.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Research Recognition Symposium",
    date: "2024-01-20",
    time: "10:00 AM - 4:00 PM",
    location: "University Medical School",
    description:
      "A day dedicated to showcasing our research achievements and honoring the researchers and partners who have made significant contributions to biomedical advancement.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

// Format currency function
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Format number with commas
const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

export function ImpactAwardsPage() {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [expandedAchievement, setExpandedAchievement] = useState<string | null>(
    null
  );

  const toggleAchievement = (title: string) => {
    if (expandedAchievement === title) {
      setExpandedAchievement(null);
    } else {
      setExpandedAchievement(title);
    }
  };

  const currentYearStats =
    yearlyStatistics[selectedYear as keyof typeof yearlyStatistics];

  // Calculate growth percentages
  const calculateGrowth = (metric: keyof (typeof yearlyStatistics)["2023"]) => {
    const currentYear = Number.parseInt(selectedYear);
    const previousYear = (currentYear - 1).toString();

    if (yearlyStatistics[previousYear as keyof typeof yearlyStatistics]) {
      const current =
        yearlyStatistics[selectedYear as keyof typeof yearlyStatistics][metric];
      const previous =
        yearlyStatistics[previousYear as keyof typeof yearlyStatistics][metric];
      const growthPercentage = ((current - previous) / previous) * 100;
      return growthPercentage.toFixed(1);
    }
    return "N/A";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Our Impact & Recognition
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Celebrating our achievements, measuring our impact, and
              recognizing the collective efforts that advance our mission in
              biomedical care and research.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Key Impact Statistics
            </h2>

            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium">Select Year:</span>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {formatNumber(currentYearStats.patientsServed)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("patientsServed")}% from previous year
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Patients Served</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.researchProjects}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("researchProjects")}% from previous year
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Research Projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.medicalOutreach}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("medicalOutreach")}% from previous year
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Medical Outreach Events</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {currentYearStats.volunteersActive}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("volunteersActive")}% from previous year
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Active Volunteers</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">
                  {formatCurrency(currentYearStats.fundingSecured)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    {calculateGrowth("fundingSecured")}% from previous year
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Funding Secured</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {currentYearStats.countriesServed}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <span>Countries with active programs</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Global Reach</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {currentYearStats.publicationsReleased}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <span>Research publications released</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Scientific Contributions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold">
                  {formatNumber(currentYearStats.livesImpacted)}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <span>Total lives positively impacted</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium">Overall Impact</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/about#financials">
                View Detailed Annual Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Awards & Recognition
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {awardsAndRecognitions.map((award, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-4 flex items-center justify-between">
                    <Badge variant="outline">{award.year}</Badge>
                    <div className="rounded-full bg-primary/10 p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{award.title}</CardTitle>
                  <CardDescription>
                    Awarded by {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </CardContent>
                <div className="mt-4 flex items-center justify-center p-4">
                  <img
                    src={award.image || "/placeholder.svg"}
                    alt={`${award.title} award`}
                    className="h-16 w-auto object-contain opacity-80"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Program Impact
          </h2>

          <Tabs defaultValue="clinical" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="clinical">Clinical Care</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="supplies">Medical Supplies</TabsTrigger>
            </TabsList>

            {programImpact.map((program, index) => (
              <TabsContent
                key={index}
                value={program.program.toLowerCase().split(" ")[0]}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{program.program}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6 aspect-video w-full overflow-hidden rounded-md">
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.program}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                      {program.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            {metric.icon}
                          </div>
                          <h3 className="text-2xl font-bold">
                            {formatNumber(metric.value)}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" asChild>
                      <Link
                        to={`/programs/${program.program
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        Learn More About This Program
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Key Achievements
          </h2>

          <div className="mx-auto max-w-4xl space-y-4">
            {keyAchievements.map((achievement, index) => (
              <Card key={index} className="overflow-hidden">
                <div
                  className="flex cursor-pointer items-center justify-between p-6"
                  onClick={() => toggleAchievement(achievement.title)}
                >
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-3">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{achievement.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Badge variant="outline" className="mr-2">
                          {achievement.year}
                        </Badge>
                        <span>{achievement.category}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {expandedAchievement === achievement.title ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {expandedAchievement === achievement.title && (
                  <div className="border-t px-6 py-4">
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Allocation Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Funding Allocation
          </h2>

          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle>How We Use Our Resources</CardTitle>
                <CardDescription>
                  Transparency in how we allocate funds to maximize impact
                  across our programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {fundingAllocation.map((item, index) => (
                    <div key={index}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-sm text-muted-foreground">
                          {item.percentage}%
                        </span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-lg bg-muted p-4">
                  <p className="text-center text-sm text-muted-foreground">
                    We maintain a commitment to efficiency, with 95% of all
                    funds going directly to program expenses. View our detailed
                    financial reports for complete transparency.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" className="mr-4" asChild>
                  <Link to="/about#financials">Financial Reports</Link>
                </Button>
                <Button asChild>
                  <Link to="/donate">Support Our Work</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Annual Reports
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["2023", "2022", "2021", "2020"].map((year) => (
                <Card key={year} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-2 flex h-40 items-center justify-center rounded-md bg-primary/5">
                      <FileText className="h-16 w-16 text-primary/40" />
                    </div>
                    <CardTitle className="text-center">
                      {year} Annual Report
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-center text-sm text-muted-foreground">
                      Comprehensive overview of our activities, impact, and
                      financial performance for {year}.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`#download-${year}-report`}>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Recognition Events */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Upcoming Recognition Events
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
                        <Badge variant="outline">
                          {formatDate(event.date)}
                        </Badge>
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
                        <Link to={`/events/${event.id}`}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Help Us Achieve Even More
            </h2>
            <p className="mb-8 text-lg">
              Our impact is made possible by supporters like you. Join us in
              advancing biomedical care, research, and education for those who
              need it most.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/donate">Make a Donation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/volunteer">Become a Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
