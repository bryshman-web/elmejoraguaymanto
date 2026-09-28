import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Sprout, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { nav } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-background/95 shadow-sm backdrop-blur-md" : "bg-background/92 backdrop-blur-sm"}`}>
    <div className="container-site flex h-20 items-center justify-between gap-5">
      <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Aguaymanto Perú, inicio"><span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground"><Sprout className="h-5 w-5"/></span><span><strong className="block font-display text-lg leading-none text-primary">AGUAYMANTO</strong><small className="mt-1 block text-[10px] font-bold tracking-[0.28em] text-muted-foreground">PERÚ</small></span></Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">{nav.map(([label,to]) => <Link key={to} to={to} className="nav-link" activeProps={{ className: "nav-link text-primary after:scale-x-100" }} activeOptions={{ exact: to === "/" }}>{label}</Link>)}</nav>
      <div className="hidden lg:block"><Button asChild><Link to="/contacto">Solicitar cotización</Link></Button></div>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>{open ? <X/> : <Menu/>}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Navegación móvil"><div className="mx-auto flex max-w-7xl flex-col">{nav.map(([label,to]) => <Link key={to} to={to} className="border-b border-border py-3 text-base font-medium text-foreground">{label}</Link>)}<Button asChild className="mt-4 h-12"><Link to="/contacto">Solicitar cotización</Link></Button></div></nav>}
  </header>;
}
