import Link from 'next/link'
import { LinkedInIcon } from '@/components/SocialIcons'
import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            className="transition hover:text-teal-500 dark:hover:text-teal-400"
        >
            {children}
        </Link>
    )
}

function SocialLink({
    icon: Icon,
    ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props} prefetch={true}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="mt-32 flex-none">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-100">
                                <SocialLink
                                    href="https://www.linkedin.com/in/annamariewalshe/"
                                    aria-label="Follow on LinkedIn"
                                    icon={LinkedInIcon}
                                />
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/services">HR Services</NavLink>
                                <NavLink href="/testimonials">
                                    Testimonials
                                </NavLink>
                                <NavLink href="/contact">Contact Us</NavLink>
                            </div>
                            <p className="text-sm text-zinc-400 dark:text-zinc-100">
                                &copy; {new Date().getFullYear()} Walshe HR. All
                                rights reserved.
                            </p>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}
