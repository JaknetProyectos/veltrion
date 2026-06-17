export type Plan = {
  name: string;
  price: number;
  unit: string;
  popular?: boolean;
  features: string[];
};

export type PlanCategory = {
  id: string;
  title: string;
  plans: Plan[];
};

const FIX_PLANS_SPANISH: Plan[] = [
  {
    name: "Fix starter",
    price: 490,
    unit: "MXN/hora + IVA",
    features: [
      "Corrección de bugs simples: crashes menores, errores de UI/UX menores, fallos reportados con pasos concretos.",
      "No involucra reestructurar código, solo arreglar errores puntuales.",
      "Pruebas simples después de la corrección.",
      "Soporte limitado para pruebas en pocos dispositivos.",
    ],
  },
  {
    name: "Fix Booster",
    price: 960,
    unit: "MXN/hora + IVA",
    popular: true,
    features: [
      "Bugs de complejidad media: errores que afectan funcionalidad, integración con APIs o servicios externos, condiciones límite.",
      "Corrección de errores de rendimiento, memoria, compatibilidad en varios dispositivos.",
      "Pruebas más extensas, múltiples escenarios.",
      "Revisiones incluidas (por ejemplo 1-2 rondas de feedback).",
    ],
  },
  {
    name: "Fix Master",
    price: 1600,
    unit: "MXN/hora + IVA",
    features: [
      "Bugs complejos: errores en lógica complicada, multihilo, sincronización, problemas en conexiones, seguridad, fallos críticos o leaks de memoria.",
      "Involucra diagnóstico profundo, uso de herramientas de profiling, logs, debug avanzado.",
      "Correcciones que implican refactorización parcial de código.",
      "Pruebas exhaustivas en muchos dispositivos o versiones de SO, QA riguroso.",
      "Incluye soporte postcorrección por un periodo determinado.",
    ],
  },
];

const FIX_PLANS_ENGLISH: Plan[] = [
  {
    name: "Fix Starter",
    price: 490,
    unit: "MXN/hour + VAT",
    features: [
      "Fixes for simple bugs: minor crashes, small UI/UX issues, reported failures with clear reproduction steps.",
      "Does not involve code restructuring, only specific bug fixes.",
      "Basic testing after applying fixes.",
      "Limited support for testing on a few devices.",
    ],
  },
  {
    name: "Fix Booster",
    price: 960,
    unit: "MXN/hour + VAT",
    popular: true,
    features: [
      "Medium-complexity bugs: issues affecting functionality, API or third-party service integrations, edge cases.",
      "Fixes for performance, memory, and multi-device compatibility issues.",
      "More extensive testing across multiple scenarios.",
      "Includes revisions (for example 1–2 feedback rounds).",
    ],
  },
  {
    name: "Fix Master",
    price: 1600,
    unit: "MXN/hour + VAT",
    features: [
      "Complex bugs: issues in complicated logic, multithreading, synchronization, connection problems, security flaws, critical failures, or memory leaks.",
      "Includes deep diagnostics, profiling tools, logging, and advanced debugging.",
      "Fixes that may require partial code refactoring.",
      "Extensive testing on many devices or OS versions with rigorous QA.",
      "Includes post-fix support for a defined period.",
    ],
  },
];


