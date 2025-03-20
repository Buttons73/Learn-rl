"use client"

// import { useCarousel } from '@/hooks/useCarousel'
// import Image from 'next/image'
import Link from "next/link"
import { ArrowRight, BookOpen, Users, Code, Video, Zap, Globe, Clock } from "lucide-react"

const Landing = () => {
  // const currrentImage = useCarousel({totalImages: 3})

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full bg-gradient-to-b pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">Courses</h1>
              <p className="text-lg md:text-xl text-gray-400">
                Access our comprehensive library of professional courses designed to elevate your skills.
                <br />
                Learn at your own pace with on-demand content tailored to your career goals.
              </p>
              <div className="mt-2">
                <Link href="/search">
                  <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    Search for Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
              {/* {["/hero1.jpg","/hero2.jpg","/hero3.jpg"].map((img, i) => (
                <Image key={img} src={img || "/placeholder.svg"} alt="" fill priority={i === currrentImage} sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className={`landing__hero-image ${
                  i === currrentImage ? "landing__hero-image--active" : ""  
                  }`} 
                />
              ))} */}
              <img src="/hero1.jpg" alt="hero-image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Pair Programming Section */}
      <div className="py-16 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full ">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Live Pair Programming</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Collaborate in real-time with expert mentors and peers to solve complex problems and accelerate your
              learning journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6  rounded-lg border border-gray-700">
              <Code className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Collaboration</h3>
              <p className="text-gray-400 text-center">
                Code together in a shared environment with synchronized editing and instant feedback.
              </p>
            </div>
            <div className="flex flex-col items-center p-6  rounded-lg border border-gray-700">
              <Zap className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Assistance</h3>
              <p className="text-gray-400 text-center">
                Get personalized AI assistance to boost your learning experience.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg border border-gray-700">
              <Globe className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Better Community</h3>
              <p className="text-gray-400 text-center">
                Connect with learners worldwide to share knowledge and build your professional network.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full">
              <Video className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">See It In Action</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Watch our platform in action and discover how our interactive learning environment can transform your
              educational experience.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden border-2 border-gray-700 bg-gray-900 flex items-center justify-center">
            <div className="text-center p-8">
              <Clock className="h-16 w-16 text-blue-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-medium text-gray-300">Demo Video Coming Soon</h3>
              <p className="text-gray-400 mt-2">
                Our team is preparing an interactive demonstration of the platform&apos;s capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">Featured Courses</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore our curated selection of industry-leading courses designed to help you master in-demand skills and
              advance your professional development.
            </p>
          </div>

          {/* Featured courses grid would go here */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for course cards */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-2 transition-all hover:shadow-md"
              >
                <div className="aspect-video w-full rounded-md bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">Course Title {i}</h3>
                  <p className="text-sm text-gray-400 mt-2">Course description goes here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

