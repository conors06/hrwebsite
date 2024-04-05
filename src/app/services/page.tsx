import { CardHoverEffectDemo } from '@/components/servicesCardEffectDemo';
import { Container } from '@/components/Container'

export default function Services() {
    return (
        <Container className="mt-4">
            <div className="relative isolate bg-pink dark:bg-zinc-900 sm:pt-32">
                {/* Background pattern */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mt-2 text-3xl dark:text-zinc-100 font-bold tracking-tight text-gray-900 sm:text-4xl">
                            HR Services
                        </p>

                    </div>
                </div>
            </div>
            <div className="mx-auto mt-8"> <CardHoverEffectDemo /></div>
        </Container>

    )

}

