/* =========================================
   WORLD CODEX — CUSTOM UNIVERSE ENGINE
   Primigenios, Calendario 20 Meses, Grupos y Wiki-Links
========================================= */

const SECTION_META = {
    PERSONAJE: {
        title: "Personajes",
        overline: "Elenco y Tocados",
        subtitle: "Organiza tus personajes en grupos (Protagonistas, Tocados, Marinos, Nobleza) o abre su hoja."
    },
    PRIMIGENIO: {
        title: "Primigenios y Esencias",
        overline: "Los Nueve del Sol Verde",
        subtitle: "Las fuerzas fundamentales aprisionadas en el Sol Verde, sus dones y el precio de su toque."
    },
    MAPA: {
        title: "Mapas y Geografía",
        overline: "Cartografía del mundo",
        subtitle: "Continente Austral, Oriental, Occidental, climas y mapas antiguos."
    },
    CIUDAD: {
        title: "Ciudades y Lugares",
        overline: "Asentamientos y enclaves",
        subtitle: "Ilabid, Bahía de Dún, Peñas Rojas, puertos y fortalezas."
    },
    LORE: {
        title: "Lore y Cosmología",
        overline: "Memoria del universo",
        subtitle: "El Sol Verde, agujeros negros, el calendario de 360 días y las leyes."
    },
    RELATO: {
        title: "Relatos y Capítulos",
        overline: "Narrativa en progreso",
        subtitle: "Escenas y capítulos conectados con tus personajes y ciudades."
    },
    FACCION: {
        title: "Facciones y Órdenes",
        overline: "Poder y lealtades",
        subtitle: "Órdenes religiosas, casas nobles, flotas y gremios."
    },
    RELIQUIA: {
        title: "Reliquias y Pueblos",
        overline: "Culturas y objetos",
        subtitle: "Artefactos, linajes, idiomas y criaturas del mundo."
    },
    ALL: {
        title: "Archivo Completo",
        overline: "Todas las páginas",
        subtitle: "Vista completa de todas las fichas registradas en tu cuaderno."
    }
};

function createNewEntryTemplate(name = "Nueva Entrada", type = "PERSONAJE", group = "General") {
    return {
        id: "entry_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        type: type,
        group: group || "General",
        canonStatus: "Canon Definitivo",
        name: name,
        epithet: "Epíteto o lema",
        status: "Activo",
        origin: "Sin definir",
        role: "Protagonista",
        faction: "Independiente",
        essence: "Ninguna",
        eraCode: "IV Era",
        portrait: "",
        emblem: "",
        summary: "",
        history: "",
        notes: "",
        showAttributes: type === "PERSONAJE" || type === "FACCION",
        attributes: [
            { name: "PODER / DEFENSA", value: 50 },
            { name: "INFLUENCIA POLÍTICA", value: 50 },
            { name: "SABER / ESTRATEGIA", value: 50 },
            { name: "AFINIDAD CÓSMICA", value: 50 }
        ],
        references: [],
        timeline: [],
        honors: []
    };
}

