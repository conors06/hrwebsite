import { CardHoverEffectDemo } from '@/components/aceternity/servicesCardEffectDemo'
import { Container } from '@/components/Container'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Services',
}
export default function Services() {
    return (
        <Container className="mt-0">
            <div className="bg-pink relative isolate sm:pt-32 dark:bg-zinc-900">
                {/* Background pattern */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                            HR Services
                        </h1>
                    </div>
                </div>
            </div>
            <CardHoverEffectDemo />
        </Container>
    )
}
