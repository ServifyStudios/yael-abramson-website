import Image from 'next/image'

export default function WhoAmI() {
  return (
    <section id="who-am-i" className="py-28 md:py-40 px-6" style={{ background: '#F8F4FF' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="order-2 md:order-1 flex items-center justify-center">
            <div
              className="relative mx-auto"
              style={{ width: '100%', maxWidth: '460px', aspectRatio: '1 / 1' }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ margin: '5%', border: '1.5px solid rgba(155, 79, 216, 0.2)' }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{ margin: '13%', border: '1.5px solid rgba(155, 79, 216, 0.32)' }}
              />
              <div
                className="absolute rounded-full overflow-hidden"
                style={{ top: '20%', left: '20%', width: '60%', height: '60%' }}
              >
                <Image
                  src="/yael.jpg"
                  alt="Yael Abramson"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div
                className="absolute flex items-center justify-center rounded-full bg-white shadow-lg"
                style={{ width: '52px', height: '52px', top: '14%', left: '4%', fontSize: '22px' }}
              >💜</div>
              <div
                className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
                style={{ width: '44px', height: '44px', top: '6%', right: '16%', fontSize: '18px' }}
              >✨</div>
              <div
                className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
                style={{ width: '46px', height: '46px', bottom: '18%', left: '3%', fontSize: '19px' }}
              >🌱</div>
              <div
                className="absolute flex items-center justify-center rounded-full bg-white shadow-md"
                style={{ width: '44px', height: '44px', bottom: '8%', right: '12%', fontSize: '18px' }}
              >🕊️</div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p
              className="text-xs tracking-[0.45em] uppercase font-sans mb-6"
              style={{ color: '#9B4FD8' }}
            >Who Am I</p>
            <h2
              className="font-serif mb-8"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: '1.2',
                letterSpacing: '-0.015em',
                color: '#1E0A35',
              }}
            >Yael Abramson</h2>
            <div className="space-y-5 font-sans text-lg leading-[1.85]" style={{ color: '#3a3a4a' }}>
              <p>Yael Abramson is a personal guide. She has a private practice, guiding people to a full experience of life. Yael&rsquo;s intention is to change the current narrative and perspective on mental illness and physical health, and to reduce suffering in the world.</p>
              <p>Yael has recovered from bipolar disorder after having 5 psychotic episodes in 10 years. She suffered from suicidal ideation for 15 years, and tried to take her life at the age of 26.</p>
              <p>In her journey, Yael came across an approach that opened her mind, and allowed her to feel freer, and to experience peace of mind.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
