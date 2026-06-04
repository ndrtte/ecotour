export const siteData = {
  name: "Eco-Tour Cangrejal",
  tagline: "",
  description: "La aventura más auténtica de Honduras te está esperando.",
  address: "KM 8 Carretera a las Cuencas, La Ceiba",
  phone: "+504 2440-0245",
  keeperPhone : "+504 9876-5432",
  schedule: "Lun-Dom 5am - 6pm" ,
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
    title: "Dirección",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Teléfono",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Correo electrónico",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-mail-line",
    title: "Telefono de Guardabosques",
    content: siteData.keeperPhone,
    link: `tel:${siteData.keeperPhone}`,
  }
];

export const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Excursiones", href: "/excursiones" },
  { name: "Paquetes", href: "/paquetes" },
  { name: "Guías", href: "/guia" },
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
    icon: "ri-red-packet-line",
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
    imagen:
      "https://visitatlantida.com/wp-content/uploads/2015/04/r%C3%ADo-cangrejal-omega-tours-rafting.jpg",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 18 años",
      "Equipo incluido",
      "Guía certificado",
      "No se requiere experiencia previa",
    ],
    queEsperar:
      "Rápidos emocionantes, paisajes impresionantes y una experiencia que no olvidarás.",
  },
  {
    nombre: "Senderismo en Pico Bonito",
    descripcion:
      "Explora senderos rodeados de selva tropical y descubre impresionantes paisajes naturales.",
    descripcionDetallada:
      "Recorre senderos rodeados de exuberante vegetación, observa la fauna local y admira cascadas de aguas cristalinas.",
    precio: "450 HNL",
    dificultad: "Media",
    imagen:
      "https://visitatlantida.com/wp-content/uploads/2015/08/hiking-en-el-parque-nacional-pico-bonito-puente-de-hamaca.jpg",
    detalles: [
      "Duración: 2.5 horas",
      "Edad mínima: 10 años",
      "Zapatos de trekking recomendados",
      "Guía incluido",
      "Apto para familias",
    ],
    queEsperar:
      "Vistas panorámicas de la montaña, abundante biodiversidad, ríos de agua fresca y una experiencia inmersiva en la naturaleza hondureña.",
  },
  {
    nombre: "Canopy sobre el Cangrejal",
    descripcion:
      "Cruza entre plataformas suspendidas con vistas espectaculares al valle del Cangrejal.",
    descripcionDetallada:
      "Disfruta de un recorrido de canopy que combina adrenalina y naturaleza, permitiéndote observar desde las alturas los paisajes montañosos y los ríos cristalinos de la región.",
    precio: "650 HNL por persona",
    dificultad: "Media",
    imagen:
      "https://www.selvatura.com/wp-content/uploads/2025/04/Canopy_1-scaled.jpg",
    detalles: [
      "Duración: 1.5 horas",
      "Edad mínima: 12 años",
      "Peso máximo: 120 kg",
      "Arnés y casco incluidos",
      "Guía acompañante",
    ],
    queEsperar:
      "Velocidad, paisajes impresionantes y una perspectiva diferente de los atractivos naturales de La Ceiba.",
  },
  {
    nombre: "Senderismo Nocturno",
    descripcion: "Descubre la selva tropical bajo la luz de las estrellas.",
    descripcionDetallada:
      "Una caminata guiada al caer la noche para observar la fauna nocturna, escuchar los sonidos de la selva y vivir una experiencia completamente diferente.",
    precio: "550 HNL",
    dificultad: "Media",
    imagen:
      "https://www.unirioja.es/wp-content/uploads/2025/06/20250614-senderismo-Leon-Dormido-nocturno-Unirioja-001.jpg",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 15 años",
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
    imagen:
      "https://www.lavilladesoledad.com/es/wp-content/uploads/sites/2/2013/08/picobonito-1160x665.jpg",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 16 años",
      "Chaleco salvavidas incluido",
      "Instrucción básica previa",
      "No se requiere experiencia",
    ],
    queEsperar:
      "Tranquilidad, contacto directo con el río y vistas panorámicas de la selva.",
  },
  {
    nombre: "Observación de Aves",
    descripcion:
      "Explora los senderos naturales de Pico Bonito mientras observas aves en su entorno natural.",
    descripcionDetallada:
      "Recorrerás áreas ideales para el avistamiento de aves, donde podrás apreciar una gran variedad de especies propias de los bosques tropicales del Caribe hondureño.",
    precio: "400 HNL",
    dificultad: "Baja",
    imagen:
      "https://aveshonduras.org/wp-content/uploads/2026/02/Hugo-Orellana-Lovely-Cotinga-1.png",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 10 años",
      "Binoculares disponibles",
      "Guía especializado",
      "Salida al amanecer recomendada",
    ],
    queEsperar:
      "Cantos de aves, senderos rodeados de naturaleza y observar especies coloridas de Honduras.",
  },
  {
    nombre: "Tubing en el Río",
    descripcion:
      "Disfruta de una aventura acuática mientras recorres las aguas del río rodeado de naturaleza.",
    descripcionDetallada:
      "Una actividad ideal para quienes buscan combinar diversión, paisajes naturales y contacto con el agua.",
    precio: "380 HNL",
    dificultad: "Baja",
    imagen:
      "https://image-tc.galaxy.tf/wijpeg-1sklff835xqek6r3gp45c59t/1-tubing-rio-celeste-costa-rica.jpg?width=1920",
    detalles: [
      "Duración: 1.5 horas",
      "Edad mínima: 10 años",
      "Tubo y chaleco incluidos",
      "Guía acompañante",
      "Apto para familias",
    ],
    queEsperar:
      "Agua fresca, vistas naturales y una experiencia divertida para disfrutar en grupo o en familia.",
  },
  {
    nombre: "Tour Fotográfico de Naturaleza",
    descripcion:
      "Captura los paisajes, la flora y la fauna de uno de los entornos naturales más impresionantes de Honduras.",
    descripcionDetallada:
      "Explora senderos rodeados de vegetación tropical mientras descubres oportunidades únicas para fotografiar paisajes, aves, cascadas y otros atractivos naturales de la región.",
    precio: "500 HNL",
    dificultad: "Baja",
    imagen:
      "https://diarioroatan.com/wp-content/uploads/2018/08/parque-nacional-pico-bonito-area-protegida-caribe-maya-rio-zacate-04.jpg",
    detalles: [
      "Duración: 3 horas",
      "Edad mínima: 8 años",
      "Cualquier cámara o celular es bienvenido",
      "Guía naturalista",
      "Grupos de máximo 8 personas",
    ],
    queEsperar:
      "Paisajes espectaculares, abundante naturaleza y múltiples oportunidades para capturar recuerdos inolvidables.",
  },
  {
    nombre: "Rappel en Cascada",
    descripcion:
      "Desciende por una cascada natural utilizando equipo especializado y acompañamiento profesional.",

    descripcionDetallada:
      "Una experiencia ideal para quienes buscan emoción y contacto directo con los paisajes naturales de la región.",
    precio: "750 HNL",
    dificultad: "Alta",
    imagen:
      "https://images.squarespace-cdn.com/content/v1/58a89f87d2b8579b70b82a9e/1578063070696-A255XE5DMPCAN665E5YR/adrenaline_to_the_max_package.JPG",
    detalles: [
      "Duración: 2 horas",
      "Edad mínima: 16 años",
      "Peso máximo: 110 kg",
      "Todo el equipo incluido",
      "Inducción de seguridad obligatoria",
    ],
    queEsperar:
      "Adrenalina, impresionantes vistas naturales y la satisfacción de superar un emocionante desafío al aire libre.",
  },
  {
    nombre: "Camping en Pico Bonito",
    descripcion:
      "Disfruta una noche rodeado de naturaleza en uno de los entornos más impresionantes de Honduras.",
    descripcionDetallada:
      "Vive una experiencia de conexión con la naturaleza pasando la noche en un área de campamento rodeada de bosque tropical.",
    precio: "1,200 HNL",
    dificultad: "Media",
    imagen:
      "https://www.hondurastips.hn/wp-content/uploads/2020/09/La-tigra.jpg",
    detalles: [
      "Duración: 1 noche",
      "Edad mínima: 10 años",
      "Tienda y sleeping bag incluidos",
      "Cena y desayuno incluidos",
      "Guía acompañante",
    ],
    queEsperar:
      "Tranquilidad, observación de la naturaleza, cielos despejados y una experiencia única lejos del ritmo de la ciudad.",
  },
  {
    nombre: "Excursión a Cayos Cochinos",
    descripcion:
      "Descubre playas de arena blanca, aguas cristalinas y uno de los ecosistemas marinos más impresionantes de Honduras.",
    descripcionDetallada:
      "Disfruta de una aventura de un día visitando Cayos Cochinos, un archipiélago protegido reconocido por su belleza natural y biodiversidad.",
    precio: "1,500 HNL",
    dificultad: "Baja",
    imagen:
      "https://visitatlantida.com/wp-content/uploads/2015/06/Cayos-Cochinos.jpg",
    detalles: [
      "Duración: Día completo",
      "Salida desde La Ceiba",
      "Transporte marítimo incluido",
      "Tiempo libre para explorar",
      "Apto para toda la familia",
    ],

    queEsperar:
      "Paisajes espectaculares, aguas turquesas, vida marina y una experiencia inolvidable en el Caribe hondureño.",
  },
  {
    nombre: "Experiencia Cultural Local",
    descripcion:
      "Sumérgete en la cultura y tradiciones vivas de las comunidades cercanas al Cangrejal.",
    descripcionDetallada:
      "Vive un recorrido cultural guiado por miembros de la comunidad, donde conocerás tradiciones, gastronomía y artesanías locales.",
    precio: "350 HNL",
    dificultad: "Baja",
    imagen: "https://wa-dani.com/wp-content/uploads/2022/05/Carnaval2022.jpeg",
    detalles: [
      "Duración: 2.5 horas",
      "Apto para todas las edades",
      "Guía local bilingüe",
      "Degustación de comida típica",
      "Actividad en colaboración con la comunidad",
    ],
    queEsperar:
      "Intercambio cultural auténtico, sabores tradicionales y una conexión respetuosa con la vida local.",
  },
  {
    nombre: "Paseo en lancha por manglares",
    descripcion:
      "Recorre canales naturales rodeados de manglares y descubre la vida silvestre de la costa caribeña.",
    descripcionDetallada:
      "Explora en lancha los ecosistemas de manglar cercanos a la costa de La Ceiba, observando aves, fauna local y la importancia ecológica de estos entornos naturales.",
    precio: "600 HNL",
    dificultad: "Baja",
    imagen:
      "https://www.reservacioneslaceiba.com/wp-content/uploads/2017/01/vlcsnap-2020-05-25-12h49m50s504.jpg",
    detalles: [
      "Duración: 2 horas",
      "Apto para todas las edades",
      "Lancha y chaleco incluidos",
      "Guía local",
      "Recorrido tranquilo",
    ],
    queEsperar:
      "Naturaleza costera, observación de aves y un paseo relajante por canales naturales.",
  },
  {
    nombre: "Tour en Bicicleta de Montaña",
    descripcion:
      "Explora rutas de montaña y paisajes naturales sobre dos ruedas.",
    descripcionDetallada:
      "Recorre caminos rurales y senderos naturales en bicicleta, pasando por comunidades locales, miradores y paisajes montañosos cercanos al área del Cangrejal y Pico Bonito.",
    precio: "580 HNL por persona",
    dificultad: "Media",
    imagen: "https://visitatlantida.com/wp-content/uploads/2015/08/MTB-15.jpg",
    detalles: [
      "Duración: 2.5 horas",
      "Edad mínima: 13 años",
      "Bicicleta y casco incluidos",
      "Nivel físico básico recomendado",
      "Guía acompañante",
    ],
    queEsperar:
      "Paisajes montañosos, aire fresco, tramos de aventura ligera y una forma activa de conocer la región.",
  },
  {
    nombre: "Pesca deportiva",
    descripcion:
      "Disfruta una jornada de pesca en ríos o zonas costeras del Caribe hondureño.",
    descripcionDetallada:
      "Vive una experiencia tranquila practicando pesca deportiva en entornos naturales cercanos a La Ceiba.",
    precio: "700 HNL",
    dificultad: "Baja",
    imagen: "https://i.ytimg.com/vi/x6FXz6SJXr0/maxresdefault.jpg",
    detalles: [
      "Duración: 3 horas",
      "Apto para principiantes",
      "Equipo de pesca incluido",
      "Guía local",
      "Actividad relajante",
    ],
    queEsperar:
      "Relajación, contacto con la naturaleza y la oportunidad de disfrutar de la pesca en un entorno tropical.",
  },
];

