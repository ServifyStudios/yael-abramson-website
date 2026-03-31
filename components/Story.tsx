export default function Story() {
  return (
    <section id="story" style={{ background: '#FAF8F5' }} className="py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Label */}
        <p className="text-xs tracking-[0.45em] uppercase font-sans mb-6" style={{ color: '#9B4FD8' }}>
          My Story
        </p>

        {/* Opening headline */}
        <h2
          className="font-serif mb-16"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            lineHeight: '1.22',
            letterSpacing: '-0.015em',
            color: '#1E0A35',
          }}
        >
          My dream is to share my story in every mental health institute in Israel and around the world.
        </h2>

        {/* Story body — part 1 */}
        <div className="space-y-7 font-sans text-lg leading-[1.9]" style={{ color: '#3a3a4a' }}>
          <p>
            I've healed from manic depression, psychosis, post-trauma, and suicidal ideation. When I was 26, I tried to take my life.
          </p>
          <p>
            I'm 42 now. And I never imagined life could feel the way it feels today. Not only do I love living, I love who I am. I didn't know that was possible for a human being.
          </p>
          <p>
            When I work with people, I help the person who's struggling. I help their parents. I've shared my story at universities, at the Hebrew University, at different institutes. And my message is always the same: healing is real. And it doesn't have to hurt the way people think it does.
          </p>
          <p>
            There's a whole other way of living on the other side of all of this. Beyond the diagnosis, beyond who I thought I was.
          </p>
          <p>
            I think people stop trying because the way we look at these illnesses is so boxed in. People have tried for so long and didn't succeed because they were trying to get off medication, trying to heal themselves in the wrong way. I don't have a problem with medication. It saved my life.
          </p>
          <p>
            But when I saw how the psychotic episodes were created in my mind, in that moment, I knew I was healthy. I was still on medication. And I knew that there would come a time when I would be free of them as well.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote
          className="my-16 pl-8 py-2"
          style={{ borderLeft: '2px solid #B470F0' }}
        >
          <p
            className="font-serif italic"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              lineHeight: '1.55',
              color: '#3B1066',
            }}
          >
            "I said to myself: if I fall, I'm going to fall on life. I can lose everything but I won't lose myself."
          </p>
        </blockquote>

        {/* Story body — part 2 */}
        <div className="space-y-7 font-sans text-lg leading-[1.9]" style={{ color: '#3a3a4a' }}>
          <p>
            What I think matters more than anything is this: what happened to you before your first episode? What was happening inside you, around you, in your life? Because that person, the one who existed before all of this, is still inside you. Those feelings are still there. Those ideas about yourself are still there.
          </p>
          <p>
            That's where I work with people. They can still be on medication. It doesn't matter. Their life can still be brilliant.
          </p>
          <p>
            I had to walk through fire alone. No one understood what I understood about myself, and no one could support my way. People pointed me in directions that were sometimes harmful. I had to trust life more than I trusted my fear.
          </p>
          <p>
            And that's what I want for the people I work with. To help them connect back to who they are. To stop spinning around their problems and start spinning around themselves.
          </p>
        </div>

      </div>
    </section>
  )
}
