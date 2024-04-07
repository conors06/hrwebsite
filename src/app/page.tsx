import { Container } from '@/components/Container'
import { SparklesCore } from "@/components/sparkles";


export default function Home() {
  return (
    <>

      <Container className="mt-9">
          <div className="max-w-full">
            <h1 className="text-4xl text-center font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Walshe HR
            </h1>
            <div className="w-[20rem] sm:w-[40rem] mt-3 h-40 mx-auto relative">
              {/* Gradients */}
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-rose-100 to-transparent h-[2px] w-3/4 blur-sm mx-auto" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-rose-100 to-transparent h-px w-3/4 mx-auto" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent h-px w-1/4 mx-auto" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full mx-auto"
                particleColor="#c989cc"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

            </div>
          </div>
          <div className="mt-12 text-xl text-center text-zinc-600 dark:text-zinc-100">
            I&apos;m Anna Marie, a HR Professional with more than 18 years experience working in
            a variety of sectors, for example Healthcare, Not for Profit,
            Banking and Technology.
            Knowledgeable in all areas of HR with particular expertise in
            Healthcare in areas like Recruitment and Retention, Training
            and Development, Absence Management, Employee Relations,
            Performance Management, Employee Wellbeing and Coaching.
            Holds a Masters in Human Resource Management and most
            recently a Professional Diploma in Coaching and Mentoring.
            Passionate about people and the value that the Human
            Resources function can bring to how people experience work.
          </div>
      </Container>

    </>
  )
}
