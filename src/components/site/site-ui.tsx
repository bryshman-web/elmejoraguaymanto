import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-2xl"><p className={light ? "eyebrow text-accent" : "eyebrow text-primary"}>{eyebrow}</p><h2 className={light ? "section-title text-primary-foreground" : "section-title text-foreground"}>{title}</h2>{text && <p className={light ? "mt-5 text-primary-foreground/75" : "mt-5 text-muted-foreground"}>{text}</p>}</div>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return <section className="relative flex min-h-[480px] items-end overflow-hidden bg-primary pt-32"><img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" width={1920} height={1080}/><div className="absolute inset-0 bg-hero-overlay"/><div className="container-site relative z-10 pb-16 pt-28"><p className="eyebrow text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-5xl leading-[1.06] text-primary-foreground md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">{text}</p></div></section>;
}

export function CtaBand({ title = "¿Buscas un proveedor de aguaymanto?", text = "Conversemos sobre el producto, volumen y presentación que necesita tu negocio." }: { title?: string; text?: string }) {
  return <section className="bg-primary py-16 text-primary-foreground"><div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow text-accent">ATENCIÓN COMERCIAL</p><h2 className="font-display text-4xl md:text-5xl">{title}</h2><p className="mt-3 max-w-2xl text-primary-foreground/70">{text}</p></div><Button asChild size="lg" className="h-13 bg-accent px-7 text-accent-foreground hover:bg-accent/90"><Link to="/contacto">Solicitar cotización <ArrowRight/></Link></Button></div></section>;
}

export function FeatureCard({ icon, title, text, index }: { icon?: ReactNode; title: string; text: string; index?: string }) {
  return <article className="group border-t border-border py-7 transition-colors hover:border-accent"><div className="mb-6 flex items-center justify-between text-primary">{icon ?? <Leaf className="h-5 w-5"/>}{index && <span className="font-display text-2xl text-muted-foreground/50">{index}</span>}</div><h3 className="font-display text-2xl text-foreground">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>;
}

export function WhatsAppButton() {
  const message = encodeURIComponent("Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.");
  const href = site.whatsappDigits ? `https://wa.me/${site.whatsappDigits}?text=${message}` : "/contacto";
  return <a href={href} className="fixed bottom-5 right-5 z-40 flex h-13 items-center gap-2 rounded-full bg-whatsapp px-4 font-semibold text-whatsapp-foreground shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Consultar por WhatsApp"><MessageCircle className="h-5 w-5"/><span className="hidden sm:inline">¿Necesitas información?</span></a>;
}