export const PLAN_CATEGORIES_SPANISH: PlanCategory[] = [
  {
    id: "correccion-de-errores",
    title: "Corrección de errores",
    plans: FIX_PLANS_SPANISH,
  },
  {
    id: "actualizaciones",
    title: "Actualizaciones de OS/SDK/Dependencias",
    plans: [
      {
        name: "Nivel Refresh",
        price: 600,
        unit: "MXN/hora + IVA",
        features: [
          "Actualizar una o dos dependencias/librerías menores.",
          "Ajustes menores para compatibilidad mínima con nueva versión de SO.",
          "Testing limitado en 1-2 dispositivos/emuladores.",
          "No reestructuraciones del código.",
        ],
      },
      {
        name: "Nivel Evolution",
        price: 800,
        unit: "MXN/hora + IVA",
        popular: true,
        features: [
          "Actualización de múltiples dependencias o frameworks (SDKs).",
          "Corrección de llamadas a APIs obsoletas.",
          "Adaptaciones mayores para compatibilidad con nuevas versiones de iOS/Android.",
          "Pruebas en varios dispositivos/sistemas operativos.",
          "Incluye una ronda de corrección después de pruebas.",
        ],
      },
      {
        name: "Nivel Vanguard",
        price: 1600,
        unit: "MXN/hora + IVA",
        features: [
          "Actualización integral de versión de SO o migración grande de versión (ej. de SDK muy antiguo a uno moderno).",
          "Reescritura parcial del módulo si es necesario.",
          "Verificación extensa de compatibilidad, rendimiento, seguridad.",
          "Ajuste de nuevas políticas de tiendas (App Store / Play Store), manejo de permisos nuevos.",
          "Varias rondas de prueba, corrección, QA riguroso.",
          "Soporte postactualización por un período (por ejemplo 1-2 semanas).",
        ],
      },
    ],
  },
  {
    id: "optimizacion",
    title: "Optimización de rendimiento",
    plans: [
      {
        name: "Nivel Lite",
        price: 450,
        unit: "MXN/hora + IVA",
        features: [
          "Diagnóstico inicial de performance (identificar cuellos de carga más evidentes).",
          "Optimización de assets (imágenes, compresiones).",
          "Ajustes menores de UI/UX para reducir tiempos de carga.",
          "Pruebas en pocos dispositivos/emuladores.",
          "No incluye refactorizaciones, solo parches rápidos.",
        ],
      },
      {
        name: "Nivel Plus",
        price: 780,
        unit: "MXN/hora + IVA",
        popular: true,
        features: [
          "Diagnóstico profundo, profiling de CPU/memoria.",
          "Corrección de bottlenecks en lógica de código.",
          "Mejoras de flujos críticos que impacten la UX.",
          "Pruebas en varios dispositivos / versiones de SO.",
          "Alguna optimización de base de datos, consultas, caché.",
          "Incluye 1 ronda de feedback / ajustes después de pruebas.",
        ],
      },
      {
        name: "Nivel Premium",
        price: 1800,
        unit: "MXN/hora + IVA",
        features: [
          "Auditoría completa de performance y código.",
          "Refactorización de módulos críticos, reestructuración si es necesario.",
          "Optimización de concurrencia, memoria, uso intensivo de recursos.",
          "Pruebas exhaustivas en muchos dispositivos / con variados perfiles de usuario.",
          "Mejoras de la experiencia, animaciones, respuestas, transición UI.",
          "Soporte postoptimización por un periodo (por ejemplo 1-2 semanas).",
        ],
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y cumplimiento normativo",
    plans: [
      {
        name: "Nivel Básico",
        price: 800,
        unit: "MXN/hora + IVA",
        features: [
          "Escaneo automático de vulnerabilidades comunes (dependencias, librerías).",
          "Aplicar parches simples de seguridad.",
          "Cifrado básico de datos sensibles en almacenamiento / tránsito.",
          "Verificar cumplimiento de políticas de privacidad estándar.",
          "Un dispositivo / plataforma.",
        ],
      },
      {
        name: "Nivel Intermedio",
        price: 1300,
        unit: "MXN/hora + IVA",
        popular: true,
        features: [
          "Auditoría manual + herramientas automáticas para vulnerabilidades medianas.",
          "Implementación de medidas de seguridad adicionales: autenticación fuerte, encriptación avanzada, manejo seguro de tokens/credenciales.",
          "Revisar cumplimiento de normativas aplicables (ej. GDPR, LFPDPPP) y adaptar políticas de privacidad.",
          "Pruebas en múltiples dispositivos/plataformas.",
          "Aplicar parches críticos, seguimiento postimplementación.",
        ],
      },
      {
        name: "Nivel Avanzado / Complejo",
        price: 2500,
        unit: "MXN/hora + IVA",
        features: [
          "Seguridad proactiva: pentesting / pruebas de penetración profundas.",
          "Evaluación de amenazas, análisis de código, revisión de auditoría de terceros.",
          "Políticas de acceso, cifrado de extremo a extremo, protección contra ataques sofisticados.",
          "Asegurarse de cumplimiento legal estricto de GDPR u otras normas internacionales, auditorías legales/compliance.",
          "Respuesta a incidentes, monitoreo continuo, logging centralizado.",
          "Soporte postimplementación extendido.",
        ],
      },
    ],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento proactivo / preventivo",
    plans: [
      {
        name: "Pulse Check",
        price: 6000,
        unit: "MXN/7 horas + IVA",
        features: [
          "Análisis superficial de logs y métricas básicas.",
          "Identificación de errores recurrentes o caídas menores.",
          "Revisión de compatibilidad con versiones actuales de iOS/Android.",
          "Recomendaciones generales para mejorar el rendimiento.",
        ],
      },
      {
        name: "FlowGuard",
        price: 15000,
        unit: "MXN/10 horas + IVA",
        popular: true,
        features: [
          "Análisis detallado de logs, métricas y rendimiento.",
          "Identificación y resolución de cuellos de botella en la aplicación.",
          "Revisión y optimización de código para mejorar la eficiencia.",
          "Pruebas en múltiples dispositivos y versiones de sistemas operativos.",
          "Implementación de mejoras para garantizar una experiencia de usuario fluida.",
        ],
      },
      {
        name: "OptiGuard Pro",
        price: 27000,
        unit: "MXN/18 horas + IVA",
        features: [
          "Auditoría completa del código fuente y arquitectura de la aplicación.",
          "Implementación de prácticas avanzadas de optimización de rendimiento.",
          "Integración de herramientas de monitoreo y alertas en tiempo real.",
          "Capacitación al equipo interno sobre mejores prácticas de mantenimiento preventivo.",
          "Soporte continuo y seguimiento post-implementación.",
        ],
      },
    ],
  },
];

export const PLAN_CATEGORIES_ENGLISH: PlanCategory[] = [
  {
    id: "correccion-de-errores",
    title: "Bug Fixing",
    plans: FIX_PLANS_ENGLISH,
  },
  {
    id: "actualizaciones",
    title: "OS/SDK/Dependencies Updates",
    plans: [
      {
        name: "Refresh Level",
        price: 600,
        unit: "MXN/hour + VAT",
        features: [
          "Update one or two minor dependencies/libraries.",
          "Minor adjustments for minimum compatibility with new OS versions.",
          "Limited testing on 1–2 devices/emulators.",
          "No code restructuring included.",
        ],
      },
      {
        name: "Evolution Level",
        price: 800,
        unit: "MXN/hour + VAT",
        popular: true,
        features: [
          "Update multiple dependencies or frameworks (SDKs).",
          "Fix deprecated API calls.",
          "Major adaptations for compatibility with new iOS/Android versions.",
          "Testing across multiple devices/operating systems.",
          "Includes one correction round after testing.",
        ],
      },
      {
        name: "Vanguard Level",
        price: 1600,
        unit: "MXN/hour + VAT",
        features: [
          "Complete OS version update or large migration (e.g. from an outdated SDK to a modern one).",
          "Partial module rewrite if necessary.",
          "Extensive compatibility, performance, and security verification.",
          "Adjustment to new store policies (App Store / Play Store), including new permission handling.",
          "Multiple testing and correction rounds with rigorous QA.",
          "Post-update support for a period of time (for example 1–2 weeks).",
        ],
      },
    ],
  },
  {
    id: "optimizacion",
    title: "Performance Optimization",
    plans: [
      {
        name: "Lite Level",
        price: 450,
        unit: "MXN/hour + VAT",
        features: [
          "Initial performance diagnosis (identify the most obvious bottlenecks).",
          "Asset optimization (images, compression).",
          "Minor UI/UX adjustments to reduce loading times.",
          "Testing on a few devices/emulators.",
          "Does not include refactoring, only quick fixes.",
        ],
      },
      {
        name: "Plus Level",
        price: 780,
        unit: "MXN/hour + VAT",
        popular: true,
        features: [
          "Deep diagnostics and CPU/memory profiling.",
          "Fix bottlenecks in application logic.",
          "Improvements to critical flows affecting UX.",
          "Testing across multiple devices / OS versions.",
          "Database, query, and cache optimizations.",
          "Includes one round of feedback/adjustments after testing.",
        ],
      },
      {
        name: "Premium Level",
        price: 1800,
        unit: "MXN/hour + VAT",
        features: [
          "Complete performance and code audit.",
          "Refactoring of critical modules and restructuring if needed.",
          "Optimization of concurrency, memory usage, and resource-intensive operations.",
          "Extensive testing across many devices and user profiles.",
          "Improvements to user experience, animations, responsiveness, and UI transitions.",
          "Post-optimization support for a defined period (for example 1–2 weeks).",
        ],
      },
    ],
  },
  {
    id: "seguridad",
    title: "Security and Compliance",
    plans: [
      {
        name: "Basic Level",
        price: 800,
        unit: "MXN/hour + VAT",
        features: [
          "Automatic scanning for common vulnerabilities (dependencies, libraries).",
          "Apply simple security patches.",
          "Basic encryption for sensitive data in storage/transit.",
          "Verify compliance with standard privacy policies.",
          "One device/platform.",
        ],
      },
      {
        name: "Intermediate Level",
        price: 1300,
        unit: "MXN/hour + VAT",
        popular: true,
        features: [
          "Manual audit + automated tools for medium-level vulnerabilities.",
          "Implementation of additional security measures: strong authentication, advanced encryption, secure token/credential handling.",
          "Review compliance with applicable regulations (e.g. GDPR, LFPDPPP) and adapt privacy policies.",
          "Testing across multiple devices/platforms.",
          "Apply critical patches and provide post-implementation monitoring.",
        ],
      },
      {
        name: "Advanced / Complex Level",
        price: 2500,
        unit: "MXN/hour + VAT",
        features: [
          "Proactive security: pentesting / deep penetration testing.",
          "Threat evaluation, code analysis, and third-party audit reviews.",
          "Access policies, end-to-end encryption, and protection against sophisticated attacks.",
          "Ensure strict legal compliance with GDPR or other international regulations, including legal/compliance audits.",
          "Incident response, continuous monitoring, and centralized logging.",
          "Extended post-implementation support.",
        ],
      },
    ],
  },
  {
    id: "mantenimiento",
    title: "Proactive / Preventive Maintenance",
    plans: [
      {
        name: "Pulse Check",
        price: 6000,
        unit: "MXN/7 hours + VAT",
        features: [
          "Basic analysis of logs and metrics.",
          "Identification of recurring issues or minor crashes.",
          "Compatibility review with current iOS/Android versions.",
          "General recommendations for improving performance.",
        ],
      },
      {
        name: "FlowGuard",
        price: 15000,
        unit: "MXN/10 hours + VAT",
        popular: true,
        features: [
          "Detailed analysis of logs, metrics, and performance.",
          "Identification and resolution of bottlenecks in the application.",
          "Code review and optimization to improve efficiency.",
          "Testing across multiple devices and operating system versions.",
          "Implementation of improvements to ensure a smooth user experience.",
        ],
      },
      {
        name: "OptiGuard Pro",
        price: 27000,
        unit: "MXN/18 hours + VAT",
        features: [
          "Complete audit of the source code and application architecture.",
          "Implementation of advanced performance optimization practices.",
          "Integration of monitoring and real-time alert tools.",
          "Training for the internal team on preventive maintenance best practices.",
          "Continuous support and post-implementation follow-up.",
        ],
      },
    ],
  },
];

export const HOME_PLANS_SPANISH = FIX_PLANS_SPANISH;
export const HOME_PLANS_ENGLISH = FIX_PLANS_ENGLISH;