function createDemoWorld() {
    // 1. BRAN (Puente coherente entre Peñas Rojas y Bahía de Dún en La Ley)
    const bran = createNewEntryTemplate("Bran", "PERSONAJE", "Protagonistas");
    bran.canonStatus = "Canon Definitivo";
    bran.epithet = "Carpintero de mar y viajero de las tierras altas";
    bran.status = "Vivo · Recién desembarcado";
    bran.origin = "[[Peñas Rojas]]";
    bran.role = "Carpintero naval / Espadachín";
    bran.faction = "Independiente";
    bran.essence = "Ninguna (Por descubrir)";
    bran.eraCode = "IV Era";
    bran.summary = "Bran viste una chaqueta negra desgastada por la sal y el tiempo, porta una recta espada de acero con empuñadura de cuero de jabalí y lleva sus manos callosas por los nudos y la madera.";
    bran.history = "Oriundo de [[Peñas Rojas]], las circunstancias lo llevaron lejos de las tierras altas hasta embarcarse como carpintero en la galeaza La Princesa del Amanecer bajo el mando de la capitana Jezebel. Tras meses en alta mar, desembarcó en [[Bahía de Dún]] y halló posada en La Balanza del Mártir, regentada por Jacopo.";
    bran.notes = "Explorar el dilema de pertenecer vs. ser libre frente al poder teocrático de [[Ilabid]] y los Tocados.";
    bran.showAttributes = true;
    bran.attributes = [
        { name: "ESGRIMA Y SUPERVIVENCIA", value: 76 },
        { name: "INFLUENCIA POLÍTICA", value: 25 },
        { name: "OFICIO Y OBSERVACIÓN", value: 84 },
        { name: "AFINIDAD CÓSMICA", value: 30 }
    ];
    bran.timeline = [
        {
            year: "Bheatha I Ciclo, Biorán, 1367. Cuarta Era",
            title: "Desembarco en Bahía de Dún",
            location: "[[Bahía de Dún]]",
            impact: "Evento Narrativo",
            description: "Concluye su contrato con la capitana Jezebel en La Princesa del Amanecer y entra en la posada La Balanza del Mártir."
        }
    ];

    // 2. ILABID
    const ilabid = createNewEntryTemplate("Ilabid", "CIUDAD", "Centros de Poder");
    ilabid.canonStatus = "Canon Definitivo";
    ilabid.epithet = "La Ciudad bajo el Árbol Infinito";
    ilabid.status = "Centro religioso y político";
    ilabid.origin = "Continente Central";
    ilabid.role = "Teocracia y Universidad";
    ilabid.faction = "Tocados por [[Albus’Dúlra]]";
    ilabid.essence = "[[Albus’Dúlra]] y [[Nime Fis]]";
    ilabid.eraCode = "IV Era";
    ilabid.summary = "En su centro se alza un árbol colosal cuyo tronco parece abrazarse a sí mismo imitando un infinito. Bajo su sombra se expande una urbe de grandes proezas arquitectónicas, una gran universidad y la torre más alta donde residen los ancianos líderes.";
    ilabid.history = "Gobernada por unos pocos ancianos tocados por [[Albus’Dúlra]] que han vivido siglos. Se presentan ante el mundo como un faro de paz y aprendizaje al que acuden hijos de reyes y nobles, aunque en la práctica ejercen un control político y comercial absoluto.";
    ilabid.notes = "Aquí mantienen encerrados entre los más altos lujos —esclavizados de facto por sus dotes— a los tocados de [[Nime Fis]].";

    // 3. BAHÍA DE DÚN
    const dun = createNewEntryTemplate("Bahía de Dún", "CIUDAD", "Reinos Costeros");
    dun.canonStatus = "Canon Definitivo";
    dun.epithet = "Puerto de la doble muralla y sede de la familia real";
    dun.status = "Puerto activo";
    dun.origin = "Costa Occidental";
    dun.role = "Ciudad portuaria y capital real";
    dun.faction = "Corona de Dún";
    dun.essence = "Ninguna";
    dun.eraCode = "Dún";
    dun.summary = "Urbe marítima protegida por una primera línea defensiva de tonos acres y una segunda muralla imponente que resguarda el castillo de Dún, hogar de la familia real.";
    dun.history = "Sus muelles reciben embarcaciones militares y mercantes como La Princesa del Amanecer. Sus marinos llevan un pañuelo verde pálido bajo la axila derecha. En sus calles empinadas se encuentra la posada de tres pisos La Balanza del Mártir.";

    // 4. PEÑAS ROJAS
    const penasRojas = createNewEntryTemplate("Peñas Rojas", "CIUDAD", "Tierras Altas");
    penasRojas.canonStatus = "Borrador / Explorando";
    penasRojas.epithet = "Riscos carmesíes del interior";
    penasRojas.status = "Asentamiento";
    penasRojas.origin = "Cordillera del Ocaso";
    penasRojas.role = "Tierra natal de [[Bran]]";
    penasRojas.faction = "Independiente";
    penasRojas.essence = "Ninguna";
    penasRojas.summary = "Región escarpada de piedra rojiza de donde proviene [[Bran]] antes de hacerse a la mar.";

    // 5. PRIMIGENIOS: ALBUS'DÚLRA, DÍLSEC'ACCOMOL, AISLING'S BAAIL, NIME FIS
    const albus = createNewEntryTemplate("Albus’Dúlra", "PRIMIGENIO", "Los Nueve del Sol Verde");
    albus.epithet = "Esencia de Naturaleza y Vida · El Carcelero del Sol Verde";
    albus.status = "Aprisionado en el Sol Verde";
    albus.origin = "El Sol Verde (Centro del Universo)";
    albus.role = "Primigenio de la Vida";
    albus.faction = "Venerado en [[Ilabid]]";
    albus.essence = "Vida y Naturaleza";
    albus.eraCode = "Grian’uaine";
    albus.summary = "Representa la naturaleza y la vida sin muerte ni cambio. Durante la guerra cósmica tomó a sus ocho hermanos y los mezcló consigo mismo en la última estrella existente, expandiéndola hasta crear el [[Sol Verde]].";
    albus.history = "Sacrificó su forma libre por el deseo egoísta de preservar la vida eterna. Su radiación mantiene a raya la oscuridad de más allá del universo y alimenta las estrellas.";
    albus.notes = "Precio / Consecuencia: Sus Tocados en [[Ilabid]] viven siglos, pero sus cuerpos se convierten en bolsas de arrugas aferradas al poder y al inmovilismo.";

    const dilsec = createNewEntryTemplate("Dílsec’accomol", "PRIMIGENIO", "Los Nueve del Sol Verde");
    dilsec.epithet = "Esencia de Lealtad y Unión";
    dilsec.status = "Confinado en el Sol Verde";
    dilsec.origin = "El Sol Verde";
    dilsec.role = "Primigenio de la Comunión";
    dilsec.faction = "Tocados en comunión";
    dilsec.essence = "Lealtad y Unión";
    dilsec.eraCode = "Dílse";
    dilsec.summary = "Se le representa como una unidad: muchos sosteniéndose entre sí. Sus Tocados pueden unirse en comunión espiritual, aumentando sus aptitudes físicas y percibiendo el estado de ánimo de sus compañeros.";
    dilsec.notes = "Pertenecer → Perderse: En el extremo, pierden su individualidad y se vuelven una mente colmena; si uno muere, todos sienten la herida. Quienes rehúyen la comunión sufren visiones y un vacío existencial.";

    const aisling = createNewEntryTemplate("Aisling’s Baail", "PRIMIGENIO", "Los Nueve del Sol Verde");
    aisling.epithet = "La Dama de Sedas Púrpuras · Silencio y Sueños";
    aisling.status = "Confinada en el Sol Verde";
    aisling.origin = "El Sol Verde";
    aisling.role = "Primigenia Onírica";
    aisling.faction = "Visionarios";
    aisling.essence = "Silencio y Sueños";
    aisling.eraCode = "Brionglóid";
    aisling.summary = "Bella dama en sedas púrpuras con los ojos siempre velados. Sus Tocados pueden vislumbrar fragmentos del pasado, del futuro e incluso de lo que habita más allá de la luz del [[Sol Verde]].";
    aisling.notes = "Precio: Viven debilitados en constantes estados oníricos; abusar del don conduce irremediablemente a la locura al contemplar el exterior del universo.";

    const nimeFis = createNewEntryTemplate("Nime Fis", "PRIMIGENIO", "Los Nueve del Sol Verde");
    nimeFis.epithet = "Primigenio de dotes codiciadas por Ilabid";
    nimeFis.status = "Confinado en el Sol Verde";
    nimeFis.origin = "El Sol Verde";
    nimeFis.role = "Primigenio";
    nimeFis.faction = "Subyugados en [[Ilabid]]";
    nimeFis.essence = "Por detallar";
    nimeFis.summary = "Los Tocados por Nime Fis poseen dotes tan valiosas que los ancianos de [[Ilabid]] los mantienen encerrados en palacios de lujo, privados de libertad real.";

    // 6. LORE: EL SOL VERDE
    const solVerde = createNewEntryTemplate("Sol Verde", "LORE", "Cosmología");
    solVerde.epithet = "El corazón gravitatorio y mágico del universo";
    solVerde.status = "Activo en el centro del cosmos";
    solVerde.origin = "Centro del Universo";
    solVerde.role = "Prisión divina y fuente de magia";
    solVerde.faction = "Los Nueve Primigenios";
    solVerde.essence = "Todas las Esencias";
    solVerde.eraCode = "Solus";
    solVerde.summary = "Astro colosal —más grande que galaxias— alrededor del cual orbitan miles de sistemas solares. De él irradia toda la magia del universo y su luz mantiene a raya la nada exterior.";
    solVerde.history = "Creado por [[Albus’Dúlra]] al encerrarse junto a sus hermanos. Cuanto más cerca está un planeta del Sol Verde, más violenta es la magia; a miles de millones de años luz se halla el sistema solar de cuatro planetas donde transcurre la historia.";

    // 7. RELATO: LA LEY
    const relatoLaLey = createNewEntryTemplate("La Ley (Capítulo I)", "RELATO", "Arco de Dún");
    relatoLaLey.epithet = "Llegada de Bran a Bahía de Dún";
    relatoLaLey.status = "Borrador avanzado";
    relatoLaLey.origin = "[[Bahía de Dún]]";
    relatoLaLey.role = "Capítulo / Relato";
    relatoLaLey.faction = "[[Bran]]";
    relatoLaLey.essence = "Ninguna";
    relatoLaLey.summary = "La galeaza La Princesa del Amanecer atraca en el puerto envuelto en niebla de [[Bahía de Dún]]. [[Bran]] se despide de la capitana Jezebel y se interna en la ciudad hasta la posada La Balanza del Mártir.";
    relatoLaLey.history = "Escena clave donde se presenta el carácter pragmático de [[Bran]], la geografía amurallada de [[Bahía de Dún]] y el primer encuentro con el posadero Jacopo (Jaco).";

    return [bran, ilabid, dun, penasRojas, albus, dilsec, aisling, nimeFis, solVerde, relatoLaLey];
}

// =========================================
// ALMACENAMIENTO Y PARÁMETROS URL
// =========================================

function loadAppState() {
    try {
        const saved = localStorage.getItem("worldCodexData");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed.entries)) {
                parsed.entries.forEach(e => {
                    if (!e.group) e.group = "General";
                    if (!e.canonStatus) e.canonStatus = "Canon Definitivo";
                    if (!e.essence) e.essence = "Ninguna";
                    if (typeof e.showAttributes !== "boolean") {
                        e.showAttributes = (e.type === "PERSONAJE" || e.type === "FACCION");
                    }
                });
                if (parsed.entries.length === 0) return { activeEntryId: null, entries: [] };
                if (!parsed.activeEntryId || !parsed.entries.some(e => e.id === parsed.activeEntryId)) {
                    parsed.activeEntryId = parsed.entries[0].id;
                }
                return parsed;
            }
        }
        return { activeEntryId: null, entries: [] };
    } catch (error) {
        return { activeEntryId: null, entries: [] };
    }
}

let appState = loadAppState();
const urlParams = new URLSearchParams(window.location.search);

function getActiveEntry() {
    if (!appState.entries || appState.entries.length === 0) {
        appState.activeEntryId = null;
        return createNewEntryTemplate("Sin entrada activa");
    }

    const paramId = urlParams.get("id");
    if (paramId) {
        const byParam = appState.entries.find(e => e.id === paramId);
        if (byParam) {
            appState.activeEntryId = byParam.id;
            localStorage.setItem("worldCodexData", JSON.stringify(appState));
            return byParam;
        }
    }

    let found = appState.entries.find(e => e.id === appState.activeEntryId);
    if (!found) {
        found = appState.entries[0];
        appState.activeEntryId = found.id;
    }
    return found;
}

