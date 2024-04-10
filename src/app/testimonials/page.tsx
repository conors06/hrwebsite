import { Container } from '@/components/Container'
import Image from 'next/image'
import sjogLogo from '@/images/logos/sjog.png'
import childVisionLogo from '@/images/logos/childvision.jpg'
import learningTreeLogo from '@/images/logos/learningtree.png'
import Link from 'next/link'

function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <Container className="mt-4">
            <div className="relative isolate bg-white pb-32  sm:pt-32 dark:bg-zinc-900">
                {/* Background pattern */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
                            Testimonials
                        </h1>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm text-gray-900 sm:mt-20 lg:max-w-none lg:grid-cols-2 xl:mx-0 xl:grid-cols-2">
                        <div className="space-y-32">
                            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <blockquote className="min p-6 text-lg font-semibold  leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>{`"Anna Marie is the person you want to meet when you require HR support services. Anna Marie fosters a healthy work environment that attracts and inspires excellence in people. Anna Marie is not a custodian of the HR Policies but can implement the policies in a way that informs, and promotes feedback and real staff engagement which is very difficult to do. Anna Marie does this naturally, she has true integrity and her knowledge across the broad sector of HR is a real loss to our organisation but a major benefit to those who work with Anna Marie now and in the future."`}</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                    <Link
                                        href="https://sjogdublinsoutheastservices.ie/"
                                        target="_blank"
                                    >
                                        <Image
                                            className="h-auto w-auto flex-none"
                                            src={sjogLogo}
                                            alt="St John of God Logo"
                                            width={40}
                                            height={10}
                                        />
                                    </Link>
                                    <div className="flex-auto">
                                        <div className="font-semibold">
                                            {'Natalie Sheils'}
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                'Operations Manager, St John of God Community Services'
                                            }
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure className="h-thirdFigureFit rounded-2xl bg-white  shadow-lg ring-1 ring-gray-900/5">
                                <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>{`"Anna Marie Walshe has worked with us as a HR Consultant.  Her input to date has been exceptional. We are extremely delighted with the service that Anna Marie has provided us. She is very helpful, proactive and very pleasant to work with."`}</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                    <Link
                                        href="https://childvision.ie/"
                                        target="_blank"
                                    >
                                        <Image
                                            className="h-auto w-auto flex-none"
                                            src={childVisionLogo}
                                            alt="St John of God Logo"
                                            width={40}
                                            height={10}
                                        />
                                    </Link>
                                    <div className="flex-auto">
                                        <div className="font-semibold">
                                            {'Mary Leonard'}
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                'Interim CEO, ChildVision, National Education Centre for Blind Children'
                                            }
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure className="h-thirdFigureFit rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>{`"Anna Marie is a very skilled HR specialist, with a real gift for putting people at their ease. Sharp, insightful and drawing on a very impressive knowledge-base, Anna Marie has been a real asset to our organisation."`}</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                    <Link
                                        href="https://thelearningtree.ie/"
                                        target="_blank"
                                    >
                                        <Image
                                            className="h-auto w-auto flex-none"
                                            src={learningTreeLogo}
                                            alt="St John of God Logo"
                                            width={40}
                                            height={10}
                                        />
                                    </Link>
                                    <div className="flex-auto">
                                        <div className="font-semibold">
                                            {'James Forbes'}
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                'Board Member, The Learning Tree, Integrated Creche and Montessori'
                                            }
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="space-y-32">
                            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:h-secondFigureFit">
                                <blockquote className="mt-24 p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>{`"I have been more than happy with the quality of Anna Marie's work. Anna Marie is an absolute professional, nothing phases her. In addition to having a very impressive HR knowledge-base, Anna Marie is pragmatic, cogent and very personally engaging, putting people at their ease, something which is invaluable when having potentially difficult conversations."`}</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                    <Link
                                        href="https://childvision.ie/"
                                        target="_blank"
                                    >
                                        <Image
                                            className="h-auto w-auto flex-none"
                                            src={childVisionLogo}
                                            alt="St John of God Logo"
                                            width={40}
                                            height={10}
                                        />
                                    </Link>
                                    <div className="flex-auto">
                                        <div className="font-semibold">
                                            {'James Forbes'}
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                'Director of Care, ChildVision, National Education Centre for Blind Children'
                                            }
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:h-fourthFigureFit">
                                <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                    <p>{`"Anna Marie provided HR support to St John of God Dublin South East for many years. We always felt in safe hands and AnnaMarie's key skill was to work well with all stakeholders in providing effective and efficient HR services. AnnaMarie proved particularly effective regarding recruitment; attracting, processing and onboarding candidates. I would recommend AnnaMarie without hesitation for your HR support needs."`}</p>
                                </blockquote>
                                <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                    <Link
                                        href="https://sjogdublinsoutheastservices.ie/"
                                        target="_blank"
                                    >
                                        <Image
                                            className="h-auto w-auto flex-none"
                                            src={sjogLogo}
                                            alt="St John of God Logo"
                                            width={40}
                                            height={10}
                                        />
                                    </Link>
                                    <div className="flex-auto">
                                        <div className="font-semibold">
                                            {'Des North'}
                                        </div>
                                        <div className="text-gray-600">
                                            {
                                                'Interim CEO, ChildVision, National Education Centre for Blind Children'
                                            }
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