export const ofertasTemporada = [
  {
    nombre: "Paquete Familiar Básico",
    precioRegular: "800 HNL",
    precioOferta: "550 HNL",
    badge: "ECO-PROMO",
    cuposDisponibles: 4,
    cuposTotal: 10,
    detalles: [
      "Acceso general a áreas recreativas naturales",
      "Uso de equipo básico para actividades (según disponibilidad)",
      "Áreas de descanso y vestidores incluidos",
      "Estacionamiento gratuito dentro del complejo",
      "Acceso a senderos cortos autoguiados",
      "Zona de picnic familiar",
    ],
  },
  {
    nombre: "Experiencia Premium Pico Nocturno",
    precioRegular: "1500 HNL",
    precioOferta: "1150 HNL",
    badge: "CUPOS LIMITADOS",
    cuposDisponibles: 6,
    cuposTotal: 10,
    detalles: [
      "Ascenso guiado al atardecer con acceso exclusivo a mirador privado",
      "Cena ligera o picnic especial en la cima",
      "Guía certificado durante todo el recorrido",
      "Equipo de iluminación y seguridad incluido (linternas/frontales)",
      "Sesión de fotos en puntos panorámicos",
      "Transporte de regreso incluido",
    ],
  },
  {
    nombre: "Promo Verano",
    precioRegular: "600 HNL",
    precioOferta: "350 HNL",
    badge: "TIEMPO LIMITADO",
    cuposDisponibles: 2,
    cuposTotal: 8,
    detalles: [
      "Acceso especial de fin de semana a áreas recreativas",
      "Paquete válido para 2 personas",
      "Disponible únicamente durante temporada de verano (junio - agosto)",
      "Ingreso con horario preferencial en fines de semana",
      "Acceso a zonas seleccionadas del complejo",
      "Promoción sujeta a disponibilidad de cupos",
    ],
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
    icon: "ri-tree-line",
  },
  {
    number: "2k+",
    label: "Kilómetros recorridos",
    icon: "ri-treasure-map-line",
  },
  { number: "98%", label: "Tasa de satisfacción", icon: "ri-heart-line" },
  { number: "5+", label: "Años de experiencia", icon: "ri-award-line" },
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

export const equipo = [
  {
    name: "María Fernanda López",
    role: "Coordinadora de Experiencias",
    specialization: "Turismo de aventura & Atención al visitante",
    experience: "7+ años",
    bio: "María Fernanda se encarga de diseñar y coordinar las experiencias para garantizar que cada visita sea segura, organizada y memorable. Tiene amplia experiencia en turismo de aventura y atención al cliente en entornos naturales.",
    image:
      "https://images.unsplash.com/photo-1538100573692-d2d3f4cf3595?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carlos Alberto Reyes",
    role: "Guía de Aventura",
    specialization: "Senderismo & Seguridad en montaña",
    experience: "5+ años",
    bio: "Carlos es guía especializado en senderismo y actividades al aire libre. Su enfoque está en la seguridad del visitante y en crear recorridos dinámicos que conecten con la naturaleza.",
    image:
      "https://images.unsplash.com/photo-1625513966414-cce34d7344be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Daniela Vargas",
    role: "Especialista en Atención al Cliente",
    specialization: "Reservas & Experiencia del visitante",
    experience: "6+ años",
    bio: "Daniela se encarga de la atención al cliente y el manejo de reservas, asegurando una comunicación clara y rápida para cada visitante antes y durante su experiencia.",
    image:
      "https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "José Andrés Mejía",
    role: "Encargado de Operaciones",
    specialization: "Logística & Coordinación en sitio",
    experience: "8+ años",
    bio: "José Andrés supervisa las operaciones diarias en el lugar, asegurando que cada actividad se desarrolle de forma ordenada, segura y eficiente para todos los visitantes.",
    image:
      "https://plus.unsplash.com/premium_photo-1664910497704-16ceb7f6d95e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sofía Martínez",
    role: "Asesora de Reservas",
    specialization: "Atención al cliente & Gestión de reservas",
    experience: "4+ años",
    bio: "Sofía es la encargada de guiar a los visitantes en el proceso de reservas, brindando información clara y apoyo personalizado antes de cada experiencia.",
    image:
      "https://images.unsplash.com/photo-1598013924228-f336656b163c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const lineamientos = [
  {
    numero: "1",
    titulo: "Documento de identificación",
    descripcion:
      "Todos los participantes deben presentar una identificación oficial vigente antes de iniciar la actividad. Ciudadanos locales pueden presentar su documento nacional de identidad; visitantes extranjeros deben presentar pasaporte válido.",
  },
  {
    numero: "2",
    titulo: "Firma de exención de responsabilidad",
    descripcion:
      "La firma de la hoja de exención de responsabilidad es obligatoria para todos los participantes. En el caso de menores de edad, el documento debe ser firmado por un padre, madre o tutor legal presente en el lugar.",
  },
  {
    numero: "3",
    titulo: "Calzado cerrado con tracción",
    descripcion:
      "El uso de calzado cerrado con suela de tracción es obligatorio durante todas las actividades. No se permitirá el acceso con sandalias, chancletas, tacones ni calzado deportivo sin agarre. Esta medida es fundamental para la seguridad en terrenos irregulares.",
  },
  {
    numero: "4",
    titulo: "Ropa de cambio y protector solar biodegradable",
    descripcion:
      "Se recomienda llevar una muda de ropa completa adicional, considerando las condiciones climáticas del recorrido. El uso de protector solar es requerido; únicamente se permite protector solar de fórmula biodegradable para proteger los ecosistemas naturales de la zona.",
  },
  {
    numero: "5",
    titulo: "Notificación de condiciones médicas preexistentes",
    descripcion:
      "Todo participante con condiciones médicas preexistentes — incluyendo asma, problemas cardíacos, alergias severas u otras condiciones relevantes — debe notificarlo al equipo de guías antes del inicio de la actividad. Esta información es confidencial y se utiliza exclusivamente para garantizar la seguridad de cada participante.",
  },
];

export const paymentOptions = {
  methods: [
    "Tarjeta de crédito o débito",
    "Transferencia",
    "Efectivo",
    "Pago móvil",
    "PayPal",
  ],

  guarantee: "Cancelación flexible con reembolso según políticas de reserva",
  trial:
    "Las actividades se reservan con anticipación y están sujetas a disponibilidad",
};

export const tipoTransporte = [
  {
    tipo: "Ninguno",
    precio: 0,
  },
  {
    tipo: "Transporte propio",
    precio: 0,
  },
  {
    tipo: "Desde La Ceiba centro",
    precio: 200,
  },
  {
    tipo: "Desde el aeropuerto / muelle",
    precio: 350,
  },
];