let currentEntry = getActiveEntry();

let toastTimeoutId = null;
function saveData(customMessage = "¡Cambios guardados!") {
    try {
        localStorage.setItem("worldCodexData", JSON.stringify(appState));
        if (customMessage) showMessage(customMessage);
    } catch (error) {
        showMessage("Memoria llena: usa URLs externas para imágenes o exporta un respaldo .json.", true);
    }
}

function showMessage(message, isError = false) {
    const el = document.getElementById("save-message");
    if (!el) return;
    if (toastTimeoutId) clearTimeout(toastTimeoutId);
    el.textContent = message;
    el.classList.toggle("toast-error", isError);
    el.classList.add("show");
    toastTimeoutId = setTimeout(() => el.classList.remove("show"), 3500);
}

// =========================================
// MOTOR DE ENLACES INTERNOS [[Nombre]]
// =========================================

function escapeHtml(text) {
    return String(text || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function formatWikiText(rawText) {
    const safe = escapeHtml(rawText);
    return safe.replace(/\[\[([^\]]+)\]\]/g, (match, targetName) => {
        const cleanTarget = targetName.trim();
        const existing = appState.entries.find(
            e => e.name.trim().toLowerCase() === cleanTarget.toLowerCase()
        );

        if (existing) {
            return `<button type="button" class="wiki-link" data-wiki-target="${escapeHtml(cleanTarget)}" title="Abrir página de ${escapeHtml(existing.name)}">${escapeHtml(cleanTarget)}</button>`;
        } else {
            return `<button type="button" class="wiki-link wiki-link-new" data-wiki-target="${escapeHtml(cleanTarget)}" title="Crear ficha nueva para ${escapeHtml(cleanTarget)}">+ ${escapeHtml(cleanTarget)}</button>`;
        }
    });
}

function navigateToWikiTarget(targetName) {
    const existing = appState.entries.find(
        e => e.name.trim().toLowerCase() === targetName.trim().toLowerCase()
    );

    if (existing) {
        appState.activeEntryId = existing.id;
        saveData(null);
        window.location.href = `entry.html?id=${encodeURIComponent(existing.id)}`;
    } else {
        if (confirm(`La página "${targetName}" aún no existe en tu cuaderno.\n¿Quieres crearla ahora y abrirla?`)) {
            const newEntry = createNewEntryTemplate(targetName.trim(), "CIUDAD", "General");
            appState.entries.push(newEntry);
            appState.activeEntryId = newEntry.id;
            saveData(null);
            window.location.href = `admin.html?id=${encodeURIComponent(newEntry.id)}`;
        }
    }
}

document.addEventListener("click", (e) => {
    const wikiBtn = e.target.closest(".wiki-link");
    if (wikiBtn) {
        const target = wikiBtn.dataset.wikiTarget;
        if (target) navigateToWikiTarget(target);
    }
});

// =========================================
// GRÁFICOS SVG Y COMPRESIÓN
// =========================================

function compressImageFile(file, maxWidth = 850, quality = 0.74) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement("canvas");
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", quality));
            };
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function getDefaultEmblem() {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
            <path d="M14 12H50V30C50 43 32 54 32 54C32 54 14 43 14 30V12Z" stroke="#c85a32" stroke-width="3.5" fill="rgba(200,90,50,0.12)"/>
            <circle cx="32" cy="28" r="5" fill="#c85a32"/>
        </svg>
    `);
}

function getDefaultPortrait(type = "PERSONAJE") {
    const icons = {
        PERSONAJE: "✒️",
        PRIMIGENIO: "☀️",
        MAPA: "🧭",
        CIUDAD: "🏛️",
        LORE: "📜",
        RELATO: "📖",
        FACCION: "⚜️",
        RELIQUIA: "🗝️"
    };
    const symbol = icons[type] || "✦";
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360" fill="none">
            <rect width="280" height="360" fill="#efe9dc"/>
            <rect x="18" y="18" width="244" height="324" stroke="#c85a32" stroke-opacity="0.3" stroke-dasharray="6 6" stroke-width="1.5"/>
            <text x="140" y="190" text-anchor="middle" font-size="52">${symbol}</text>
        </svg>
    `);
}

