import React, { useState } from 'react';
import toast from "react-hot-toast";

const DanceAcademy = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDay, setActiveDay] = useState('Mon');

    // Interactive Handlers
    const handleEnroll = () => {
        alert("Redirecting to Enrollment Form...");
    };

    const handleBookClass = (className, instructor) => {
        toast.custom(
        (t) => (
            <div className={`cyber-toast ${t.visible ? "animate-enter" : "animate-leave"}`}>
                ✔ Booking confirmed for {className} with {instructor}
            </div>
        ),
        { duration: 3000 }
    );

    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Data for Styles Section
    const danceStyles = [
        { id: 1, title: 'Ballet', desc: 'Master the foundations of grace, precision, and ethereal movement.', img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop' },
        { id: 2, title: 'Hip-Hop', desc: 'Express yourself with dynamic, high-energy street dance styles.', img: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop' },
        { id: 3, title: 'Salsa', desc: 'Feel the rhythm with this vibrant and passionate Latin dance.', img: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop' },
        { id: 4, title: 'Contemporary', desc: 'Explore fluid, expressive movements that defy rigid technique.', img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop' },
        { id: 5, title: 'Tap', desc: 'Create intricate rhythms and sounds with your feet.', img: 'https://godsballroom.com/800/600/http/i.pinimg.com/736x/bb/0e/09/bb0e09db722b68663413e6b35b68ec9b--tap-dance-fred-astaire.jpg' },
        { id: 6, title: 'Jazz', desc: 'Combine classic techniques with energetic, show-stopping moves.', img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop' },
    ];

    // Data for Schedule Section
    const schedule = [
        { time: '10:00', period: 'AM', title: 'Cyber-Ballet', instructor: 'Anya Petrova', level: 'Beginner' },
        { time: '13:00', period: 'PM', title: 'Electro-Hop', instructor: 'Jax Ryder', level: 'Intermediate' },
        { time: '18:00', period: 'PM', title: 'Quantum Salsa', instructor: 'Elena Cruz', level: 'Advanced' },
        { time: '20:00', period: 'PM', title: 'Fusion Flow', instructor: 'Kai Miller', level: 'Open Level' },
    ];

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="font-sans bg-[#0a0a1a] text-gray-300 min-h-screen flex flex-col overflow-x-hidden relative">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at top left, rgba(0, 246, 255, 0.1), transparent 40%), radial-gradient(circle at bottom right, rgba(126, 0, 255, 0.1), transparent 40%)' }}>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full px-4 sm:px-8 md:px-20 lg:px-40 py-5">
                <div className="w-full max-w-[960px]">

                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 md:px-10 py-4 bg-black/20 backdrop-blur-md rounded-xl">
                        <div className="flex items-center gap-4 text-[#00f6ff]">
                            <div className="size-6 text-[#00f6ff]">
                                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path></svg>
                            </div>
                            <h2 className="font-orbitron text-[#00f6ff] text-xl font-bold leading-tight tracking-wider">CYBERDANCE</h2>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex flex-1 justify-end gap-8">
                            <nav className="flex items-center gap-9">
                                {['Home', 'Classes', 'Schedule', 'About', 'Contact'].map((item) => (
                                    <a key={item} href="#" className="text-gray-300 text-sm font-medium hover:text-[#00f6ff] transition-colors tracking-wide">
                                        {item}
                                    </a>
                                ))}
                            </nav>
                            <button
                                onClick={handleEnroll}
                                className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#00f6ff] text-[#0a0a1a] text-sm font-bold uppercase hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,246,255,0.5)] hover:shadow-lg font-orbitron"
                            >
                                Enroll Now
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-gray-100 hover:text-[#00f6ff]">
                                <span className="material-symbols-outlined text-3xl">menu</span>
                            </button>
                        </div>
                    </header>

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-2 p-4 bg-[#161228] border border-[#00f6ff]/20 rounded-xl flex flex-col gap-4 animate-fadeIn">
                            {['Home', 'Classes', 'Schedule', 'About', 'Contact'].map((item) => (
                                <a key={item} href="#" className="text-gray-300 hover:text-[#00f6ff] text-center py-2">{item}</a>
                            ))}
                            <button onClick={handleEnroll} className="w-full py-2 bg-[#00f6ff] text-[#0a0a1a] font-bold rounded-lg uppercase">Enroll Now</button>
                        </div>
                    )}

                    <main className="py-10">
                        {/* Hero Section */}
                        <div className="p-4">
                            <div
                                className="relative flex min-h-[480px] flex-col gap-6 items-center justify-center p-8 rounded-xl border border-white/10 bg-cover bg-center overflow-hidden group"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(10, 10, 26, 0.6) 0%, rgba(10, 10, 26, 0.9) 100%), url("https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2000&auto=format&fit=crop")`
                                }}
                            >
                                <div className="relative z-10 flex flex-col gap-4 text-center max-w-2xl">
                                    <h1
                                        className="font-orbitron text-white text-4xl sm:text-6xl font-black leading-tight tracking-wider uppercase"
                                        style={{ textShadow: '0 0 10px rgba(0, 246, 255, 0.7)' }}
                                    >
                                        Unleash Your Inner Cypher
                                    </h1>
                                    <h2 className="text-gray-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
                                        Join the revolution of movement. Explore our diverse matrix of classes, designed for every skill level from novice to netrunner.
                                    </h2>
                                </div>
                                <button className="relative z-10 flex items-center justify-center rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-[#00f6ff] text-[#0a0a1a] text-sm sm:text-base font-bold uppercase hover:opacity-90 transition-all shadow-[0_0_15px_rgba(0,246,255,0.5)] font-orbitron">
                                    Explore Styles
                                </button>
                            </div>
                        </div>

                        {/* Dance Styles Grid */}
                        <h2 className="font-orbitron text-[#00f6ff] text-[22px] font-bold tracking-wider px-4 pb-3 pt-5 text-center uppercase" style={{ textShadow: '0 0 8px rgba(0, 246, 255, 0.5)' }}>
                            Explore Our Dance Styles
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {danceStyles.map((style) => (
                                <div key={style.id} className="group relative flex flex-col gap-3 rounded-xl overflow-hidden bg-[#161228]/50 backdrop-blur-lg border border-[#00f6ff]/20 p-4 transition-all duration-300 hover:border-[#00f6ff]/60 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]">
                                    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                                        <img
                                            alt={style.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            src={style.img}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="font-orbitron text-[#00f6ff] text-base font-bold tracking-widest uppercase mb-1">{style.title}</p>
                                        <p className="text-gray-300 text-sm">{style.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Schedule Section */}
                        <div className="py-10 px-4">
                            <h2 className="font-orbitron text-[#00f6ff] text-[22px] font-bold tracking-wider pb-6 text-center uppercase" style={{ textShadow: '0 0 8px rgba(0, 246, 255, 0.5)' }}>
                                Class Schedule
                            </h2>

                            {/* Day Filter */}
                            <div className="flex justify-center mb-6 overflow-x-auto">
                                <div className="flex items-center gap-2 p-1 rounded-lg bg-[#161228]/50 border border-[#00f6ff]/20">
                                    {days.map((day) => (
                                        <button
                                            key={day}
                                            onClick={() => setActiveDay(day)}
                                            className={`font-orbitron uppercase text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-md transition-all duration-200 
                        ${activeDay === day
                                                    ? 'bg-[#00f6ff] text-[#0a0a1a] shadow-[0_0_15px_rgba(0,246,255,0.5)]'
                                                    : 'text-gray-400 hover:bg-[#00f6ff] hover:text-black'}`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Schedule Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {schedule.map((slot, index) => (
                                    <div key={index} className="flex flex-col gap-4 p-4 rounded-xl bg-[#161228]/50 backdrop-blur-lg border border-[#00f6ff]/20 transition-all duration-300 hover:border-[#00f6ff]/60 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]">
                                        <div>
                                            <p className="font-orbitron text-lg font-bold text-[#00f6ff] tracking-wider">{slot.time}</p>
                                            <p className="text-xs text-gray-400 uppercase">{slot.period}</p>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-orbitron text-lg font-bold text-white tracking-wider uppercase">{slot.title}</p>
                                            <p className="text-sm text-gray-400">with {slot.instructor}</p>
                                            <p className="text-sm text-gray-300 mt-2 border-l-2 border-[#00f6ff] pl-2">{slot.level}</p>
                                        </div>
                                        <button
                                            onClick={() => handleBookClass(slot.title, slot.instructor)}
                                            className="w-full items-center justify-center overflow-hidden rounded-lg h-10 px-3 bg-[#00f6ff]/10 text-[#00f6ff] text-sm font-bold tracking-[0.015em] hover:bg-[#00f6ff] hover:text-[#0a0a1a] transition-all border border-[#00f6ff]/50 font-orbitron uppercase"
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="flex flex-col gap-6 px-5 py-10 text-center mt-10 border-t border-white/10">
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                            {['Home', 'Classes', 'Schedule', 'About', 'Contact', 'Pricing', 'Privacy Policy'].map((link) => (
                                <a key={link} href="#" className="text-gray-400 text-sm hover:text-[#00f6ff] transition-colors">{link}</a>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Instagram */}
                            <a aria-label="Instagram" className="text-gray-400 hover:text-[#00f6ff] transition-colors hover:[#00f6ff]" href="#">
                                <svg
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a aria-label="Facebook" className="text-gray-400 hover:text-[#00f6ff]  transition-colors" href="#">
                                <svg
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a aria-label="YouTube" className="text-gray-400 hover:text-[#00f6ff] transition-colors" href="#">
                                <svg
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-4.5 3-9.5 3s-9.5-2-9.5-3Z"></path>
                                    <path d="m10 15 5-3-5-3z"></path>
                                </svg>
                            </a>
                        </div>

                        <p className="text-gray-500 text-sm">© 2024 CYBERDANCE. All Rights Reserved.</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default DanceAcademy;