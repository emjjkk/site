"use client"

import { Button } from "@/components/ui/button"
import { LuCalendar, LuClock, LuChevronRight } from "react-icons/lu"

const posts = [
  {
    id: 1,
    title: "How to Build a Scalable Learning Platform",
    preview:
      "Learn the core principles behind designing and deploying education platforms that can handle thousands of learners seamlessly.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    date: "September 5, 2025",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "Why Africa is the Future of EdTech",
    preview:
      "With a growing youth population and increasing internet access, Africa is poised to become a global hub for innovation in education.",
    image:
      "https://images.unsplash.com/photo-1584697964403-cf3754a2c5a3?auto=format&fit=crop&w=1200&q=80",
    date: "August 29, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "5 Emerging Tech Skills Employers Want in 2025",
    preview:
      "From AI literacy to cybersecurity, here's what hiring managers are looking for — and how you can stay ahead of the curve.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    date: "August 12, 2025",
    readTime: "5 min read",
  },
]

export default function BlogClient() {
  return (
    <main className="w-full min-h-[100dvh] border-b">
      {/* Hero / Header Section */}
      <section className="bg-pattern border-b">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Insights, Trends & Stories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles, resources, and thought leadership on
            online learning, education trends, and professional growth.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <div className="space-y-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row gap-6 border-b pb-10 last:border-b-0"
            >
              {/* Blog Image */}
              <div className="md:w-1/3 h-[220px] md:h-[200px] rounded-lg overflow-hidden border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base mb-5">
                    {post.preview}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-5 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <LuCalendar className="text-base" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <LuClock className="text-base" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Read More Button */}
                  <Button
                    variant="default"
                    className="flex items-center gap-2 group"
                  >
                    Read More
                    <LuChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 border-t py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Ahead in the Learning Curve
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who get weekly insights, updates, and
            curated resources delivered straight to their inbox.
          </p>
          <Button size="lg" className="rounded-sm">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>
    </main>
  )
}
