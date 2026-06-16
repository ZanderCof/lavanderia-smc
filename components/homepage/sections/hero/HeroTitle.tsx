export default function HeroTitle() {
    return (
        <div className="space-y-4 pt-10 lg:pt-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black leading-[1.1] lg:leading-[0.92] tracking-tight text-slate-900 pb-6 lg:pb-0">
                Cura Perfetta <br />
                Per I Tuoi{" "}
                <span className="text-blue-600 relative inline-block">
                    Capi
                    <span className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-100 rounded-full -z-10" />
                </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Lavaggio professionale di capi delicati, abiti da cerimonia,
                piumoni e tessuti tecnici con cura artigianale premium.
            </p>
        </div>
    )
}