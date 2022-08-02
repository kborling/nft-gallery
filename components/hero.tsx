import { useEffect, useRef, useState } from 'react';
import heroStyles from '../styles/hero.module.scss'
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";
import Link from 'next/link';

export default function Hero() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 600.0,
                    minWidth: 600.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xb6b6b6,
                    color2: 0x1e266d,
                    backgroundColor: 0xe1e1e1
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <section className="section">
            <div className={`hero ${heroStyles.height}`} ref={vantaRef}>
                <div className="hero-body u-center">
                    <div className="w-90">
                        <div className="row">
                            <div className="col-6">
                                <h1>Are you interested in making your own NFT?</h1>
                                <p className="lead">Non-Fungible Tokens (NFTs) are unique digital items that represent real-world objects such as art, music, or in-game content.</p>
                                <Link href="#steps">
                                    <button className="btn btn-link">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
