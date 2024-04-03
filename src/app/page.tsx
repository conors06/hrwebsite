import { Container } from '@/components/Container'
import { TextGenerateEffectDemo } from '@/components/text-generate-demo';



export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-full">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Walshe HR
          </h1>
          <div className="mt-6 text-base text-center text-zinc-600 dark:text-zinc-400">
            <TextGenerateEffectDemo />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            hello
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">

          </div>
        </div>
      </Container>
    </>
  )
}
