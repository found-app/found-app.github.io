import { useRef, useState } from 'react'
import Image from 'next/image'
import Map from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import * as Heroicons from '@heroicons/react/outline'

const maptiler_key = process.env.NEXT_PUBLIC_MAPTILER_KEY

export default function Home() {
    const [isFound, setIsFound] = useState(false)

    const firstSectionEl = useRef(null)

    const captureEl = useRef(null)
    const editorEl = useRef(null)
    const shareEl = useRef(null)

    const scrollIntoView = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className="">
            <section className={`h-screen flex flex-col justify-around items-center transition ${isFound ? 'bg-slate-100' : 'bg-zinc-900'} space-y-4`}>
                <h1 className="text-zinc-900 text-8xl font-extrabold">found.</h1>
                <div className="flex flex-col justify-center items-center space-y-8 font-bold" onMouseEnter={() => setIsFound(true)}>
                    <h2 className={`py-2 text-5xl text-transparent bg-gradient-to-r bg-clip-text ${isFound ? 'from-fuchsia-500 to-pink-400' : 'from-zinc-600 to-zinc-600'}`}>
                        find your sound.
                    </h2>
                    <button onClick={() => scrollIntoView(firstSectionEl)}>
                        <Heroicons.ChevronDownIcon className="w-12 h-12 stroke-zinc-900" />
                    </button>
                </div>
            </section>

            {!isFound ? <></> : <>
                <section className="h-[50vh]" ref={firstSectionEl}>
                    <Map
                        mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${maptiler_key}`}
                        initialViewState={{
                            latitude: 51.4545,
                            longitude: -2.5879,
                            zoom: 14
                        }}
                        mapLib={maplibregl} />
                </section>

                <section className="min-h-screen px-32 py-12 flex justify-center items-center bg-gradient-to-b from-zinc-200 to-zinc-100">
                    <div className="flex-1 flex flex-col lg:flex-row mx-36 py-12 h-full">
                        <aside className="absolute left-[-25%] lg:left-auto lg:relative flex-1 flex justify-center items-center opacity-10 lg:opacity-100">
                            <div className="mockup-phone">
                                <div className="camera"></div>
                                <div className="display">
                                    <div className="artboard artboard-demo phone-4">
                                        <div className="relative w-full h-full bg-zinc-100">
                                            <Image src="/img/found-map.png" alt="" layout="fill" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        <article className="z-10 flex-1 flex flex-col text-right justify-around">
                            <h3 className="text-transparent py-2 text-8xl font-bold bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-600">
                                Explore your world through sound.
                            </h3>
                            <p className="text-left text-xl">
                                Rediscover your surroundings and travel the globe
                                using the found sound map. Experience the world
                                as you haven&apos;t before and make your mark for others
                                to discover. Listen to the song of the city, verse
                                of the village or tune into the murmur of the
                                meadows. Find your place of calm and observe the
                                world as you haven&apos;t before. Reveal a world in motion.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="min-h-screen px-32 py-12 flex justify-center items-center bg-gradient-to-b from-zinc-100 to-white">
                    <div className="flex-1 flex flex-col lg:flex-row mx-36 py-12 h-full">
                        <article className="flex-1 flex flex-col justify-around">
                            <h3 className="text-transparent text-8xl font-bold bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-400">
                                Discover a community of creators.
                            </h3>
                            <p className="text-left text-xl">
                                Express your voice and participate in a growing
                                movement of creators. Collaborate and inspire.
                                Create sketches with other sounds to and redefine
                                the world as you hear it. Turn a tractor into a
                                techno beat, add a verse to a vista or upload your
                                rhythms to be remixed. Found is a community for
                                creativity. Create. Share. Discover.
                            </p>
                        </article>

                        <aside className="absolute lg:relative right-[-25%] lg:right-auto flex-1 flex justify-center items-center">
                            <div className="mockup-phone">
                                <div className="camera"></div>
                                <div className="display">
                                    <div className="artboard artboard-demo phone-4">
                                        <div className="relative w-full h-full bg-zinc-100">
                                            <Image src="/img/found-feed.png" alt="" layout="fill" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="min-h-screen px-32 py-12 flex justify-center items-center bg-white">
                    <div className="flex-1 flex h-full bg-gradient-to-br from-zinc-200 to-slate-100 rounded-lg shadow-lg p-12">
                        <aside className="flex-1 flex justify-center items-center">
                            <div className="mockup-phone">
                                <div className="camera"></div>
                                <div className="display">
                                    <div className="artboard phone-4 overflow-y-scroll scrollbar-hidden">
                                        <div className="relative w-full h-full bg-zinc-100" ref={captureEl}>
                                            <Image src="/img/found-capture.png" alt="" layout="fill" />
                                        </div>
                                        <div className="relative w-full h-full bg-zinc-300" ref={editorEl}>
                                            <Image src="/img/found-edit.png" alt="" layout="fill" />
                                        </div>
                                        <div className="relative w-full h-full bg-zinc-500" ref={shareEl}>
                                            <Image src="/img/found-publish.png" alt="" layout="fill" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </aside>

                        <article className="flex-1 flex flex-col space-y-16">
                            <h3 className="text-6xl mb-12 font-bold text-zinc-900">
                                <p><span>Capture. </span><span>Tweak. </span><span>Share. </span></p>
                                <p>Wherever. Whenever.</p>
                            </h3>

                            <ul className="flex-1 flex flex-col space-y-12">
                                <li className="w-full p-4 rounded-lg transition hover:bg-white hover:shadow" onMouseEnter={() => scrollIntoView(captureEl)}>
                                    <Heroicons.MicrophoneIcon className="float-left mr-4 w-12 h-12 stroke-white bg-gradient-to-br from-rose-500 to-red-500 shadow rounded-lg p-2" />
                                    <p className="text-xl">
                                        Like your favourite retro camera,
                                        <span className="font-bold"> found </span>
                                        gives you the tools to simply point-and-shoot
                                        to start capturing sound. Just don&apos;t
                                        go shaking your phone afterwards...
                                    </p>
                                </li>
                                <li className="w-full p-4 rounded-lg transition hover:bg-white hover:shadow" onMouseEnter={() => scrollIntoView(editorEl)}>
                                    <Heroicons.AdjustmentsIcon className="float-left mr-4 w-12 h-12 stroke-white bg-gradient-to-br from-rose-500 to-red-500 shadow rounded-lg p-2" />
                                    <p className="text-xl">
                                        No recording is perfect.
                                        <span className="font-bold"> found </span> is
                                        all about capturing sounds in the moment, but
                                        sometimes that moment needs some encouragement.
                                        Trim audio, adjust levels, and add effects to
                                        get the best out of your recordings.
                                    </p>
                                </li>
                                <li className="w-full p-4 rounded-lg transition hover:bg-white hover:shadow" onMouseEnter={() => scrollIntoView(shareEl)}>
                                    <Heroicons.HashtagIcon className="float-left mr-4 w-12 h-12 stroke-white bg-gradient-to-br from-rose-500 to-red-500 shadow rounded-lg p-2" />
                                    <p className="text-xl">
                                        <span className="font-bold">found </span> gives
                                        you the tools to connect with your community
                                        by suggesting tags based on the location and
                                        content of your recordings. The next time someone
                                        wants to hear the sound of cows in the country
                                        recorded on your dad&apos;s cassette tape,
                                        the&apos;ll find you.
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </>}
        </div>
    )
}
