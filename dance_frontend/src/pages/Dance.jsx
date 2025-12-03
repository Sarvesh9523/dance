import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";

const DanceAcademy = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Mon");

  // ------------------------------
  // Dynamic Vercel-Style Hover Nav
  // ------------------------------
  const navItems = ["Home", "Classes", "Schedule", "About", "Contact"];
  const [hoveredItem, setHoveredItem] = useState(null);
  const highlightRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const hl = highlightRef.current;
    if (!hl) return;

    if (hoveredItem === null) {
      hl.style.opacity = "0";
      return;
    }

    const hoveredEl = itemRefs.current[hoveredItem];
    if (!hoveredEl) return;
    const rect = hoveredEl.getBoundingClientRect();
    const parentRect = hoveredEl.parentElement.getBoundingClientRect();

    hl.style.width = `${rect.width}px`;
    hl.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    hl.style.opacity = "1";
  }, [hoveredItem]);

  // ------------------------------
  // Day selector hover (same behavior)
  // ------------------------------
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [hoveredDay, setHoveredDay] = useState(null);
  const dayHighlightRef = useRef(null);
  const dayRefs = useRef([]);

  useEffect(() => {
    const hl = dayHighlightRef.current;
    if (!hl) return;

    if (hoveredDay === null) {
      hl.style.opacity = "0";
      return;
    }

    const hoveredEl = dayRefs.current[hoveredDay];
    if (!hoveredEl) return;
    const rect = hoveredEl.getBoundingClientRect();
    const parentRect = hoveredEl.parentElement.getBoundingClientRect();

    hl.style.width = `${rect.width}px`;
    hl.style.transform = `translateX(${rect.left - parentRect.left}px)`;
    hl.style.opacity = "1";
  }, [hoveredDay]);

  // ------------------------------

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

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const danceStyles = [
    { id: 1, title: "Ballet", desc: "Master the foundations of grace, precision, and ethereal movement.", img: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Hip-Hop", desc: "Express yourself with dynamic, high-energy street dance styles.", img: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Salsa", desc: "Feel the rhythm with this vibrant and passionate Latin dance.", img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Contemporary", desc: "Explore fluid, expressive movements that defy rigid technique.", img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Tap", desc: "Create intricate rhythms and sounds with your feet.", img: "https://godsballroom.com/800/600/http/i.pinimg.com/736x/bb/0e/09/bb0e09db722b68663413e6b35b68ec9b--tap-dance-fred-astaire.jpg" },
    { id: 6, title: "Jazz", desc: "Combine classic techniques with energetic, show-stopping moves.", img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop" }
  ];

  const schedule = [
    { time: "10:00", period: "AM", title: "Cyber-Ballet", instructor: "Anya Petrova", level: "Beginner" },
    { time: "13:00", period: "PM", title: "Electro-Hop", instructor: "Jax Ryder", level: "Intermediate" },
    { time: "18:00", period: "PM", title: "Quantum Salsa", instructor: "Elena Cruz", level: "Advanced" },
    { time: "20:00", period: "PM", title: "Fusion Flow", instructor: "Kai Miller", level: "Open Level" }
  ];

  return (
    <div className="font-sans bg-[#0a0a1a] text-gray-300 min-h-screen flex flex-col overflow-x-hidden relative">

      {/* BG Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(0, 246, 255, 0.1), transparent 40%), radial-gradient(circle at bottom right, rgba(126, 0, 255, 0.1), transparent 40%)"
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
        <div className="w-full max-w-[960px]">

          {/* HEADER */}
          <header className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 md:px-10 py-4 bg-black/20 backdrop-blur-md rounded-xl">
            <div className="flex items-center gap-4 text-[#00f6ff]">
              <svg fill="none" viewBox="0 0 48 48" className="w-6 h-6">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
              </svg>
              <h2 className="font-orbitron text-xl font-bold">CYBERDANCE</h2>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex relative items-center gap-8">

              <nav className="relative flex items-center gap-4" aria-label="Main navigation">
                {/* Hover Highlight (nav) */}
                <div
                  ref={highlightRef}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: 0,
                    background: "rgba(0,246,255,0.18)",
                    borderRadius: 10,
                    transition: "width 0.25s ease, transform 0.25s ease, opacity 0.25s ease",
                    opacity: 0,
                    zIndex: 1
                  }}
                />

                {/* Items */}
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className="relative z-10 nav-item text-gray-300 text-sm font-medium cursor-pointer px-3 py-1.5 rounded-md transition-colors duration-200"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <button
                onClick={handleEnroll}
                className="rounded-lg h-10 px-4 bg-[#00f6ff] text-[#0a0a1a] font-bold uppercase shadow-[0_0_15px_rgba(0,246,255,0.5)] hover:opacity-90"
              >
                Enroll Now
              </button>
            </div>

            {/* MOBILE NAV BUTTON */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-200 hover:text-[#00f6ff]">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </header>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 p-4 bg-[#161228] border border-[#00f6ff]/20 rounded-xl flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} className="text-gray-300 text-center py-2 rounded-md hover:bg-[#00f6ff20] hover:text-[#00f6ff]">
                  {item}
                </a>
              ))}
              <button className="py-2 bg-[#00f6ff] text-black font-bold rounded-lg uppercase">Enroll Now</button>
            </div>
          )}

          {/* ---------------- MAIN CONTENT ---------------- */}

          <main className="py-10">
            {/* HERO SECTION */}
            <div className="p-4">
              <div
                className="relative flex min-h-[480px] flex-col gap-6 items-center justify-center p-8 rounded-xl border border-white/10 bg-cover bg-center overflow-hidden"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(10,10,26,0.6),rgba(10,10,26,0.9)), url("https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=2000&auto=format&fit=crop")'
                }}
              >
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-2xl">
                  <h1 className="font-orbitron text-white text-5xl font-black" style={{ textShadow: "0 0 10px rgba(0,246,255,0.7)" }}>
                    Unleash Your Inner Cypher
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Join the revolution of movement. Explore our diverse matrix of classes.
                  </p>
                </div>
              </div>
            </div>

            {/* STYLES */}
            <h2 className="font-orbitron text-[#00f6ff] text-2xl tracking-widest text-center mt-6">
              Explore Our Dance Styles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {danceStyles.map((style) => (
                <div key={style.id} className="bg-[#161228]/50 border border-[#00f6ff]/20 rounded-xl p-4 hover:border-[#00f6ff]/60">
                  <img className="rounded-lg w-full h-48 object-cover" src={style.img} alt={style.title} />
                  <p className="mt-3 font-orbitron text-[#00f6ff] text-lg text-center uppercase">{style.title}</p>
                  <p className="text-gray-300 text-sm text-center">{style.desc}</p>
                </div>
              ))}
            </div>

            {/* SCHEDULE */}
            <div className="px-4 py-10">
              <h2 className="font-orbitron text-[#00f6ff] text-2xl tracking-widest text-center">Class Schedule</h2>

              {/* Day Selector */}
              <div className="flex justify-center mt-6">
                <div className="relative flex items-center gap-2 bg-[#161228]/50 border border-[#00f6ff]/20 p-1 rounded-lg">
                  {/* day highlight */}
                  <div
                    ref={dayHighlightRef}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: 0,
                      background: "rgba(0,246,255,0.18)",
                      borderRadius: 10,
                      transition: "width 0.25s ease, transform 0.25s ease, opacity 0.25s ease",
                      opacity: 0,
                      zIndex: 1
                    }}
                  />

                  {days.map((day, index) => (
                    <button
                      key={day}
                      ref={(el) => (dayRefs.current[index] = el)}
                      onMouseEnter={() => setHoveredDay(index)}
                      onMouseLeave={() => setHoveredDay(null)}
                      onClick={() => setActiveDay(day)}
                      className={`relative z-10 px-4 py-2 text-xs rounded-md font-orbitron uppercase ${
                        activeDay === day
                          ? "bg-[#00f6ff] text-black"
                          : "text-gray-400 hover:text-[#00f6ff]"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {schedule.map((slot, index) => (
                  <div key={index} className="p-4 bg-[#161228]/50 border border-[#00f6ff]/20 rounded-xl">
                    <p className="font-orbitron text-[#00f6ff] text-lg">{slot.time}</p>
                    <p className="text-xs text-gray-400">{slot.period}</p>

                    <p className="text-white text-xl uppercase font-orbitron mt-2">{slot.title}</p>
                    <p className="text-gray-400 text-sm">with {slot.instructor}</p>

                    <button
                      onClick={() => handleBookClass(slot.title, slot.instructor)}
                      className="mt-4 w-full h-10 border border-[#00f6ff]/50 text-[#00f6ff] rounded-lg hover:bg-[#00f6ff] hover:text-black"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="text-center py-10 border-t border-white/10">
            <p className="text-gray-500 text-sm">© 2024 CYBERDANCE. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DanceAcademy;
