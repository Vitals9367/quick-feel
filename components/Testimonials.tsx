import Image from 'next/image'
import Container from './Container'

const testimonials = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit.",
    author: "John",
    handle: "@johndoe",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    content: "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque.",
    author: "Bob",
    handle: "@thisisbob",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    content: "Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor.",
    author: "Micheal",
    handle: "@michael",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    content: "Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel.",
    author: "Max",
    handle: "@maxcook",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    content: "Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida.",
    author: "Emily",
    handle: "@emilysmith",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    content: "Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non.",
    author: "Linda",
    handle: "@thisislinda",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="testimonials">
      <Container>
        <div className="text-center space-y-4">
          <div className="text-[#2A9D8F] text-sm font-medium">TESTIMONIALS</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1D3557]">
            What our users say
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            What developers and founders of top companies around the internet are saying about QuickFeel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <div className="font-semibold text-[#1D3557]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

