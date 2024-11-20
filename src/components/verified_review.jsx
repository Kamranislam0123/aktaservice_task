import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const reviews = [
  {
    rating: 5,
    title: "Sceptical at first, but",
    content: "I was skeptical at first, but the difference is undeniable! It's only been a month and my lashes are noticeably thicker and longer. I feel so much more confident without mascara!",
    author: "Emma S.",
  },
  {
    rating: 5,
    title: "Lives up top its promises",
    content: "Finally, a serum that lives up to its promises! My lashes were always brittle and short, but after using ForLash for just a few weeks, they've transformed. They're not only longer, but stronger and healthier looking.",
    author: "Sophia L.",
  },
  {
    rating: 5,
    title: "Visible improvements",
    content: "I've tried every lash enhancer out there, but this one is a game changer. I saw visible improvements in just under three weeks, and I love how my lashes now frame my eyes. Big thanks to ForLash!",
    author: "Ava J.",
  },
]

export default function VerifiedReview() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader className="space-y-2 pb-4">
                <div className="flex  justify-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="font-semibold text-center text-xl">{review.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-muted-foreground italic">"{review.content}"</p>
                <div className="space-y-2">
                  <p className="font-medium">{review.author}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <svg width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.897 0.601562L22.1156 4.31239L16.3264 0.601562L13.171 6.70892L6.30222 6.38816L6.62298 13.2544L0.515625 16.4124L4.22645 22.2016L0.515625 27.9829L6.62298 31.1409L6.30222 38.0071L13.1684 37.6864L16.3238 43.7937L22.1104 40.0829L27.897 43.799L31.055 37.6916L37.9212 38.0124L37.6031 31.1461L43.713 27.9829L40.0048 22.2016L43.7156 16.415L37.6083 13.2596L37.9264 6.39338L31.0602 6.71152L27.897 0.601562Z" fill="#F86C84"></path>
              <path d="M18.6301 29.4597L12.2255 23.0603C12.0411 22.8755 11.9375 22.6251 11.9375 22.364C11.9375 22.103 12.0411 21.8525 12.2255 21.6677L13.618 20.2752C13.8028 20.0908 14.0532 19.9872 14.3143 19.9872C14.5753 19.9872 14.8257 20.0908 15.0105 20.2752L19.3264 24.5884L28.5682 15.3466C28.753 15.1622 29.0034 15.0586 29.2645 15.0586C29.5256 15.0586 29.776 15.1622 29.9608 15.3466L31.3533 16.7391C31.5377 16.9239 31.6413 17.1743 31.6413 17.4354C31.6413 17.6964 31.5377 17.9468 31.3533 18.1316L20.02 29.4597C19.8353 29.6433 19.5855 29.7464 19.3251 29.7464C19.0646 29.7464 18.8148 29.6433 18.6301 29.4597Z" fill="white"></path>
              </svg>
                    Verified Buyer
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}