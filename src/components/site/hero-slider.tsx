import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/site";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), 5000); return () => window.clearInterval(id); }, []);
  const move = (direction: number) => setActive((active + direction + slides.length) % slides.length);
  const slide = slides[active];
  if (!slide) return null;
  return <section className="relative min-h-[680px] overflow-hidden bg-primary pt-20 md:min-h-[760px]" aria-roledescription="carrusel" aria-label="Aguaymanto Perú">
    {slides.map((slide, i) => <div key={slide.title} className={`absolute inset-0 top-20 transition-opacity duration-1000 ${i === active ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={i !== active}><img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" width={1920} height={1080} fetchPriority={i === 0 ? "high" : "auto"}/><div className="absolute inset-0 bg-hero-overlay"/></div>)}
    <div className="container-site relative z-10 flex min-h-[600px] items-end pb-28 pt-24 md:min-h-[680px] md:items-center md:pb-16"><div className="max-w-3xl" key={active}><p className="eyebrow animate-rise text-accent">{slide.eyebrow}</p><h1 className="animate-rise font-display text-5xl leading-[1.02] text-primary-foreground md:text-7xl lg:text-8xl">{slide.title}</h1><p className="mt-6 max-w-xl animate-rise text-lg leading-8 text-primary-foreground/80">{slide.text}</p><div className="mt-8 flex flex-wrap gap-3 animate-rise"><Button asChild size="lg" className="h-13 bg-accent px-7 text-accent-foreground hover:bg-accent/90"><Link to={slide.to}>{slide.cta}<ArrowRight/></Link></Button>{active === 0 && <Button asChild size="lg" variant="outline" className="h-13 border-primary-foreground/35 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/contacto">Solicitar cotización</Link></Button>}</div></div></div>
    <div className="absolute bottom-7 left-1/2 z-20 flex w-[calc(100%-2.5rem)] max-w-7xl -translate-x-1/2 items-center justify-between"><div className="flex gap-2">{slides.map((_,i) => <button key={i} onClick={() => setActive(i)} className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-accent" : "w-5 bg-primary-foreground/45"}`} aria-label={`Ir a imagen ${i+1}`}/>)}</div><div className="flex gap-2"><Button variant="outline" size="icon" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => move(-1)} aria-label="Imagen anterior"><ArrowLeft/></Button><Button variant="outline" size="icon" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => move(1)} aria-label="Imagen siguiente"><ArrowRight/></Button></div></div>
  </section>;
}
