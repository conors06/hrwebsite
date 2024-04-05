import { CardHoverEffectDemo } from '@/components/servicesCardEffectDemo';
import { Container } from '@/components/Container'

export default function Services() {
    return (
        <Container className="mt-4">
            <div className="relative isolate bg-pink dark:bg-zinc-900 sm:pt-32">
                {/* Background pattern */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                            HR Services
                        </h1>

                    </div>
                </div>
            </div>
            <div className="mx-auto mt-8"> <CardHoverEffectDemo /></div>
        </Container>

    )

}

