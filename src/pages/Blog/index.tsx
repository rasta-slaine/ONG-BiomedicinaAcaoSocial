"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, User, Tag, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "How We're Making a Difference in Rural Communities",
    excerpt:
      "Learn about our initiatives that have transformed lives in underserved rural areas over the past year.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-10-25",
    author: "Maria Johnson",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Impact Stories",
    tags: ["Rural Development", "Community", "Success Stories"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Volunteer Stories",
    tags: ["Volunteers", "Education", "Literacy"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Education",
    tags: ["Environment", "Conservation", "Tips"],
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "4",
    title: "Our Annual Report: Transparency in Action",
    excerpt:
      "A detailed look at our finances, projects, and impact over the past fiscal year.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.",
    date: "2023-09-30",
    author: "Emily Rodriguez",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Reports",
    tags: ["Transparency", "Finance", "Impact"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Projects",
    tags: ["Water", "Health", "Infrastructure"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Education",
    tags: ["Youth", "Leadership", "Education"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Partnerships",
    tags: ["Technology", "Sustainability", "Innovation"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
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
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Advocacy",
    tags: ["Climate Change", "Policy", "Advocacy"],
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
];

// Extract unique categories and tags
const categories = Array.from(new Set(blogPosts.map((post) => post.category)));
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedTag, setSelectedTag] = useState("All Tags");

  // Filter posts based on search query, category, and tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;
    const matchesTag =
      selectedTag === "All Tags" || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with our latest news, stories, and insights about our
              work, impact, and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-2xl font-bold">Featured Stories</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      By {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Filters and Blog Posts */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8 grid gap-6 md:grid-cols-4">
            <div className="md:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 md:col-span-1">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Categories">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger>
                  <SelectValue placeholder="Tag" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Tags">All Tags</SelectItem>
                  {allTags.map((tag) => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    By {post.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer"
                        onClick={() => setSelectedTag(tag)}
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="my-12 text-center">
              <h3 className="text-xl font-medium">No posts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Previous page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-9 w-9"
                aria-current="page"
              >
                1
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9">
                2
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Next page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted py-16">
        <div className="container">
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
      </section>
    </div>
  );
}
