import heroFruit from "@/assets/hero-aguaymanto.jpg";
import heroField from "@/assets/hero-campo.jpg";
import heroPack from "@/assets/hero-empaque.jpg";
import productsImage from "@/assets/productos-aguaymanto.jpg";

export const site = {
  name: "AGUAYMANTO PERÚ",
  legalName: "[NOMBRE DE LA EMPRESA]",
  tagline: "Calidad y compromiso desde el campo peruano.",
  phone: "[TELÉFONO]",
  whatsapp: "[WHATSAPP]",
  whatsappDigits: "",
  email: "[CORREO]",
  address: "[DIRECCIÓN]",
  city: "[CIUDAD]",
  hours: "[HORARIO]",
  social: { facebook: "#", instagram: "#", tiktok: "#", linkedin: "#" },
};

export const nav = [
  ["Inicio", "/"], ["Quiénes Somos", "/quienes-somos"], ["Productos", "/productos"],
  ["Servicios", "/servicios"], ["Noticias", "/noticias"], ["Contacto", "/contacto"],
] as const;

export const video = {
  youtubeId: "Q9hFoMARo3A",
  title: "Importancia de la producción de aguaymanto en Cajamarca",
  cta: "Ver video",
  url: "https://www.youtube.com/watch?v=Q9hFoMARo3A",
} as const;

export const slides = [
  { image: heroFruit, alt: "Aguaymanto peruano fresco con campos andinos al fondo", eyebrow: "ORIGEN PERUANO · CALIDAD NATURAL", title: "Aguaymanto peruano, calidad que nace en nuestra tierra", text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.", cta: "Conocer nuestros productos", to: "/productos" },
  { image: heroField, alt: "Productor cosechando aguaymanto en un campo peruano", eyebrow: "DEL CAMPO A TU NEGOCIO", title: "Del campo peruano a nuevos mercados", text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.", cta: "Conoce nuestra empresa", to: "/quienes-somos" },
  { image: heroPack, alt: "Selección y empaque profesional de aguaymanto", eyebrow: "SELECCIÓN · PRESENTACIÓN · SERVICIO", title: "Natural, versátil y de excelente calidad", text: "Atendemos a clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.", cta: "Ver productos", to: "/productos" },
] as const;

export const products = [
  { title: "Aguaymanto fresco", description: "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.", label: "Producto fresco", image: heroFruit, details: ["Presentación: [EDITABLE]", "Peso: [EDITABLE]", "Disponibilidad: [EDITABLE]"] },
  { title: "Aguaymanto para distribución", description: "Presentaciones orientadas a clientes comerciales y distribuidores.", label: "Canal comercial", image: heroPack, details: ["Presentación: [EDITABLE]", "Volumen: [EDITABLE]", "Entrega: [EDITABLE]"] },
  { title: "Presentaciones especiales", description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.", label: "A medida", image: productsImage, details: ["Formato: [EDITABLE]", "Peso: [EDITABLE]", "Precio: [EDITABLE]"] },
];

export const services = [
  ["Venta de aguaymanto", "Venta de producto para clientes particulares y comerciales."],
  ["Venta al por mayor", "Atención de pedidos de mayor volumen."],
  ["Atención a restaurantes", "Provisión para restaurantes, hoteles, cafeterías y negocios gastronómicos."],
  ["Tiendas y distribuidores", "Opciones para negocios que desean incorporar aguaymanto a su oferta."],
  ["Pedidos personalizados", "Evaluación de requerimientos según producto, volumen y disponibilidad."],
  ["Asesoría comercial", "Atención personalizada para elegir la presentación adecuada."],
] as const;

export const values = [
  ["Calidad", "Trabajamos para ofrecer productos que cumplan altos estándares."],
  ["Compromiso", "Cumplimos nuestros compromisos con clientes y colaboradores."],
  ["Responsabilidad", "Actuamos responsablemente en nuestras operaciones."],
  ["Integridad", "Construimos relaciones basadas en confianza y transparencia."],
  ["Innovación", "Buscamos mejorar continuamente nuestros procesos."],
  ["Sostenibilidad", "Promovemos prácticas responsables con nuestro entorno."],
] as const;

export const news = [
  { slug: "aguaymanto-peruano-nuevos-mercados", category: "Mercado", date: "Contenido de demostración", title: "El aguaymanto peruano y su presencia en nuevos mercados", summary: "Una mirada al potencial comercial de un fruto peruano apreciado por su sabor, versatilidad y presentación.", image: heroFruit },
  { slug: "cultivo-del-aguaymanto", category: "Agricultura", date: "Contenido de demostración", title: "Conoce más sobre el cultivo del aguaymanto", summary: "El origen agrícola y el cuidado del producto son parte esencial de su historia y de su valor.", image: heroField },
  { slug: "calidad-produccion-responsable", category: "Producción", date: "Contenido de demostración", title: "Nuestra apuesta por la calidad y la producción responsable", summary: "Procesos ordenados y atención al detalle para construir relaciones comerciales de confianza.", image: heroPack },
] as const;

export const faqs = [
  ["¿Qué productos ofrecen?", "Ofrecemos aguaymanto fresco, presentaciones para distribución y opciones especiales sujetas a disponibilidad."],
  ["¿Realizan ventas al por mayor?", "Sí. Atendemos consultas por volumen para empresas, distribuidores y negocios gastronómicos."],
  ["¿Atienden restaurantes y empresas?", "Sí. Evaluamos los requerimientos de restaurantes, hoteles, tiendas y empresas."],
  ["¿Qué presentaciones tienen disponibles?", "Las presentaciones se confirman según producto, volumen y disponibilidad. Contáctanos para recibir información actualizada."],
  ["¿Realizan entregas?", "La cobertura, condiciones y tiempos de entrega se coordinan para cada solicitud."],
  ["¿Cómo puedo solicitar una cotización?", "Completa el formulario de contacto indicando producto y cantidad aproximada."],
  ["¿Cómo puedo comunicarme con ustedes?", "Puedes escribirnos por WhatsApp o utilizar el formulario de contacto."],
] as const;

export const images = { heroFruit, heroField, heroPack, productsImage };
