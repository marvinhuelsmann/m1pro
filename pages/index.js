import Image from 'next/image'
import Head from 'next/head'
import M1ProLogo from '../public/Apple_M1-Pro-M1-Max_Chips.jpg'
import M1ProPerformance from '../public/Apple_M1-Pro-M1-Max_CPU-Performance_10182021.jpg'
import MacBookPro from '../public/Apple_MacBook-Pro_16-inch-Screen_10182021.jpg'
import {useEffect} from "react";

export function callbackAnimation(entries) {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
        } else entry.target.classList.remove("animate-fadeIn");
    });
}

export default function Home() {
    useEffect(() => {
        const callbackSmall = function (entries) {
            callbackAnimation(entries, false)
        };

        const observerSmall = new IntersectionObserver(callbackSmall)

        const targetsSmall = document.querySelectorAll(".show-on-scroll");
        targetsSmall.forEach(function (targetsSmall) {
            targetsSmall.classList.add("opacity-0");
            observerSmall.observe(targetsSmall);
        });
    })
    return (
        <div className={"font"}>
            <Head>
                <title>Apple M1Pro</title>
                <link rel="icon" href="https://i.imgur.com/gPiGNQI.jpeg"/>
            </Head>

            <main className={"min-h-screen py-2"}>
                <div id={"section-1"}>
                    <div className={"xl:mt-11 xl:mb-20 md:mt-10 mt-5 mb-14"}>
                        <h3 className={"flex justify-center xl:text-3xl md:text-3xl text-2xl text-center font-bold"}>
                            Das ist der
                        </h3>
                        <div className={"flex pr-10 pl-10 mt-9 justify-center"}>
                            <Image className={"justify-center"} src={M1ProLogo}/>
                        </div>
                    </div>
                    <h3 className={"flex justify-center xl:text-3xl md:text-3xl text-2xl text-center font-bold"}>
                        und der ist
                    </h3>
                    <h1 className={"flex justify-center xl:text-9xl md:text-8xl text-6xl text-center font-bold show-on-scroll"}>
                        Prooooooo.
                    </h1>
                    <p className={"flex justify-center font-bold xl:pr-20 xl:pl-20 pr-6 pl-6 text-gray-600 xl:text-xl md:text-xl text-sm text-center show-on-scroll"}>
                        Der M1 Pro bringt die außergewöhnliche Performance der M1 Architektur für Pro
                        Benutzer:innen auf ein ganz neues Level. Auch die ambitio­niertesten Projekte
                        laufen ganz einfach, mit bis zu 10 CPU Kernen, bis zu 16 GPU Kernen und einer 16‑Core
                        Neural Engine sowie speziellen Media Engines zum Decodieren und Codieren, die H.264,
                        HEVC und ProRes Codecs unterstützen.
                    </p>
                </div>
                <div id={"section-2"}>
                    <div>
                        <div className={"flex mt-9 justify-center"}>
                            <Image className={"justify-center"} src={M1ProPerformance}/>
                        </div>
                    </div>
                    <div className={"mt-9"}>
                        <h3 className={"flex justify-center xl:text-3xl md:text-3xl text-2xl text-center font-bold"}>
                            gemacht für das
                        </h3>
                        <h1 className={"flex justify-center xl:text-9xl md:text-8xl text-6xl text-center font-bold show-on-scroll"}>
                            MacBook Pro
                        </h1>
                        <div className={"flex pr-24 pl-24 mt-9 justify-center"}>
                            <Image className={"justify-center"} src={MacBookPro}/>
                        </div>
                        <div className={"mt-9"}>
                            <h3 className={"flex justify-center xl:text-3xl md:text-3xl text-2xl text-center font-bold"}>
                                für
                            </h3>
                            <h1 className={"flex justify-center xl:text-9xl md:text-8xl text-6xl text-center font-bold show-on-scroll"}>
                                Liquid Retina XDR.
                            </h1>
                            <p className={"flex mt-3 justify-center font-bold xl:pr-20 xl:pl-20 pr-6 pl-6 text-gray-600 xl:text-xl md:text-xl text-sm text-gray-600 text-center show-on-scroll"}>
                                Mit 1.000
                                Nits durchgehende Helligkeit,
                                1.600
                                Nits Spitzenhelligkeit,
                                10.000
                                Mini-LEDs,
                                1.000.000:1
                                Kontrast­verhältnis,
                                1.000.000.000
                                Farben
                            </p>
                            <h1 className={"flex justify-center xl:text-9xl md:text-9xl text-6xl text-center font-bold show-on-scroll"}>
                                ProMotion.
                            </h1>
                            <p className={"flex justify-center font-bold xl:pr-20 xl:pl-20 pr-6 pl-6 text-gray-600 xl:text-xl md:text-xl text-sm text-gray-600  text-center show-on-scroll"}>
                                Mit Bildraten von bis zu 120 Hz passt sich die adaptive Technologie automatisch an die Bewegung der Inhalte an.
                            </p>
                            <h1 className={"mt-5 flex justify-center xl:text-9xl md:text-8xl text-6xl text-center font-bold show-on-scroll"}>
                                3D Audio.
                            </h1>
                            <p className={"flex justify-center font-bold xl:pr-20 xl:pl-20 pr-6 pl-6 text-gray-600 xl:text-xl md:text-xl text-sm text-gray-600 text-center show-on-scroll"}>
                                Mit seinem raumfüllenden 6-Laut­sprecher-System und fortschrittlichen Algorithmen.
                            </p>
                           <h1 className={"mt-5 flex justify-center xl:text-9xl md:text-8xl text-6xl text-center font-bold show-on-scroll"}>
                                Ports.
                            </h1>
                            <p className={"flex justify-center font-bold xl:pr-20 xl:pl-20 pr-6 pl-6 text-gray-600 xl:text-xl md:text-xl text-sm text-gray-600 text-center show-on-scroll"}>
                                Mit 3x Thunberbold 4, 1x HDMI, 1x Magsafe, 1x SDXC
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"footer"}>
                    <div className={"mt-16"}>
                        <h3 className={"flex justify-center xl:text-3xl md:text-3xl text-2xl text-center font-bold"}>
                            danke 🍎
                        </h3>
                        <div className={"mt-1 text-gray-500"}>
                            <h3 className={" justify-center xl:text-xl md:text-xl text-medium text-center"}>
                                entwickelt von
                                <a target={"_blank"} className={"text-gray-600 hover:text-gray-700"}
                                   href={"https://marvhuelsmann.com"}> Marvin Hülsmann</a> am Tag des <a
                                className={"hover:text-gray-700 text-gray-600"}
                                href={"https://www.apple.com/de/apple-events/october-2021/"}>Apple Events</a> am
                                18.10.2021
                                nach Ende des Events.
                            </h3>
                            <p className={"pt-2 text-gray-800 text-xs text-center"}>
                                Bilder sind von <a className={"text-gray-900"}
                                                       href={"https://www.apple.com/newsroom/"}>Apple
                                Newsroom</a> und Text Daten von der <a className={"text-gray-900"}
                                                                       href={"https://www.apple.com/de/macbook-pro-14-and-16/"}>Apple
                                MacBook Pro 14" und 16"</a> Seite und sind weder im Ganzen noch in Teilen auf eine Weise geändert
                                oder modifiziert worden, die Apple verunglimpft.
                                <br/>
                                Außerdem stimme ich zu das die Nutzung für persönliche oder redaktionelle und nicht für
                                gewerbliche Zwecke erfolgt.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={"flex justify-center"}>
                <a
                    href="https://marvhuelsmann.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className={"h-20"} src="/Logo.svg" alt="Vercel Logo"/>
                </a>
            </footer>
        </div>
    )
}
