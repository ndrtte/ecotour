export const siteData = {
  name: "Eco-Tour Cangrejal",
  tagline: "",
  description: "La aventura más auténtica de Honduras te está esperando.",
  address: "KM 8 Carretera a las Cuencas, La Ceiba",
  phone: "+504 2440-0245",
  email: "info@ecotourcangrejal.com",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "Twitter" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Hours",
    content: [
      "Open 24/7 for Premium and Elite members",
      "Basic members: 5 AM - 11 PM daily",
    ],
    link: null,
  },
];

export const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Quienes somos", href: "/about" },
  { name: "Excursiones", href: "/classes" },
  { name: "Paquetes Familiares", href: "/pricing" },
  { name: "Guías", href: "/pricing" },
  { name: "Contacto", href: "/contact" },
];

export const features = [
  {
    title: "Reservas en línea",
    description:
      "Agenda tu aventura cuando quieras, desde cualquier lugar y en minutos",
    icon: "ri-time-line",
  },
  {
    title: "Guías certificados",
    description:
      "Guías locales expertos que conocen cada rincón del Río Cangrejal",
    icon: "ri-user-star-line",
  },
  {
    title: "Equipo profesional",
    description:
      "Todo el equipo de seguridad y aventura incluido en tu experiencia",
    icon: "ri-settings-3-line",
  },
  {
    title: "Tours en grupo",
    description:
      "Comparte la aventura con otros viajeros en recorridos guiados",
    icon: "ri-group-line",
  },
  {
    title: "Paquetes personalizados",
    description:
      "Diseñamos itinerarios a tu medida según tus intereses y tiempo",
    icon: "ri-restaurant-line",
  },
  {
    title: "Comunidad viajera",
    description:
      "Únete a una comunidad apasionada por la naturaleza y la aventura",
    icon: "ri-community-line",
  },
];

