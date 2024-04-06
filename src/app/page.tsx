import { Container } from '@/components/Container'
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';
import Head from 'next/head';


export default async function Home() {

  return (
    <>
      <Head>
        <link rel="canonical" href="https://walshehr.ie" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-full">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Walshe HR
          </h1>
          <div className="mt-6 text-xl text-center text-zinc-600 dark:text-zinc-400">
            I’m Anna Marie, a HR Professional with more than 18 years experience working in
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
        </div>
      </Container>
    </>
  )
}
