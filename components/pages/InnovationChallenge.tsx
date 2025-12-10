"use client"

import { useState } from "react"
import {
    Award,
    BookOpen,
    Calendar,
    ChevronDown,
    ChevronUp,
    Code,
    Lightbulb,
    MapPin,
    Presentation,
    Users,
} from "lucide-react"
import Image from "next/image"
import Header from "../Header"
import Footer from "../Footer"
import { useMobileMenu } from "@/providers/MobileMenuProvider"

const faqItems = [
    {
        question: "Do I need coding experience?",
        answer:
            "No, we'll guide you through everything. The challenge is beginner-friendly and you'll get hands-on support from mentors during each session.",
    },
    {
        question: "What if I don't have a team?",
        answer: "No problem. Come solo and we'll help you match with teammates during the first session.",
    },
    {
        question: "Is it free?",
        answer: "Yes, completely free. Just bring your curiosity, energy, and a laptop.",
    },
    {
        question: "What do I need to bring?",
        answer: "A laptop and your curiosity. We'll provide mentorship, project guidance, and refreshments.",
    },
]

const sessions = [
    {
        title: "Session 1",
        detail: "Friday, December 12, 2025 · 2:30 PM – 6:00 PM",
        icon: BookOpen,
        highlight: "Enactus: Brainstorming + design thinking · CEC: project planning and technical scoping",
    },
    {
        title: "Session 2",
        detail: "Friday, December 19, 2025 · 2:30 PM – 6:00 PM",
        icon: Code,
        highlight: "Enactus: Business model canvas · CEC: AI tools and prototyping",
    },
    {
        title: "Session 3",
        detail: "Friday, December 26, 2025 · 2:30 PM – 6:00 PM",
        icon: Presentation,
        highlight: "Joint session: elevate your pitch, demo projects to judges, and celebrate with awards",
    },
]

const overview = [
    { title: "Who Can Join?", text: "Open to ENSA students and guests — please register through the form below." },
    { title: "Team Size", text: "Teams of 2 to 3 students" },
    { title: "Tools You'll Use", text: "Figma, GitHub, AI copilots, and modern web/mobile stacks" },
    { title: "What You Get", text: "Certificate, mentorship, spotlight, and prizes" },
]

const learningTracks = [
    {
        title: "Day 1",
        description: "Turn your idea into a technical plan with solid scope and requirements.",
        icon: Lightbulb,
    },
    {
        title: "Day 2",
        description: "Use AI tools to accelerate prototyping with Figma, ChatGPT, and rapid dev workflows.",
        icon: Code,
    },
    { title: "Day 3", description: "Pitch your MVP to judges, get feedback, and compete for prizes.", icon: Presentation },
]

const processSteps = [
    { step: 1, title: "Form your team", description: "Find 1-2 teammates or join solo and get matched" },
    {
        step: 2,
        title: "Friday sessions",
        description:
            "Dec 12, 19, 26 2025 · 2:30 PM – 6:00 PM (15–30 min coffee/networking break between each Enactus and CEC block)",
    },
    { step: 3, title: "Build with mentors", description: "Work on your app with support from CEC CLUB × Enactus" },
    { step: 4, title: "Demo Day", description: "Show your prototype to the community and judges" },
    { step: 5, title: "Celebrate wins", description: "Certificates, prizes, and social media spotlight" },
]

const clubLogos = [
    { src: "/logos/cec.png", alt: "CEC CLUB logo" },
    { src: "/logos/enactus.png", alt: "Enactus ENSA Berrechid logo" },
    { src: "/logos/ensa.png", alt: "ENSA Berrechid logo" },
]