export const actividades = [
  {
    nombre: "Rafting en el Río Cangrejal",
    descripcion:
      "Desafía las aguas bravas del río más emocionante de Honduras.",
    descripcionDetallada:
      "Vive la adrenalina del rafting en aguas clase III y IV rodeado de selva tropical. Una experiencia que combina naturaleza pura y aventura extrema.",
    precio: "850 HNL",
    dificultad: "Alta",
    imagen: "",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 12 años",
      "Equipo incluido",
      "Guía certificado",
      "No se requiere experiencia previa",
    ],
    queEsperar:
      "Rápidos emocionantes, paisajes impresionantes y una experiencia que no olvidarás.",
  },
  {
    nombre: "Senderismo al Salto de Agua",
    descripcion: "Camina entre la selva hasta llegar a una cascada escondida.",
    descripcionDetallada:
      "Un recorrido a pie por senderos naturales que te lleva hasta una impresionante cascada rodeada de vegetación tropical.",
    precio: "450 HNL",
    dificultad: "Media",
    imagen: "",
    detalles: [
      "Duración: 2.5 horas",
      "Edad mínima: 8 años",
      "Zapatos de trekking recomendados",
      "Guía incluido",
      "Apto para familias",
    ],
    queEsperar:
      "Paisajes verdes, sonidos de la naturaleza y un refrescante baño natural al final del recorrido.",
  },
  {
    nombre: "Canopy en la Selva",
    descripcion: "Vuela entre los árboles y vive la selva desde las alturas.",
    descripcionDetallada:
      "Deslízate por tirolesas instaladas en lo alto del bosque tropical con vistas impresionantes al río y la montaña.",
    precio: "650 HNL por persona",
    dificultad: "Media",
    imagen: "",
    detalles: [
      "Duración: 1.5 horas",
      "Edad mínima: 10 años",
      "Peso máximo: 120 kg",
      "Arnés y casco incluidos",
      "Guía acompañante",
    ],
    queEsperar:
      "Adrenalina, altura y una perspectiva única de la selva hondureña.",
  },
  {
    nombre: "Senderismo Nocturno",
    descripcion: "Descubre la selva tropical bajo la luz de las estrellas.",
    descripcionDetallada:
      "Una caminata guiada al caer la noche para observar la fauna nocturna, escuchar los sonidos de la selva y vivir una experiencia completamente diferente.",
    precio: "550 HNL",
    dificultad: "Media",
    imagen: "",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 10 años",
      "Linterna incluida",
      "Grupo máximo: 10 personas",
      "Guía naturalista",
    ],
    queEsperar:
      "Avistamiento de fauna nocturna, experiencia sensorial única y atmósfera de aventura.",
  },
  {
    nombre: "Kayak en el Río",
    descripcion: "Explora el río a tu propio ritmo en kayak individual.",
    descripcionDetallada:
      "Recorre tramos tranquilos y moderados del Río Cangrejal en kayak, rodeado de naturaleza y con la montaña de fondo.",
    precio: "600 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 8 años",
      "Chaleco salvavidas incluido",
      "Instrucción básica previa",
      "No se requiere experiencia",
    ],
    queEsperar:
      "Tranquilidad, contacto directo con el río y vistas panorámicas de la selva.",
  },
  {
    nombre: "Observación de Aves",
    descripcion: "Descubre la increíble biodiversidad de aves de Honduras.",
    descripcionDetallada:
      "Un recorrido guiado por senderos estratégicos para el avistamiento de especies endémicas y migratorias en su hábitat natural.",
    precio: "400 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 6 años",
      "Binoculares disponibles",
      "Guía ornitólogo",
      "Salida al amanecer recomendada",
    ],
    queEsperar:
      "Avistamiento de tucanes, loros y más de 50 especies registradas en la zona.",
  },
  {
    nombre: "Tubing en el Río",
    descripcion: "Déjate llevar por la corriente del río en un aro inflable.",
    descripcionDetallada:
      "Una actividad divertida y relajante para toda la familia. Flota sobre el Río Cangrejal disfrutando del paisaje y la frescura del agua.",
    precio: "380 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 1.5 horas",
      "Edad mínima: 7 años",
      "Tubo y chaleco incluidos",
      "Tramo de aguas tranquilas",
      "Apto para familias",
    ],
    queEsperar: "Diversión, frescura y un paseo relajante entre la naturaleza.",
  },
  {
    nombre: "Tour Fotográfico en la Selva",
    descripcion:
      "Captura la belleza de la naturaleza hondureña con un guía especializado.",
    descripcionDetallada:
      "Recorrido diseñado para fotógrafos y amantes de la naturaleza que quieren capturar imágenes únicas de flora, fauna y paisajes.",
    precio: "500 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 8 años",
      "Cualquier cámara o celular válido",
      "Guía naturalista",
      "Grupos de máximo 8 personas",
    ],
    queEsperar:
      "Momentos únicos, luz natural espectacular y recuerdos visuales para toda la vida.",
  },
  {
    nombre: "Rappel en Cascada",
    descripcion:
      "Desciende por una cascada viva con cuerdas y equipo profesional.",
    descripcionDetallada:
      "Una de las actividades más emocionantes del catálogo. Descenderás por la cara de una cascada activa con equipo certificado y guías expertos.",
    precio: "750 HNL",
    dificultad: "Alta",
    imagen: "",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 14 años",
      "Peso máximo: 110 kg",
      "Todo el equipo incluido",
      "Briefing de seguridad previo obligatorio",
    ],
    queEsperar:
      "Adrenalina pura, el sonido del agua y una vista que vale cada segundo del esfuerzo.",
  },
  {
    nombre: "Camping en la Selva",
    descripcion: "Pasa la noche en el corazón del bosque tropical.",
    descripcionDetallada:
      "Una experiencia de inmersión total en la naturaleza. Cena, fogata, sonidos nocturnos y amanecer en la selva incluidos.",
    precio: "1,200 HNL",
    dificultad: "Media",
    imagen: "",
    detalles: [
      "Duración: 1 noche",
      "Edad mínima: 12 años",
      "Tienda y sleeping bag incluidos",
      "Cena y desayuno incluidos",
      "Guía presente toda la noche",
    ],
    queEsperar:
      "Desconexión total, cielo estrellado sin contaminación lumínica y una experiencia que pocos se atreven a vivir.",
  },
  {
    nombre: "Caminata al Pico Bonito",
    descripcion: "Conquista uno de los picos más emblemáticos de Honduras.",
    descripcionDetallada:
      "Una excursión de alto rendimiento para los más aventureros. Ascenso al Parque Nacional Pico Bonito con vistas panorámicas al Caribe.",
    precio: "950 HNL",
    dificultad: "Alta",
    imagen: "",
    detalles: [
      "Duración: 6 horas",
      "Edad mínima: 16 años",
      "Nivel físico medio-alto requerido",
      "Refrigerio incluido",
      "Guía certificado de montaña",
    ],
    queEsperar:
      "Vistas al Mar Caribe, biodiversidad única y una sensación de logro incomparable.",
  },
  {
    nombre: "Visita a Comunidad Local",
    descripcion:
      "Conoce la cultura y tradiciones de las comunidades de la región.",
    descripcionDetallada:
      "Un tour cultural que te conecta con la gente local, su gastronomía, artesanía y forma de vida en los alrededores del Cangrejal.",
    precio: "350 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 2.5 horas",
      "Apto para todas las edades",
      "Guía local bilingüe",
      "Degustación de comida típica incluida",
      "Grupos de máximo 12 personas",
    ],
    queEsperar:
      "Calidez humana, sabores auténticos y una perspectiva cultural que enriquece cualquier viaje.",
  },
  {
    nombre: "Pesca Deportiva en el Río",
    descripcion: "Lanza tu caña en las aguas cristalinas del Cangrejal.",
    descripcionDetallada:
      "Actividad tranquila y entretenida para quienes disfrutan de la pesca. El guía te mostrará los mejores puntos del río y las técnicas locales.",
    precio: "700 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 8 años",
      "Caña y equipo incluidos",
      "Pesca catch and release",
      "Guía pescador local",
    ],
    queEsperar:
      "Contacto directo con el río y la satisfacción de pescar en aguas vírgenes.",
  },
  {
    nombre: "Tour en Bicicleta de Montaña",
    descripcion: "Recorre senderos y caminos rurales sobre dos ruedas.",
    descripcionDetallada:
      "Un recorrido en bicicleta por caminos rurales, aldeas y miradores naturales con vistas al río y la montaña.",
    precio: "580 HNL/persona",
    dificultad: "Media",
    imagen: "",
    detalles: [
      "Duración: 2.5 horas",
      "Edad mínima: 12 años",
      "Bicicleta y casco incluidos",
      "Nivel físico básico recomendado",
      "Guía en bicicleta",
    ],
    queEsperar:
      "Libertad, aire fresco, paisajes rurales y la adrenalina de los descensos en tierra.",
  },
  {
    nombre: "Expedición Botánica",
    descripcion:
      "Aprende sobre la flora medicinal y tropical de la selva hondureña.",
    descripcionDetallada:
      "Un recorrido educativo guiado por un experto botánico para conocer las plantas medicinales, árboles maderables y especies únicas de la región.",
    precio: "420 HNL",
    dificultad: "Baja",
    imagen: "",
    detalles: [
      "Duración: 2 horas",
      "Apto para todas las edades",
      "Ideal para grupos escolares",
      "Guía botánico especializado",
      "Material educativo incluido",
    ],
    queEsperar:
      "Conocimiento, asombro y una nueva apreciación por la biodiversidad de Honduras.",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Group classes included",
      "Personal trainer consultation",
      "Nutrition guidance",
      "24/7 access",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal plans",
      "Priority class booking",
      "Spa & recovery access",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Viajero independiente",
    content:
      "Una experiencia que superó todas mis expectativas. Los guías conocen cada detalle del río y la selva. Sin duda el mejor tour que he hecho en Honduras.",
    rating: 5,
  },
  {
    name: "Laura Espinoza ",
    role: "Viajera en familia",
    content:
      "Llevé a mis hijos por primera vez y fue increíble. El equipo nos hizo sentir seguros en todo momento. Regresamos con ganas de volver.",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "Turista internacional",
    content:
      "Vine desde México buscando aventura real y el Cangrejal me la dio. El rafting fue emocionante y los guías son excelentes personas. Totalmente recomendado.",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, ellipticals, and bikes",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Strength Training",
    description: "Comprehensive free weights and machines",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Group Class Studio",
    description: "Spacious studio for yoga, HIIT, and more",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Locker Rooms",
    description: "Clean, modern facilities with showers",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Functional Training",
    description: "TRX, battle ropes, and functional equipment",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Recovery Zone",
    description: "Stretching area and foam rollers",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
];