function getDefaultHonorIcon() {
    return "data:image/svg+xml;utf8," + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
            <polygon points="32,8 39,24 56,26 43,38 47,55 32,46 17,55 21,38 8,26 25,24" stroke="#c85a32" stroke-width="3" fill="rgba(217,155,38,0.2)"/>
        </svg>
    `);
}

// =========================================
// 1. PORTAL PRINCIPAL (index.html)
// =========================================

function initPortalPage() {
    if (!document.getElementById("count-ALL")) return;

    const types = ["PERSONAJE", "PRIMIGENIO", "MAPA", "CIUDAD", "LORE", "RELATO", "FACCION", "RELIQUIA"];
    types.forEach(t => {
        const el = document.getElementById(`count-${t}`);
        if (el) el.textContent = appState.entries.filter(e => e.type === t).length;
    });
    document.getElementById("count-ALL").textContent = appState.entries.length;

    document.getElementById("global-new-entry-btn")?.addEventListener("click", () => {
        const name = prompt("Nombre de la nueva ficha:");
        if (!name || !name.trim()) return;
        const newEntry = createNewEntryTemplate(name.trim(), "PERSONAJE", "General");
        appState.entries.push(newEntry);
        appState.activeEntryId = newEntry.id;
        saveData(null);
        window.location.href = `admin.html?id=${encodeURIComponent(newEntry.id)}`;
    });

    document.getElementById("portal-demo-btn")?.addEventListener("click", () => {
        const demoEntries = createDemoWorld();
        let added = 0;
        demoEntries.forEach(item => {
            if (!appState.entries.some(e => e.name.toLowerCase() === item.name.toLowerCase())) {
                appState.entries.push(item);
                added++;
            }
        });
        appState.activeEntryId = appState.entries[0]?.id || null;
        saveData(added > 0 ? `¡Universo base cargado (${added} fichas conectadas)!` : "Tu universo base ya estaba cargado.");
        initPortalPage();
    });
}

// =========================================
// 2. SECCIÓN Y GRUPOS (section.html)
// =========================================

let groupViewEnabled = true;

function initSectionPage() {
    const container = document.getElementById("section-entries-container");
    if (!container) return;

    const currentType = (urlParams.get("type") || "PERSONAJE").toUpperCase();
    const meta = SECTION_META[currentType] || SECTION_META.ALL;

    document.title = `${meta.title} | World Codex`;
    document.getElementById("section-overline").textContent = meta.overline;
    document.getElementById("section-title").textContent = meta.title;
    document.getElementById("section-subtitle").textContent = meta.subtitle;

    const createInSection = (presetGroup = "") => {
        const name = prompt(`Nombre del nuevo registro en ${meta.title}:`);
        if (!name || !name.trim()) return;
        const targetType = currentType === "ALL" ? "PERSONAJE" : currentType;
        const groupName = presetGroup || prompt("¿A qué grupo o carpeta pertenece? (Deja vacío para 'General'):") || "General";

        const newEntry = createNewEntryTemplate(name.trim(), targetType, groupName.trim() || "General");
        appState.entries.push(newEntry);
        appState.activeEntryId = newEntry.id;
        saveData(null);
        window.location.href = `admin.html?id=${encodeURIComponent(newEntry.id)}`;
    };

    document.getElementById("section-new-btn")?.addEventListener("click", () => createInSection());
    document.getElementById("section-create-main-btn")?.addEventListener("click", () => createInSection());

    const toggleGroupBtn = document.getElementById("toggle-group-view-btn");
    toggleGroupBtn?.addEventListener("click", () => {
        groupViewEnabled = !groupViewEnabled;
        toggleGroupBtn.textContent = groupViewEnabled ? "🗂 Vista: Agrupada por grupos" : "▦ Vista: Todas juntas";
        renderSectionEntries(currentType);
    });

    document.getElementById("section-search-input")?.addEventListener("input", () => renderSectionEntries(currentType));
    document.getElementById("section-group-filter")?.addEventListener("change", () => renderSectionEntries(currentType));

    container.addEventListener("click", (e) => {
        const openId = e.target.closest("[data-open-id]")?.dataset.openId;
        if (openId) {
            appState.activeEntryId = openId;
            saveData(null);
            window.location.href = `entry.html?id=${encodeURIComponent(openId)}`;
        }

        const addInGroup = e.target.closest("[data-add-group]")?.dataset.addGroup;
        if (addInGroup) createInSection(addInGroup);

        const moveId = e.target.closest("[data-move-id]")?.dataset.moveId;
        if (moveId) {
            const item = appState.entries.find(x => x.id === moveId);
            if (item) {
                const newGrp = prompt(`Mover "${item.name}" al grupo:`, item.group || "General");
                if (newGrp !== null && newGrp.trim() !== "") {
                    item.group = newGrp.trim();
                    saveData(`Movido a "${item.group}"`);
                    renderSectionEntries(currentType);
                }
            }
        }

        const delId = e.target.closest("[data-delete-id]")?.dataset.deleteId;
        if (delId && confirm("¿Eliminar esta entrada permanentemente?")) {
            appState.entries = appState.entries.filter(x => x.id !== delId);
            saveData("Entrada eliminada");
            renderSectionEntries(currentType);
        }
    });

    renderSectionEntries(currentType);
}

function renderSectionEntries(currentType) {
    const container = document.getElementById("section-entries-container");
    const groupFilter = document.getElementById("section-group-filter");
    if (!container) return;

    const sectionItems = currentType === "ALL"
        ? appState.entries
        : appState.entries.filter(e => e.type === currentType);

    const uniqueGroups = [...new Set(sectionItems.map(e => (e.group || "General").trim()))].sort();
    if (groupFilter) {
        const prevVal = groupFilter.value;
        groupFilter.innerHTML = `<option value="ALL">Todos los grupos (${uniqueGroups.length})</option>` +
            uniqueGroups.map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
        if (uniqueGroups.includes(prevVal)) groupFilter.value = prevVal;
    }

    if (sectionItems.length === 0) {
        container.innerHTML = `
            <div class="empty-roster-menu">
                <span class="empty-icon">✦</span>
                <h3>Aún no hay entradas en esta sección</h3>
                <p>Crea la primera ficha aquí o vuelve al menú principal.</p>
                <button type="button" id="empty-section-create-btn" class="primary-button">+ Crear primera ficha</button>
            </div>
        `;
        document.getElementById("empty-section-create-btn")?.addEventListener("click", () => {
            document.getElementById("section-create-main-btn")?.click();
        });
        renderComparisonPanel(sectionItems, currentType);
        return;
    }

    const query = (document.getElementById("section-search-input")?.value || "").trim().toLowerCase();
    const selectedGroup = groupFilter?.value || "ALL";

    const filtered = sectionItems.filter(e => {
        const grp = (e.group || "General").trim();
        const matchesGroup = selectedGroup === "ALL" || grp === selectedGroup;
        const matchesText =
            e.name.toLowerCase().includes(query) ||
            (e.origin || "").toLowerCase().includes(query) ||
            (e.essence || "").toLowerCase().includes(query) ||
            (e.role || "").toLowerCase().includes(query) ||
            grp.toLowerCase().includes(query);
        return matchesGroup && matchesText;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color: var(--muted);">No hay coincidencias con ese filtro.</p>`;
        return;
    }

    const renderCardHtml = (e) => {
        const thumbSrc = e.portrait?.trim() ? e.portrait.trim() : getDefaultPortrait(e.type);
        const cleanOrigin = (e.origin || "").replace(/\[\[|\]\]/g, "");
        return `
            <div class="player-roster-card">
                <div class="roster-card-top">
                    <img src="${thumbSrc}" alt="${escapeHtml(e.name)}" class="roster-mini-thumb" onerror="this.onerror=null; this.src=getDefaultPortrait('${e.type}');">
                    <div>
                        <div class="roster-header">
                            <span>${escapeHtml(e.type)}</span>
                            <span>${escapeHtml(e.eraCode || "")}</span>
                        </div>
                        <h3>${escapeHtml(e.name)}</h3>
                    </div>
                </div>
                <p class="roster-meta">${escapeHtml(cleanOrigin)} · ${escapeHtml(e.role || "")}</p>
                <div class="roster-tags-row">
                    <span class="roster-group-tag">🗂 ${escapeHtml(e.group || "General")}</span>
                    <span class="roster-canon-tag">${escapeHtml(e.canonStatus || "Canon Definitivo")}</span>
                </div>
                <div class="roster-actions">
                    <button type="button" class="select-player-btn" data-open-id="${e.id}">Abrir hoja</button>
                    <button type="button" class="move-group-btn" data-move-id="${e.id}" title="Cambiar de grupo">Grupo</button>
                    <button type="button" class="delete-player-btn" data-delete-id="${e.id}">✕</button>
                </div>
            </div>
        `;
    };

    if (groupViewEnabled) {
        const groupedMap = new Map();
        filtered.forEach(item => {
            const grp = (item.group || "General").trim();
            if (!groupedMap.has(grp)) groupedMap.set(grp, []);
            groupedMap.get(grp).push(item);
        });

        let html = "";
        groupedMap.forEach((items, groupName) => {
            html += `
                <div class="group-block">
                    <div class="group-block-header">
                        <div class="group-block-title">
                            <span>🗂 ${escapeHtml(groupName)}</span>
                            <span class="group-count-badge">${items.length}</span>
                        </div>
                        <button type="button" class="group-add-btn" data-add-group="${escapeHtml(groupName)}">+ Añadir a este grupo</button>
                    </div>
                    <div class="players-container">
                        ${items.map(renderCardHtml).join("")}
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } else {
        container.innerHTML = `<div class="players-container">${filtered.map(renderCardHtml).join("")}</div>`;
    }

    renderComparisonPanel(sectionItems, currentType);
}

function renderComparisonPanel(itemsPool, currentType) {
    const panel = document.getElementById("comparison-panel");
    const selectA = document.getElementById("compare-entry-a");
    const selectB = document.getElementById("compare-entry-b");
    if (!panel || !selectA || !selectB) return;

    // Mostrar comparador solo en Personajes o Facciones con al menos 2 fichas
    const allowedComparison = currentType === "PERSONAJE" || currentType === "FACCION";
    if (!allowedComparison || itemsPool.length < 2) {
        panel.style.display = "none";
        return;
    }

    panel.style.display = "block";
    const optionsHtml = itemsPool.map(e => `<option value="${e.id}">${escapeHtml(e.name)}</option>`).join("");
    selectA.innerHTML = optionsHtml;
    selectB.innerHTML = optionsHtml;
    selectB.value = itemsPool[1].id;

    const updateComp = () => {
        const entryA = itemsPool.find(e => e.id === selectA.value);
        const entryB = itemsPool.find(e => e.id === selectB.value);
        const results = document.getElementById("comparison-results");
        if (!entryA || !entryB || !results) return;

        const rows = [0, 1, 2, 3].map(idx => ({
            label: entryA.attributes?.[idx]?.name || `Atributo ${idx + 1}`,
            valA: Number(entryA.attributes?.[idx]?.value) || 0,
            valB: Number(entryB.attributes?.[idx]?.value) || 0
        }));

        results.innerHTML = rows.map(r => `
            <div class="comparison-row">
                <div class="comp-val-left ${r.valA > r.valB ? "comp-winner" : ""}">${r.valA}</div>
                <div class="comp-metric-name">${escapeHtml(r.label)}</div>
                <div class="comp-val-right ${r.valB > r.valA ? "comp-winner" : ""}">${r.valB}</div>
            </div>
        `).join("");
    };

    selectA.onchange = updateComp;
    selectB.onchange = updateComp;
    updateComp();
}

// =========================================
// 3. FICHA INDIVIDUAL (entry.html)
// =========================================

function initEntryPage() {
    if (!document.getElementById("entry-name")) return;

    if (appState.entries.length === 0) {
        window.location.href = "index.html";
        return;
    }

    document.title = `${currentEntry.name} | World Codex`;

    const secMeta = SECTION_META[currentEntry.type] || SECTION_META.PERSONAJE;
    const backLink = document.getElementById("back-to-section-link");
    const heroBackBtn = document.getElementById("hero-back-section-btn");
    if (backLink) {
        backLink.href = `section.html?type=${currentEntry.type}`;
        backLink.textContent = `← ${secMeta.title}`;
    }
    if (heroBackBtn) {
        heroBackBtn.href = `section.html?type=${currentEntry.type}`;
        heroBackBtn.textContent = `← Ver todos en ${secMeta.title}`;
    }

    const editUrl = `admin.html?id=${encodeURIComponent(currentEntry.id)}`;
    document.getElementById("nav-edit-this-link")?.setAttribute("href", editUrl);
    document.getElementById("hero-edit-btn")?.setAttribute("href", editUrl);

    const typeLabels = {
        PERSONAJE: {
            badge: "PERSONAJE", m1: "ORIGEN / REGIÓN", m2: "ROL / OFICIO", m3: "FACCIÓN / LEALTAD", m4: "ESENCIA / TOCADO POR",
            p1Tag: "APARIENCIA Y PRESENCIA", p1Title: "Rasgos físicos, vestimenta y porte",
            p2Tag: "HISTORIA Y TRAYECTORIA", p2Title: "Pasado, viajes y decisiones",
            p3Tag: "DILEMAS Y NOTAS DEL AUTOR", p3Title: "Conflictos internos y desarrollo"
        },
        PRIMIGENIO: {
            badge: "PRIMIGENIO / ESENCIA", m1: "MORADA / CONFINAMIENTO", m2: "NATURALEZA", m3: "CULTO O AFINES", m4: "ESENCIA QUE ENCARNA",
            p1Tag: "ESENCIA Y DON OTORGADO", p1Title: "Manifestación y poderes de sus Tocados",
            p2Tag: "MITO Y GUERRA CÓSMICA", p2Title: "Origen e influencia en el cosmos",
            p3Tag: "PRECIO, MALDICIÓN Y ESTIGMA", p3Title: "Consecuencias de abusar del don y trato en Ilabid"
        },
        MAPA: {
            badge: "MAPA Y GEOGRAFÍA", m1: "CONTINENTE / ZONA", m2: "BIOMAS Y CLIMA", m3: "DOMINIO POLÍTICO", m4: "INFLUENCIA CÓSMICA",
            p1Tag: "TOPOGRAFÍA Y RELIEVE", p1Title: "Cordilleras, costas, ríos y fronteras",
            p2Tag: "HISTORIA CARTOGRÁFICA", p2Title: "Evolución de sus fronteras y disputas",
            p3Tag: "NOTAS DE EXPLORACIÓN", p3Title: "Rutas, peligros y secretos del terreno"
        },
        CIUDAD: {
            badge: "CIUDAD / LUGAR", m1: "REGIÓN GEOGRÁFICA", m2: "ARQUITECTURA / TIPO", m3: "GOBIERNO / SOBERANÍA", m4: "ESENCIA DOMINANTE",
            p1Tag: "ATMOSFERA Y ARQUITECTURA", p1Title: "Murallas, monumentos y vida cotidiana",
            p2Tag: "HISTORIA Y PODER", p2Title: "Fundación, comercio y estructura social",
            p3Tag: "SECRETOS Y TENSIONES", p3Title: "Lo que ocurre tras puertas cerradas"
        },
        LORE: {
            badge: "LORE Y COSMOLOGÍA", m1: "ÁMBITO", m2: "NATURALEZA", m3: "CUSTODIOS", m4: "ESENCIA VINCULADA",
            p1Tag: "PRINCIPIO FUNDAMENTAL", p1Title: "Cómo funciona en el universo",
            p2Tag: "ORIGEN Y DESARROLLO", p2Title: "Antecedentes y manifestaciones",
            p3Tag: "IMPLICACIONES NARRATIVAS", p3Title: "Impacto en los personajes y el mundo"
        },
        RELATO: {
            badge: "RELATO / CAPÍTULO", m1: "ESCENARIO PRINCIPAL", m2: "ARCO NARRATIVO", m3: "PROTAGONISTA", m4: "ESENCIA EN JUEGO",
            p1Tag: "SINOPSIS DE LA ESCENA", p1Title: "Qué ocurre y qué cambia en la trama",
            p2Tag: "TEXTO / BORRADOR NARRATIVO", p2Title: "Desarrollo de la escena",
            p3Tag: "NOTAS DE REVISIÓN", p3Title: "Continuidad, ritmo y detalles a pulir"
        },
        FACCION: {
            badge: "FACCIÓN / ORDEN", m1: "SEDE CENTRAL", m2: "NATURALEZA", m3: "LIDERAZGO", m4: "ESENCIA RECTORA",
            p1Tag: "DOCTRINA Y PRESENCIA", p1Title: "Símbolos, jerarquía y propósito",
            p2Tag: "HISTORIA E INFLUENCIA", p2Title: "Ascenso, alianzas y conflictos",
            p3Tag: "AGENDA OCULTA", p3Title: "Tensiones internas y secretos"
        },
        RELIQUIA: {
            badge: "RELIQUIA / PUEBLO", m1: "PROCEDENCIA", m2: "CATEGORÍA", m3: "POSEEDOR / AFINIDAD", m4: "ESENCIA IMBUIDA",
            p1Tag: "DESCRIPCIÓN Y RASGOS", p1Title: "Forma, costumbres o propiedades",
            p2Tag: "HISTORIA Y LINAJE", p2Title: "Origen y recorrido",
            p3Tag: "NOTAS DEL AUTOR", p3Title: "Papel en la historia"
        }
    };

    const labels = typeLabels[currentEntry.type] || typeLabels.PERSONAJE;

    document.getElementById("entry-type-label").textContent = labels.badge;
    document.getElementById("entry-group-badge").textContent = `🗂 ${currentEntry.group || "General"}`;
    document.getElementById("entry-canon-badge").textContent = currentEntry.canonStatus || "Canon Definitivo";
    document.getElementById("entry-status-badge").textContent = currentEntry.status || "Activo";
    document.getElementById("entry-name").textContent = currentEntry.name;
    document.getElementById("entry-epithet").textContent = currentEntry.epithet || "Sin epíteto";

    document.getElementById("meta-1-label").textContent = labels.m1;
    document.getElementById("meta-2-label").textContent = labels.m2;
    document.getElementById("meta-3-label").textContent = labels.m3;
    document.getElementById("meta-4-label").textContent = labels.m4;

    document.getElementById("prose-1-tag").textContent = labels.p1Tag;
    document.getElementById("prose-1-title").textContent = labels.p1Title;
    document.getElementById("prose-2-tag").textContent = labels.p2Tag;
    document.getElementById("prose-2-title").textContent = labels.p2Title;
    document.getElementById("prose-3-tag").textContent = labels.p3Tag;
    document.getElementById("prose-3-title").textContent = labels.p3Title;

    document.getElementById("entry-origin").innerHTML = formatWikiText(currentEntry.origin || "—");
    document.getElementById("entry-role").innerHTML = formatWikiText(currentEntry.role || "—");
    document.getElementById("entry-faction").innerHTML = formatWikiText(currentEntry.faction || "—");
    document.getElementById("entry-essence").innerHTML = formatWikiText(currentEntry.essence || "Ninguna");

    const emblemImg = document.getElementById("entry-emblem");
    if (emblemImg) {
        emblemImg.src = currentEntry.emblem?.trim() ? currentEntry.emblem.trim() : getDefaultEmblem();
        emblemImg.onerror = function() { this.onerror = null; this.src = getDefaultEmblem(); };
    }

    const portraitImg = document.getElementById("entry-portrait");
    if (portraitImg) {
        portraitImg.src = currentEntry.portrait?.trim() ? currentEntry.portrait.trim() : getDefaultPortrait(currentEntry.type);
        portraitImg.onerror = function() { this.onerror = null; this.src = getDefaultPortrait(currentEntry.type); };
    }

    document.getElementById("portrait-code-tag").textContent = currentEntry.eraCode || "✦";
    document.getElementById("hero-watermark").textContent = currentEntry.eraCode || "✦";

    // Recorrido cronológico
    const journeyBar = document.getElementById("journey-bar");
    const journeyList = document.getElementById("journey-list");
    if (journeyBar && journeyList) {
        const locations = [];
        (currentEntry.timeline || []).forEach(ev => {
            const loc = (ev.location || "").trim();
            if (loc && locations[locations.length - 1] !== loc) locations.push(loc);
        });
        if (locations.length > 0) {
            journeyBar.style.display = "flex";
            journeyList.innerHTML = locations.map(l => `<span>${formatWikiText(l)}</span>`).join(`<span class="journey-arrow">→</span>`);
        } else {
            journeyBar.style.display = "none";
        }
    }

    document.getElementById("entry-summary").innerHTML = currentEntry.summary?.trim()
        ? formatWikiText(currentEntry.summary)
        : "Aún no se ha redactado esta sección.";

    document.getElementById("entry-history").innerHTML = currentEntry.history?.trim()
        ? formatWikiText(currentEntry.history)
        : "Aún no se ha redactado esta sección.";

    document.getElementById("entry-notes").innerHTML = currentEntry.notes?.trim()
        ? formatWikiText(currentEntry.notes)
        : "Sin notas al margen todavía.";

    // Atributos opcionales
    const attrSection = document.getElementById("attributes");
    if (attrSection) {
        attrSection.style.display = currentEntry.showAttributes ? "block" : "none";
    }

    if (currentEntry.showAttributes) {
        const attrs = currentEntry.attributes || [];
        attrs.forEach((attr, idx) => {
            const numEl = document.getElementById(`attr-${idx + 1}-val`);
            const lblEl = document.getElementById(`attr-${idx + 1}-label`);
            if (numEl) numEl.textContent = attr.value;
            if (lblEl) lblEl.textContent = attr.name.toUpperCase();
        });

        const barsContainer = document.getElementById("attribute-bars-container");
        if (barsContainer) {
            barsContainer.innerHTML = attrs.map(attr => `
                <div class="attr-bar-row">
                    <div class="attr-bar-meta">
                        <span>${escapeHtml(attr.name)}</span>
                        <span>${attr.value} / 100</span>
                    </div>
                    <div class="attr-bar-track">
                        <div class="attr-bar-fill" style="width: ${Math.min(100, Math.max(0, Number(attr.value) || 0))}%"></div>
                    </div>
                </div>
            `).join("");
        }
    }

    renderEntryGallery();
    renderEntryTimeline();
    renderEntryHonors();
}

function renderEntryGallery() {
    const container = document.getElementById("gallery-container");
    if (!container) return;

    const refs = currentEntry.references || [];
    if (refs.length === 0) {
        container.innerHTML = `<p style="color: var(--muted);">Aún no hay mapas o imágenes de referencia en este tablero. Añádelas desde <strong>✎ Editar esta hoja</strong>.</p>`;
        return;
    }

    container.innerHTML = refs.map((ref, index) => `
        <div class="gallery-card">
            <div class="gallery-img-wrapper" data-ref-index="${index}">
                <img src="${ref.src}" alt="${escapeHtml(ref.title)}" onerror="this.onerror=null; this.src=getDefaultPortrait();">
                <span class="gallery-category-badge">${escapeHtml(ref.category || "Referencia")}</span>
            </div>
            <div class="gallery-card-body">
                <h3>${escapeHtml(ref.title)}</h3>
                <p>${escapeHtml(ref.caption || "Sin nota al pie.")}</p>
                <button type="button" class="delete-trophy" data-del-ref="${index}">Quitar imagen</button>
            </div>
        </div>
    `).join("");

    container.onclick = (e) => {
        const imgWrapper = e.target.closest("[data-ref-index]");
        if (imgWrapper) {
            const ref = currentEntry.references[Number(imgWrapper.dataset.refIndex)];
            if (ref) {
                document.getElementById("lightbox-img").src = ref.src;
                document.getElementById("lightbox-title").textContent = ref.title;
                document.getElementById("lightbox-desc").textContent = `${ref.category} — ${ref.caption || ""}`;
                document.getElementById("lightbox-modal").classList.add("open");
            }
        }
        const delRef = e.target.closest("[data-del-ref]")?.dataset.delRef;
        if (delRef !== undefined) {
            currentEntry.references.splice(Number(delRef), 1);
            saveData("Imagen eliminada");
            renderEntryGallery();
        }
    };

    document.getElementById("close-lightbox-btn")?.addEventListener("click", () => {
        document.getElementById("lightbox-modal").classList.remove("open");
    });
    document.getElementById("lightbox-modal")?.addEventListener("click", (e) => {
        if (e.target.id === "lightbox-modal") e.target.classList.remove("open");
    });
}

function renderEntryTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    const events = currentEntry.timeline || [];
    if (events.length === 0) {
        container.innerHTML = `<p style="color: var(--muted);">Aún no hay eventos registrados.</p>`;
        return;
    }

    container.innerHTML = events.map((ev, idx) => `
        <div class="season-card">
            <span class="timeline-era-badge">${escapeHtml(ev.year)} · ${escapeHtml(ev.impact || "Hito")}</span>
            <h3>${escapeHtml(ev.title)}</h3>
            <div class="season-stats">📍 ${formatWikiText(ev.location)}</div>
            <p class="timeline-desc">${formatWikiText(ev.description)}</p>
            <div><button type="button" class="delete-trophy" data-del-event="${idx}">Eliminar</button></div>
        </div>
    `).join("");

    container.onclick = (e) => {
        const idx = e.target.closest("[data-del-event]")?.dataset.delEvent;
        if (idx !== undefined) {
            currentEntry.timeline.splice(Number(idx), 1);
            saveData("Evento eliminado");
            renderEntryTimeline();
        }
    };
}

function renderEntryHonors() {
    const container = document.getElementById("honors-container");
    if (!container) return;

    const honors = currentEntry.honors || [];
    if (honors.length === 0) {
        container.innerHTML = `<p style="color: var(--muted);">Aún no hay títulos, hazañas o posesiones registradas.</p>`;
        return;
    }

    container.innerHTML = honors.map((h, idx) => {
        const iconSrc = h.image?.trim() ? h.image.trim() : getDefaultHonorIcon();
        return `
            <div class="trophy-card">
                <img src="${iconSrc}" alt="${escapeHtml(h.name)}" class="trophy-image" onerror="this.onerror=null; this.src=getDefaultHonorIcon();">
                <h3>${escapeHtml(h.name)}</h3>
                <p class="trophy-years-list">${escapeHtml(h.year)}</p>
                <p class="trophy-clubs-list">${formatWikiText(h.context)}</p>
                <button type="button" class="delete-trophy" data-del-honor="${idx}">Eliminar</button>
            </div>
        `;
    }).join("");

    container.onclick = (e) => {
        const idx = e.target.closest("[data-del-honor]")?.dataset.delHonor;
        if (idx !== undefined) {
            currentEntry.honors.splice(Number(idx), 1);
            saveData("Registro eliminado");
            renderEntryHonors();
        }
    };
}

// =========================================
// 4. EDITOR (admin.html)
// =========================================

function initAdminPage() {
    if (!document.getElementById("admin-forms-wrapper")) return;

    if (urlParams.get("tab") === "backup") {
        document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".admin-tab-panel").forEach(p => p.classList.remove("active"));
        document.querySelector('[data-tab="tab-backup"]')?.classList.add("active");
        document.getElementById("tab-backup")?.classList.add("active");
    }

    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".admin-tab-panel").forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.dataset.tab)?.classList.add("active");
        });
    });

    // Constructor de fecha del mundo (20 meses, 2 ciclos de 9 días)
    document.getElementById("apply-world-date-btn")?.addEventListener("click", () => {
        const day = document.getElementById("cal-day").value;
        const cycle = document.getElementById("cal-cycle").value;
        const month = document.getElementById("cal-month").value;
        const year = document.getElementById("cal-year").value.trim();
        const era = document.getElementById("cal-era").value.trim();

        const formatted = `${day} ${cycle}, ${month}${year ? `, ${year}` : ""}${era ? `. ${era}` : ""}`;
        const targetInput = document.getElementById("event-year");
        if (targetInput) {
            targetInput.value = formatted;
            showMessage("Fecha del mundo insertada");
        }
    });

    document.getElementById("admin-new-entry-btn")?.addEventListener("click", () => {
        const name = prompt("Nombre de la nueva ficha:");
        if (!name || !name.trim()) return;
        const newEntry = createNewEntryTemplate(name.trim(), currentEntry.type || "PERSONAJE", "General");
        appState.entries.push(newEntry);
        appState.activeEntryId = newEntry.id;
        currentEntry = newEntry;
        saveData(`¡Ficha "${newEntry.name}" creada!`);
        fillAdminForms();
    });

    const loadBaseUniverse = () => {
        const demoEntries = createDemoWorld();
        demoEntries.forEach(item => {
            if (!appState.entries.some(e => e.name.toLowerCase() === item.name.toLowerCase())) {
                appState.entries.push(item);
            }
        });
        appState.activeEntryId = appState.entries[0]?.id || null;
        currentEntry = getActiveEntry();
        saveData("¡Universo base cargado!");
        fillAdminForms();
    };

    document.getElementById("admin-load-demo-btn")?.addEventListener("click", loadBaseUniverse);
    document.getElementById("tab-load-demo-btn")?.addEventListener("click", loadBaseUniverse);

    document.getElementById("admin-delete-all-btn")?.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres BORRAR TODAS las hojas del cuaderno?")) {
            appState.entries = [];
            appState.activeEntryId = null;
            currentEntry = getActiveEntry();
            saveData("Cuaderno vaciado.");
            fillAdminForms();
        }
    });

    document.getElementById("quick-create-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        const input = document.getElementById("quick-entry-name");
        if (input?.value.trim()) {
            const newEntry = createNewEntryTemplate(input.value.trim(), "PERSONAJE", "General");
            appState.entries.push(newEntry);
            appState.activeEntryId = newEntry.id;
            currentEntry = newEntry;
            saveData(`¡Ficha "${newEntry.name}" creada!`);
            input.value = "";
            fillAdminForms();
        }
    });

    document.getElementById("admin-entry-select")?.addEventListener("change", function() {
        appState.activeEntryId = this.value;
        currentEntry = getActiveEntry();
        saveData(`Editando: ${currentEntry.name}`);
        fillAdminForms();
    });

    document.getElementById("identity-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        currentEntry.type = document.getElementById("edit-type").value;
        currentEntry.group = document.getElementById("edit-group").value.trim() || "General";
        currentEntry.canonStatus = document.getElementById("edit-canon").value;
        currentEntry.name = document.getElementById("edit-name").value.trim();
        currentEntry.epithet = document.getElementById("edit-epithet").value.trim();
        currentEntry.status = document.getElementById("edit-status").value.trim();
        currentEntry.origin = document.getElementById("edit-origin").value.trim();
        currentEntry.role = document.getElementById("edit-role").value.trim();
        currentEntry.faction = document.getElementById("edit-faction").value.trim();
        currentEntry.essence = document.getElementById("edit-essence").value.trim() || "Ninguna";
        currentEntry.eraCode = document.getElementById("edit-era-code").value.trim();
        currentEntry.portrait = document.getElementById("edit-portrait").value.trim();
        currentEntry.emblem = document.getElementById("edit-emblem").value.trim();
        currentEntry.summary = document.getElementById("edit-summary").value;
        currentEntry.history = document.getElementById("edit-history").value;
        currentEntry.notes = document.getElementById("edit-notes").value;

        saveData("¡Hoja guardada!");
        fillAdminForms();
    });

    document.getElementById("edit-show-attributes")?.addEventListener("change", function() {
        currentEntry.showAttributes = this.checked;
        saveData(this.checked ? "Barras de atributos activadas" : "Barras de atributos ocultas");
    });

    document.getElementById("attributes-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        currentEntry.showAttributes = document.getElementById("edit-show-attributes").checked;
        currentEntry.attributes = [0, 1, 2, 3].map(i => ({
            name: document.getElementById(`attr-${i + 1}-name`).value.trim(),
            value: Math.min(100, Math.max(0, Number(document.getElementById(`attr-${i + 1}-input`).value) || 0))
        }));
        saveData("¡Atributos actualizados!");
        fillAdminForms();
    });

    document.getElementById("gallery-form")?.addEventListener("submit", async function(e) {
        e.preventDefault();
        const title = document.getElementById("ref-title").value.trim();
        const category = document.getElementById("ref-category").value;
        const caption = document.getElementById("ref-caption").value.trim();
        const urlInput = document.getElementById("ref-url").value.trim();
        const file = document.getElementById("ref-file")?.files?.[0];

        if (!urlInput && !file) {
            showMessage("Pega una URL o selecciona una imagen.", true);
            return;
        }

        try {
            const finalSrc = file ? await compressImageFile(file, 850, 0.75) : urlInput;
            if (!Array.isArray(currentEntry.references)) currentEntry.references = [];
            currentEntry.references.push({ title, category, caption, src: finalSrc });
            saveData(`¡Referencia "${title}" añadida!`);
            this.reset();
            fillAdminForms();
        } catch (err) {
            showMessage("No se pudo procesar la imagen.", true);
        }
    });

    document.getElementById("timeline-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!Array.isArray(currentEntry.timeline)) currentEntry.timeline = [];
        currentEntry.timeline.push({
            year: document.getElementById("event-year").value.trim(),
            title: document.getElementById("event-title").value.trim(),
            location: document.getElementById("event-location").value.trim(),
            impact: document.getElementById("event-impact").value,
            description: document.getElementById("event-desc").value.trim()
        });
        saveData("¡Evento añadido!");
        this.reset();
        fillAdminForms();
    });

    document.getElementById("honor-form")?.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!Array.isArray(currentEntry.honors)) currentEntry.honors = [];
        currentEntry.honors.push({
            name: document.getElementById("honor-name").value.trim(),
            year: document.getElementById("honor-year").value.trim(),
            context: document.getElementById("honor-context").value.trim(),
            image: document.getElementById("honor-image").value.trim()
        });
        saveData("¡Registro añadido!");
        this.reset();
        fillAdminForms();
    });

    document.getElementById("admin-forms-wrapper")?.addEventListener("click", (e) => {
        const delRef = e.target.closest("[data-admin-del-ref]")?.dataset.adminDelRef;
        if (delRef !== undefined) {
            currentEntry.references.splice(Number(delRef), 1);
            saveData("Referencia eliminada");
            fillAdminForms();
        }
        const delEv = e.target.closest("[data-admin-del-event]")?.dataset.adminDelEvent;
        if (delEv !== undefined) {
            currentEntry.timeline.splice(Number(delEv), 1);
            saveData("Evento eliminado");
            fillAdminForms();
        }
        const delHon = e.target.closest("[data-admin-del-honor]")?.dataset.adminDelHonor;
        if (delHon !== undefined) {
            currentEntry.honors.splice(Number(delHon), 1);
            saveData("Registro eliminado");
            fillAdminForms();
        }
    });

    // Exportar / Importar
    document.getElementById("export-data-btn")?.addEventListener("click", () => {
        if (appState.entries.length === 0) return showMessage("No hay entradas para exportar.", true);
        const payload = { appName: "World Codex", exportedAt: new Date().toISOString(), activeEntryId: appState.activeEntryId, entries: appState.entries };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `world-codex-backup-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showMessage(`¡Cuaderno exportado (${appState.entries.length} hojas)!`);
    });

    const importBtn = document.getElementById("import-data-btn");
    const importInput = document.getElementById("import-file-input");
    if (importBtn && importInput) {
        importBtn.addEventListener("click", () => importInput.click());
        importInput.addEventListener("change", (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (!Array.isArray(parsed.entries)) throw new Error("Formato inválido");
                    if (appState.entries.length > 0 && confirm("¿Quieres REEMPLAZAR todo tu cuaderno actual?\n(Pulsa Cancelar para COMBINAR ambos archivos)")) {
                        appState.entries = parsed.entries;
                    } else {
                        parsed.entries.forEach((item, idx) => {
                            if (appState.entries.some(ex => ex.id === item.id)) item.id = `entry_merged_${Date.now()}_${idx}`;
                            if (!item.group) item.group = "General";
                            if (!item.canonStatus) item.canonStatus = "Canon Definitivo";
                            appState.entries.push(item);
                        });
                    }
                    appState.activeEntryId = appState.entries[0]?.id || null;
                    currentEntry = getActiveEntry();
                    saveData(`¡Respaldo importado (${parsed.entries.length} hojas)!`);
                    fillAdminForms();
                } catch (err) {
                    showMessage("Archivo .json inválido.", true);
                } finally {
                    event.target.value = "";
                }
            };
            reader.readAsText(file);
        });
    }

    fillAdminForms();
}

