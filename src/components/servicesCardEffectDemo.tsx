import { HoverEffect } from '@/components/servicesCardEffect'

export function CardHoverEffectDemo() {
    return (
        <div className="mx-auto max-w-5xl px-8">
            {/* @ts-ignore */}
            <HoverEffect items={projects as { title: string; description: string }[]} />
        </div>
    )
}

export const projects = [
    {
        title: 'HR Policies and Procedures',
        description: (
            <>
                <ul>
                    <li>Guidance and support on all HR related issues:</li>
                    <br></br>
                    <li>&#x2022; Employment Legislation</li>
                    <li>&#x2022; HR Policies & Procedures</li>
                    <li>&#x2022; Employee Handbooks</li>
                    <li>&#x2022; Workplace investigations</li>
                    <li>
                        &#x2022; Support in managing disciplinary and grievance
                        issues
                    </li>
                </ul>
            </>
        ),
    },

    {
        title: 'Recruitment',
        description: (
            <>
                <ul>
                    <li>
                        Support with recruitment from sourcing great candidates
                        through to interview and selection.
                    </li>
                </ul>
            </>
        ),
    },
    {
        title: 'Training and Coaching',
        description: (
            <>
                <ul>
                    <li>
                        Coaching, Training and support for Management on all
                        people issues:
                    </li>
                    <br></br>
                    <li>&#x2022; Performance and disciplinary issues</li>
                    <li>&#x2022; Workplace conflict</li>
                    <li>&#x2022; Bullying and harassment</li>
                    <li>&#x2022; Complaints or grievances</li>
                </ul>
            </>
        ),
    },
]
