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
    </>
  )
}
