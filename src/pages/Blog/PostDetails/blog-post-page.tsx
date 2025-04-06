"use client";

import { Input } from "@/components/ui/input";

import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  User,
  Tag,
  ArrowLeft,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  AlertCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How We're Making a Difference in Rural Communities",
    excerpt:
      "Learn about our initiatives that have transformed lives in underserved rural areas over the past year.",
    content: `
      <p>For the past year, our organization has been deeply involved in transforming lives in underserved rural communities. These efforts have not only improved living conditions but have also empowered residents to build sustainable futures for themselves and their families.</p>
      
      <h2>Identifying the Challenges</h2>
      <p>Rural communities often face unique challenges that urban areas don't encounter. Limited access to clean water, healthcare, education, and economic opportunities can create cycles of poverty that are difficult to break. Our first step was to conduct comprehensive needs assessments in partnership with community leaders to understand the specific challenges each community faced.</p>
      
      <p>Through surveys, community meetings, and one-on-one interviews, we identified several key areas where intervention could make the most significant impact:</p>
      <ul>
        <li>Access to clean water and sanitation</li>
        <li>Sustainable agriculture practices</li>
        <li>Educational opportunities for children and adults</li>
        <li>Healthcare access and preventive care</li>
        <li>Economic development and microenterprise support</li>
      </ul>
      
      <h2>Implementing Sustainable Solutions</h2>
      <p>With a clear understanding of each community's needs, we developed tailored programs that addressed their specific challenges while building local capacity for long-term sustainability.</p>
      
      <h3>Clean Water Initiatives</h3>
      <p>In communities where access to clean water was the primary concern, we installed solar-powered water pumps and filtration systems. More importantly, we trained local residents to maintain these systems, ensuring they would continue to function long after our direct involvement ended.</p>
      
      <h3>Agricultural Training Programs</h3>
      <p>For communities dependent on agriculture, we introduced drought-resistant crops and sustainable farming techniques. Our agricultural experts worked alongside local farmers, respecting traditional knowledge while introducing innovations that increased crop yields and reduced environmental impact.</p>
      
      <h3>Education and Skills Development</h3>
      <p>We established community learning centers that serve both children and adults. These centers provide basic education for children who cannot access formal schooling and vocational training for adults looking to develop marketable skills.</p>
      
      <h2>Measuring Our Impact</h2>
      <p>Over the past year, our initiatives have reached 15 rural communities, directly benefiting more than 12,000 individuals. Some key achievements include:</p>
      <ul>
        <li>8 new clean water systems installed, providing safe drinking water to 5,000+ people</li>
        <li>300+ farmers trained in sustainable agriculture techniques, resulting in an average 40% increase in crop yields</li>
        <li>5 community learning centers established, serving 800+ children and 500+ adults</li>
        <li>150 microloans disbursed to support small business development, with a 95% repayment rate</li>
        <li>12 community health workers trained, providing basic healthcare services to previously underserved areas</li>
      </ul>
      
      <h2>Stories of Transformation</h2>
      <p>While statistics are important, the real measure of our impact lies in the individual stories of transformation. People like Maria, a single mother who used a microloan to start a small tailoring business that now employs three other women from her village. Or Joseph, who applied the sustainable farming techniques he learned to triple his crop yield, allowing him to send his children to school for the first time.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we look to the future, we're committed to expanding our reach while deepening our impact in the communities we already serve. We're developing new partnerships with local governments and businesses to create more comprehensive support systems for rural development.</p>
      
      <p>We believe that sustainable change happens when communities are empowered to lead their own development. Our role is to provide resources, knowledge, and support, but the true heroes of these transformation stories are the community members themselves, who work tirelessly to build better futures for their families and neighbors.</p>
      
      <p>With continued support from our donors and partners, we're confident that we can reach even more rural communities in the coming year, bringing hope and practical assistance to those who need it most.</p>
    `,
    date: "2023-10-25",
    author: "Maria Johnson",
    authorTitle: "Program Director, Rural Development",
    authorBio:
      "Maria has over 15 years of experience in international development, with a focus on rural community empowerment and sustainable agriculture.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Impact Stories",
    tags: ["Rural Development", "Community", "Success Stories"],
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
    relatedPosts: ["2", "5", "6"],
  },
  {
    id: "2",
    title: "Volunteer Spotlight: Meet Sarah",
    excerpt:
      "Sarah has dedicated over 500 hours to our literacy program. Read her inspiring story.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-11-05",
    author: "David Chen",
    authorTitle: "Volunteer Coordinator",
    authorBio:
      "David manages our volunteer programs and has a passion for connecting people with meaningful service opportunities.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Volunteer Stories",
    tags: ["Volunteers", "Education", "Literacy"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    relatedPosts: ["1", "3", "6"],
  },
  {
    id: "3",
    title: "5 Ways You Can Support Environmental Conservation",
    excerpt:
      "Simple but effective actions everyone can take to help protect our planet's natural resources.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-11-12",
    author: "James Wilson",
    authorTitle: "Environmental Program Manager",
    authorBio:
      "James leads our environmental conservation initiatives and has a background in ecology and sustainable development.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Education",
    tags: ["Environment", "Conservation", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    relatedPosts: ["5", "7", "8"],
  },
  {
    id: "5",
    title: "Clean Water Initiative Reaches 10 New Villages",
    excerpt:
      "Our clean water project has expanded to reach 10 more communities, providing safe drinking water to over 5,000 people.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-10-15",
    author: "Robert Kim",
    authorTitle: "Water Program Director",
    authorBio:
      "Robert specializes in water infrastructure projects and has implemented clean water solutions in over 30 countries.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Projects",
    tags: ["Water", "Health", "Infrastructure"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    relatedPosts: ["1", "3", "7"],
  },
  {
    id: "6",
    title: "Youth Leadership Program Graduates 50 New Leaders",
    excerpt:
      "Our flagship youth program celebrates another successful year with 50 graduates ready to make a difference.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-11-20",
    author: "Sophia Martinez",
    authorTitle: "Youth Program Coordinator",
    authorBio:
      "Sophia has dedicated her career to empowering young people through education and leadership development.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Education",
    tags: ["Youth", "Leadership", "Education"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    relatedPosts: ["1", "2", "7"],
  },
  {
    id: "7",
    title: "Partnership Spotlight: Collaboration with GreenTech",
    excerpt:
      "Our new partnership with GreenTech is bringing sustainable technology to communities in need.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-10-05",
    author: "Thomas Lee",
    authorTitle: "Partnerships Manager",
    authorBio:
      "Thomas builds strategic partnerships that amplify our impact and bring innovative solutions to the communities we serve.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Partnerships",
    tags: ["Technology", "Sustainability", "Innovation"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    relatedPosts: ["3", "5", "8"],
  },
  {
    id: "8",
    title: "Climate Change Advocacy: Our Meeting with Policymakers",
    excerpt:
      "A recap of our recent advocacy efforts and meetings with key policymakers on climate action.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-09-15",
    author: "Aisha Patel",
    authorTitle: "Advocacy Director",
    authorBio:
      "Aisha leads our policy and advocacy work, focusing on environmental justice and sustainable development policies.",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Advocacy",
    tags: ["Climate Change", "Policy", "Advocacy"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
    relatedPosts: ["3", "7", "5"],
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

export function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();

  // Find the post with the matching ID
  const post = blogPosts.find((p) => p.id === postId);

  // If post not found, show error message
  if (!post) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Blog post not found. The post you're looking for may have been
            removed or doesn't exist.
          </AlertDescription>
        </Alert>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id))
    : [];

  return (
    <div className="bg-background pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-black/50 md:h-[50vh]">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="container relative z-10 flex h-full flex-col justify-end pb-8">
          <Button
            variant="outline"
            size="sm"
            className="mb-4 w-fit bg-background/80 backdrop-blur-sm"
            asChild
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Badge className="mb-2 w-fit">{post.category}</Badge>
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Post Content */}
        <div className="lg:col-span-2">
          <article className="prose max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Share Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="mr-4 font-medium">Share this post:</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Share via Email</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Author and Related Posts */}
        <div className="space-y-8">
          {/* Author Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={post.authorImage || "/placeholder.svg"}
                    alt={post.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl">{post.author}</CardTitle>
                  <CardDescription>{post.authorTitle}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.authorBio}</p>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-bold">Related Posts</h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                    <div className="group flex overflow-hidden rounded-lg border transition-all hover:border-primary hover:shadow-md">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-3">
                        <div>
                          <h3 className="font-medium group-hover:text-primary">
                            {relatedPost.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {formatDate(relatedPost.date)}
                          </p>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="mr-1 h-3 w-3" />
                          By {relatedPost.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Support Our Mission</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Help us continue making a difference in communities worldwide.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">
                Your donation helps fund our programs and initiatives that
                create lasting positive change.
              </p>
              <Button variant="secondary" className="w-full" asChild>
                <Link to="/donate">Donate Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mt-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-6 text-muted-foreground">
              Stay updated with our latest stories, events, and opportunities to
              get involved.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input
                placeholder="Enter your email"
                className="sm:min-w-[300px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
