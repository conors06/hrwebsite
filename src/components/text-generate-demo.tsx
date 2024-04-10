'use client'

import { TextGenerateEffect } from '@/components/text-generate-effect'

const words = `I’m Anna Marie, a HR Professional with more than 18 years experience working in
a variety of sectors, for example Healthcare, Not for Profit,
Banking and Technology.
Knowledgeable in all areas of HR with particular expertise in
Healthcare in areas like Recruitment and Retention, Training
and Development, Absence Management, Employee Relations,
Performance Management, Employee Wellbeing and Coaching.
Holds a Masters in Human Resource Management and most
recently a Professional Diploma in Coaching and Mentoring.
Passionate about people and the value that the Human
Resources function can bring to how people experience work.`

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />
}
