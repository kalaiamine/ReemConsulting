/** Full ISO detail content: Objectifs, Méthodologie, Intérêt; optional custom sections */

export type CustomSection = {
  title: string
  items?: string[]
  paragraphs?: string[]
}

export type ISODetail = {
  title: string
  version?: string
  subtitle: string
  objectifs?: string[]
  methodologie?: string[]
  interet?: string[]
  interetTitle?: string
  scope?: string
  industry?: string[]
  /** When set, render these instead of objectifs/methodologie/interet */
  customSections?: CustomSection[]
}

export const isoDetailsContent: Record<string, ISODetail> = {
  'iso-9001': {
    title: 'Norme ISO 9001',
    version: 'V 2015',
    subtitle: 'Accompagnement certification',
    objectifs: [
      'Satisfaire les exigences des clients',
      "Améliorer en continue les performances de l'organisation",
      "Identifier et maîtriser les risques, démarche proactive",
      "Cohérence entre stratégie et déclinaisons des actions terrains",
      "Implication et responsabilisation de tous les acteurs",
    ],
    methodologie: [
      "Découpage de l'entreprise en processus et identification des pilotes",
      "Construction des fiches processus avec les pilotes concernés",
      "Identification des risques et des indicateurs de pilotage",
      "Mise en œuvre de comité de pilotage et revue de direction",
      "Mise en œuvre de plan de progrès et d'objectifs par processus",
      "Mise en conformité des processus par rapport à la norme avec vos équipes",
      "Mise en œuvre de procédures ou d'outils pour maîtriser les risques et atteindre les objectifs",
      "Conduite audit interne afin d'assurer le bon respect des règles établies et identifier de nouvelles pistes de progrès",
      "Correction des écarts",
      "Présentation à la certification",
    ],
    interet: [
      "Système de management efficace en corrélation avec la stratégie",
      "Identification des risques et dysfonctionnements",
      "Amélioration permanente de la performance des processus",
      "Sécurisation des expertises clés",
    ],
    scope: "Applicable à toutes les organisations, quel que soit leur taille, secteur ou type.",
    industry: ['Manufacture', 'Services', 'Santé', 'Éducation', 'Public'],
  },
  'iso-14001': {
    title: 'Norme ISO 14 001',
    version: 'V 2015',
    subtitle: 'Accompagnement certification',
    objectifs: [
      "Identifier ces impacts environnementaux",
      "Identifier la réglementation applicable",
      "Définir une politique et des objectifs de réduction des impacts",
      "Identifier et maîtriser les situations d'urgences",
      "Former et impliquer l'ensemble des collaborateurs dans la maîtrise des impacts",
      "Assurer une évacuation des déchets dans des filières agréées",
    ],
    methodologie: [
      "Découpage de l'entreprise en activité et identification des aspects et impacts environnementaux",
      "Veille réglementaire et identification de la réglementation applicable",
      "Hiérarchisation des impacts et définition des actions de maîtrise",
      "Mise en œuvre d'une revue de direction (Bilan annuel)",
      "Définition d'une politique et des indicateurs de pilotage",
      "Mise en œuvre d'un plan d'actions environnemental",
      "Mise en œuvre d'un comité de pilotage de suivi des indicateurs et plan d'actions",
      "Identification des situations d'urgences et mise en œuvre de test périodique",
      "Conduite audit interne du système",
      "Correction des écarts",
      "Présentation à la certification",
    ],
    interet: [
      "Maîtrise des situations d'urgences environnementales",
      "Réduction des impacts sur l'environnement",
      "Formation et implication de tous les acteurs sur le respect de l'environnement",
      "Conformité avec la réglementation applicable",
    ],
    interetTitle: "Intérêt de l'ISO 14 001",
    scope: "Applicable à toutes les organisations désireuses de gérer leurs responsabilités environnementales.",
    industry: ['Industrie', 'Énergie', 'Transport', 'Construction', 'Agriculture'],
  },
  'iso-14001-certiphyto': {
    title: 'Accompagnement à la norme CERTIPHYTO',
    subtitle: 'LE RÉFÉRENTIEL CERTIPHYTO',
    customSections: [
      {
        title: "Objectifs du référentiel",
        paragraphs: [
          "Le Certiphyto peut être obtenu après le suivi d'une formation qui permet de : améliorer vos pratiques en vues de protéger votre santé et l'environnement, mettre en œuvre des pratiques agricoles et agronomiques innovantes afin de réduire votre consommation en produits phytosanitaires.",
          "Toute personne qui manipule, applique, conseille ou met en vente des produits phytosanitaires doit être en possession d'un Certiphyto spécifique à son activité.",
        ],
      },
      {
        title: "Pour qui",
        items: [
          "L'ensemble des utilisateurs professionnels de produits phytosanitaires :",
          "Les agriculteurs et leurs salariés",
          "Les applicateurs et / ou prestataires de services qui interviennent pour des tiers (ETA, paysagistes, jardineries, ...) et leurs salariés",
          "Les conseillers agricoles",
          "Les distributeurs et vendeurs de produits phytosanitaire (coopératives, négoces)",
          "Les utilisateurs professionnels dans les jardins espaces végétalisés et infrastructures (JEVI) y compris les collectivités territoriales",
        ],
      },
      {
        title: "Comment obtenir la norme CERTIPHYTO",
        items: [
          "Pour le renouvellement de diplôme et la formation initiale trois voies d'accès possibles :",
          "1. Validation d'un diplôme agricole obtenu il y a moins de 5 ans à condition de pouvoir justifier d'une activité professionnelle en rapport avec l'utilisation des produits phytosanitaires. Voir la liste des diplômes éligibles",
          "2. Test d'1h30 sous forme de QCM (Questionnaire à choix multiples)",
          "3. Formation de plusieurs jours avec vérification des connaissances acquises d'une heure pour les formations initiales et sans test pour les formations de renouvellement",
        ],
      },
      {
        title: "Informations complémentaires",
        paragraphs: [
          "Les exigences CERTIPHYTO peuvent être intégrées dans votre système de management le cas échéant. Vous pouvez nous contacter pour toute demande complémentaire concernant cette certification spécifique.",
        ],
      },
    ],
  },
  'iso-45001': {
    title: 'Norme ISO 45001',
    version: 'V 2018',
    subtitle: 'Accompagnement certification',
    objectifs: [
      "Assurer la santé et la sécurité au travail",
      "Réduire les accidents et les risques professionnels",
      "Impliquer la direction et les travailleurs",
      "Améliorer en continu la performance SST",
      "Conformité aux exigences légales",
    ],
    methodologie: [
      "Identification des dangers et évaluation des risques",
      "Définition des objectifs et programmes SST",
      "Mise en place des contrôles opérationnels",
      "Formation et sensibilisation des personnels",
      "Communication et consultation",
      "Audits internes et revue de direction",
      "Préparation à la certification",
    ],
    interet: [
      "Réduction des accidents et des coûts associés",
      "Amélioration du bien-être et de l'engagement",
      "Conformité légale et assurance",
      "Culture de prévention durable",
    ],
    scope: "Applicable à toutes les organisations, indépendamment de leur taille ou secteur.",
    industry: ['Construction', 'Manufacture', 'Mines', 'Transport', 'Tous secteurs'],
  },
  'iso-50001': {
    title: 'Norme ISO 50001',
    version: 'V 2018',
    subtitle: 'Accompagnement certification',
    objectifs: [
      "Améliorer la performance énergétique",
      "Réduire la consommation et les coûts énergétiques",
      "Maîtriser les usages énergétiques",
      "Réduire les émissions de GES",
      "Alignement avec la stratégie",
    ],
    methodologie: [
      "Analyse des consommations et revue énergétique",
      "Définition de la politique et des objectifs énergétiques",
      "Plan d'actions et indicateurs de performance",
      "Mise en œuvre des actions de maîtrise",
      "Mesure et suivi des résultats",
      "Audits internes et revue de direction",
      "Préparation à la certification",
    ],
    interet: [
      "Réduction des coûts énergétiques",
      "Réduction de l'empreinte carbone",
      "Eligibilité aux aides et certifications",
      "Performance opérationnelle améliorée",
    ],
    scope: "Applicable à toute organisation consommant de l'énergie.",
    industry: ['Industrie lourde', 'Énergie', 'Immobilier', 'Transport', 'Services'],
  },
  'iso-26000': {
    title: 'Norme ISO 26 000',
    subtitle: 'Conseil mise en place certification',
    objectifs: [
      "Guider les organismes dans la prise en charge des responsabilités sociétales.",
      "Proposer un cadre pour : permettre la responsabilité sociétale, identifier et dialoguer avec les parties prenantes, crédibiliser la communication à propos de la responsabilité sociétale, valoriser les résultats obtenus, améliorer les liens avec les clients, par un accroissement de la satisfaction et de la confiance ; faire la promotion d'une terminologie unique au sujet de la responsabilité sociétale ; assurer la cohérence avec les documents existants et les autres normes ISO.",
    ],
    methodologie: [
      "Sensibilisation à la RSE",
      "Analyse des parties prenantes",
      "Définition de la raison d'être et des valeurs RSE",
      "Hiérarchisation des enjeux et définition de la politique",
      "Mise en œuvre d'un plan d'actions RSE",
      "Mise en œuvre d'un comité de pilotage de suivi des indicateurs et plan d'actions",
      "Communication externe et rapport RSE",
      "Conduite audit interne du système",
      "Correction des écarts",
      "Présentation au label",
    ],
    interet: [
      "Contribue au développement durable y compris à la santé des personnes et au bien-être de la société ;",
      "Prend en compte les attentes des parties prenantes ;",
      "Respecte les lois en vigueur et est compatible avec les normes internationales ;",
      "Est intégré dans l'ensemble de l'organisation et mis en œuvre dans ses relations.",
    ],
    interetTitle: "Intérêt de l'ISO 26 000",
  },
  'label-marianne-nf': {
    title: 'Norme Service',
    subtitle: 'Accompagnement labellisation',
    customSections: [
      {
        title: "À quoi sert le label MARIANNE",
        paragraphs: [
          "Le label Marianne marque la reconnaissance par un organisme tiers du respect du référentiel Marianne. Pour les usagers, c'est une garantie de la qualité des services qui lui sont rendus. Pour les services ayant mis en œuvre le référentiel, c'est un moyen de valoriser et de pérenniser le travail des agents grâce à l'évaluation régulière du respect des engagements.",
        ],
      },
      {
        title: "Comment obtenir le label MARIANNE",
        paragraphs: [
          "Tous les services appliquant le référentiel Marianne peuvent postuler à la délivrance du label Marianne en s'adressant à l'un des quatre organismes certificateurs indépendants habilités par le secrétariat général pour la modernisation de l'action publique (SGMAP). Après un audit sur site permettant de vérifier la conformité des pratiques et des résultats par rapport aux engagements du référentiel Marianne, l'organisme certificateur attribue le label Marianne pour une durée de trois ans. Une évaluation de suivi est effectuée au bout de 18 mois.",
          "Le label Marianne est également attribué aux préfectures et aux sous-préfectures déjà labellisées Qualipref 2.0, en application d'un accord sur l'équivalence de ces deux labels conclu entre le ministère de l'Intérieur et le SGMAP.",
        ],
      },
      {
        title: "Les supports de communication associés au label MARIANNE",
        items: [
          "Les organismes certifiés Marianne sont les seuls à pouvoir utiliser le logo « label Marianne », dans le respect de la charte de communication Marianne.",
          "Les supports de communication associés au label ne peuvent être transmis que par les organismes certificateurs.",
          "Tous les supports de communication accessibles en ligne sont également déclinés avec le logo « label Marianne ».",
        ],
      },
      {
        title: "NF SERVICE",
        paragraphs: [
          "La marque NF Service atteste qu'une prestation de service est conforme à la norme de service Afnor qui la concerne. Avec l'aide de l'Afnor les prestataires d'une profession de service définissent en concertation des normes de qualité et de performance. Il ne s'agit pas d'une réglementation, mais d'un libre consensus, d'un engagement volontaire d'une profession envers ses clients. Comme exemples de professions qui ont créé leurs normes de services, on peut en citer d'aussi diverses que les déménageurs, les offices de tourisme, les centres de gestion agréés... etc.",
          "L'approche normative garantit la rigueur et le consensus : la marque « NF Service » est une référence, jouissant d'une excellente notoriété. Le client a ainsi la garantie d'un service rigoureux et de qualité, tandis que le professionnalisme et la qualité des entreprises de services sont valorisés.",
        ],
      },
    ],
  },
  'en-9100': {
    title: 'Norme EN 9100',
    subtitle: 'Aéronautique - Accompagnement labellisation',
    objectifs: [
      "Identifier et maîtriser les risques",
      "Assurer un OTD et Qualité produit conforme aux exigences clients",
      "Maîtriser l'obsolescence, contre-façon et risque sécurité produits",
      "Implication, formation et responsabilisation de tous les acteurs",
      "Assurer une traçabilité des productions et des contrôles",
      "Maîtrise des FAI, process et procédés spéciaux",
    ],
    methodologie: [
      "Découpage de l'entreprise en processus et identification des pilotes",
      "Construction des fiches processus avec les pilotes concernés",
      "Identification des risques et des indicateurs de pilotage",
      "Mise en œuvre de l'analyse de risque au devis et à la commande",
      "Gestion de l'arborescence d'une affaire",
      "Analyse et gestion des spécifications clients",
      "Mise en œuvre de comité de pilotage et revue de direction",
      "Mise en œuvre de plan de progrès et d'objectifs par processus",
      "Mise en conformité des processus par rapport à la norme avec vos équipes",
      "Mise en œuvre de procédures ou d'outils pour maîtriser les risques et atteindre les objectifs",
      "Identification et gestion des procédés spéciaux et qualification des opérateurs",
      "Contrôle réception matière entre analyse chimique CCPU 3.1 et norme matière",
      "Gestion des étalonnages des appareils de contrôle",
      "Audit interne, de poste, produits et correction des écarts",
      "Présentation à la certification",
    ],
    interet: [
      "Maîtrise des fournisseurs et sous-traitants clés",
      "Assurer une maîtrise des risques du devis à l'expédition",
      "Maîtrise des process clés et procédés spéciaux",
      "Sécurisation de la matière",
    ],
    interetTitle: "Intérêt de l'EN 9100",
    industry: ['Aéronautique', 'Spatial', 'Défense'],
  },
  'iso-27001': {
    title: 'Norme ISO 27001',
    version: 'V 2022',
    subtitle: 'Accompagnement certification',
    objectifs: [
      "Protéger les actifs informationnels",
      "Maîtriser les risques de sécurité de l'information",
      "Assurer la confidentialité, intégrité et disponibilité",
      "Répondre aux exigences réglementaires (RGPD, etc.)",
      "Renforcer la confiance des clients et partenaires",
    ],
    methodologie: [
      "Définition du périmètre et analyse des risques",
      "Élaboration du plan de traitement des risques",
      "Mise en place des contrôles (politiques, procédures)",
      "Sensibilisation et formation",
      "Gestion des incidents et amélioration continue",
      "Audits internes et revue de direction",
      "Préparation à la certification",
    ],
    interet: [
      "Protection contre les cybermenaces",
      "Conformité RGPD et sectorielle",
      "Réduction des risques de perte de données",
      "Continuité d'activité sécurisée",
    ],
    scope: "Applicable à toute organisation souhaitant sécuriser ses informations.",
    industry: ['Technologie', 'Finance', 'Santé', 'Public', 'E-commerce'],
  },
  'iso-22000': {
    title: 'Norme ISO 22000',
    version: 'V 2018',
    subtitle: 'Accompagnement certification',
    objectifs: [
      "Garantir la sécurité des denrées alimentaires",
      "Maîtriser les dangers tout au long de la chaîne",
      "Répondre aux exigences réglementaires et clients",
      "Améliorer en continu la sécurité alimentaire",
      "Assurer la traçabilité",
    ],
    methodologie: [
      "Analyse des dangers et plan HACCP",
      "Programmes prérequis (PRP)",
      "Définition des objectifs et plans d'action",
      "Mise en œuvre des contrôles et surveillance",
      "Gestion des non-conformités et rappels",
      "Audits internes et revue de direction",
      "Préparation à la certification",
    ],
    interet: [
      "Sécurité alimentaire garantie",
      "Conformité et accès aux marchés",
      "Confiance des consommateurs",
      "Traçabilité et maîtrise des risques",
    ],
    scope: "Applicable à toutes les organisations de la chaîne alimentaire, du producteur au distributeur.",
    industry: ['Agroalimentaire', 'Restauration', 'Distribution', 'Production', 'Agriculture'],
  },
  'iso-37001': {
    title: 'Norme ISO 37001',
    version: 'V 2016',
    subtitle: 'Accompagnement certification anti-corruption',
    objectifs: [
      "Prévenir, détecter et lutter contre la corruption de manière proactive",
      "Instaurer une culture d'intégrité, de transparence et de conformité",
      "Évaluer les risques de corruption spécifiques à vos activités",
      "Mettre en place des mesures de contrôle adaptées et proportionnées",
    ],
    methodologie: [
      "Cartographie des risques de corruption et évaluation de l'exposition",
      "Définition de la politique anti-corruption et engagement de la direction",
      "Mise en place d'une fonction de conformité anti-corruption indépendante",
      "Sensibilisation et formation obligatoire de l'ensemble des collaborateurs",
      "Évaluation approfondie des partenaires commerciaux (due diligence)",
      "Mise en place d'un canal d'alerte professionnelle sécurisé et confidentiel",
      "Audit interne du système anti-corruption et traitement des alertes",
      "Présentation à l'audit externe pour certification",
    ],
    interet: [
      "Protection pénale, juridique et financière des dirigeants et de l'entreprise",
      "Valorisation forte de l'éthique commerciale auprès des clients, investisseurs et partenaires",
      "Sécurisation complète des transactions commerciales et des relations d'affaires",
      "Réduction majeure du risque de fraude interne et d'incidents d'intégrité",
    ],
    scope: "Applicable à tous types d'organisations (publiques, privées, à but non lucratif) et de toutes tailles.",
    industry: ['Industrie', 'Énergie', 'Finance', 'Marchés Publics', 'Commerce International', 'Tous secteurs'],
  },
}
