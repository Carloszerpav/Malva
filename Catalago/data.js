const products = [
    // Maquillaje
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczNh7Kd63L-CLY3dEpYVxm7-kQpeqJnkAQiB2-d5_7qRavRUny0QL2ldyLZrf3IMzBs40MdtgbRPGPgiDZs-D5-7FhJ0Nzubd49zPSCPMo0L0kDmu5rUkz38UzpVs4WBcMCpgx4d0YEZ2QTPjSVf22NMkQ=w400-h400-c",
        title: "Labial Líquido Mate",
        desc: "Acabado mate, larga duración, tonos vibrantes",
        icon: "💄",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczNqcH1jByA3SDaya0Yz_25zczS2fWAH1GOOQ50fJONn7_zPIbJbEYEv0lU3Jti7xgvNrOsF2EQA42hcas-vgFDItObXSLp_b8AmgxBUfJvUzGm9OMLS1LNPnSRg-iisUWyFQMMbXFGQ7yxyHOxMX4bBIQ=w400-h400-c",
        title: "Paleta de Sombras Profesional",
        desc: "12 tonos blendables, pigmentación intensa",
        icon: "✨",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczP4Vf_ySOg1uWupmMvk2KohotRfDK6JtuV6aYBysHvF_SSgOdV6SZm8KI4zW2soR7HAmeYoHvyRUSEd41U6vDMtbApugDl5PCl2_wcbwN3kqxwNNObAQ1aVuDzlhWbOFNfw51hBXjuZQr5PVu318ucWEg=w400-h400-c",
        title: "Máscara de Pestañas Volumizadora",
        desc: "Efecto dramático, resistente al agua",
        icon: "👁️",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczOgyxwgu_2iDol-JpmMxsVkDiISDuhHF1M6ZwQQt6XGC7eZ89ISwvksz28wzUXVbLIMovZ2FY5YV8Yue-nmVrjYbgQef0mV40W3DK-dpRP4rzIzzWyDsKg1tK1snSz19IKNpYr9L2iP6PXIqHEuegli2A=w400-h400-c",
        title: "Corrector de Alta Cobertura",
        desc: "Cubre imperfecciones, acabado natural",
        icon: "🎨",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMdy_RwlzXFf0DIMCNQHeuFeM-eaCnI1edLvE3vb1mepBEbt8pr_tHSztL_PQd6OENi9G2wcY1bi0dVLZrHlc21BaETJxtXJoWorz9hdbns_J-S1gRzaVijPsB8-j0KJ5q1kX2vA5ZoETIUUtwofCNczA=w400-h400-c",
        title: "Base de Maquillaje Líquida",
        desc: "Cobertura media, acabado satinado",
        icon: "🌟",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczO59uG0RLuu2qfeUnT_VeDwDfI11qFOCbMWjIJ6jh76yfdyr1OlABe77a9WQTpd4ZNTT4-lUxRYQn1dplPyYJkQYrZvljDo3bj6eXPY8jNy4LZ2EcY3BFvQUt6Cymg7uYss4gV2EuaUz5HwpiYVevDFNg=w400-h400-c",
        title: "Rubor en Crema",
        desc: "Tono rosado, efecto glow natural",
        icon: "🌸",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMSM9h1qsPIJn7-taxhc3_iEg3AeRJKCY-Sf7cP9o1hDMUdIZ2pPUpKq6C_J4N-UBQLSDLr10geQTVh8-qqdXl03Jwa1Yg42vTVQ_QbrKVYabYCyJT_BKvO7o3PrqAuS2ZbC6Or49QU_wI6TEiUGViUAA=w400-h400-c",
        title: "Iluminador en Polvo",
        desc: "Brillo perlado, resalta pómulos",
        icon: "💫",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczNggnOPZhaT8jIp-fTJriWdBWnekRhz_d6yTBFYIJScxDRU5fNP4tccjTcWVe3TqfyvKFvCeUiYvqbnrcxO0fpRfUA7TRS6CtXGSyzxogXgxPnKswQbKMy0iqxhytI_y6zume090RlQ-yV5FSwF3xeRRw=w400-h400-c",
        title: "Delineador en Gel",
        desc: "Punta precisa, fácil aplicación",
        icon: "🖋️",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczNDBgLvRCFHafOnX97U7IiaAf31Q7PKKHZwOmtgNP-rJGQ5XY50jskByzZsA6EohvTvobDiPpZrKU7V5qvGQZLCbdYjDsaWMwLIlU4Iown1yz4sopqP3HgRn7pgpDypxUuZHZG2tKgnRVGcCu896QuUKQ=w400-h400-c",
        title: "Set de Brochas Premium",
        desc: "8 piezas, cerdas sintéticas suaves",
        icon: "🖌️",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczM2hrs6yfCJqc6wHqSJlb9djrFv2jd3FhnbydEX7v-gOoqnP_YmNmm8J2vpd0P9yvJVzy1NothG_KkdqIVGp_X_JXDlQSxj6XOtJnj8aAK4-dcq4FuDlPpJCIvDcbxvOhdciCp9BT_qPme1bRtDSie04w=w400-h400-c",
        title: "Polvo Compacto Translúcido",
        desc: "Fijación perfecta, acabado mate",
        icon: "✨",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczPLhpDIR6NfLyuOuPmwsMwwDZs8xCrNLvIoJ7rdYLhlUpj8L5NjysLmAVPygTjt_kaaWr9bOc3Ov5OJzG4-qxTn-IwgkcAJlau0JzAPHFBVcKCq2Pwu1-J1t6o9JNHGCzBHYiL08xeITjpfAAg2oZpCeQ=w400-h400-c",
        title: "Labial Tint Líquido",
        desc: "Color intenso, efecto mancha",
        icon: "💋",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMFkP4rZ31-0I2AGdQi7aNyTcLA5Yjw8kk9Nm9IM3V0BG3rXpTjzKZwZiCDEUCSyWhV-v1GUfN-1ym5PusRBtR7Zqtq7b0-UEmni-BqWlDdGzRA6Nvnt7_0pRjFj0PAkYWbq_Uqocmw6e7HKouzrdWQUg=w400-h400-c",
        title: "Paleta de Contorno y Sombra",
        desc: "6 tonos para definir y esculpir",
        icon: "🎭",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczPeFeOrNGBrIJK6Cj_g-vZdSTraW7XwgqUq4Cueu5IMHHnPJIgiOatTxgRHJuVzn71GWx9kV39acErcC2lGyl035DcSDYp79c3eJby2NQTSXQEcMpudWQp6YOIXuUskei7AblOk4JP7Km5kFW8UJRRG6Q=w400-h400-c",
        title: "Primer Facial Hidratante",
        desc: "Prepara la piel, alarga duración",
        icon: "🧴",
        category: "maquillaje"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczM3Z8loIMYa-JnQgT6qyxk2dn9husjSj4I2u7wjpdiyuUd-5m3LxnnfMjclx7gJ_jqsDhc1Ru1CKwyMkQkZHFn1XymJjK-Wr0yorXaUHq8-oQZYWdKsGO75PLqSZunwR9U-OPGTho54xE_LTcqZCpxliw=w400-h400-c",
        title: "Set de Esponjas Beauty Blender",
        desc: "Aplicación impecable, fácil de limpiar",
        icon: "🧽",
        category: "maquillaje"
    },
    // Accesorios
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMPj8wrxoitWeOd_UIZAB0rH_4tjNKx842Q_1qIZSjH2YLXmxi9HatkvY7H14V2d8n9_vDkNNiQHruuoPAHHWu5DjnIRSvplIWBsQOxnqKG73iKyKwxxuGCmVLrQMUz2wny-Hs1C3OrhbA6tAwSIHKlGw=w400-h400-c",
        title: "Collar Elegante",
        desc: "Diseño delicado, perfecto para ocasiones especiales",
        icon: "💎",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczOeaquSff292dRhTD2_KjxWk67M6FBmSNrHPw3ssbafLJF4kHSiu163etizbxQEOo1qBxLPLz-QQA98QE0PbmIc4jj8gcubptUO-IXOciQP0JoTxn_GHELf3gshpWdIH7Ya1Af9XMXiYYCpGYHGBuSSsw=w400-h400-c",
        title: "Pulsera Minimalista",
        desc: "Estilo moderno, ideal para uso diario",
        icon: "✨",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczO-GAYRserz0wzB9-6TrlNFLc5NpY-1pftVW00_KV9O5rE_OYWaE7we_icE3NuegLx7vbhCm9LHgMTDXbcysn-a0zIGHnxbVQnsAlRTjb7bDSyU-fceHga2c_xWAM_v6BOAJpYPavfrm3WjZpudLINU4w=w400-h400-c",
        title: "Aretes Clásicos",
        desc: "Elegancia atemporal, versátiles y sofisticados",
        icon: "👂",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMkgI3F6180eO1RtIgJ7yAivRubrWlLbUBHHkO8BMdfZwrsR0ncHL-Y19fbTisss0tU7VFp0PiRdBNrgRXJzH5lr906-E2rwcXDxcKG5MVFvS7Jt8xT95pC-WUTAhyuF1jXYoRyYV9fp7g01CpTRGkHew=w400-h400-c",
        title: "Anillo Estilizado",
        desc: "Diseño único, perfecto para destacar",
        icon: "💍",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczO2acFG8E0Io1m6Sc-kJJwdwUtwQMgC5nwN7fuU3mStrn1DIIHYNoOCnMcmbVq9ogBdhpXnrMzOBz1SawnvutB1rdxmpKie-pvBn8EubSxlMYz4T9whOCypYlGnJb7kvzP0OFJf9jHw51ljB4S5fqQKPA=w400-h400-c",
        title: "Set de Accesorios",
        desc: "Combinación perfecta, estilo coordinado",
        icon: "👜",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczPf43xfIdPjhIX6kBW3fF8xr-EGdafQch4D7lANMUNf6uo11QWqWtWlIcohf5gr5DR5mjPk1c03crTHQhxX5eoUo8tl_99wj4qwqh2MH8aw4FsKZaO5Ge3OhEnrRrwW1-edqt7O2MfPxhgvwakbWwlyAA=w400-h400-c",
        title: "Accesorio Decorativo",
        desc: "Detalle especial, complementa cualquier look",
        icon: "🕶️",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczMoEzLy8e25q62351FgLor6kCjifNRPSqHL0vecxGGKhA3EorNYyLWag78aBPFGHb_0ymL7Ok83B18zqFbY3mZDD27CqNolHjywMOM-5zAdV55P5qacDNGQkT0qAzSIlE9wujniDosgqADrkJH_oiZYEA=w400-h400-c",
        title: "Pieza Exclusiva",
        desc: "Diseño original, edición limitada",
        icon: "💫",
        category: "accesorios"
    },
    {
        img: "https://lh3.googleusercontent.com/pw/AP1GczPR8q0UN_sclgCmDPhelVa7Za1Lm2vdAV9DCXmGTWqzDXuktyWzwzYWSXCxeCUVa1cO8w_lsKd2dYXGhAJN0tJYyCq7maUw_bVgIi3oFAbKZkZ5t7qnhkqr_F1QPZSd10Anak23LQViCQmxjiD8yO3Y6Q=w400-h400-c",
        title: "Accesorio Premium",
        desc: "Calidad superior, acabado impecable",
        icon: "🌟",
        category: "accesorios"
    }
];

