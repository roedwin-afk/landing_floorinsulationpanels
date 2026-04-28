export const es = {
    nav: {
        features: 'Características',
        techDetails: 'Detalles Técnicos',
        installation: 'Instalación',
        specs: 'Especificaciones',
        contact: 'Contáctanos',
    },
    hero: {
        badge: 'Excelencia en Ingeniería',
        title1: 'Aislamiento',
        title2: 'Industrial de Pisos',
        desc: 'Sistemas de paneles de alta densidad diseñados para soportar cargas estructurales extremas manteniendo una eficiencia térmica superior en logística y almacenamiento en frío.',
        cta1: 'Datos Técnicos',
        cta2: 'Guía de Instalación',
        meta1: 'CAPACIDAD: USO PESADO',
        meta2: 'CERTIFICADO ISO 9001',
    },
    features: {
        heading: 'Rendimiento Industrial',
        heavy: {
            title: 'Soporte de Alta Carga',
            desc: 'Ideal para almacenes automatizados y tráfico pesado de montacargas sin fatiga estructural ni problemas de compresión.',
        },
        thermal: {
            title: 'Precisión Térmica',
            desc: 'Mantiene temperaturas estables en logística de almacenamiento en frío, evitando puentes térmicos y reduciendo costos de energía.',
        },
        rapid: {
            title: 'Ensamblaje Rápido',
            desc: 'Sistema de machihembrado permite una instalación en seco rápida en obra, reduciendo los plazos del proyecto en un 30%.',
        },
    },
    anatomy: {
        heading: 'Anatomía del Panel',
        subheading: 'Enfoque multicapa de alto rendimiento para integridad estructural y gestión térmica.',
        badge: 'Visualización Técnica',
        layers: [
            {
                title: 'Capa Superficial Protectora',
                desc: 'Superficie reforzada con fibra para máxima resistencia al impacto y protección contra el desgaste.',
            },
            {
                title: 'Núcleo Aislante (PIR/XPS)',
                desc: 'Núcleo de alta densidad disponible en varios espesores para alcanzar valores R específicos.',
            },
            {
                title: 'Sistema de Control de Humedad',
                desc: 'Barrera de vapor integrada para proteger el núcleo y evitar la migración de humedad del suelo.',
            },
        ],
    },
    process: {
        heading: 'Flujo de Trabajo Industrial',
        subheading: 'Procedimientos optimizados en obra para cumplir los hitos del proyecto.',
        badge: 'Ingeniería de Precisión',
        steps: [
            {
                number: '01',
                title: 'Preparación de Superficie',
                desc: 'Nivelación del subsuelo y análisis de humedad para estabilidad del sustrato.',
            },
            {
                number: '02',
                title: 'Enclavamiento de Paneles',
                desc: 'Instalación en seco rápida usando herramientas de alineación estandarizadas.',
            },
            {
                number: '03',
                title: 'Sellado de Juntas',
                desc: 'Eliminación de puentes térmicos mediante sellado especializado de juntas.',
            },
            {
                number: '04',
                title: 'Inspección Final',
                desc: 'Verificación de capacidad de carga y entrega del proyecto.',
            },
        ],
    },
    specs: {
        heading: 'Matriz Técnica',
        cta: {
            title: '¿Requisitos específicos de valor R?',
            desc: 'Nuestro laboratorio puede fabricar paneles con densidades de núcleo personalizadas para adaptarse al modelo energético de su edificio.',
            button: 'Consultar Depto. Técnico',
        },
        rows: [
            { label: 'Resistencia a Compresión', value: '750 - 1200 kPa' },
            { label: 'Conductividad Térmica', value: '0.022 W/m·K' },
            { label: 'Clasificación de Fuego', value: 'Euroclass B-s1, d0' },
            { label: 'Ancho Estándar', value: '1150 mm (Nominal)' },
            { label: 'Espesor Disponible', value: '60 - 200 mm' },
            { label: 'Longitud del Panel', value: 'Hasta 6000 mm' },
        ],
    },
    contact: {
        heading: 'Consulta Técnica',
        subheading: 'Nuestros ingenieros estructurales están listos para ayudarle con sus cálculos de carga y especificaciones de aislamiento.',
        cta: 'Solicitar Cotización',
        badge: 'Contáctanos',
    },
    footer: {
        tagline: 'Una subsidiaria de Constructive Solutions Group, definiendo los estándares de aislamiento industrial de losas en Europa y América.',
        company: {
            heading: 'Empresa',
            links: [
                { label: 'Nosotros', href: '#' },
                { label: 'Certificaciones', href: '#' },
                { label: 'Casos de Estudio', href: '#' },
            ],
        },
        support: {
            heading: 'Soporte',
            links: [
                { label: 'Objetos BIM', href: '#' },
                { label: 'Detalles CAD', href: '#' },
                { label: 'Documentación', href: '#' },
                { label: 'Contacto', href: '#' },
            ],
        },
        legal: {
            copyright: '© 2025 Constructive Solutions Group | División de Aislamiento de Pisos',
            privacy: 'Política de Privacidad',
            compliance: 'Cumplimiento Industrial',
        },
    },
} as const;