export const faqs = [
  {
    question: "Do I need to be fit to join?",
    answer:
      "Not at all! We welcome members of all fitness levels. Our trainers will help you start at your own pace and gradually build your strength and endurance.",
  },
  {
    question: "What should I bring to the gym?",
    answer:
      "Just bring a water bottle, towel, and comfortable workout clothes. We provide all equipment, lockers, and shower facilities.",
  },
  {
    question: "Can I try the gym before committing?",
    answer:
      "Yes! We offer a free 7-day trial pass so you can experience our facilities, classes, and community before making a commitment.",
  },
  {
    question: "Are personal trainers included?",
    answer:
      "Personal training is available as an add-on service. Premium and Elite memberships include consultation sessions, and Elite members get unlimited personal training.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We're open 24/7 for Premium and Elite members. Basic members have access during staffed hours (5 AM - 11 PM).",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have free parking available for all members. The parking lot is well-lit and secure.",
  },
];

export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
  { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
  { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
];

export const successStories = [
  {
    name: "Jessica Martinez",
    age: 32,
    duration: "8 months",
    result: "Lost 45 lbs",
    story:
      "I was skeptical at first, but FitZone changed my life. The supportive trainers and community kept me motivated. I've never felt better!",
    beforeImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 months",
    result: "Gained 20 lbs muscle",
    story:
      "The strength training program and nutrition guidance helped me build the physique I always wanted. The trainers are true professionals.",
    beforeImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 year",
    result: "Completed first marathon",
    story:
      "From never running to completing a marathon - FitZone's cardio programs and group classes gave me the endurance and confidence I needed.",
    beforeImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "500+", label: "Aventureros satisfechos", icon: "ri-user-line" },
  { number: "50+", label: "Guías locales expertos", icon: "ri-user-star-line" },
  {
    number: "10k+",
    label: "Tours completados",
    icon: "ri-calendar-check-line",
  },
  { number: "5k+", label: "Kilómetros recorridos", icon: "ri-line-chart-line" },
  { number: "98%", label: "Tasa de satisfacción", icon: "ri-heart-line" },
  { number: "15+", label: "Años de experiencia", icon: "ri-award-line" },
];

export const fullSchedule = {
  monday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  tuesday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  wednesday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  thursday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  friday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  saturday: [
    { time: "8:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "10:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "11:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
  ],
  sunday: [
    { time: "9:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "10:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  ],
};

export const trainers = [
  {
    name: "John Smith",
    role: "Head Trainer",
    specialization: "Strength Training & Nutrition",
    experience: "10+ years",
    bio: "John is a certified strength and conditioning specialist with over a decade of experience helping athletes and fitness enthusiasts achieve their goals. He specializes in strength training, powerlifting, and nutrition coaching.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["CSCS", "NASM-CPT", "Nutrition Specialist"],
  },
  {
    name: "Sarah Johnson",
    role: "Yoga & Pilates Instructor",
    specialization: "Yoga, Pilates & Holistic Wellness",
    experience: "8+ years",
    bio: "Sarah is a certified yoga and Pilates instructor with extensive training in multiple yoga styles. She combines traditional practices with modern techniques to help members find balance, flexibility, and inner peace.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["RYT-500", "Pilates Certified", "Meditation Instructor"],
  },
  {
    name: "Mike Chen",
    role: "HIIT Specialist",
    specialization: "High-Intensity Training & Athletic Performance",
    experience: "7+ years",
    bio: "Mike is an expert in high-intensity interval training and athletic performance. His dynamic classes push members to new limits while maintaining safety and proper form. He's passionate about helping people discover their inner athlete.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: [
      "ACE-CPT",
      "HIIT Specialist",
      "Athletic Performance Coach",
    ],
  },
  {
    name: "Emma Davis",
    role: "Cardio & Dance Instructor",
    specialization: "Cardio, Dance Fitness & Zumba",
    experience: "5+ years",
    bio: "Emma brings energy and fun to every class. With a background in dance and fitness, she creates engaging cardio workouts that make exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    certifications: ["Zumba Certified", "Dance Fitness Instructor", "ACE-CPT"],
  },
  {
    name: "James Wilson",
    role: "CrossFit Coach",
    specialization: "CrossFit & Functional Movement",
    experience: "6+ years",
    bio: "James is a Level 2 CrossFit coach with a passion for functional fitness. He helps members build strength, improve mobility, and achieve their fitness goals through varied, high-intensity workouts.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    certifications: [
      "CrossFit Level 2",
      "Functional Movement Specialist",
      "Olympic Lifting Coach",
    ],
  },
];

export const history = [
  {
    year: "2009",
    title: "Founded",
    description:
      "FitZone Gym was founded with a vision to create an inclusive fitness community where everyone feels welcome.",
  },
  {
    year: "2012",
    title: "First Expansion",
    description:
      "Expanded facilities to include a dedicated group class studio and added 20+ new pieces of equipment.",
  },
  {
    year: "2015",
    title: "24/7 Access",
    description:
      "Introduced 24/7 access for Premium and Elite members, making fitness accessible around the clock.",
  },
  {
    year: "2018",
    title: "500 Members Milestone",
    description:
      "Reached 500 active members and expanded our trainer team to 20 certified professionals.",
  },
  {
    year: "2020",
    title: "Digital Integration",
    description:
      "Launched online class booking and virtual training options to adapt to changing needs.",
  },
  {
    year: "2024",
    title: "Award Winner",
    description:
      "Recognized as 'Best Gym 2024' by the local fitness community, celebrating 15 years of excellence.",
  },
];

export const paymentOptions = {
  methods: [
    "Credit/Debit Cards",
    "Bank Transfer",
    "PayPal",
    "Apple Pay",
    "Google Pay",
  ],
  plans: [
    {
      type: "Monthly",
      description: "Pay month-to-month with no long-term commitment",
    },
    {
      type: "Annual",
      description: "Save 15% with annual payment - best value!",
    },
    {
      type: "Family Plan",
      description: "Special rates for families - contact us for details",
    },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};
