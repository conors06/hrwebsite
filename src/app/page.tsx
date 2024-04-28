import { Container } from '@/components/Container'
import { SparklesCore } from '@/components/sparkles'
export default function Home() {
    return (
        <>
            <div className="relative z-0">
            </div>
            <Container className="relative z-10 mt-9">
                <div className="max-w-full">
                    <h1 className="text-center text-5xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl dark:text-zinc-100">
                        Walshe HR
                    </h1>
                    <div className="relative mx-auto mt-3 h-40 w-[20rem] sm:w-[40rem]">
                        {/* Gradients */}
                        <div className="absolute inset-x-0 top-0 mx-auto h-[2px] w-3/4 bg-gradient-to-r from-transparent via-rose-100 to-transparent blur-sm" />
                        <div className="absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-rose-100 to-transparent" />
                        <div className="absolute inset-x-0 top-0 mx-auto h-[5px] w-1/4 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent blur-sm" />
                        <div className="absolute inset-x-0 top-0 mx-auto h-px w-1/4 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="mx-auto h-full w-full"
                            particleColor="#c989cc"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] dark:bg-zinc-900"></div>
                    </div>
                </div>
                <div className="md:prose-lg lg:prose-xl prose mt-12 text-center text-zinc-600 dark:text-zinc-100">
                    I&apos;m Anna Marie, a HR Professional with more than 18
                    years experience working in a variety of sectors, for
                    example Healthcare, Not for Profit, Banking and Technology.
                    Knowledgeable in all areas of HR with particular expertise
                    in Healthcare in areas like Recruitment and Retention,
                    Training and Development, Absence Management, Employee
                    Relations, Performance Management, Employee Wellbeing and
                    Coaching. Holds a Masters in Human Resource Management and
                    most recently a Professional Diploma in Coaching and
                    Mentoring. Passionate about people and the value that the
                    Human Resources function can bring to how people experience
                    work.
                </div>
            </Container>
        </>
    )
}
