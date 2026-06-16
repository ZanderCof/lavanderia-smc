export default function HeroTitle() {
    return (
        <div className="space-y-4 pt-15 lg:pt-0">
            <h1 className="text-6xl lg:text-[64px] font-black leading-[0.92] tracking-tight text-slate-900 pb-8 lg:pb-0">
                Cura Perfetta <br />
                Per I Tuoi{" "}
                <span className="text-blue-600 relative">
                    Capi
                    <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-100 rounded-full -z-10" />
                </span>
            </h1>

            <p className="sx:hidden text-center text-lg text-slate-500 leading-relaxed max-w-lg mx-auto">
                Lavaggio professionale di capi delicati, abiti da cerimonia,
                piumoni e tessuti tecnici con cura artigianale premium.
            </p>
        </div>
    )
}
