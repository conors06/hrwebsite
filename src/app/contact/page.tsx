import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container2'
import { FormComponent } from '@/components/formComponent'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Contact',
}
export default function Contact() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="relative isolate bg-white dark:bg-zinc-900">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden rounded-3xl bg-gray-300 ring-1 ring-gray-900/10 lg:w-[52.5%] dark:bg-zinc-800">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_right,white,transparent)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            x="100%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path
                                                d="M130 200V.5M.5 .5H200"
                                                fill="none"
                                            />
                                        </pattern>
                                    </defs>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        strokeWidth={0}
                                        fill="white"
                                    />
                                    <svg
                                        x="100%"
                                        y={-1}
                                        className="overflow-visible fill-gray-50"
                                    >
                                        <path
                                            d="M-470.5 0h201v201h-201Z"
                                            strokeWidth={0}
                                        />
                                    </svg>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        strokeWidth={0}
                                        fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                                    />
                                </svg>
                            </div>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                                Get in touch
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Anna Marie Walshe, Cabinteely, Dublin 18
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">
                                            Telephone
                                        </span>
                                        <PhoneIcon
                                            className="h-7 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            className="hover:text-gray-900"
                                            href="tel:+353 (86) 3807524"
                                        >
                                            +353 (86) 3807524
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon
                                            className="h-7 w-6 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </dt>
                                    <dd>
                                        <a
                                            className="hover:text-gray-900"
                                            href="annamarie@walshehr.ie"
                                        >
                                            annamarie@walshehr.ie
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <FormComponent />
                </div>
            </div>
        </Container>
    )
}
