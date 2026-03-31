import Image from 'next/image'

export default function WhoAmI() {
  return (
    <section id="who-am-i" className="bg-white py-28 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-32 items-center">

          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '3 / 4' }}>
              <Image
                src="/yael.jpg"
                alt="Yael Abramson"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p
              className="text-xs tracking-[0.45em] uppercase font-sans mb-6"
              style={{ color: '#9B4FD8' }}
            >
              Who Am I
            </p>

            <h2
              className="font-serif mb-8"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.015em',
                color: '#1E0A35',
              }}
            >
              Yael Abramson
            </h2>

            <div className="space-y-5 font-sans text-lg leading-[1.85]" style={{ color: '#3a3a4a' }}>
              <p>
                Yael Abramson is a personal guide. She has a private practice, guiding people to a full experience of life. Yael's intention is to change the current narrative and perspective on mental illness and physical health, and to reduce suffering in the world.
              </p>
              <p>
                Yael has recovered from bipolar disorder after having 5 psychotic episodes in 10 years. She suffered from suicidal ideation for 15 years, and tried to take her life at the age of 26.
              </p>
              <p>
                In her journey, Yael came across an approach that opened her mind, and allowed her to feel freer, and to experience peace of mind.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
