import Footer from '../components/Footer'
import {useEffect} from "react";
import Granim from 'granim';
import { IBM_Plex_Sans } from "next/font/google";

const MainFontRegular = IBM_Plex_Sans({});

export default function Home() {
    useEffect(() => {
        new Granim({
            element: '#granim',
            direction: 'diagonal',
            isPausedWhenNotInView: true,
            states : {
                "default-state": {
                    gradients: [
                        ['#593954', '#013440'],
                        ['#013440', '#026873'],
                        ['#026873', '#038C8C'],
                        ['#038C8C', '#038C7F'],
                        ['#038C7F', '#593954'],
                        ['#593954', '#038C7F'],
                        ['#038C7F', '#038C8C'],
                        ['#038C8C', '#026873'],
                        ['#026873', '#013440'],
                        ['#013440', '#593954'],
                    ],
                    transitionSpeed: 8000,
                },
            }
        });
        require('particles.js');
        window.particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": false,
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 115,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 0.4,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    });

    return (
        <div className={MainFontRegular.className}>
            <div className="large-bar">
                <canvas id="granim"></canvas>
                <div id="particles-js"></div>
                <div className="large-bar-content text-dark-white flex-center-only">
                    <div>
                        <h1>Archive your memories.</h1>
                        <p style={{marginTop: "8px"}}>
                            <b>Archive Data Center Project</b> will preserve your online memories
                        </p>
                    </div>
                </div>
            </div>
            <main>
                <section>
                    <h2 className="text-center">Our Archives</h2>
                    <div className="flex-center-only wrappable-flex">
                        <section className="horizontal-item-list">
                            <h3>Static File Store 01</h3>
                            <p>
                                Stores redistributable license source codes, manuals, and more.
                            </p>
                            <div>
                                <a href="https://store01.archivedc.org" target="_blank" rel="noopener noreferrer" role="button">Open Static Store 01</a>
                            </div>
                        </section>
                    </div>
                </section>
                <section>
                    <h2 className="text-center">Our OSS</h2>
                    <p className="text-center">We provide some software to preserve or verify your data.</p>
                    <div className="flex-center-only wrappable-flex">
                        <section className="horizontal-item-list">
                            <h3>History Page Generator</h3>
                            <p>
                                Simple timeline-style static HTML generator with embed support.
                            </p>
                            <div>
                                <a href="https://github.com/archivedc/HistoryPageGenerator" target="_blank" rel="noopener noreferrer" role="button">Open GitHub</a>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