const Logos = () => (    <>
    <div
        key={clubLogos[0].alt}
        className="flex h-12 w-[100px] items-center justify-center rounded-full p-2.5 ring-1 ring-white/10"
    >
        <Image src={clubLogos[0].src} alt={clubLogos[0].alt} width={40} height={40} className="object-contain" />
    </div>
    {clubLogos.slice(1).map(({ src, alt }) => (
    <div
        key={alt}
        className="flex bg-white h-12 w-[100px] items-center justify-center rounded-full p-2.5 ring-1 ring-white/10"
    >
        <Image src={src} alt={alt} width={70} height={50} className="object-contain" />
    </div>
    ))}
</>)

export default function InnovationChallenge() {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu()
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            <Header />

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            )}

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden px-6 pb-16 pt-28">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,214,10,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,214,10,0.08),transparent_30%),linear-gradient(135deg,rgba(255,214,10,0.04),transparent)]" />
                    <div className="relative mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 rounded-full border border-[#2a2a2a] bg-black/40 px-4 py-2 uppercase tracking-[0.2em] text-xs text-[#ffd60a]">
                                CEC CLUB × Enactus <span className="text-white/70">ENSA Berrechid</span>
                            </div>
                            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                                Build With <span className="text-[#ffd60a]">Tech</span>
                            </h1>
                            <p className="text-lg text-gray-300">3 Fridays · 2:30 PM – 6:00 PM · Room TP3. 1 Idea. Real Impact.</p>
                            <p className="max-w-2xl text-base leading-relaxed text-gray-400">
                                A 3-week training and competition where first-year students turn ideas into real mobile/web apps —
                                powered by CEC CLUB × Enactus. Open to ENSA students and external guests (please register).
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#register"
                                    className="rounded-full bg-[#ffd60a] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                                >
                                    Register Your Team
                                </a>
                                <a
                                    href="#overview"
                                    className="rounded-full border border-[#ffd60a] px-6 py-3 text-sm font-semibold text-[#ffd60a] transition hover:bg-[#ffd60a]/10"
                                >
                                    Program Overview
                                </a>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#2a2a2a] bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-gray-300">
                                <span className="text-[#ffd60a]">Powered by</span>
                                <div className="flex items-center gap-3">
                                    <Logos />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-5 text-sm text-gray-300">
                                <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/40 px-4 py-2">
                                    <Users className="h-4 w-4 text-[#ffd60a]" />
                                    <span>15 Teams Max</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/40 px-4 py-2">
                                    <Calendar className="h-4 w-4 text-[#ffd60a]" />
                                    <span>3 Friday Sessions</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/40 px-4 py-2">
                                    <Award className="h-4 w-4 text-[#ffd60a]" />
                                    <span>Certificates & Prizes</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ffd60a]/20 blur-3xl" />
                            <div className="relative rounded-2xl border border-[#2a2a2a] bg-[#0f0f0f] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                                <div className="flex items-center justify-between rounded-xl border border-[#2a2a2a] bg-black/40 px-5 py-4">
                                    <div>
                                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Dates</p>
                                        <p className="text-lg font-semibold text-white">December 12, 19 &amp; 26, 2025</p>
                                        <p className="text-sm text-gray-400">2:30 PM – 6:00 PM · Room TP3</p>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full bg-[#ffd60a] px-3 py-2 text-xs font-semibold text-black">
                                        <Calendar className="h-4 w-4" />
                                        Fridays
                                    </div>
                                </div>
                            <div className="mt-4 grid gap-4">
                                {sessions.map(({ title, detail, icon: Icon, highlight }) => (
                                    <div
                                        key={title}
                                        className="flex items-center gap-4 rounded-xl border border-[#2a2a2a] bg-[#121212] px-4 py-3"
                                    >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffd60a]/10">
                                                <Icon className="h-6 w-6 text-[#ffd60a]" />
                                            </div>
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{title}</p>
                                                <p className="text-base font-semibold text-white">{detail}</p>
                                                <p className="text-sm text-gray-400">{highlight}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-3 text-xs text-gray-400">
                                    Coffee/networking break (15–30 min) between the Enactus and CEC blocks during each session.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview */}
                <section id="overview" className="bg-[#0f0f0f] px-6 py-16">
                    <div className="mx-auto max-w-6xl space-y-10">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                Event Overview
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">
                                Why join this <span className="text-[#ffd60a]">challenge?</span>
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
                                Go from idea to prototype in just 3 sessions with mentorship on planning, AI tooling, and product
                                storytelling. No prior experience required. Open to ENSA students and guests from outside the school
                                (just register below).
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {overview.map(({ title, text }) => (
                                <div
                                    key={title}
                                    className="rounded-xl border border-[#2a2a2a] bg-[#121212] px-6 py-5 transition hover:border-[#ffd60a]/70"
                                >
                                    <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{title}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Learning outcomes */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-6xl space-y-10">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                Learning Outcomes
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">What you'll learn</h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {learningTracks.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-[#ffd60a]/80"
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffd60a]/15">
                                        <Icon className="h-6 w-6 text-[#ffd60a]" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="bg-[#0f0f0f] px-6 py-16">
                    <div className="mx-auto max-w-5xl space-y-10">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                Process
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">How it works</h2>
                        </div>

                        <div className="relative">
                            <div className="absolute left-6 top-8 bottom-0 w-px bg-gradient-to-b from-[#ffd60a] via-[#ffd60a]/60 to-transparent" />
                            <div className="space-y-8">
                                {processSteps.map(({ step, title, description }) => (
                                    <div key={step} className="relative flex gap-6 rounded-xl border border-[#2a2a2a] bg-[#121212] p-6">
                                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#ffd60a] text-base font-bold text-black shadow-lg">
                                            {step}
                                            <span className="absolute inset-0 rounded-full border border-black/10" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                                            <p className="mt-2 text-sm text-gray-400">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prizes */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#ffd60a]/30 bg-gradient-to-r from-[#ffd60a] via-[#f4c20d] to-[#ffd60a] p-[1px]">
                        <div className="bg-[#121212]">
                            <div className="px-8 py-12 text-center md:px-12">
                                <h2 className="text-3xl font-bold text-white md:text-4xl">Prizes & Recognition</h2>
                                <p className="mt-3 text-lg text-gray-200">Everyone who participates wins</p>
                                <div className="mt-10 grid gap-6 md:grid-cols-3">
                                    {[
                                        { emoji: "🏅", title: "Certificate", text: "All participants receive a Certificate of Completion" },
                                        { emoji: "🎖️", title: "Winners", text: "Top teams get tech-themed prizes" },
                                        { emoji: "📢", title: "Spotlight", text: "Featured on club and school social channels" },
                                    ].map(({ emoji, title, text }) => (
                                        <div key={title} className="rounded-2xl bg-[#1a1a1a] p-6 shadow-lg">
                                            <div className="text-4xl">{emoji}</div>
                                            <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                                            <p className="mt-2 text-sm text-gray-400">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Registration */}
                <section id="register" className="bg-[#0f0f0f] px-6 py-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                Limited Spots
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Register your team</h2>
                            <p className="mt-3 text-lg text-gray-300">
                                Only <span className="font-semibold text-[#ffd60a]">15 teams</span> — secure your spot now.
                            </p>
                            <p className="mt-2 text-sm text-gray-400">
                                Open to ENSA students and external guests (please use the registration form linked below).
                            </p>
                        </div>

                        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
                            <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#ffd60a]">Organized by</span>
                                    <div className="flex items-center gap-2">
                                        <Logos />
                                    </div>
                                </div>

                                <div className="mb-6 flex flex-wrap gap-3 text-sm text-gray-400">
                                    <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] px-3 py-2">
                                        <Calendar className="h-4 w-4 text-[#ffd60a]" />
                                        Dec 12, Dec 19, Dec 26
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-[#2a2a2a] px-3 py-2">
                                        <MapPin className="h-4 w-4 text-[#ffd60a]" />
                                        ENSA Berrechid · Room TP3 · 2:30 PM – 6:00 PM
                                    </div>
                                </div>

                                <p className="mb-4 text-sm text-gray-400">
                                    External participants welcome — mention your affiliation in the team name or contact field.
                                </p>

                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300">
                                        The registration form collects your team name, contact, and project focus. Submit it once the team is ready.
                                    </p>
                                    <a
                                        href="https://forms.gle/EGj7yj74kEFdH2Fe7"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="block w-full rounded-full bg-[#ffd60a] px-6 py-3 text-center text-base font-semibold text-black transition hover:scale-[1.01]"
                                    >
                                        Open Registration Form
                                    </a>
                                    <p className="text-xs text-gray-500">Form opens in a new tab.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6">
                                    <h3 className="text-xl font-semibold text-white">What you'll get</h3>
                                    <ul className="mt-4 space-y-3 text-sm text-gray-400">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-[#ffd60a]" />
                                            Hands-on mentorship from CEC CLUB × Enactus
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-[#ffd60a]" />
                                            Guided sessions on planning, prototyping, and pitching
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1 h-2 w-2 rounded-full bg-[#ffd60a]" />
                                            Practice presenting with feedback before Demo Day
                                        </li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-[#ffd60a]/40 bg-[#ffd60a]/10 p-6 text-[#ffd60a]">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em]">Heads up</p>
                                    <p className="mt-3 text-lg font-semibold text-white">
                                        Spots are limited. Save your place early.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-4xl space-y-8">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                FAQ
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-4">
                            {faqItems.map(({ question, answer }, index) => (
                                <div key={question} className="overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#121212]">
                                    <button
                                        type="button"
                                        onClick={() => toggleFaq(index)}
                                        className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
                                    >
                                        <span className="font-semibold text-white">{question}</span>
                                        {openFaq === index ? (
                                            <ChevronUp className="h-5 w-5 text-[#ffd60a]" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-[#ffd60a]" />
                                        )}
                                    </button>
                                    {openFaq === index && (
                                        <div className="px-5 pb-5 text-sm leading-relaxed text-gray-400">{answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Location & schedule */}
                <section className="bg-[#0f0f0f] px-6 py-16">
                    <div className="mx-auto max-w-6xl space-y-8">
                        <div className="text-center">
                            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd60a]">
                                Logistics
                            </p>
                            <h2 className="text-3xl font-bold text-white md:text-4xl">Location & schedule</h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <MapPin className="h-6 w-6 text-[#ffd60a]" />
                                    <h3 className="text-xl font-semibold text-white">Venue</h3>
                                </div>
                                    <p className="text-base leading-relaxed text-gray-300">
                                        <span className="font-semibold text-white">ENSA Berrechid</span>
                                        <br />
                                        National School of Applied Sciences
                                        <br />
                                        Berrechid, Morocco
                                    </p>
                                <p className="mt-3 text-sm text-gray-400">Room: TP3 (reserved for all sessions).</p>
                            </div>

                            <div className="rounded-2xl border border-[#2a2a2a] bg-[#121212] p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <Calendar className="h-6 w-6 text-[#ffd60a]" />
                                    <h3 className="text-xl font-semibold text-white">Timing</h3>
                                </div>
                                <div className="space-y-3 text-sm text-gray-300">
                                    <div className="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3">
                                        <span className="font-semibold text-white">Friday, Dec 12</span>
                                        <span>2:30 PM – 6:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3">
                                        <span className="font-semibold text-white">Friday, Dec 19</span>
                                        <span>2:30 PM – 6:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-4 py-3">
                                        <span className="font-semibold text-white">Friday, Dec 26</span>
                                        <span>2:30 PM – 6:00 PM</span>
                                    </div>
                                    <p className="pt-2 text-xs text-gray-400">
                                        15–30 minute coffee/networking break between the Enactus and CEC blocks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