function fillAdminForms() {
    const hasEntries = appState.entries.length > 0;
    document.getElementById("admin-empty-state").style.display = hasEntries ? "none" : "block";
    document.getElementById("admin-forms-wrapper").style.display = hasEntries ? "block" : "none";
    document.getElementById("admin-entry-select").style.display = hasEntries ? "inline-block" : "none";
    document.getElementById("admin-delete-all-btn").style.display = hasEntries ? "inline-block" : "none";
    document.getElementById("admin-active-name").textContent = hasEntries ? currentEntry.name : "Sin entrada";

    if (!hasEntries) return;

    const viewSheetLink = document.getElementById("admin-view-sheet-link");
    if (viewSheetLink) viewSheetLink.href = `entry.html?id=${encodeURIComponent(currentEntry.id)}`;

    const select = document.getElementById("admin-entry-select");
    select.innerHTML = appState.entries.map(e =>
        `<option value="${e.id}" ${e.id === appState.activeEntryId ? "selected" : ""}>[${e.type}] ${escapeHtml(e.name)}</option>`
    ).join("");

    const datalist = document.getElementById("existing-groups-datalist");
    if (datalist) {
        const groups = [...new Set(appState.entries.map(e => e.group).filter(Boolean))];
        datalist.innerHTML = groups.map(g => `<option value="${escapeHtml(g)}">`).join("");
    }

    document.getElementById("edit-type").value = currentEntry.type || "PERSONAJE";
    document.getElementById("edit-group").value = currentEntry.group || "General";
    document.getElementById("edit-canon").value = currentEntry.canonStatus || "Canon Definitivo";
    document.getElementById("edit-name").value = currentEntry.name || "";
    document.getElementById("edit-epithet").value = currentEntry.epithet || "";
    document.getElementById("edit-status").value = currentEntry.status || "";
    document.getElementById("edit-origin").value = currentEntry.origin || "";
    document.getElementById("edit-role").value = currentEntry.role || "";
    document.getElementById("edit-faction").value = currentEntry.faction || "";
    document.getElementById("edit-essence").value = currentEntry.essence || "Ninguna";
    document.getElementById("edit-era-code").value = currentEntry.eraCode || "";
    document.getElementById("edit-portrait").value = currentEntry.portrait || "";
    document.getElementById("edit-emblem").value = currentEntry.emblem || "";
    document.getElementById("edit-summary").value = currentEntry.summary || "";
    document.getElementById("edit-history").value = currentEntry.history || "";
    document.getElementById("edit-notes").value = currentEntry.notes || "";

    document.getElementById("edit-show-attributes").checked = Boolean(currentEntry.showAttributes);

    const attrs = currentEntry.attributes || [];
    [0, 1, 2, 3].forEach(i => {
        document.getElementById(`attr-${i + 1}-name`).value = attrs[i]?.name || "";
        document.getElementById(`attr-${i + 1}-input`).value = attrs[i]?.value ?? 50;
    });

    const refs = currentEntry.references || [];
    document.getElementById("admin-gallery-count").textContent = refs.length;
    document.getElementById("admin-gallery-list").innerHTML = refs.length === 0
        ? `<p style="color: var(--muted); font-size: 13px;">Sin imágenes de referencia aún.</p>`
        : refs.map((r, i) => `
            <div class="admin-gallery-thumb">
                <img src="${r.src}" alt="${escapeHtml(r.title)}">
                <div class="admin-gallery-thumb-info">
                    <strong>${escapeHtml(r.title)}</strong>
                    <span style="font-size:11px; color:var(--muted);">${escapeHtml(r.category)}</span>
                    <button type="button" class="delete-trophy" data-admin-del-ref="${i}">Quitar</button>
                </div>
            </div>
        `).join("");

    const events = currentEntry.timeline || [];
    document.getElementById("admin-timeline-count").textContent = events.length;
    document.getElementById("admin-timeline-list").innerHTML = events.length === 0
        ? `<p style="color: var(--muted); font-size: 13px;">Sin eventos registrados.</p>`
        : events.map((ev, i) => `
            <div class="admin-list-item">
                <div class="admin-list-item-info">
                    <strong>${escapeHtml(ev.year)} · ${escapeHtml(ev.title)}</strong>
                    <span>${escapeHtml(ev.location)}</span>
                </div>
                <button type="button" class="delete-trophy" data-admin-del-event="${i}">Eliminar</button>
            </div>
        `).join("");

    const honors = currentEntry.honors || [];
    document.getElementById("admin-honors-count").textContent = honors.length;
    document.getElementById("admin-honors-list").innerHTML = honors.length === 0
        ? `<p style="color: var(--muted); font-size: 13px;">Sin registros aún.</p>`
        : honors.map((h, i) => `
            <div class="admin-list-item">
                <div class="admin-list-item-info">
                    <strong>${escapeHtml(h.name)} (${escapeHtml(h.year)})</strong>
                    <span>${escapeHtml(h.context)}</span>
                </div>
                <button type="button" class="delete-trophy" data-admin-del-honor="${i}">Eliminar</button>
            </div>
        `).join("");
}

// =========================================
// INICIALIZAR
// =========================================
initPortalPage();
initSectionPage();
initEntryPage();
initAdminPage();