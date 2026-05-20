const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const mainMenu = document.getElementById("mainMenu");
const settingsMenu = document.getElementById("settingsMenu");
const playButton = document.getElementById("playButton");
const loadCareerButton = document.getElementById("loadCareerButton");
const settingsButton = document.getElementById("settingsButton");
const updateButton = document.getElementById("updateButton");
const installAppButton = document.getElementById("installAppButton");
const backToMenuButton = document.getElementById("backToMenuButton");
const keyboardModeButton = document.getElementById("keyboardModeButton");
const mobileModeButton = document.getElementById("mobileModeButton");
const gamepadModeButton = document.getElementById("gamepadModeButton");
const gamepadStatus = document.getElementById("gamepadStatus");
const mobileStatus = document.getElementById("mobileStatus");
const bindingHint = document.getElementById("bindingHint");
const gamepadBindingHint = document.getElementById("gamepadBindingHint");
const passButton = document.getElementById("passButton");
const shootButton = document.getElementById("shootButton");
const tackleButton = document.getElementById("tackleButton");
const dribbleButton = document.getElementById("dribbleButton");
const switchButton = document.getElementById("switchButton");
const restartButton = document.getElementById("restartButton");
const menuButton = document.getElementById("menuButton");
const managerHub = document.getElementById("managerHub");
const tacticPage = document.getElementById("tacticPage");
const marketPage = document.getElementById("marketPage");
const simulationPage = document.getElementById("simulationPage");
const updatePage = document.getElementById("updatePage");
const loadPage = document.getElementById("loadPage");
const seasonPage = document.getElementById("seasonPage");
const saveManagerButton = document.getElementById("saveManagerButton");
const editManagerButton = document.getElementById("editManagerButton");
const openTacticsButton = document.getElementById("openTacticsButton");
const openMarketButton = document.getElementById("openMarketButton");
const openLeagueButton = document.getElementById("openLeagueButton");
const simulateMatchButton = document.getElementById("simulateMatchButton");
const simulateSeasonButton = document.getElementById("simulateSeasonButton");
const startMatchButton = document.getElementById("startMatchButton");
const resetCareerButton = document.getElementById("resetCareerButton");
const accountNameInput = document.getElementById("accountNameInput");
const accountCodeInput = document.getElementById("accountCodeInput");
const loginAccountButton = document.getElementById("loginAccountButton");
const saveAccountButton = document.getElementById("saveAccountButton");
const accountStatusElement = document.getElementById("accountStatus");
const careerSlotsElement = document.getElementById("careerSlots");
const managerFirstNameInput = document.getElementById("managerFirstName");
const managerLastNameInput = document.getElementById("managerLastName");
const managerNationalityInput = document.getElementById("managerNationality");
const managerStyleSelect = document.getElementById("managerStyle");
const managerClubSelect = document.getElementById("managerClub");
const managerNameElement = document.getElementById("managerName");
const managerBioElement = document.getElementById("managerBio");
const managerAvatarElement = document.getElementById("managerAvatar");
const boardTrustElement = document.getElementById("boardTrust");
const clubMoraleElement = document.getElementById("clubMorale");
const seasonWeekElement = document.getElementById("seasonWeek");
const clubBudgetElement = document.getElementById("clubBudget");
const tacticDescriptionElement = document.getElementById("tacticDescription");
const trainingReportElement = document.getElementById("trainingReport");
const squadListElement = document.getElementById("squadList");
const newsFeedElement = document.getElementById("newsFeed");
const assistantInsightElement = document.getElementById("assistantInsight");
const formationListElement = document.getElementById("formationList");
const identityListElement = document.getElementById("identityList");
const identityDescriptionElement = document.getElementById("identityDescription");
const chalkPitchElement = document.getElementById("chalkPitch");
const hubLineupPitchElement = document.getElementById("hubLineupPitch");
const lineupEditorElement = document.getElementById("lineupEditor");
const customTempoInput = document.getElementById("customTempo");
const customPassInput = document.getElementById("customPass");
const customShootInput = document.getElementById("customShoot");
const customPressInput = document.getElementById("customPress");
const customRiskInput = document.getElementById("customRisk");
const saveCustomTacticButton = document.getElementById("saveCustomTacticButton");
const customTacticSummaryElement = document.getElementById("customTacticSummary");
const keyPlayerSelect = document.getElementById("keyPlayerSelect");
const keyPlayerSummaryElement = document.getElementById("keyPlayerSummary");
const marketListElement = document.getElementById("marketList");
const budgetDisplayElement = document.getElementById("budgetDisplay");
const simScoreTitleElement = document.getElementById("simScoreTitle");
const simSummaryElement = document.getElementById("simSummary");
const simScorersElement = document.getElementById("simScorers");
const simStatsElement = document.getElementById("simStats");
const simTimelineElement = document.getElementById("simTimeline");
const seasonReportTitleElement = document.getElementById("seasonReportTitle");
const seasonSummaryTitleElement = document.getElementById("seasonSummaryTitle");
const seasonSummaryTextElement = document.getElementById("seasonSummaryText");
const seasonTableElement = document.getElementById("seasonTable");
const seasonScorersElement = document.getElementById("seasonScorers");
const seasonAssistersElement = document.getElementById("seasonAssisters");
const seasonTeamStatsElement = document.getElementById("seasonTeamStats");
const nextSeasonButton = document.getElementById("nextSeasonButton");
const playerPage = document.getElementById("playerPage");
const playerProfileTitleElement = document.getElementById("playerProfileTitle");
const playerProfileInfoElement = document.getElementById("playerProfileInfo");
const playerModelCanvas = document.getElementById("playerModelCanvas");
const playerModelCtx = playerModelCanvas.getContext("2d");
const trainingPage = document.getElementById("trainingPage");
const trainingTitleElement = document.getElementById("trainingTitle");
const trainingSummaryElement = document.getElementById("trainingSummary");
const trainingGainsElement = document.getElementById("trainingGains");
const trainingMoodElement = document.getElementById("trainingMood");
const trainingTimelineElement = document.getElementById("trainingTimeline");
const leaguePage = document.getElementById("leaguePage");
const leagueTableElement = document.getElementById("leagueTable");
const fixtureListElement = document.getElementById("fixtureList");
const trophyCardElement = document.getElementById("trophyCard");
const matchManagerNameElement = document.getElementById("matchManagerName");
const matchTacticNameElement = document.getElementById("matchTacticName");
const matchInstructionElement = document.getElementById("matchInstruction");
const matchChoice = document.getElementById("matchChoice");
const startClassicMatchButton = document.getElementById("startClassicMatchButton");
const startDotsMatchButton = document.getElementById("startDotsMatchButton");
const cancelMatchChoiceButton = document.getElementById("cancelMatchChoiceButton");

const field = {
  width: 2300,
  height: 980,
  goalWidth: 300,
  goalDepth: 22,
};

const keys = {};
const gamepadButtons = {};
const keyBindings = {
  up: "z",
  left: "q",
  down: "s",
  right: "d",
  pass: "j",
  shoot: "k",
  tackle: "i",
  dribble: "o",
  switch: "l",
};
const gamepadBindings = {
  pass: 0,
  shoot: 3,
  tackle: 2,
  switch: 5,
  dribble: 1,
};
const gamepadButtonOptions = [0, 1, 2, 3, 4, 5, 6, 7];
const gamepadButtonNames = {
  0: "A / Croix",
  1: "B / Rond",
  2: "X / Carré",
  3: "Y / Triangle",
  4: "LB / L1",
  5: "RB / R1",
  6: "LT / L2",
  7: "RT / R2",
};
const matchLength = 60;
const tackleRange = 48;
const tackleCooldownTime = 0.65;
const redTackleChance = 0.22;
const assistedPassRange = 650;
const assistedPassCatchRange = 26;
const ballOwnerSpeedBonus = 1.16;
const dribbleCooldownTime = 0.9;

const formations = {
  "1-2-1": {
    label: "1-2-1",
    description: "Gardien, sentinelle, deux relayeurs et un attaquant. Base stable en 5v5.",
    positions: [
      { x: 0.055, y: 0.5, role: "GB" },
      { x: 0.22, y: 0.5, role: "DC" },
      { x: 0.39, y: 0.27, role: "MC" },
      { x: 0.39, y: 0.73, role: "MC" },
      { x: 0.64, y: 0.5, role: "BU" },
    ],
  },
  "2-1-1": {
    label: "2-1-1",
    description: "Deux defenseurs protegent le gardien, un createur lance un finisseur.",
    positions: [
      { x: 0.055, y: 0.5, role: "GB" },
      { x: 0.2, y: 0.27, role: "DC" },
      { x: 0.2, y: 0.73, role: "DC" },
      { x: 0.44, y: 0.5, role: "MC" },
      { x: 0.64, y: 0.5, role: "BU" },
    ],
  },
  "1-1-2": {
    label: "1-1-2",
    description: "Un relais au milieu et deux appels profonds pour jouer plus offensif.",
    positions: [
      { x: 0.055, y: 0.5, role: "GB" },
      { x: 0.22, y: 0.5, role: "DC" },
      { x: 0.43, y: 0.5, role: "MC" },
      { x: 0.61, y: 0.27, role: "AG" },
      { x: 0.61, y: 0.73, role: "AD" },
    ],
  },
  "2-2": {
    label: "2-2",
    description: "Deux lignes nettes : facile a lire, solide pour gerer un score.",
    positions: [
      { x: 0.055, y: 0.5, role: "GB" },
      { x: 0.21, y: 0.28, role: "DC" },
      { x: 0.21, y: 0.72, role: "DC" },
      { x: 0.54, y: 0.29, role: "AC" },
      { x: 0.54, y: 0.71, role: "AC" },
    ],
  },
};

const clubIdentities = {
  mastery: {
    label: "Maitrise",
    description: "Barcha cherche la passe juste, garde le ballon et fatigue l'adversaire.",
    passBonus: 7,
    attackBonus: 1,
    defenseBonus: 2,
  },
  vertical: {
    label: "Verticalite",
    description: "Le club attaque vite, prend la profondeur et accepte plus de risques.",
    passBonus: 2,
    attackBonus: 7,
    defenseBonus: 0,
  },
  intensity: {
    label: "Intensite",
    description: "Pressing, duels, recuperations. Le match doit devenir inconfortable.",
    passBonus: 0,
    attackBonus: 2,
    defenseBonus: 7,
  },
};

const tacticProfiles = {
  balanced: {
    label: "Equilibre",
    description: "Bloc compact, decisions variees, risque moyen.",
    tempo: 1,
    passBias: 0.5,
    shootBias: 0.48,
    dribbleBias: 0.2,
    press: 0.82,
    support: 0.94,
    risk: 0.45,
  },
  possession: {
    label: "Possession",
    description: "Passes courtes, soutien proche, controle du rythme.",
    tempo: 0.9,
    passBias: 0.78,
    shootBias: 0.34,
    dribbleBias: 0.12,
    press: 0.72,
    support: 1.08,
    risk: 0.28,
  },
  pressing: {
    label: "Pressing",
    description: "Recuperation rapide, bloc haut, plus d'energie depensee.",
    tempo: 1.1,
    passBias: 0.48,
    shootBias: 0.45,
    dribbleBias: 0.22,
    press: 1.18,
    support: 0.95,
    risk: 0.55,
  },
  counter: {
    label: "Contre",
    description: "Bloc prudent, attaques rapides des la recuperation.",
    tempo: 1.2,
    passBias: 0.42,
    shootBias: 0.52,
    dribbleBias: 0.28,
    press: 0.68,
    support: 0.86,
    risk: 0.62,
  },
  attack: {
    label: "Attaque",
    description: "Plus d'appels vers le but, tirs plus rapides.",
    tempo: 1.18,
    passBias: 0.45,
    shootBias: 0.74,
    dribbleBias: 0.26,
    press: 0.96,
    support: 1.18,
    risk: 0.7,
  },
  defense: {
    label: "Bloc bas",
    description: "Protection du but, patience et sorties courtes.",
    tempo: 0.82,
    passBias: 0.6,
    shootBias: 0.26,
    dribbleBias: 0.08,
    press: 0.52,
    support: 0.76,
    risk: 0.18,
  },
};

const clubDatabase = {
  barcha: {
    label: "Barcha",
    short: "Barcha",
    kit: "split",
    primary: "#6d1028",
    secondary: "#071a3f",
    trim: "#22d3ee",
    shorts: "#050b18",
    socks: "#22d3ee",
    goalkeeperKit: "#f97316",
    strength: 76,
    squad: [
      { id: "barcha-yamine", first: "Yamine", last: "Lamal", name: "Yamine Lamal", age: 18, position: "AD", role: "ATT", value: 42, skin: "#b87546", hair: "#facc15", hairStyle: "blond", style: "ailier flow", attack: 81, pass: 76, defense: 51, flair: 90, fitness: 79, morale: 72, wish: "Veut etre titulaire au prochain match." },
      { id: "barcha-rafinia", first: "Rafinia", last: "", name: "Rafinia", age: 28, position: "AG", role: "ATT", value: 30, skin: "#c68b5b", hair: "#141014", hairStyle: "braids", style: "percussion", attack: 76, pass: 72, defense: 62, flair: 82, fitness: 82, morale: 70, wish: "Demande un role plus offensif." },
      { id: "barcha-paidri", first: "Paidri", last: "", name: "Paidri", age: 23, position: "MC", role: "MID", value: 34, skin: "#d8a071", hair: "#332018", hairStyle: "short", style: "metronome", attack: 66, pass: 86, defense: 68, flair: 76, fitness: 75, morale: 69, wish: "Veut toucher plus de ballons." },
      { id: "barcha-lewa", first: "Lewa", last: "", name: "Lewa", age: 37, position: "BU", role: "ATT", value: 22, skin: "#d8a071", hair: "#1f130c", hairStyle: "short", style: "finisseur", attack: 88, pass: 74, defense: 45, flair: 69, fitness: 70, morale: 68, wish: "Veut finir les actions dans la surface." },
      { id: "barcha-garcia", first: "Garcia", last: "", name: "Garcia", age: 24, position: "GB", role: "GK", isGoalkeeper: true, value: 18, skin: "#d0a06f", hair: "#21140f", hairStyle: "short", style: "gardien reflexe", attack: 35, pass: 68, defense: 74, flair: 45, fitness: 78, goalkeeping: 76, morale: 70, wish: "Veut garder sa cage inviolee." },
    ],
  },
  royal: {
    label: "Royal Madride",
    short: "Madride",
    kit: "white",
    primary: "#f8fafc",
    secondary: "#cbd5e1",
    trim: "#111827",
    shorts: "#f8fafc",
    socks: "#111827",
    goalkeeperKit: "#22c55e",
    strength: 77,
    squad: [
      { id: "royal-mbapai", first: "Mbapai", last: "", name: "Mbapai", age: 27, position: "BU", role: "ATT", value: 45, skin: "#c68b5b", hair: "#0f172a", hairStyle: "short", style: "vitesse", attack: 85, pass: 69, defense: 52, flair: 82, fitness: 86, morale: 71, wish: "Veut etre servi dans la profondeur." },
      { id: "royal-vinni", first: "Vinni", last: "", name: "Vinni", age: 25, position: "AG", role: "ATT", value: 40, skin: "#5a321f", hair: "#05070b", hairStyle: "short", style: "dribble", attack: 81, pass: 70, defense: 55, flair: 88, fitness: 82, morale: 72, wish: "Veut provoquer plus souvent." },
      { id: "royal-guleur", first: "Guleur", last: "", name: "Guleur", age: 21, position: "MOC", role: "MID", value: 25, skin: "#d1a079", hair: "#1b120c", hairStyle: "short", style: "createur", attack: 69, pass: 82, defense: 61, flair: 79, fitness: 74, morale: 68, wish: "Veut commencer le match." },
      { id: "royal-bellingo", first: "Jude", last: "Bellingo", name: "Jude Bellingo", age: 23, position: "MC", role: "MID", value: 42, skin: "#6b3f28", hair: "#101015", hairStyle: "short", style: "leader", attack: 82, pass: 84, defense: 77, flair: 78, fitness: 88, morale: 73, wish: "Veut un match intense." },
      { id: "royal-curtua", first: "Curtua", last: "", name: "Curtua", age: 33, position: "GB", role: "GK", isGoalkeeper: true, value: 20, skin: "#d9a77d", hair: "#2a1a12", hairStyle: "short", style: "gardien geant", attack: 30, pass: 62, defense: 78, flair: 35, fitness: 72, goalkeeping: 82, morale: 70, wish: "Veut rassurer sa defense." },
    ],
  },
  paris: {
    label: "Paris SG",
    short: "Paris",
    kit: "eiffel",
    primary: "#071a3f",
    secondary: "#0b2a5f",
    trim: "#ef4444",
    shorts: "#07111f",
    socks: "#ef4444",
    goalkeeperKit: "#9ca3af",
    strength: 75,
    squad: [
      { id: "paris-dembaile", first: "Dembaile", last: "", name: "Dembaile", age: 29, position: "AD", role: "ATT", value: 34, skin: "#7a4b2f", hair: "#09090b", hairStyle: "short", style: "imprevisible", attack: 80, pass: 76, defense: 50, flair: 88, fitness: 78, morale: 71, wish: "Veut jouer libre entre les lignes." },
      { id: "paris-kvarado", first: "Kvarado", last: "", name: "Kvarado", age: 25, position: "AG", role: "ATT", value: 35, skin: "#d19a70", hair: "#2b1b14", hairStyle: "short", style: "ailier", attack: 82, pass: 76, defense: 50, flair: 89, fitness: 81, morale: 70, wish: "Veut recevoir cote gauche." },
      { id: "paris-viti", first: "Viti", last: "", name: "Viti", age: 25, position: "MC", role: "MID", value: 27, skin: "#d4a078", hair: "#4c2d1f", hairStyle: "short", style: "tempo", attack: 68, pass: 84, defense: 72, flair: 72, fitness: 82, morale: 69, wish: "Veut organiser le jeu." },
      { id: "paris-douai", first: "Douai", last: "", name: "Douai", age: 21, position: "MOC", role: "MID", value: 23, skin: "#8b5637", hair: "#111111", hairStyle: "short", style: "talent", attack: 73, pass: 78, defense: 56, flair: 83, fitness: 77, morale: 70, wish: "Veut prouver qu'il merite sa place." },
      { id: "paris-safono", first: "Safono", last: "", name: "Safono", age: 26, position: "GB", role: "GK", isGoalkeeper: true, value: 16, skin: "#4e2d1d", hair: "#09090b", hairStyle: "short", style: "gardien explosif", attack: 28, pass: 59, defense: 75, flair: 40, fitness: 80, goalkeeping: 75, morale: 68, wish: "Veut un match calme." },
    ],
  },
  mancity: {
    label: "Mancity",
    short: "Mancity",
    kit: "plain",
    primary: "#7dd3fc",
    secondary: "#bae6fd",
    trim: "#0f172a",
    shorts: "#f8fafc",
    socks: "#7dd3fc",
    goalkeeperKit: "#f97316",
    strength: 76,
    squad: [
      { id: "mancity-alande", first: "Alande", last: "", name: "Alande", age: 25, position: "BU", role: "ATT", value: 44, skin: "#e0b184", hair: "#f5d36b", hairStyle: "blond", style: "puissance", attack: 90, pass: 62, defense: 51, flair: 70, fitness: 90, morale: 72, wish: "Veut frapper plus vite." },
      { id: "mancity-chairki", first: "Chairki", last: "", name: "Chairki", age: 22, position: "MOC", role: "MID", value: 28, skin: "#bc7d4f", hair: "#15100d", hairStyle: "short", style: "artiste", attack: 77, pass: 81, defense: 49, flair: 88, fitness: 76, morale: 69, wish: "Veut un role creatif." },
      { id: "mancity-docou", first: "Docou", last: "", name: "Docou", age: 23, position: "AD", role: "ATT", value: 27, skin: "#4d2d1d", hair: "#07070a", hairStyle: "short", style: "vitesse", attack: 76, pass: 70, defense: 56, flair: 84, fitness: 87, morale: 68, wish: "Veut attaquer les espaces." },
      { id: "mancity-phoden", first: "Phoden", last: "", name: "Phoden", age: 25, position: "MOC", role: "MID", value: 36, skin: "#dca77c", hair: "#8b5e35", hairStyle: "short", style: "entre lignes", attack: 83, pass: 85, defense: 58, flair: 88, fitness: 82, morale: 72, wish: "Veut jouer pres de l'attaquant." },
      { id: "mancity-gigio", first: "Gigio", last: "", name: "Gigio", age: 27, position: "GB", role: "GK", isGoalkeeper: true, value: 18, skin: "#d4a078", hair: "#17100f", hairStyle: "short", style: "gardien moderne", attack: 25, pass: 70, defense: 76, flair: 42, fitness: 78, goalkeeping: 79, morale: 70, wish: "Veut relancer court." },
    ],
  },
  gunners: {
    label: "Gunners",
    short: "Gunners",
    kit: "redwhite",
    primary: "#dc2626",
    secondary: "#ef4444",
    trim: "#f8fafc",
    shorts: "#f8fafc",
    socks: "#dc2626",
    goalkeeperKit: "#22c55e",
    strength: 74,
    squad: [
      { id: "gunners-rize", first: "Rize", last: "", name: "Rize", age: 26, position: "MDC", role: "MID", value: 31, skin: "#d4a078", hair: "#5a3825", hairStyle: "short", style: "recuperateur", attack: 70, pass: 82, defense: 88, flair: 66, fitness: 88, morale: 70, wish: "Veut proteger la defense." },
      { id: "gunners-audegaard", first: "Audegaard", last: "", name: "Audegaard", age: 27, position: "MC", role: "MID", value: 34, skin: "#d8a071", hair: "#c59154", hairStyle: "short", style: "capitaine", attack: 80, pass: 90, defense: 63, flair: 84, fitness: 78, morale: 73, wish: "Veut dicter le tempo." },
      { id: "gunners-sako", first: "Sako", last: "", name: "Sako", age: 24, position: "AD", role: "ATT", value: 36, skin: "#4a2a1b", hair: "#05070b", hairStyle: "short", style: "ailier", attack: 82, pass: 78, defense: 62, flair: 84, fitness: 83, morale: 72, wish: "Veut recevoir cote droit." },
      { id: "gunners-timbrer", first: "Timbrer", last: "", name: "Timbrer", age: 24, position: "DC", role: "DEF", value: 24, skin: "#6b3f28", hair: "#111111", hairStyle: "short", style: "defenseur", attack: 55, pass: 72, defense: 83, flair: 58, fitness: 86, morale: 69, wish: "Veut verrouiller son couloir." },
      { id: "gunners-rayo", first: "Rayo", last: "", name: "Rayo", age: 29, position: "GB", role: "GK", isGoalkeeper: true, value: 15, skin: "#d2a072", hair: "#20120d", hairStyle: "short", style: "gardien calme", attack: 26, pass: 64, defense: 74, flair: 38, fitness: 78, goalkeeping: 74, morale: 69, wish: "Veut une defense plus compacte." },
    ],
  },
  milano: {
    label: "Milano",
    short: "Milano",
    kit: "milan",
    primary: "#dc2626",
    secondary: "#111827",
    trim: "#f8fafc",
    shorts: "#111827",
    socks: "#dc2626",
    goalkeeperKit: "#9ca3af",
    strength: 73,
    squad: [
      { id: "milano-leaos", first: "Leaos", last: "", name: "Leaos", age: 26, position: "AG", role: "ATT", value: 34, skin: "#3e2418", hair: "#15100d", hairStyle: "braids", style: "ailier", attack: 84, pass: 70, defense: 50, flair: 88, fitness: 84, morale: 70, wish: "Veut un duel permanent." },
      { id: "milano-puli", first: "Puli", last: "", name: "Puli", age: 27, position: "AD", role: "ATT", value: 26, skin: "#d4a078", hair: "#4c2d1f", hairStyle: "short", style: "mobile", attack: 78, pass: 74, defense: 58, flair: 81, fitness: 81, morale: 69, wish: "Veut combiner en vitesse." },
      { id: "milano-rabiau", first: "Rabiau", last: "", name: "Rabiau", age: 30, position: "MC", role: "MID", value: 22, skin: "#d8a071", hair: "#22140d", hairStyle: "short", style: "box to box", attack: 72, pass: 79, defense: 76, flair: 69, fitness: 83, morale: 68, wish: "Veut stabiliser le milieu." },
      { id: "milano-faufana", first: "Faufana", last: "", name: "Faufana", age: 26, position: "MDC", role: "MID", value: 21, skin: "#5f3924", hair: "#08090c", hairStyle: "short", style: "impact", attack: 66, pass: 75, defense: 80, flair: 62, fitness: 86, morale: 69, wish: "Veut gagner plus de duels." },
      { id: "milano-megnan", first: "Megnan", last: "", name: "Megnan", age: 30, position: "GB", role: "GK", isGoalkeeper: true, value: 18, skin: "#5b3522", hair: "#08090c", hairStyle: "short", style: "gardien leader", attack: 28, pass: 66, defense: 79, flair: 39, fitness: 80, goalkeeping: 80, morale: 71, wish: "Veut parler plus a sa defense." },
    ],
  },
};

const transferMarket = [
  { id: "market-haalandr", first: "Erling", last: "Haalandr", name: "Erling Haalandr", age: 25, position: "BU", value: 36, skin: "#e0b184", hair: "#f5d36b", hairStyle: "blond", style: "power", attack: 91, pass: 62, defense: 51, flair: 70, fitness: 89, morale: 70, wish: "Veut devenir la star de l'equipe." },
  { id: "market-musialo", first: "Jamal", last: "Musialo", name: "Jamal Musialo", age: 22, position: "MOC", value: 32, skin: "#9b5f3b", hair: "#16100f", hairStyle: "short", style: "artist", attack: 85, pass: 84, defense: 55, flair: 91, fitness: 80, morale: 70, wish: "Veut jouer libre." },
  { id: "market-kaneh", first: "Harry", last: "Kaneh", name: "Harry Kaneh", age: 32, position: "BU", value: 25, skin: "#d9a57c", hair: "#8a4f29", hairStyle: "short", style: "finisher", attack: 89, pass: 80, defense: 50, flair: 68, fitness: 78, morale: 70, wish: "Veut etre capitaine d'attaque." },
  { id: "market-saloh", first: "Mo", last: "Saloh", name: "Mo Saloh", age: 33, position: "AD", value: 22, skin: "#9c6139", hair: "#15100d", hairStyle: "short", style: "wing", attack: 86, pass: 77, defense: 54, flair: 85, fitness: 81, morale: 70, wish: "Veut rester haut." },
  { id: "market-goaz", first: "Rodry", last: "Goaz", name: "Rodry Goaz", age: 24, position: "AG", value: 24, skin: "#9f6138", hair: "#0b0b0c", hairStyle: "short", style: "wing", attack: 83, pass: 77, defense: 55, flair: 86, fitness: 80, morale: 70, wish: "Veut attaquer la surface." },
  { id: "market-martinezzi", first: "Lautaro", last: "Martinezzi", name: "Lautaro Martinezzi", age: 28, position: "BU", value: 26, skin: "#c98b5d", hair: "#17100f", hairStyle: "short", style: "finisher", attack: 87, pass: 70, defense: 62, flair: 76, fitness: 84, morale: 70, wish: "Veut presser les defenseurs." },
  { id: "market-pedroa", first: "Joao", last: "Pedroa", name: "Joao Pedroa", age: 24, position: "MOC", value: 17, skin: "#8a4f2f", hair: "#0b0b0c", hairStyle: "short", style: "artist", attack: 78, pass: 76, defense: 52, flair: 83, fitness: 78, morale: 70, wish: "Veut progresser." },
  { id: "market-valverd", first: "Fede", last: "Valverd", name: "Fede Valverd", age: 27, position: "MC", value: 28, skin: "#c98d62", hair: "#261914", hairStyle: "short", style: "engine", attack: 79, pass: 82, defense: 80, flair: 75, fitness: 92, morale: 70, wish: "Veut courir partout." },
  { id: "market-wirz", first: "Florian", last: "Wirz", name: "Florian Wirz", age: 22, position: "MOC", value: 31, skin: "#d8a071", hair: "#6b3f24", hairStyle: "short", style: "playmaker", attack: 84, pass: 89, defense: 55, flair: 90, fitness: 79, morale: 70, wish: "Veut porter le jeu." },
  { id: "market-grizo", first: "Antoine", last: "Grizo", name: "Antoine Grizo", age: 34, position: "MOC", value: 16, skin: "#d6a171", hair: "#caa55e", hairStyle: "short", style: "playmaker", attack: 82, pass: 86, defense: 70, flair: 80, fitness: 75, morale: 70, wish: "Veut aider les jeunes." },
  { id: "market-sonny", first: "Heung", last: "Sonny", name: "Heung Sonny", age: 33, position: "AG", value: 18, skin: "#d3a176", hair: "#101010", hairStyle: "short", style: "wing", attack: 85, pass: 74, defense: 54, flair: 82, fitness: 78, morale: 70, wish: "Veut finir les contres." },
  { id: "market-osimeno", first: "Victor", last: "Osimeno", name: "Victor Osimeno", age: 27, position: "BU", value: 30, skin: "#372116", hair: "#f3e86b", hairStyle: "blond", style: "power", attack: 88, pass: 61, defense: 55, flair: 73, fitness: 89, morale: 70, wish: "Veut attaquer les centres." },
  { id: "market-willio", first: "Nico", last: "Willio", name: "Nico Willio", age: 23, position: "AG", value: 20, skin: "#4d2d1d", hair: "#08090c", hairStyle: "short", style: "wing", attack: 81, pass: 72, defense: 55, flair: 87, fitness: 86, morale: 70, wish: "Veut du temps de jeu." },
  { id: "market-kimmio", first: "Joshua", last: "Kimmio", name: "Joshua Kimmio", age: 31, position: "MDC", value: 19, skin: "#d4a078", hair: "#5a3825", hairStyle: "short", style: "leader", attack: 71, pass: 87, defense: 82, flair: 70, fitness: 78, morale: 70, wish: "Veut organiser l'equipe." },
  { id: "market-debruino", first: "Kevin", last: "De Bruino", name: "Kevin De Bruino", age: 35, position: "MC", value: 18, skin: "#d8a071", hair: "#c77f44", hairStyle: "short", style: "passeur", attack: 82, pass: 92, defense: 58, flair: 84, fitness: 70, morale: 70, wish: "Veut gerer son temps de jeu." },
  { id: "market-virjilio", first: "Virgil", last: "Virjilio", name: "Virgil Virjilio", age: 34, position: "DC", value: 17, skin: "#8a5437", hair: "#15100d", hairStyle: "braids", style: "defender", attack: 56, pass: 73, defense: 88, flair: 58, fitness: 76, morale: 70, wish: "Veut commander le bloc." },
  { id: "market-theo", first: "Theo", last: "Hernan", name: "Theo Hernan", age: 28, position: "DG", value: 18, skin: "#c98d62", hair: "#08090c", hairStyle: "short", style: "runner", attack: 74, pass: 75, defense: 73, flair: 77, fitness: 89, morale: 70, wish: "Veut monter plus souvent." },
  { id: "market-bruno", first: "Bruno", last: "Ferna", name: "Bruno Ferna", age: 31, position: "MC", value: 18, skin: "#c98d62", hair: "#20120d", hairStyle: "short", style: "creator", attack: 79, pass: 87, defense: 65, flair: 82, fitness: 80, morale: 70, wish: "Veut prendre les responsabilites." },
  { id: "market-jokers", first: "Victor", last: "Jokers", name: "Victor Jokers", age: 27, position: "BU", value: 27, skin: "#d6a171", hair: "#17100f", hairStyle: "short", style: "finisher", attack: 87, pass: 73, defense: 51, flair: 78, fitness: 84, morale: 70, wish: "Veut etre titulaire." },
  { id: "market-alissono", first: "Alisson", last: "Alissono", name: "Alisson Alissono", age: 33, position: "GB", value: 15, skin: "#d4a078", hair: "#3a2418", hairStyle: "short", style: "goalkeeper", attack: 25, pass: 67, defense: 78, flair: 38, fitness: 76, goalkeeping: 80, isGoalkeeper: true, morale: 70, wish: "Veut une defense haute." },
  { id: "market-edersao", first: "Eder", last: "Edersao", name: "Eder Edersao", age: 32, position: "GB", value: 14, skin: "#9b5f3b", hair: "#121212", hairStyle: "short", style: "goalkeeper", attack: 26, pass: 78, defense: 74, flair: 42, fitness: 77, goalkeeping: 76, isGoalkeeper: true, morale: 70, wish: "Veut relancer court." },
  { id: "market-oblako", first: "Jan", last: "Oblako", name: "Jan Oblako", age: 33, position: "GB", value: 13, skin: "#d8a071", hair: "#2a1a12", hairStyle: "short", style: "goalkeeper", attack: 22, pass: 58, defense: 80, flair: 35, fitness: 72, goalkeeping: 81, isGoalkeeper: true, morale: 70, wish: "Veut subir moins de tirs." },
  { id: "market-sommerio", first: "Yann", last: "Sommerio", name: "Yann Sommerio", age: 37, position: "GB", value: 9, skin: "#d4a078", hair: "#5a3825", hairStyle: "short", style: "goalkeeper", attack: 21, pass: 66, defense: 75, flair: 36, fitness: 67, goalkeeping: 76, isGoalkeeper: true, morale: 70, wish: "Veut encadrer le vestiaire." },
  { id: "market-mainano", first: "Andre", last: "Mainano", name: "Andre Mainano", age: 29, position: "GB", value: 12, skin: "#4f2f1f", hair: "#08090c", hairStyle: "short", style: "goalkeeper", attack: 24, pass: 61, defense: 76, flair: 39, fitness: 78, goalkeeping: 77, isGoalkeeper: true, morale: 70, wish: "Veut jouer le prochain match." },
  { id: "market-livako", first: "Domi", last: "Livako", name: "Domi Livako", age: 31, position: "GB", value: 10, skin: "#d0a06f", hair: "#22140d", hairStyle: "short", style: "goalkeeper", attack: 23, pass: 60, defense: 74, flair: 36, fitness: 76, goalkeeping: 75, isGoalkeeper: true, morale: 70, wish: "Veut briller en coupe." },
];

let controlledIndex = 0;
let scoreBlue = 0;
let scoreRed = 0;
let timeLeft = matchLength;
let lastTime = performance.now();
let goalPause = 0;
let gameStarted = false;
let feedbackMessage = "";
let feedbackTimer = 0;
let controlMode = "keyboard";
let waitingForBinding = null;
let activeGamepadIndex = null;
let controllerFocusIndex = 0;
let menuNavCooldown = 0;
let activeAccountName = localStorage.getItem("elevenManagerActiveAccount") || "";
let deferredInstallPrompt = null;
let visualTime = 0;
let audioContext = null;
let matchResolved = false;
let matchRenderMode = "players";

const pitchLimits = {
  fieldPlayerGoalBuffer: 235,
  earlyShotDistance: 620,
};

const coachBoost = {
  timer: 0,
  tactic: "balanced",
};

const careerState = {
  manager: {
    firstName: "Gabin",
    lastName: "Nova",
    nationality: "France",
    style: "analyste",
  },
  week: 1,
  seasonNumber: 1,
  boardTrust: 62,
  clubMorale: 66,
  budget: 85,
  club: "barcha",
  opponentClub: "royal",
  tactic: "balanced",
  formation: "1-2-1",
  identity: "mastery",
  squad: [],
  lineup: [],
  keyPlayerId: "",
  customTactic: {
    label: "Tactique Perso",
    description: "Plan fabrique par le manager.",
    tempo: 1.05,
    passBias: 0.55,
    shootBias: 0.7,
    dribbleBias: 0.2,
    press: 0.85,
    support: 1,
    risk: 0.55,
  },
  league: null,
  trainingAvailable: true,
  rivalryMission: null,
  objective: null,
  lastSimulation: null,
  lastSeasonReport: null,
  seasonReadyForNext: false,
  lastTraining: "Aucune seance",
  matchInstruction: "Lecture du match",
  news: ["Le staff attend ton premier plan de jeu."],
};

const visualEffects = [];
const flowState = {
  team: null,
  value: 0,
  messageTimer: 0,
  activeTeam: null,
  activeTimer: 0,
};

const ball = {
  x: field.width / 2,
  y: field.height / 2,
  z: 0,
  vx: 0,
  vy: 0,
  vz: 0,
  radius: 8,
  owner: null,
  lastKicker: null,
  pickupCooldown: 0,
  passTarget: null,
  passReceiver: null,
  passInterceptor: null,
  trail: [],
};

function formationPosition(team, role) {
  const formation = formations[team === "blue" ? careerState.formation : "1-2-1"] || formations["1-2-1"];
  const point = formation.positions[role] || formation.positions[0];
  const mirrorX = team === "blue" ? point.x : 1 - point.x;
  return {
    x: field.width * mirrorX,
    y: field.height * point.y,
  };
}

const blueTeam = [];
const redTeam = [];

function createPlayer(team, x, y, role, playerData) {
  const record = typeof playerData === "string" ? findPlayerRecordByName(playerData) : playerData;
  const name = record?.name || playerData || "Joueur";
  return {
    team,
    name,
    id: record?.id || `${team}-${role}-${name}`,
    first: record?.first || name,
    last: record?.last || "",
    clubId: team === "blue" ? careerState.club : careerState.opponentClub,
    position: record?.position || "MC",
    isGoalkeeper: !!record?.isGoalkeeper || record?.role === "GK" || record?.position === "GB",
    x,
    y,
    vx: 0,
    vy: 0,
    radius: record?.isGoalkeeper ? 16 : 15,
    speed: record?.isGoalkeeper ? 120 : team === "blue" ? 140 : 136,
    skills: getInitialSkills(record || name, team, role),
    role,
    decisionTimer: randomBetween(0.3, 1.2),
    tackleCooldown: 0,
    tackleFlash: 0,
    dribbleCooldown: 0,
    dribbleFlash: 0,
    walkPhase: 0,
    facing: team === "blue" ? 1 : -1,
    aimX: team === "blue" ? 1 : -1,
    aimY: 0,
    renderX: x,
    renderY: y,
    rotation: 0,
    kickFlash: 0,
    passFlash: 0,
    longShotFlash: 0,
    diveFlash: 0,
    diveDir: 1,
    leanFlash: 0,
    specialDribbleFlash: 0,
  };
}

function getInitialSkills(playerData, team, role) {
  if (playerData && typeof playerData === "object") {
    return {
      attack: playerData.attack || 60,
      pass: playerData.pass || 60,
      defense: playerData.defense || 60,
      flair: playerData.flair || 58,
      fitness: playerData.fitness || 76,
      morale: playerData.morale || 68,
      goalkeeping: playerData.goalkeeping || (playerData.isGoalkeeper ? 70 : 35),
      role,
    };
  }

  const name = playerData;
  const base = {
    attack: team === "blue" ? 68 : 66,
    pass: team === "blue" ? 68 : 65,
    defense: team === "blue" ? 62 : 64,
    flair: 58,
    fitness: 76,
    morale: 68,
    goalkeeping: 35,
  };

  const presets = {
    "Yamine Lamal": { attack: 78, pass: 74, defense: 55, flair: 84, fitness: 77, morale: 72 },
    Rafinia: { attack: 72, pass: 70, defense: 64, flair: 76, fitness: 80, morale: 70 },
    Paidri: { attack: 64, pass: 82, defense: 68, flair: 70, fitness: 74, morale: 68 },
    Mbapai: { attack: 80, pass: 66, defense: 55, flair: 78, fitness: 82, morale: 69 },
    Vinni: { attack: 75, pass: 68, defense: 58, flair: 83, fitness: 80, morale: 71 },
    Guleur: { attack: 66, pass: 78, defense: 64, flair: 74, fitness: 72, morale: 67 },
  };

  return { ...base, ...(presets[name] || {}), role };
}

function findPlayerRecordByName(name) {
  return Object.values(clubDatabase)
    .flatMap((club) => club.squad)
    .concat(transferMarket)
    .find((player) => player.name === name || `${player.first} ${player.last}`.trim() === name) || null;
}

function allPlayers() {
  return [...blueTeam, ...redTeam];
}

function getClub(clubId = careerState.club) {
  return clubDatabase[clubId] || clubDatabase.barcha;
}

function getCurrentOpponentId() {
  const nextFixture = getNextUserFixture?.();
  if (nextFixture) return nextFixture.home === careerState.club ? nextFixture.away : nextFixture.home;
  if (careerState.opponentClub && careerState.opponentClub !== careerState.club) return careerState.opponentClub;
  return Object.keys(clubDatabase).find((id) => id !== careerState.club) || "royal";
}

function getManagedPlayers() {
  const clubPlayers = getClub().squad;
  const recruits = careerState.squad
    .map((id) => transferMarket.find((player) => player.id === id))
    .filter(Boolean);
  return [...clubPlayers, ...recruits];
}

function getDefaultLineup(players = getManagedPlayers()) {
  const formation = formations[careerState.formation] || formations["1-2-1"];
  const used = new Set();
  return formation.positions.map((slot) => {
    const wantsGoalkeeper = slot.role === "GB";
    const preferred = players.find((player) => !used.has(player.id) && !!player.isGoalkeeper === wantsGoalkeeper)
      || players.find((player) => !used.has(player.id));
    if (preferred) used.add(preferred.id);
    return preferred?.id || "";
  });
}

function ensureLineup() {
  const players = getManagedPlayers();
  const validIds = new Set(players.map((player) => player.id));
  const formation = formations[careerState.formation] || formations["1-2-1"];
  const next = Array.isArray(careerState.lineup) ? careerState.lineup.slice(0, formation.positions.length) : [];
  const used = new Set();

  for (let i = 0; i < formation.positions.length; i += 1) {
    const id = next[i];
    const record = players.find((player) => player.id === id);
    const needsGoalkeeper = formation.positions[i].role === "GB";
    if (!record || used.has(id) || !!record.isGoalkeeper !== needsGoalkeeper) {
      next[i] = "";
    } else {
      used.add(id);
    }
  }

  const fallback = getDefaultLineup(players);
  for (let i = 0; i < formation.positions.length; i += 1) {
    if (!next[i]) {
      const replacement = fallback.find((id) => id && !used.has(id));
      next[i] = replacement || "";
      if (replacement) used.add(replacement);
    }
  }

  careerState.lineup = next;
  if (!careerState.keyPlayerId || !players.some((player) => player.id === careerState.keyPlayerId && !player.isGoalkeeper)) {
    careerState.keyPlayerId = players.find((player) => !player.isGoalkeeper)?.id || "";
  }
}

function getStartingPlayers() {
  ensureLineup();
  const players = getManagedPlayers();
  return careerState.lineup
    .map((id) => players.find((player) => player.id === id))
    .filter(Boolean)
    .slice(0, 5);
}

function getOpponentPlayers() {
  const opponent = getClub(careerState.opponentClub || getCurrentOpponentId());
  return opponent.squad.slice(0, 5);
}

function syncRuntimeTeams() {
  careerState.opponentClub = getCurrentOpponentId();
  setRuntimeTeam(blueTeam, "blue", getStartingPlayers());
  setRuntimeTeam(redTeam, "red", getOpponentPlayers());
  controlledIndex = Math.max(0, blueTeam.findIndex((player) => !player.isGoalkeeper));
  if (controlledIndex < 0) controlledIndex = 0;
  updateHud();
}

function setRuntimeTeam(target, teamName, records) {
  target.length = 0;
  records.slice(0, 5).forEach((record, index) => {
    const spot = formationPosition(teamName, index);
    target.push(createPlayer(teamName, spot.x, spot.y, index, record));
  });
}

function resetAfterGoal(kickoffTeam = null) {
  blueTeam.forEach((player) => {
    const spot = formationPosition("blue", player.role);
    player.x = spot.x;
    player.y = spot.y;
  });

  redTeam.forEach((player) => {
    const spot = formationPosition("red", player.role);
    player.x = spot.x;
    player.y = spot.y;
  });

  allPlayers().forEach((player) => {
    player.tackleCooldown = 0;
    player.tackleFlash = 0;
    player.dribbleCooldown = 0;
    player.dribbleFlash = 0;
    player.kickFlash = 0;
    player.passFlash = 0;
    player.longShotFlash = 0;
    player.diveFlash = 0;
    player.leanFlash = 0;
    player.specialDribbleFlash = 0;
    player.renderX = player.x;
    player.renderY = player.y;
  });

  ball.x = field.width / 2;
  ball.y = field.height / 2;
  ball.z = 0;
  ball.vx = 0;
  ball.vy = 0;
  ball.vz = 0;
  ball.owner = null;
  ball.lastKicker = null;
  ball.pickupCooldown = 0;
  ball.passTarget = null;
  ball.passReceiver = null;
  ball.passInterceptor = null;
  ball.trail = [];
  visualEffects.length = 0;

  if (kickoffTeam) {
    const kickoffer = teamByName(kickoffTeam).find((player) => !player.isGoalkeeper) || teamByName(kickoffTeam)[0];
    if (!kickoffer) return;
    setKickoffShape(kickoffTeam, kickoffer);
    kickoffer.x = field.width / 2 + (kickoffTeam === "blue" ? -48 : 48);
    kickoffer.y = field.height / 2;
    kickoffer.renderX = kickoffer.x;
    kickoffer.renderY = kickoffer.y;
    kickoffer.facing = kickoffTeam === "blue" ? 1 : -1;
    ball.owner = kickoffer;
    ball.x = kickoffer.x + (kickoffTeam === "blue" ? 20 : -20);
    ball.y = kickoffer.y;
    ball.z = 0;
    showFeedback(`${teamLabel(kickoffTeam)} engage`);
  }

  goalPause = 1;
}

function setKickoffShape(kickoffTeam, kickoffer) {
  const receivingTeam = kickoffTeam === "blue" ? "red" : "blue";
  const kickoffPlayers = teamByName(kickoffTeam).filter((player) => player !== kickoffer);
  const receivingPlayers = teamByName(receivingTeam);
  const direction = attackDirection(kickoffTeam);
  const center = field.width / 2;

  kickoffPlayers.forEach((player, index) => {
    const lane = [-220, 220, -70, 70][index] || 0;
    const line = player.isGoalkeeper ? 0.08 : index < 2 ? 0.27 : 0.39;
    player.x = kickoffTeam === "blue" ? field.width * line : field.width * (1 - line);
    player.y = player.isGoalkeeper ? field.height / 2 : clamp(field.height / 2 + lane, 80, field.height - 80);
    player.renderX = player.x;
    player.renderY = player.y;
  });

  receivingPlayers.forEach((player, index) => {
    const lane = [-230, 230, -80, 80, 0][index] || 0;
    const line = player.isGoalkeeper ? 0.08 : index < 3 ? 0.22 : 0.37;
    player.x = receivingTeam === "blue" ? field.width * line : field.width * (1 - line);
    player.y = player.isGoalkeeper ? field.height / 2 : clamp(field.height / 2 + lane, 80, field.height - 80);
    if (!player.isGoalkeeper && receivingTeam === "blue") player.x = Math.min(player.x, center - 150);
    if (!player.isGoalkeeper && receivingTeam === "red") player.x = Math.max(player.x, center + 150);
    player.renderX = player.x;
    player.renderY = player.y;
    player.facing = -direction;
  });
}

function restartMatch() {
  syncRuntimeTeams();
  scoreBlue = 0;
  scoreRed = 0;
  timeLeft = matchLength;
  controlledIndex = 0;
  matchResolved = false;
  flowState.team = null;
  flowState.value = 0;
  flowState.messageTimer = 0;
  flowState.activeTeam = null;
  flowState.activeTimer = 0;
  coachBoost.timer = 0;
  resetAfterGoal("blue");
  goalPause = 0;
  gameStarted = true;
  lastTime = performance.now();
  hideOverlayPages();
  updateHud();
  updateManagerUi();
}

function gameLoop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.03);
  lastTime = now;

  updateGamepadStatus();
  update(dt);
  draw();

  requestAnimationFrame(gameLoop);
}

function update(dt) {
  if (!gameStarted) return;
  visualTime += dt;

  if (timeLeft > 0 && goalPause <= 0) {
    timeLeft = Math.max(0, timeLeft - dt);
  }

  if (goalPause > 0) {
    goalPause -= dt;
    return;
  }

  updateBlueAi(dt);
  updateRedAi(dt);
  updateBall(dt);
  updateCooldowns(dt);
  updateFlow(dt);
  updateCoachBoost(dt);
  keepPlayersInsideField();
  resolvePlayerCollisions();
  tryGoalkeeperSave();
  checkBallPickup();
  syncControlWithBlueOwner();
  checkGoal();
  if (timeLeft <= 0) finishMatch();
  updateHud();
}

function updateHumanPlayer(dt) {
  const player = blueTeam[controlledIndex];
  const movement = getPlayerInput();
  const dx = movement.x;
  const dy = movement.y;

  if (dx !== 0 || dy !== 0) {
    const length = Math.hypot(dx, dy);
    player.aimX = dx / length;
    player.aimY = dy / length;
  }

  movePlayer(player, dx, dy, dt);
}

function getPlayerInput() {
  if (controlMode === "gamepad") {
    const gamepad = getActiveGamepad();
    if (gamepad) {
      return {
        x: applyDeadZone(gamepad.axes[0] || 0),
        y: applyDeadZone(gamepad.axes[1] || 0),
      };
    }
  }

  let dx = 0;
  let dy = 0;
  if (isKeyDown("up")) dy -= 1;
  if (isKeyDown("down")) dy += 1;
  if (isKeyDown("left")) dx -= 1;
  if (isKeyDown("right")) dx += 1;

  return { x: dx, y: dy };
}

function updateBlueAi(dt) {
  blueTeam.forEach((player, index) => {
    updateAiPlayer(player, blueTeam, redTeam, dt);
  });
}

function updateRedAi(dt) {
  redTeam.forEach((player) => updateAiPlayer(player, redTeam, blueTeam, dt));
}

function updateAiPlayer(player, team, opponents, dt) {
  player.decisionTimer -= dt;

  if (player.isGoalkeeper) {
    updateGoalkeeper(player, team, opponents, dt);
    return;
  }

  if (ball.owner === player) {
    playWithBall(player, team, opponents, dt);
    return;
  }

  if (ball.owner && ball.owner.team === player.team) {
    supportAttack(player, dt);
    return;
  }

  if (ball.owner && ball.owner.team !== player.team && player.decisionTimer <= 0) {
    const tactic = getTacticProfile(player.team);
    const designatedPresser = closestPlayerToBall(team.filter((candidate) => !candidate.isGoalkeeper));
    const tackleChance = player === designatedPresser ? (0.06 + getSkill(player, "defense") / 650) * tactic.press : 0;
    if (Math.random() < tackleChance && tryTackle(player, false)) return;
    player.decisionTimer = randomBetween(0.55, 1.25);
  }

  defendOrPress(player, opponents, dt);
}

function playWithBall(player, team, opponents, dt) {
  const tactic = getTacticProfile(player.team);
  const direction = attackDirection(player.team);
  const goalX = player.team === "blue" ? field.width : 0;
  const goalY = field.height / 2;
  const distanceToGoal = Math.abs(goalX - player.x);
  const shotLineX = player.team === "blue"
    ? field.width - pitchLimits.earlyShotDistance
    : pitchLimits.earlyShotDistance;
  const nearbyOpponent = opponents
    .map((opponent) => ({ player: opponent, distance: distance(player, opponent) }))
    .sort((a, b) => a.distance - b.distance)[0];

  if (player.decisionTimer <= 0) {
    const teammate = findPassTarget(player, team);
    const pressure = nearbyOpponent ? Math.max(0, 90 - nearbyOpponent.distance) / 90 : 0;
    const supportCount = team.filter((candidate) => candidate !== player && !candidate.isGoalkeeper && distance(candidate, player) < 420).length;
    const passChance = tactic.passBias + getSkill(player, "pass") / 245 + supportCount * 0.08 + pressure * 0.16;
    const shootChance = tactic.shootBias + getSkill(player, "attack") / 390 + (330 - distanceToGoal) / 850;
    const dribbleChance = tactic.dribbleBias + getSkill(player, "flair") / 420 + pressure * 0.25;
    const roll = Math.random();

    if (canTryLongShot(player, opponents) && roll < 0.52 + getSkill(player, "attack") / 430 + tactic.shootBias * 0.22) {
      shoot(player, true);
      player.decisionTimer = randomBetween(1.05, 1.75);
      return;
    }

    if (nearbyOpponent && nearbyOpponent.distance < 78 && roll < dribbleChance && aiDribble(player, nearbyOpponent.player)) {
      player.decisionTimer = randomBetween(0.5, 1);
      return;
    }

    if (teammate && (roll < passChance || pressure > 0.42 || distanceToGoal > pitchLimits.earlyShotDistance)) {
      passToPlayer(teammate, player);
      player.decisionTimer = randomBetween(0.45, 1.05);
      return;
    }

    if (distanceToGoal < pitchLimits.earlyShotDistance && roll < shootChance + 0.52) {
      shoot(player);
      player.decisionTimer = randomBetween(0.75, 1.35);
      return;
    }

    if (isBeyondShotLine(player) || distanceToGoal < 460) {
      shoot(player);
      player.decisionTimer = randomBetween(0.75, 1.35);
      return;
    }

    player.decisionTimer = randomBetween(0.35, 0.9);
  }

  const laneOffset = roleLane(player);
  const wobble = Math.sin(performance.now() / 420 + player.role * 1.7) * (30 + tactic.risk * 28);
  const carryTarget = player.x + direction * (105 + tactic.tempo * 52);
  const targetX = player.team === "blue" ? Math.min(carryTarget, shotLineX) : Math.max(carryTarget, shotLineX);
  moveToward(player, targetX, goalY + laneOffset * tactic.support + wobble, dt, tactic.tempo);
}

function supportAttack(player, dt) {
  if (player.isGoalkeeper) {
    updateGoalkeeper(player, teamByName(player.team), player.team === "blue" ? redTeam : blueTeam, dt);
    return;
  }

  const tactic = getTacticProfile(player.team);
  const direction = attackDirection(player.team);
  const goalX = player.team === "blue" ? field.width - 55 : 55;
  const offsetY = roleLane(player);

  const home = formationPosition(player.team, player.role);
  const shouldDrop = player.role === 2 && (tactic.passBias > 0.55 || Math.abs(ball.x - goalX) > 320);
  const runDepth = tactic.risk > 0.55 ? 360 : 260;
  const attackLimit = player.team === "blue"
    ? field.width - pitchLimits.earlyShotDistance * 0.72
    : pitchLimits.earlyShotDistance * 0.72;
  const rawTargetX = shouldDrop ? ball.x - direction * 120 : Math.max(home.x, ball.x + direction * runDepth);
  const targetX = player.team === "blue"
    ? clamp(rawTargetX, 70, attackLimit)
    : clamp(rawTargetX, attackLimit, field.width - 70);
  const targetY = clamp((ball.y * 0.38) + (home.y * 0.62) + offsetY * 0.18, 85, field.height - 85);

  moveToward(player, targetX, targetY, dt, 0.82 + tactic.support * 0.18);
}

function defendOrPress(player, opponents, dt) {
  if (player.isGoalkeeper) {
    updateGoalkeeper(player, teamByName(player.team), opponents, dt);
    return;
  }

  const tactic = getTacticProfile(player.team);
  const fieldPlayers = teamByName(player.team).filter((candidate) => !candidate.isGoalkeeper);
  const closestDefender = closestPlayerToBall(fieldPlayers);
  const pressSpeed = player.team === "red" ? tactic.press * 0.82 : tactic.press;
  const coverSpeed = 0.58 + tactic.press * 0.12;

  if (player === closestDefender && ball.owner) {
    // Un seul joueur presse vraiment le porteur. Les autres ferment les lignes.
    moveToward(player, ball.x, ball.y, dt, pressSpeed);
    return;
  }

  if (player === closestDefender && !ball.owner) {
    moveToward(player, ball.x, ball.y, dt, pressSpeed * 0.9);
    return;
  }

  const ownGoalX = player.team === "blue" ? 40 : field.width - 40;
  const goalY = field.height / 2;
  const home = formationPosition(player.team, player.role);
  const targetY = clamp(goalY + roleLane(player), 90, field.height - 90);
  const dangerousOpponent = ball.owner && opponents.includes(ball.owner) ? ball.owner : null;

  if (dangerousOpponent) {
    // Les defenseurs sans ballon se mettent entre le porteur et le but.
    const blockX = (ownGoalX * 0.52) + (dangerousOpponent.x * 0.24) + (home.x * 0.24);
    const blockY = (goalY * 0.45) + (dangerousOpponent.y * 0.18) + (home.y * 0.37) + roleLane(player) * 0.18;
    moveToward(player, blockX, clamp(blockY, 70, field.height - 70), dt, coverSpeed);
    return;
  }

  moveToward(player, home.x, targetY, dt, coverSpeed);
}

function roleLane(player) {
  const lanes = [-10, -215, 215, -145, 145];
  return lanes[player.role] || 0;
}

function updateGoalkeeper(player, team, opponents, dt) {
  const ownGoalX = player.team === "blue" ? 34 : field.width - 34;
  const boxX = player.team === "blue" ? 128 : field.width - 128;
  const minY = field.height / 2 - field.goalWidth / 2 + 18;
  const maxY = field.height / 2 + field.goalWidth / 2 - 18;
  const targetY = clamp(ball.y, minY, maxY);

  if (ball.owner === player) {
    if (player.decisionTimer <= 0) {
      const teammate = findPassTarget(player, team) || team.find((candidate) => !candidate.isGoalkeeper);
      if (teammate) passToPlayer(teammate, player);
      player.decisionTimer = randomBetween(0.8, 1.4);
    }
    return;
  }

  const ballInBox = player.team === "blue"
    ? ball.x < 230 && Math.abs(ball.y - field.height / 2) < field.goalWidth / 2 + 95
    : ball.x > field.width - 230 && Math.abs(ball.y - field.height / 2) < field.goalWidth / 2 + 95;

  if (!ball.owner && ballInBox) {
    moveToward(player, ball.x, ball.y, dt, 0.92);
    return;
  }

  if (ball.owner && ball.owner.team !== player.team && ballInBox) {
    const closeEnough = distance(player, ball.owner) < 58;
    if (closeEnough && player.tackleCooldown <= 0 && Math.random() < 0.22) tryTackle(player, false);
    moveToward(player, boxX, targetY, dt, 0.72);
    return;
  }

  moveToward(player, ownGoalX + attackDirection(player.team) * 36, field.height / 2, dt, 0.45);
}

function resolvePlayerCollisions() {
  const players = allPlayers();

  for (let pass = 0; pass < 3; pass += 1) {
    for (let i = 0; i < players.length; i += 1) {
      for (let j = i + 1; j < players.length; j += 1) {
        const a = players[i];
        const b = players[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const gap = Math.hypot(dx, dy) || 1;
        const minGap = a.radius + b.radius + 20;

        if (gap >= minGap) continue;

        const overlap = (minGap - gap) * 0.5;
        const nx = dx / gap;
        const ny = dy / gap;
        a.x -= nx * overlap;
        a.y -= ny * overlap;
        b.x += nx * overlap;
        b.y += ny * overlap;
      }
    }
  }

  keepPlayersInsideField();

  if (ball.owner) {
    ball.x = ball.owner.x + (ball.owner.team === "blue" ? 20 : -20);
    ball.y = ball.owner.y;
    ball.z = 0;
    ball.vz = 0;
  }
}

function tryGoalkeeperSave() {
  if (ball.owner) return false;

  const speed = Math.hypot(ball.vx, ball.vy);
  if (speed < 280) return false;

  const defendingTeam = ball.x < 130 ? "blue" : ball.x > field.width - 130 ? "red" : null;
  if (!defendingTeam) return false;

  const keeper = teamByName(defendingTeam).find((player) => player.isGoalkeeper);
  if (!keeper) return false;

  const inGoalLane = Math.abs(ball.y - field.height / 2) < field.goalWidth / 2 + 45;
  if (!inGoalLane) return false;

  const saveReach = 30 + getSkill(keeper, "goalkeeping") * 0.13 + (ball.z > 28 ? 14 : 0);
  if (distance(keeper, ball) > saveReach) return false;

  const highShotPenalty = ball.z > 34 ? 0.34 : ball.z > 18 ? 0.62 : 1;
  const saveChance = clamp((0.14 + getSkill(keeper, "goalkeeping") / 260 - speed / 2500) * highShotPenalty, 0.035, 0.34);
  if (Math.random() > saveChance) return false;

  ball.owner = keeper;
  ball.vx = 0;
  ball.vy = 0;
  ball.z = 0;
  ball.vz = 0;
  ball.pickupCooldown = 0;
  keeper.tackleFlash = 0.28;
  keeper.diveFlash = 0.42;
  keeper.diveDir = ball.y > keeper.y ? 1 : -1;
  keeper.leanFlash = 0.28;
  createRingEffect(keeper.x, keeper.y, "#facc15", 0.35, 18, 64);
  showFeedback(`Arret ${keeper.name}`);
  playSound("tackle");
  return true;
}

function updateBall(dt) {
  ball.pickupCooldown = Math.max(0, ball.pickupCooldown - dt);

  if (ball.owner) {
    ball.x = ball.owner.x + (ball.owner.team === "blue" ? 20 : -20);
    ball.y = ball.owner.y;
    ball.z = 0;
    ball.vx = 0;
    ball.vy = 0;
    ball.vz = 0;
    return;
  }

  const ballSpeed = Math.hypot(ball.vx, ball.vy);
  if (ballSpeed > 210) {
    ball.trail.push({ x: ball.x, y: ball.y, z: ball.z, life: 0.26, maxLife: 0.26 });
    if (ball.trail.length > 18) ball.trail.shift();
  }

  ball.x += ball.vx * dt;
  ball.y += ball.vy * dt;
  ball.z += ball.vz * dt;
  ball.vz -= 75 * dt;

  if (ball.z <= 0) {
    ball.z = 0;
    ball.vz = Math.abs(ball.vz) > 35 && ballSpeed < 360 ? -ball.vz * 0.16 : 0;
  }

  const friction = ballSpeed < 85 ? 0.965 : 0.985;
  ball.vx *= friction;
  ball.vy *= friction;

  if (Math.hypot(ball.vx, ball.vy) < 8) {
    ball.vx = 0;
    ball.vy = 0;
    if (ball.z <= 1) ball.vz = 0;
  }

  updateAssistedPass();

  if (ball.y < ball.radius || ball.y > field.height - ball.radius) {
    ball.y = clamp(ball.y, ball.radius, field.height - ball.radius);
    ball.vy *= -0.55;
  }

  if (ball.x < ball.radius || ball.x > field.width - ball.radius) {
    ball.x = clamp(ball.x, ball.radius, field.width - ball.radius);
    ball.vx *= -0.55;
  }
}

function updateAssistedPass() {
  const target = ball.passTarget;
  if (!target) return;

  const distanceToTarget = distance(ball, target);

  // Une passe assistee reste legerement guidee pour arriver dans les pieds.
  if (distanceToTarget > 1) {
    const desiredSpeed = ball.lastKicker && isTeamInFlow(ball.lastKicker.team) ? 520 : ball.passInterceptor ? 330 : 420;
    ball.vx = ((target.x - ball.x) / distanceToTarget) * desiredSpeed;
    ball.vy = ((target.y - ball.y) / distanceToTarget) * desiredSpeed;
  }

  if (distanceToTarget < assistedPassCatchRange) {
    receivePass(target);
  }
}

function updateCooldowns(dt) {
  feedbackTimer = Math.max(0, feedbackTimer - dt);
  ball.trail.forEach((point) => {
    point.life -= dt;
  });
  while (ball.trail.length > 0 && ball.trail[0].life <= 0) {
    ball.trail.shift();
  }

  visualEffects.forEach((effect) => {
    effect.life -= dt;
  });
  for (let i = visualEffects.length - 1; i >= 0; i -= 1) {
    if (visualEffects[i].life <= 0) visualEffects.splice(i, 1);
  }

  allPlayers().forEach((player) => {
    player.tackleCooldown = Math.max(0, player.tackleCooldown - dt);
    player.tackleFlash = Math.max(0, player.tackleFlash - dt);
    player.dribbleCooldown = Math.max(0, player.dribbleCooldown - dt);
    player.dribbleFlash = Math.max(0, player.dribbleFlash - dt);
    player.kickFlash = Math.max(0, player.kickFlash - dt);
    player.passFlash = Math.max(0, player.passFlash - dt);
    player.longShotFlash = Math.max(0, player.longShotFlash - dt);
    player.diveFlash = Math.max(0, player.diveFlash - dt);
    player.leanFlash = Math.max(0, player.leanFlash - dt);
    player.specialDribbleFlash = Math.max(0, player.specialDribbleFlash - dt);
  });
}

function updateFlow(dt) {
  flowState.messageTimer = Math.max(0, flowState.messageTimer - dt);

  if (flowState.activeTeam) {
    flowState.activeTimer = Math.max(0, flowState.activeTimer - dt);
    flowState.value = (flowState.activeTimer / 10) * 100;

    if (flowState.activeTimer <= 0) {
      flowState.activeTeam = null;
      flowState.team = null;
      flowState.value = 0;
    }
    return;
  }

  if (ball.owner) {
    if (flowState.team !== ball.owner.team) {
      flowState.team = ball.owner.team;
      flowState.value = 0;
    }

    flowState.value = Math.min(100, flowState.value + dt * 16.7);
    if (flowState.value >= 100) activateFlow(ball.owner.team);
    return;
  }

  flowState.value = Math.max(0, flowState.value - dt * 4);
  if (flowState.value <= 0) {
    flowState.team = null;
  }
}

function activateFlow(teamName) {
  flowState.team = teamName;
  flowState.activeTeam = teamName;
  flowState.activeTimer = 10;
  flowState.value = 100;
  flowState.messageTimer = 1.3;
  showFeedback("FLOW MAX");
  playSound("flow");
}

function updateCoachBoost(dt) {
  coachBoost.timer = Math.max(0, coachBoost.timer - dt);
}

function updateGamepadStatus() {
  const gamepad = getActiveGamepad();

  if (gamepad) {
    activeGamepadIndex = gamepad.index;
    gamepadStatus.textContent = "Manette détectée";
    if (controlMode === "keyboard" && !gameStarted) setControlMode("gamepad");
    handleGamepadButtons(gamepad);
    return;
  }

  activeGamepadIndex = null;
  gamepadStatus.textContent = "Aucune manette détectée";
}

function getActiveGamepad() {
  if (!navigator.getGamepads) return null;
  const gamepads = Array.from(navigator.getGamepads()).filter(Boolean);

  if (activeGamepadIndex !== null) {
    return gamepads.find((gamepad) => gamepad.index === activeGamepadIndex) || null;
  }

  return gamepads[0] || null;
}

function handleGamepadButtons(gamepad) {
  const activeOverlay = getActiveOverlay();
  if (activeOverlay) {
    handleMenuGamepadNavigation(gamepad, activeOverlay);
    return;
  }

  if (controlMode !== "gamepad") return;

  handleGamepadButton(gamepad, gamepadBindings.pass, () => setTactic("possession", "Manette"));
  handleGamepadButton(gamepad, gamepadBindings.shoot, () => setTactic("attack", "Manette"));
  handleGamepadButton(gamepad, gamepadBindings.tackle, () => setTactic("pressing", "Manette"));
  handleGamepadButton(gamepad, gamepadBindings.switch, () => setTactic("defense", "Manette"));
  handleGamepadButton(gamepad, gamepadBindings.dribble, () => setTactic("counter", "Manette"));
  handleGamepadButton(gamepad, 4, () => setTactic("balanced", "Manette"));
  handleGamepadButton(gamepad, 8, restartMatch);
  handleGamepadButton(gamepad, 9, openManagerHub);
}

function handleGamepadButton(gamepad, index, action) {
  const pressed = !!gamepad.buttons[index]?.pressed;
  const wasPressed = !!gamepadButtons[index];

  if (pressed && !wasPressed) {
    ensureAudio();
    action();
  }
  gamepadButtons[index] = pressed;
}

function getActiveOverlay() {
  return [
    mainMenu,
    settingsMenu,
    managerHub,
    tacticPage,
    marketPage,
    simulationPage,
    updatePage,
    loadPage,
    seasonPage,
    playerPage,
    trainingPage,
    leaguePage,
    matchChoice,
  ].find((page) => page && !page.classList.contains("is-hidden")) || null;
}

function getFocusableControls(container = getActiveOverlay()) {
  if (!container) return [];

  return Array.from(container.querySelectorAll("button:not([disabled]), input:not([type='hidden']), select"))
    .filter((element) => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return rect.width > 0 && rect.height > 0 && style.display !== "none" && style.visibility !== "hidden";
    });
}

function resetControllerFocus() {
  document.querySelectorAll(".controller-focus").forEach((element) => element.classList.remove("controller-focus"));
  controllerFocusIndex = 0;
}

function queueControllerFocus() {
  if (controlMode !== "gamepad") return;
  requestAnimationFrame(() => focusControllerElement(controllerFocusIndex));
}

function focusControllerElement(index) {
  const controls = getFocusableControls();
  if (!controls.length) return;

  document.querySelectorAll(".controller-focus").forEach((element) => element.classList.remove("controller-focus"));
  controllerFocusIndex = (index + controls.length) % controls.length;
  const element = controls[controllerFocusIndex];
  element.classList.add("controller-focus");
  element.focus({ preventScroll: false });
  element.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function moveControllerFocus(direction) {
  focusControllerElement(controllerFocusIndex + direction);
}

function handleMenuGamepadNavigation(gamepad, overlay) {
  if (controlMode !== "gamepad") return;

  const controls = getFocusableControls(overlay);
  if (!controls.length) return;

  if (!controls.includes(document.activeElement)) {
    focusControllerElement(0);
  } else {
    controllerFocusIndex = controls.indexOf(document.activeElement);
    document.activeElement.classList.add("controller-focus");
  }

  const now = performance.now();
  const axisX = applyDeadZone(gamepad.axes[0] || 0);
  const axisY = applyDeadZone(gamepad.axes[1] || 0);
  const wantsDown = axisY > 0.55 || !!gamepad.buttons[13]?.pressed;
  const wantsUp = axisY < -0.55 || !!gamepad.buttons[12]?.pressed;
  const wantsRight = axisX > 0.55 || !!gamepad.buttons[15]?.pressed;
  const wantsLeft = axisX < -0.55 || !!gamepad.buttons[14]?.pressed;

  if (now > menuNavCooldown) {
    if (wantsDown) {
      moveControllerFocus(1);
      menuNavCooldown = now + 170;
    } else if (wantsUp) {
      moveControllerFocus(-1);
      menuNavCooldown = now + 170;
    } else if (wantsRight) {
      adjustFocusedControl(1);
      menuNavCooldown = now + 150;
    } else if (wantsLeft) {
      adjustFocusedControl(-1);
      menuNavCooldown = now + 150;
    }
  }

  handleGamepadButton(gamepad, 0, activateFocusedControl);
  handleGamepadButton(gamepad, 1, goBackWithGamepad);
  handleGamepadButton(gamepad, 4, () => moveControllerFocus(-1));
  handleGamepadButton(gamepad, 5, () => moveControllerFocus(1));
  handleGamepadButton(gamepad, 9, activateFocusedControl);
}

function activateFocusedControl() {
  const active = document.activeElement;
  const controls = getFocusableControls();
  if (!controls.includes(active)) {
    focusControllerElement(0);
    return;
  }

  ensureAudio();
  if (active.tagName === "BUTTON") {
    active.click();
  } else if (active.tagName === "SELECT") {
    adjustFocusedControl(1);
  } else {
    active.focus();
  }
}

function adjustFocusedControl(direction) {
  const active = document.activeElement;
  if (!active) return;

  if (active.tagName === "SELECT") {
    active.selectedIndex = clamp(active.selectedIndex + direction, 0, active.options.length - 1);
    active.dispatchEvent(new Event("change", { bubbles: true }));
    return;
  }

  if (active.tagName === "INPUT" && active.type === "range") {
    const step = Number(active.step) || 1;
    const min = Number(active.min) || 0;
    const max = Number(active.max) || 100;
    active.value = clamp(Number(active.value) + direction * step * 5, min, max);
    active.dispatchEvent(new Event("input", { bubbles: true }));
    active.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function goBackWithGamepad() {
  const overlay = getActiveOverlay();
  if (!overlay || overlay === mainMenu) return;
  if (overlay === managerHub || overlay === settingsMenu || overlay === updatePage || overlay === loadPage) {
    openMainMenu();
    return;
  }
  if (overlay === matchChoice) {
    openManagerHub();
    return;
  }
  openManagerHub();
}

function applyDeadZone(value) {
  return Math.abs(value) < 0.18 ? 0 : value;
}

function movePlayer(player, dx, dy, dt) {
  const length = Math.hypot(dx, dy) || 1;
  const speed = getPlayerSpeed(player);
  const moveX = (dx / length) * speed * dt;
  const moveY = (dy / length) * speed * dt;
  player.x += moveX;
  player.y += moveY;
  player.vx = moveX / Math.max(dt, 0.001);
  player.vy = moveY / Math.max(dt, 0.001);
  animateMovement(player, moveX, moveY);
}

function moveToward(player, targetX, targetY, dt, speedMultiplier) {
  const dx = targetX - player.x;
  const dy = targetY - player.y;
  const distance = Math.hypot(dx, dy);
  if (distance < 4) return;

  const speed = getPlayerSpeed(player);
  const moveX = (dx / distance) * speed * speedMultiplier * dt;
  const moveY = (dy / distance) * speed * speedMultiplier * dt;
  player.x += moveX;
  player.y += moveY;
  player.vx = moveX / Math.max(dt, 0.001);
  player.vy = moveY / Math.max(dt, 0.001);
  animateMovement(player, moveX, moveY);
}

function getPlayerSpeed(player) {
  const ownerBonus = ball.owner === player ? ballOwnerSpeedBonus : 1;
  const dribbleBonus = player.dribbleFlash > 0 ? 1.18 : 1;
  const flowBonus = isTeamInFlow(player.team) ? 1.22 : 1;
  const coachBonus = player.team === "blue" && coachBoost.timer > 0 ? 1.12 : 1;
  const fitnessBonus = 0.88 + player.skills.fitness / 420;
  const moraleBonus = 0.94 + player.skills.morale / 1000;
  return player.speed * ownerBonus * dribbleBonus * flowBonus * coachBonus * fitnessBonus * moraleBonus;
}

function getSkill(player, stat) {
  const identity = player.team === "blue" ? clubIdentities[careerState.identity] : null;
  const bonusMap = {
    attack: identity?.attackBonus || 0,
    pass: identity?.passBonus || 0,
    defense: identity?.defenseBonus || 0,
    flair: identity?.attackBonus ? identity.attackBonus * 0.45 : 0,
  };
  return (player.skills[stat] || 0) + (bonusMap[stat] || 0);
}

function animateMovement(player, moveX, moveY) {
  const moveAmount = Math.hypot(moveX, moveY);
  if (moveAmount > 0.01) {
    player.walkPhase += moveAmount * 0.24;
    player.facing = moveX >= 0 ? 1 : -1;
    const targetRotation = Math.atan2(moveY, moveX);
    player.rotation = lerpAngle(player.rotation, targetRotation, 0.16);
  }
}

function keepPlayersInsideField() {
  allPlayers().forEach((player) => {
    const leftLimit = player.isGoalkeeper ? player.radius : pitchLimits.fieldPlayerGoalBuffer;
    const rightLimit = player.isGoalkeeper ? field.width - player.radius : field.width - pitchLimits.fieldPlayerGoalBuffer;
    player.x = clamp(player.x, leftLimit, rightLimit);
    player.y = clamp(player.y, player.radius, field.height - player.radius);
  });
}

function checkBallPickup() {
  if (ball.owner) return;
  if (ball.z > 22 && Math.hypot(ball.vx, ball.vy) > 170) return;

  if (ball.passTarget) {
    const target = ball.passTarget;
    if (distance(target, ball) < assistedPassCatchRange) {
      receivePass(target);
    }
    return;
  }

  for (const player of allPlayers()) {
    if (ball.pickupCooldown > 0 && player === ball.lastKicker) continue;

    const distance = Math.hypot(player.x - ball.x, player.y - ball.y);
    if (distance < player.radius + ball.radius + 5) {
      // Un ballon libre peut etre recupere, mais un ballon possede ne se vole qu'avec Tacle.
      ball.owner = player;
      syncControlWithBlueOwner();
      return;
    }
  }
}

function syncControlWithBlueOwner() {
  const blueOwnerIndex = blueTeam.findIndex((player) => ball.owner === player);

  if (blueOwnerIndex !== -1) {
    controlledIndex = blueOwnerIndex;
  }
}

function receivePass(receiver) {
  ball.owner = receiver;
  ball.x = receiver.x + (receiver.team === "blue" ? 20 : -20);
  ball.y = receiver.y;
  ball.z = 0;
  ball.vx = 0;
  ball.vy = 0;
  ball.vz = 0;
  ball.lastKicker = null;
  ball.pickupCooldown = 0;
  ball.passTarget = null;
  ball.passReceiver = null;
  ball.passInterceptor = null;
  receiver.decisionTimer = randomBetween(0.35, 0.9);
  createRingEffect(receiver.x, receiver.y, "#38bdf8", 0.32, 16, 42);
  playSound("receive");
  syncControlWithBlueOwner();
}

function tackleBall() {
  tryTackle(blueTeam[controlledIndex], true);
}

function dribbleBall() {
  const player = blueTeam[controlledIndex];
  if (!gameStarted || ball.owner !== player || player.dribbleCooldown > 0) return;

  const closestRed = redTeam
    .map((red) => ({ player: red, distance: distance(player, red) }))
    .sort((a, b) => a.distance - b.distance)[0];

  const flowActive = isTeamInFlow(player.team);
  if (!closestRed || (!flowActive && closestRed.distance > 115)) return;

  player.dribbleCooldown = flowActive ? dribbleCooldownTime * 0.55 : dribbleCooldownTime;

  const successChance = flowActive ? 1 : closestRed.distance < 42 ? 0.48 : 0.82;
  if (Math.random() > successChance) {
    player.dribbleFlash = 0.18;
    showFeedback("Dribble rate");
    return;
  }

  const aimLength = Math.hypot(player.aimX, player.aimY) || 1;
  const forwardX = player.aimX / aimLength;
  const forwardY = player.aimY / aimLength;
  const side = closestRed.player.y > player.y ? -1 : 1;

  // En Flow, le dribble devient une roulette explosive et plus fiable.
  const burst = flowActive ? 72 : 42;
  const curve = flowActive ? 44 : 22;
  player.x += forwardX * burst + -forwardY * side * curve;
  player.y += forwardY * burst + forwardX * side * curve;
  keepPlayersInsideField();

  ball.x = player.x + 20;
  ball.y = player.y;
  ball.z = 0;
  ball.vz = 0;
  player.dribbleFlash = flowActive ? 0.55 : 0.32;
  player.specialDribbleFlash = flowActive ? 0.55 : 0;
  player.leanFlash = flowActive ? 0.48 : 0.32;
  createRingEffect(player.x, player.y, flowActive ? "#facc15" : "#38bdf8", 0.28, 18, flowActive ? 72 : 50);
  playSound("dribble");
  showFeedback(flowActive ? "Roulette Flow !" : "Dribble !");
}

function tryTackle(tackler, showMiss) {
  if (!gameStarted || tackler.tackleCooldown > 0 || !ball.owner || ball.owner.team === tackler.team) {
    return false;
  }

  const target = ball.owner;
  tackler.tackleCooldown = tackleCooldownTime;

  const activeTackleRange = isTeamInFlow(tackler.team) ? tackleRange * 1.25 : tackleRange;
  if (distance(tackler, target) > activeTackleRange) {
    if (showMiss) showFeedback("Tacle rate");
    return false;
  }

  ball.owner = tackler;
  ball.x = tackler.x + (tackler.team === "blue" ? 20 : -20);
  ball.y = tackler.y;
  ball.z = 0;
  ball.vx = 0;
  ball.vy = 0;
  ball.vz = 0;
  ball.lastKicker = null;
  ball.pickupCooldown = 0;
  tackler.tackleFlash = 0.22;
  tackler.leanFlash = 0.22;
  playSound("tackle");
  showFeedback(tackler.team === "blue" ? "Tacle reussi !" : "Tacle rouge !");
  syncControlWithBlueOwner();
  return true;
}

function showFeedback(message) {
  feedbackMessage = message;
  feedbackTimer = 0.55;
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playSound(type) {
  if (!audioContext) return;

  const now = audioContext.currentTime;
  const gain = audioContext.createGain();
  const oscillator = audioContext.createOscillator();
  const settings = {
    pass: { start: 520, end: 760, duration: 0.08, volume: 0.035, wave: "triangle" },
    receive: { start: 360, end: 480, duration: 0.06, volume: 0.025, wave: "sine" },
    shoot: { start: 160, end: 92, duration: 0.16, volume: 0.06, wave: "sawtooth" },
    tackle: { start: 120, end: 70, duration: 0.1, volume: 0.05, wave: "square" },
    dribble: { start: 700, end: 420, duration: 0.09, volume: 0.035, wave: "triangle" },
    goal: { start: 340, end: 880, duration: 0.32, volume: 0.07, wave: "sine" },
    flow: { start: 220, end: 1040, duration: 0.42, volume: 0.055, wave: "triangle" },
  }[type];

  if (!settings) return;

  oscillator.type = settings.wave;
  oscillator.frequency.setValueAtTime(settings.start, now);
  oscillator.frequency.exponentialRampToValueAtTime(settings.end, now + settings.duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(settings.volume, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + settings.duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + settings.duration + 0.02);
}

function isTeamInFlow(teamName) {
  return flowState.activeTeam === teamName && flowState.activeTimer > 0;
}

function getTacticProfile(teamName) {
  const tacticName = teamName === "blue" ? careerState.tactic : getOpponentTactic();
  return getTacticByName(tacticName);
}

function getTacticByName(tacticName) {
  if (tacticName === "custom") return careerState.customTactic || tacticProfiles.balanced;
  return tacticProfiles[tacticName] || tacticProfiles.balanced;
}

function getOpponentTactic() {
  if (scoreRed < scoreBlue || timeLeft < 35) return "attack";
  if (scoreRed > scoreBlue) return "defense";
  if (careerState.tactic === "pressing") return "counter";
  if (careerState.tactic === "attack") return "possession";
  return "balanced";
}

function aiDribble(player, opponent) {
  if (ball.owner !== player || player.dribbleCooldown > 0) return false;

  const flowActive = isTeamInFlow(player.team);
  const successChance = flowActive ? 1 : clamp(0.35 + getSkill(player, "flair") / 145 - distance(player, opponent) / 240, 0.28, 0.86);
  player.dribbleCooldown = flowActive ? dribbleCooldownTime * 0.55 : dribbleCooldownTime * 0.85;

  if (Math.random() > successChance) {
    player.dribbleFlash = 0.16;
    return false;
  }

  const direction = attackDirection(player.team);
  const side = opponent.y > player.y ? -1 : 1;
  const burst = flowActive ? 68 : 34 + getSkill(player, "flair") * 0.14;
  const curve = flowActive ? 42 : 18 + getSkill(player, "flair") * 0.08;
  player.x += direction * burst;
  player.y += side * curve;
  keepPlayersInsideField();
  ball.x = player.x + (player.team === "blue" ? 20 : -20);
  ball.y = player.y;
  ball.z = 0;
  ball.vz = 0;
  player.dribbleFlash = flowActive ? 0.55 : 0.28;
  player.specialDribbleFlash = flowActive ? 0.55 : 0;
  player.leanFlash = flowActive ? 0.46 : 0.24;
  createRingEffect(player.x, player.y, flowActive ? "#facc15" : "#38bdf8", 0.24, 16, flowActive ? 70 : 42);
  playSound("dribble");
  return true;
}

function passBall() {
  const player = blueTeam[controlledIndex];
  if (ball.owner !== player) return;

  const teammate = findAssistedPassTarget(player, blueTeam);

  passToPlayer(teammate, player);
}

function shoot(player = blueTeam[controlledIndex], forceLongShot = false) {
  if (ball.owner !== player) return;

  const targetX = player.team === "blue" ? field.width : 0;
  const precision = isKeyPlayer(player) ? 0.16 : 0.22;
  const targetY = field.height / 2 + randomBetween(-field.goalWidth * precision, field.goalWidth * precision);
  const isLongShot = forceLongShot || Math.abs(targetX - player.x) > 430;
  const power = isLongShot ? (isTeamInFlow(player.team) ? 1540 : 1380) : (isTeamInFlow(player.team) ? 890 : 780);
  const elevation = isLongShot ? (isTeamInFlow(player.team) ? 64 : 56) : 10;

  if (isLongShot) {
    player.longShotFlash = 0.55;
    showFeedback("LONGSHOT AERIEN !");
  }

  kickToward(targetX, targetY, power, null, elevation);
}

function canTryLongShot(player, opponents) {
  if (player.isGoalkeeper) return false;
  const goalX = player.team === "blue" ? field.width : 0;
  const distanceToGoal = Math.abs(goalX - player.x);
  if (distanceToGoal < 430 || distanceToGoal > 900) return false;
  if (player.team === "blue" && player.x < field.width * 0.38) return false;
  if (player.team === "red" && player.x > field.width * 0.62) return false;
  return true;
}

function isKeyPlayer(player) {
  return player.team === "blue" && player.id === careerState.keyPlayerId;
}

function isBeyondShotLine(player) {
  if (player.isGoalkeeper) return false;
  return player.team === "blue"
    ? player.x > field.width - pitchLimits.earlyShotDistance
    : player.x < pitchLimits.earlyShotDistance;
}

function passToPlayer(teammate, passer) {
  if (ball.owner !== passer || !teammate) return;
  const interceptor = findPassInterceptor(passer, teammate);
  const target = interceptor || teammate;
  const passDistance = distance(passer, target);
  const power = passDistance < 230 ? 440 : passDistance < 470 ? 540 : 620;
  kickToward(target.x, target.y, power, {
    receiver: teammate,
    interceptor,
  });
}

function kickToward(targetX, targetY, power, passInfo = null, elevation = 0) {
  const dx = targetX - ball.x;
  const dy = targetY - ball.y;
  const length = Math.hypot(dx, dy) || 1;

  if (ball.owner) {
    if (power > 500) {
      const shooter = ball.owner;
      const blocked = tryBlockShot(shooter, targetX, targetY, power);
      if (blocked) return;
      ball.owner.kickFlash = 0.22;
      ball.owner.leanFlash = 0.32;
      createRingEffect(ball.owner.x, ball.owner.y, ball.owner.longShotFlash > 0 ? "#facc15" : isTeamInFlow(ball.owner.team) ? "#facc15" : "#f97316", 0.25, 20, ball.owner.longShotFlash > 0 ? 82 : 56);
      playSound("shoot");
    } else {
      ball.owner.passFlash = 0.18;
      ball.owner.leanFlash = 0.24;
      createRingEffect(ball.owner.x, ball.owner.y, isTeamInFlow(ball.owner.team) ? "#facc15" : "#38bdf8", 0.22, 14, 38);
      playSound("pass");
    }
  }

  ball.lastKicker = ball.owner;
  ball.pickupCooldown = 0.18;
  ball.passReceiver = passInfo ? passInfo.receiver : null;
  ball.passInterceptor = passInfo ? passInfo.interceptor : null;
  ball.passTarget = passInfo ? passInfo.interceptor || passInfo.receiver : null;
  ball.owner = null;
  const flowPower = ball.lastKicker && isTeamInFlow(ball.lastKicker.team) ? 1.18 : 1;
  ball.vx = (dx / length) * power * flowPower;
  ball.vy = (dy / length) * power * flowPower;
  ball.z = elevation;
  ball.vz = elevation > 30 ? 20 : elevation > 0 ? 8 : 0;
}

function tryBlockShot(shooter, targetX, targetY, power) {
  if (power < 650) return false;
  const opponents = shooter.team === "blue" ? redTeam : blueTeam;
  const blocker = opponents
    .filter((opponent) => !opponent.isGoalkeeper)
    .map((opponent) => ({
      player: opponent,
      laneDistance: distanceToSegment(opponent, shooter, { x: targetX, y: targetY }),
      forward: (opponent.x - shooter.x) * attackDirection(shooter.team),
    }))
    .filter((entry) => entry.forward > 18 && entry.forward < 280 && entry.laneDistance < 30)
    .sort((a, b) => a.laneDistance - b.laneDistance)[0];

  if (!blocker || Math.random() > 0.12) return false;

  const deflector = blocker.player;
  ball.lastKicker = shooter;
  ball.owner = null;
  ball.passTarget = null;
  ball.passReceiver = null;
  ball.passInterceptor = null;
  ball.pickupCooldown = 0.12;
  ball.x = deflector.x;
  ball.y = deflector.y;
  ball.z = 0;
  ball.vx = randomBetween(-220, 220);
  ball.vy = randomBetween(-180, 180);
  ball.vz = 0;
  shooter.kickFlash = 0.2;
  deflector.tackleFlash = 0.24;
  createRingEffect(deflector.x, deflector.y, "#38bdf8", 0.26, 12, 54);
  showFeedback("TIR CONTRE !");
  playSound("tackle");
  return true;
}

function findAssistedPassTarget(player, team) {
  const teammates = team.filter((candidate) => candidate !== player && (!candidate.isGoalkeeper || player.isGoalkeeper));
  const aimLength = Math.hypot(player.aimX, player.aimY) || 1;
  const aimX = player.aimX / aimLength;
  const aimY = player.aimY / aimLength;

  const bestInDirection = teammates
    .map((candidate) => {
      const dx = candidate.x - player.x;
      const dy = candidate.y - player.y;
      const teammateDistance = Math.hypot(dx, dy) || 1;
      const dot = (dx / teammateDistance) * aimX + (dy / teammateDistance) * aimY;

      return {
        player: candidate,
        score: dot * 260 + (assistedPassRange - teammateDistance) * 0.65 + passScore(candidate, player) * 0.28,
        dot,
        teammateDistance,
      };
    })
    .filter((entry) => entry.teammateDistance < assistedPassRange)
    .filter((entry) => entry.dot > 0.2)
    .sort((a, b) => b.score - a.score)[0];

  if (bestInDirection) return bestInDirection.player;

  // Si personne n'est vraiment dans la direction, on garde le jeu fluide avec le partenaire le plus simple.
  return teammates.sort((a, b) => distance(a, player) - distance(b, player))[0];
}

function findPassInterceptor(passer, receiver) {
  if (isTeamInFlow(passer.team)) return null;

  const opponents = passer.team === "blue" ? redTeam : blueTeam;
  const passDistance = distance(passer, receiver);
  const interceptionChance = passDistance < 210 ? 0.04 : 0.12;

  if (Math.random() > interceptionChance) return null;

  return opponents
    .map((opponent) => ({
      player: opponent,
      laneDistance: distanceToSegment(opponent, passer, receiver),
    }))
    .filter((entry) => entry.laneDistance < 34)
    .sort((a, b) => a.laneDistance - b.laneDistance)[0]?.player || null;
}

function findPassTarget(player, team) {
  return team
    .filter((candidate) => candidate !== player)
    .filter((candidate) => !candidate.isGoalkeeper || player.isGoalkeeper)
    .filter((candidate) => distance(candidate, player) < 430)
    .sort((a, b) => passScore(b, player) - passScore(a, player))[0];
}

function passScore(candidate, passer) {
  const tactic = getTacticProfile(passer.team);
  const direction = attackDirection(passer.team);
  const progress = (candidate.x - passer.x) * direction;
  const helpfulDistance = 280 - distance(candidate, passer);
  const laneBonus = 140 - Math.abs(candidate.y - passer.y);
  const quality = getSkill(candidate, "attack") * 0.45 + getSkill(candidate, "pass") * 0.25 + candidate.skills.morale * 0.15;
  const keyBonus = isKeyPlayer(candidate) ? 185 : 0;
  return progress * (1 + tactic.risk) + helpfulDistance * tactic.passBias + laneBonus * 0.38 + quality + keyBonus;
}

function closestPlayerToBall(team) {
  return team.reduce((closest, player) => (distance(player, ball) < distance(closest, ball) ? player : closest));
}

function teamByName(teamName) {
  return teamName === "blue" ? blueTeam : redTeam;
}

function teamLabel(teamName) {
  return teamName === "blue" ? getClub(careerState.club).short : getClub(careerState.opponentClub).short;
}

function attackDirection(teamName) {
  return teamName === "blue" ? 1 : -1;
}

function isAhead(player, teamName, fromX) {
  return teamName === "blue" ? player.x > fromX : player.x < fromX;
}

function checkGoal() {
  const goalTop = field.height / 2 - field.goalWidth / 2;
  const goalBottom = field.height / 2 + field.goalWidth / 2;
  const inGoalHeight = ball.y > goalTop && ball.y < goalBottom;

  if (ball.x <= ball.radius && inGoalHeight) {
    scoreRed += 1;
    playSound("goal");
    addNews(`${teamLabel("red")} marque. ${teamLabel("blue")} engage juste apres.`);
    updateHud();
    resetAfterGoal("blue");
  }

  if (ball.x >= field.width - ball.radius && inGoalHeight) {
    scoreBlue += 1;
    playSound("goal");
    addNews(`${teamLabel("blue")} marque. ${teamLabel("red")} engage juste apres.`);
    updateHud();
    resetAfterGoal("red");
  }
}

function finishMatch() {
  if (matchResolved) return;
  matchResolved = true;
  gameStarted = false;
  const result = scoreBlue > scoreRed ? "victoire" : scoreBlue < scoreRed ? "defaite" : "nul";
  careerState.week += 1;
  careerState.boardTrust = clamp(careerState.boardTrust + (result === "victoire" ? 7 : result === "nul" ? 1 : -5), 0, 100);
  careerState.clubMorale = clamp(careerState.clubMorale + (result === "victoire" ? 6 : result === "nul" ? 1 : -4), 0, 100);
  blueTeam.forEach((player) => {
    player.skills.morale = clamp(player.skills.morale + (result === "victoire" ? 5 : result === "nul" ? 1 : -4), 35, 100);
  });
  applyCurrentMatchToLeague(scoreBlue, scoreRed);
  addNews(`Fin du match : ${teamLabel("blue")} ${scoreBlue}-${scoreRed} ${teamLabel("red")}, ${result}.`);
  careerState.trainingAvailable = true;
  saveCareer();
  updateManagerUi();
}

function updateHud() {
  scoreElement.textContent = `${teamLabel("blue")} ${scoreBlue} - ${scoreRed} ${teamLabel("red")}`;
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = Math.floor(timeLeft % 60).toString().padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

function draw() {
  drawField();
  drawGoals();
  drawBallTrail();
  allPlayers()
    .slice()
    .sort((a, b) => a.y - b.y)
    .forEach((player) => {
      if (matchRenderMode === "dots") drawTacticalDot(player);
      else drawPlayer(player);
    });
  drawVisualEffects();
  drawBall();
  drawFlowMeter();
  drawCoachBoost();

  if (goalPause > 0) {
    drawCenterMessage("BUT !");
  } else if (timeLeft <= 0) {
    drawCenterMessage("FIN DU MATCH");
  } else if (feedbackTimer > 0) {
    drawCenterMessage(feedbackMessage);
  }
}

function drawField() {
  ctx.clearRect(0, 0, field.width, field.height);
  const corners = [
    project(0, 0),
    project(field.width, 0),
    project(field.width, field.height),
    project(0, field.height),
  ];

  const sky = ctx.createLinearGradient(0, 0, 0, field.height);
  sky.addColorStop(0, "#dff7ff");
  sky.addColorStop(0.52, "#baf3d4");
  sky.addColorStop(1, "#fef3c7");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, field.width, field.height);

  drawPolygon(corners, "#168846", "rgba(255,255,255,0.95)", 3.2);

  for (let i = 0; i < 8; i += 1) {
    const y1 = (field.height / 8) * i;
    const y2 = (field.height / 8) * (i + 1);
    const stripe = [project(0, y1), project(field.width, y1), project(field.width, y2), project(0, y2)];
    ctx.fillStyle = i % 2 === 0 ? "rgba(134, 239, 172, 0.16)" : "rgba(20, 184, 166, 0.13)";
    fillPolygon(stripe);
  }

  drawGrassTexture();
  drawWorldLine(20, 20, field.width - 20, 20, "rgba(248,250,252,0.94)", 2.6);
  drawWorldLine(field.width - 20, 20, field.width - 20, field.height - 20, "rgba(248,250,252,0.94)", 2.6);
  drawWorldLine(field.width - 20, field.height - 20, 20, field.height - 20, "rgba(248,250,252,0.94)", 2.6);
  drawWorldLine(20, field.height - 20, 20, 20, "rgba(248,250,252,0.94)", 2.6);
  drawWorldLine(field.width / 2, 20, field.width / 2, field.height - 20, "rgba(248,250,252,0.9)", 2.4);
  drawWorldRect(20, field.height / 2 - 160, 190, 320, "rgba(248,250,252,0.72)", 2);
  drawWorldRect(field.width - 210, field.height / 2 - 160, 190, 320, "rgba(248,250,252,0.72)", 2);
  drawWorldRect(20, field.height / 2 - 84, 72, 168, "rgba(248,250,252,0.66)", 1.7);
  drawWorldRect(field.width - 92, field.height / 2 - 84, 72, 168, "rgba(248,250,252,0.66)", 1.7);
  drawWorldCircle(field.width / 2, field.height / 2, 58, "rgba(248,250,252,0.9)");
  drawWorldCircle(field.width / 2, field.height / 2, 5, "rgba(248,250,252,0.9)");
}

function drawGoals() {
  const goalTop = field.height / 2 - field.goalWidth / 2;
  drawGoal(0, goalTop, -1);
  drawGoal(field.width, goalTop, 1);
}

function drawPlayer(player) {
  const isControlled = player.team === "blue" && blueTeam[controlledIndex] === player;
  const hasBall = ball.owner === player;
  player.renderX += (player.x - player.renderX) * 0.38;
  player.renderY += (player.y - player.renderY) * 0.38;
  const p = project(player.renderX, player.renderY);
  const theme = getPlayerTheme(player);
  const scale = p.scale * 0.92;
  const actionKick = player.kickFlash > 0 ? 1 : 0;
  const actionPass = player.passFlash > 0 ? 1 : 0;
  const run = Math.sin(player.walkPhase);
  const counterRun = Math.sin(player.walkPhase + Math.PI);
  const runAmount = Math.min(1, Math.hypot(player.vx, player.vy) / 140);
  const stride = run * (7.5 + actionKick * 8 + actionPass * 1.2) * scale;
  const armSwing = counterRun * (2.2 + runAmount * 2.5 + actionPass * 1.4) * scale;
  const possessionLean = hasBall ? player.facing * 7 * scale + Math.sin(visualTime * 10) * 0.7 * scale : 0;
  const lean = Math.sin(player.rotation) * 3.3 * scale + actionKick * player.facing * 6 * scale + possessionLean;
  const bob = Math.abs(run) * 1.35 * scale * runAmount;
  const torsoX = p.x + lean;
  const shoulderY = p.y - 54 * scale - bob;
  const waistY = p.y - 23 * scale - bob;
  const hipY = p.y - 16 * scale - bob;
  const chestX = torsoX + player.facing * (hasBall ? 2.2 : 1.2) * scale;
  const neckX = torsoX + lean * 0.1;
  const headX = torsoX + lean * 0.15 + player.facing * (hasBall ? 2.3 : 1.1) * scale;
  const headY = p.y - 66 * scale - bob;
  const shortColor = theme.shorts;
  const sockColor = theme.socks;

  ctx.fillStyle = "rgba(0, 0, 0, 0.38)";
  ctx.beginPath();
  ctx.ellipse(p.x + 5 * scale, p.y + 11 * scale, 17 * scale, 6.4 * scale, 0, 0, Math.PI * 2);
  ctx.fill();

  if (isFlowFocus(player)) {
    drawFlowAura(p, scale, player);
  }

  if (hasBall) {
    ctx.strokeStyle = "rgba(250, 204, 21, 0.95)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 11 * scale, 31 * scale, 14 * scale, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(250, 204, 21, 0.28)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 11 * scale, 38 * scale, 18 * scale, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  if (isKeyPlayer(player)) {
    ctx.strokeStyle = "rgba(250, 204, 21, 0.72)";
    ctx.lineWidth = 2.4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 11 * scale, 25 * scale, 11 * scale, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (player.dribbleFlash > 0) {
    ctx.strokeStyle = player.specialDribbleFlash > 0 ? "rgba(250, 204, 21, 0.95)" : "rgba(56, 189, 248, 0.9)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 6 * scale, 32 * scale, 14 * scale, 0, 0, Math.PI * 2);
    ctx.stroke();

    if (player.specialDribbleFlash > 0) {
      const spin = visualTime * 12;
      ctx.strokeStyle = "rgba(250, 204, 21, 0.86)";
      ctx.lineWidth = 2.4 * scale;
      ctx.beginPath();
      ctx.ellipse(p.x + Math.cos(spin) * 12 * scale, p.y - 18 * scale, 18 * scale, 7 * scale, -0.45, 0, Math.PI * 1.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(p.x - Math.cos(spin) * 10 * scale, p.y + 2 * scale, 22 * scale, 8 * scale, 0.4, Math.PI, Math.PI * 2.25);
      ctx.stroke();
    }
  }

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const leftHipX = torsoX - 7.2 * scale;
  const rightHipX = torsoX + 7.2 * scale;
  const leftKneeX = p.x - 8 * scale + stride * 0.42;
  const rightKneeX = p.x + 8 * scale - stride * 0.42 + actionKick * player.facing * 2.5 * scale;
  const kneeY = p.y - 1.5 * scale;
  const leftFootX = p.x - 10 * scale + stride * 1.02;
  const rightFootX = p.x + 10 * scale - stride * 1.02 + actionKick * player.facing * 13 * scale;
  const footY = p.y + 17 * scale;

  ctx.strokeStyle = "rgba(2,6,23,0.55)";
  ctx.lineWidth = 7.4 * scale;
  ctx.beginPath();
  ctx.moveTo(leftHipX, hipY + 1 * scale);
  ctx.lineTo(leftKneeX, kneeY);
  ctx.lineTo(leftFootX, footY);
  ctx.moveTo(rightHipX, hipY + 1 * scale);
  ctx.lineTo(rightKneeX, kneeY);
  ctx.lineTo(rightFootX, footY);
  ctx.stroke();

  ctx.strokeStyle = shortColor;
  ctx.lineWidth = 6.7 * scale;
  ctx.beginPath();
  ctx.moveTo(leftHipX, hipY);
  ctx.lineTo(leftKneeX, kneeY);
  ctx.moveTo(rightHipX, hipY);
  ctx.lineTo(rightKneeX, kneeY);
  ctx.stroke();

  ctx.strokeStyle = theme.skin;
  ctx.lineWidth = 3.9 * scale;
  ctx.beginPath();
  ctx.moveTo(leftKneeX, kneeY);
  ctx.lineTo(leftKneeX - 0.8 * scale, p.y + 5.5 * scale);
  ctx.moveTo(rightKneeX, kneeY);
  ctx.lineTo(rightKneeX + 0.8 * scale, p.y + 5.5 * scale);
  ctx.stroke();

  ctx.strokeStyle = sockColor;
  ctx.lineWidth = 4.9 * scale;
  ctx.beginPath();
  ctx.moveTo(leftKneeX - 0.8 * scale, p.y + 5.5 * scale);
  ctx.lineTo(leftFootX, footY);
  ctx.moveTo(rightKneeX + 0.8 * scale, p.y + 5.5 * scale);
  ctx.lineTo(rightFootX, footY);
  ctx.stroke();

  ctx.strokeStyle = "#020617";
  ctx.lineWidth = 3.4 * scale;
  ctx.beginPath();
  ctx.moveTo(leftFootX - 5.5 * scale, footY + 1 * scale);
  ctx.lineTo(leftFootX + 4 * scale, footY + 1 * scale);
  ctx.moveTo(rightFootX - 4 * scale, footY + 1 * scale);
  ctx.lineTo(rightFootX + 5.5 * scale, footY + 1 * scale);
  ctx.stroke();

  const leftShoulderX = chestX - 11 * scale;
  const rightShoulderX = chestX + 11 * scale;
  const leftHandX = torsoX - 11.2 * scale + armSwing - actionPass * 2.5 * scale;
  const rightHandX = torsoX + 11.2 * scale - armSwing + actionKick * player.facing * 4 * scale;
  const handY = shoulderY + 28 * scale + (actionKick || actionPass) * 1.6 * scale;
  const bodyLeanAngle = player.diveFlash > 0
    ? player.diveDir * 0.92
    : hasBall
    ? player.facing * (0.78 + Math.sin(visualTime * 9 + player.role) * 0.04)
    : player.facing * player.leanFlash * 0.7;

  if (hasBall) {
    ctx.strokeStyle = hexToRgba(theme.trim, 0.34);
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.moveTo(p.x - player.facing * 20 * scale, p.y - 35 * scale);
    ctx.lineTo(p.x - player.facing * 36 * scale, p.y - 29 * scale);
    ctx.moveTo(p.x - player.facing * 13 * scale, p.y - 20 * scale);
    ctx.lineTo(p.x - player.facing * 31 * scale, p.y - 15 * scale);
    ctx.stroke();
  }

  ctx.save();
  ctx.translate(torsoX, hipY);
  ctx.rotate(bodyLeanAngle);
  ctx.translate(-torsoX, -hipY);

  ctx.strokeStyle = "rgba(2,6,23,0.45)";
  ctx.lineWidth = 5.5 * scale;
  ctx.beginPath();
  ctx.moveTo(leftShoulderX, shoulderY + 9 * scale);
  ctx.lineTo(leftHandX, handY);
  ctx.moveTo(rightShoulderX, shoulderY + 9 * scale);
  ctx.lineTo(rightHandX, handY);
  ctx.stroke();

  drawSportJersey(chestX, shoulderY, waistY, scale, theme, player.team, lean);

  ctx.strokeStyle = theme.primary;
  ctx.lineWidth = 5.2 * scale;
  ctx.beginPath();
  ctx.moveTo(leftShoulderX, shoulderY + 8 * scale);
  ctx.lineTo(leftShoulderX - 2.4 * scale + armSwing * 0.25, shoulderY + 16 * scale);
  ctx.moveTo(rightShoulderX, shoulderY + 8 * scale);
  ctx.lineTo(rightShoulderX + 2.4 * scale - armSwing * 0.25, shoulderY + 16 * scale);
  ctx.stroke();

  ctx.fillStyle = shortColor;
  ctx.beginPath();
  ctx.roundRect(torsoX - 9 * scale, waistY - 1 * scale, 18 * scale, 9 * scale, 2.5 * scale);
  ctx.fill();

  ctx.strokeStyle = theme.skin;
  ctx.lineWidth = 3.5 * scale;
  ctx.beginPath();
  ctx.moveTo(leftShoulderX, shoulderY + 9 * scale);
  ctx.lineTo(leftHandX, handY);
  ctx.moveTo(rightShoulderX, shoulderY + 9 * scale);
  ctx.lineTo(rightHandX, handY);
  ctx.stroke();

  ctx.fillStyle = theme.skin;
  ctx.beginPath();
  ctx.roundRect(neckX - 2.6 * scale, shoulderY - 5 * scale, 5.2 * scale, 7 * scale, 2 * scale);
  ctx.fill();
  ctx.fillStyle = theme.skin;
  ctx.beginPath();
  ctx.ellipse(headX, headY, 6.8 * scale, 8 * scale, player.facing * 0.05, 0, Math.PI * 2);
  ctx.fill();

  drawPlayerHair(headX, headY, scale, theme, player);

  ctx.strokeStyle = "rgba(15,23,42,0.55)";
  ctx.lineWidth = 1 * scale;
  ctx.beginPath();
  ctx.moveTo(headX + 0.5 * scale, headY - 1 * scale);
  ctx.lineTo(headX + 4 * scale, headY - 1.3 * scale);
  ctx.stroke();
  ctx.restore();
  ctx.lineCap = "butt";

  drawPlayerName(player, p, scale, hasBall);

  if (isControlled) {
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 10 * scale, 24 * scale, 10 * scale, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawTacticalDot(player) {
  const isControlled = player.team === "blue" && blueTeam[controlledIndex] === player;
  const hasBall = ball.owner === player;
  player.renderX += (player.x - player.renderX) * 0.38;
  player.renderY += (player.y - player.renderY) * 0.38;
  const p = project(player.renderX, player.renderY);
  const theme = getPlayerTheme(player);
  const radius = (player.isGoalkeeper ? 15 : 13) * p.scale;

  ctx.fillStyle = "rgba(0,0,0,0.34)";
  ctx.beginPath();
  ctx.ellipse(p.x + 3 * p.scale, p.y + 9 * p.scale, radius * 1.28, radius * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();

  if (isFlowFocus(player)) drawFlowAura(p, p.scale * 0.9, player);

  ctx.fillStyle = theme.primary;
  ctx.strokeStyle = player.isGoalkeeper ? "#f8fafc" : theme.trim;
  ctx.lineWidth = hasBall ? 4 : 2;
  ctx.beginPath();
  ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  if (theme.kit === "split" || theme.kit === "milan") {
    ctx.save();
    ctx.fillStyle = theme.secondary;
    ctx.beginPath();
    ctx.rect(p.x, p.y - radius, radius, radius * 2);
    ctx.clip();
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius - 1, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (hasBall || isControlled) {
    ctx.strokeStyle = hasBall ? "#facc15" : "#38bdf8";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + radius * 0.92, radius * 1.65, radius * 0.62, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawPlayerName(player, p, p.scale * 0.92, hasBall);
}

function drawPlayerName(player, p, scale, hasBall) {
  const y = p.y - 78 * scale;
  const height = 15 * scale;

  ctx.save();
  ctx.font = `700 ${Math.max(9, 10.5 * scale)}px "Arial Narrow", Arial, sans-serif`;
  const nameWidth = Math.max(54 * scale, ctx.measureText(player.name).width + 14 * scale);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = hasBall ? "rgba(250,204,21,0.16)" : "rgba(2,6,23,0.72)";
  const theme = getPlayerTheme(player);
  ctx.strokeStyle = hasBall ? "rgba(250,204,21,0.78)" : hexToRgba(theme.trim, 0.58);
  ctx.lineWidth = 1.2 * scale;
  ctx.beginPath();
  ctx.roundRect(p.x - nameWidth / 2, y - height / 2, nameWidth, height, 3 * scale);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#f8fafc";
  ctx.shadowColor = hexToRgba(theme.trim, 0.45);
  ctx.shadowBlur = 5 * scale;
  ctx.fillText(player.name.toUpperCase(), p.x, y + 0.5 * scale);
  ctx.restore();
}

function isFlowFocus(player) {
  if (!isTeamInFlow(player.team)) return false;
  if (ball.owner && ball.owner.team === player.team) return ball.owner === player;

  const flowTeam = teamByName(player.team);
  const closest = closestPlayerToBall(flowTeam);
  return closest === player;
}

function drawFlowAura(p, scale, player) {
  const pulse = 0.5 + Math.sin(visualTime * 12 + player.role) * 0.5;
  const auraHeight = 82 * scale;
  const auraWidth = 34 * scale;

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.strokeStyle = `rgba(250, 204, 21, ${0.42 + pulse * 0.2})`;
  ctx.lineWidth = 4 * scale;
  ctx.beginPath();
  ctx.ellipse(p.x, p.y - 27 * scale, auraWidth, auraHeight * 0.5, -0.06, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = "rgba(245, 158, 11, 0.35)";
  ctx.lineWidth = 8 * scale;
  ctx.beginPath();
  ctx.ellipse(p.x, p.y - 27 * scale, auraWidth * 0.82, auraHeight * 0.45, 0.08, 0, Math.PI * 2);
  ctx.stroke();

  for (let i = 0; i < 13; i += 1) {
    const angle = visualTime * 3.2 + i * 0.72 + player.role;
    const side = Math.cos(angle);
    const height = Math.sin(angle * 1.6);
    const x = p.x + side * (17 + Math.sin(angle * 2) * 7) * scale;
    const y = p.y - 28 * scale + height * 36 * scale;
    const flameSize = (2.5 + pulse * 2 + (i % 3)) * scale;
    ctx.fillStyle = i % 2 === 0 ? "rgba(250, 204, 21, 0.78)" : "rgba(251, 146, 60, 0.56)";
    ctx.beginPath();
    ctx.ellipse(x, y, flameSize * 0.75, flameSize * 1.5, angle, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawBall() {
  const height = ball.owner ? 6 : ball.z;
  const p = project(ball.x, ball.y, height);
  const ground = project(ball.x, ball.y, 0);
  ctx.fillStyle = "rgba(0, 0, 0, 0.32)";
  ctx.beginPath();
  ctx.ellipse(
    ground.x + 2 * ground.scale,
    ground.y + 9 * ground.scale,
    Math.max(5, 10 * ground.scale - height * 0.05),
    Math.max(2.5, 4.5 * ground.scale - height * 0.035),
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();

  const radius = ball.radius * p.scale * (height > 30 ? 1.08 : 1);
  if (height > 24) {
    ctx.strokeStyle = `rgba(250, 204, 21, ${clamp(height / 90, 0.28, 0.65)})`;
    ctx.lineWidth = 4 * p.scale;
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius + 5 * p.scale, 0, Math.PI * 2);
    ctx.stroke();
  }

  const ballGradient = ctx.createRadialGradient(p.x - radius * 0.35, p.y - radius * 0.45, 1, p.x, p.y, radius);
  ballGradient.addColorStop(0, "#ffffff");
  ballGradient.addColorStop(0.48, "#f8fafc");
  ballGradient.addColorStop(1, height > 24 ? "#facc15" : "#94a3b8");
  ctx.fillStyle = ballGradient;
  ctx.beginPath();
  ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 1.6;
  ctx.stroke();

  ctx.strokeStyle = "rgba(15,23,42,0.38)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(p.x - radius * 0.65, p.y);
  ctx.lineTo(p.x + radius * 0.65, p.y);
  ctx.moveTo(p.x, p.y - radius * 0.65);
  ctx.lineTo(p.x, p.y + radius * 0.65);
  ctx.stroke();
}

function getPlayerTheme(player) {
  const club = getClub(player.clubId || (player.team === "blue" ? careerState.club : careerState.opponentClub));
  const record = findPlayerRecordByName(player.name) || {};
  const isKeeper = player.isGoalkeeper;
  const keeperSecondary = club.goalkeeperKit === "#f97316" ? "#7c2d12" : club.goalkeeperKit === "#22c55e" ? "#064e3b" : "#374151";

  return {
    primary: isKeeper ? club.goalkeeperKit : club.primary,
    secondary: isKeeper ? keeperSecondary : club.secondary,
    trim: isKeeper ? "#f8fafc" : club.trim,
    shorts: isKeeper ? keeperSecondary : club.shorts,
    socks: isKeeper ? club.goalkeeperKit : club.socks,
    skin: record.skin || "#d8a071",
    hair: record.hair || "#24110c",
    hairStyle: record.hairStyle || "short",
    kit: isKeeper ? "keeper" : club.kit,
  };
}

function drawJersey(x, y, scale, theme, team) {
  const width = 26 * scale;
  const height = 34 * scale;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x - 11 * scale, y + 2 * scale);
  ctx.lineTo(x - 15 * scale, y + 14 * scale);
  ctx.lineTo(x - 11 * scale, y + height);
  ctx.lineTo(x + 11 * scale, y + height);
  ctx.lineTo(x + 15 * scale, y + 14 * scale);
  ctx.lineTo(x + 11 * scale, y + 2 * scale);
  ctx.closePath();
  ctx.clip();

  if (team === "blue") {
    ctx.fillStyle = theme.primary;
    ctx.fillRect(x - width / 2, y, width / 2, height);
    ctx.fillStyle = theme.secondary;
    ctx.fillRect(x, y, width / 2, height);
  } else {
    const whiteKit = ctx.createLinearGradient(x, y, x, y + height);
    whiteKit.addColorStop(0, "#ffffff");
    whiteKit.addColorStop(1, "#cbd5e1");
    ctx.fillStyle = whiteKit;
    ctx.fillRect(x - width / 2, y, width, height);
  }

  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.fillRect(x - width / 2, y + 5 * scale, width, 2.5 * scale);
  ctx.fillStyle = theme.trim;
  ctx.fillRect(x - 1.5 * scale, y, 3 * scale, height);
  ctx.fillRect(x - width / 2, y + height - 4 * scale, width, 2.5 * scale);
  ctx.restore();

  ctx.strokeStyle = "rgba(2,6,23,0.8)";
  ctx.lineWidth = 1.3 * scale;
  ctx.beginPath();
  ctx.moveTo(x - 11 * scale, y + 2 * scale);
  ctx.lineTo(x - 15 * scale, y + 14 * scale);
  ctx.lineTo(x - 11 * scale, y + height);
  ctx.lineTo(x + 11 * scale, y + height);
  ctx.lineTo(x + 15 * scale, y + 14 * scale);
  ctx.lineTo(x + 11 * scale, y + 2 * scale);
  ctx.closePath();
  ctx.stroke();
}

function drawSportJersey(x, topY, bottomY, scale, theme, team, lean) {
  const shoulder = 10.8 * scale;
  const waist = 8.7 * scale;
  const height = bottomY - topY;
  const collar = 3.4 * scale;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x - shoulder, topY + 4 * scale);
  ctx.lineTo(x - collar, topY + 1.5 * scale);
  ctx.lineTo(x, topY + 5.5 * scale);
  ctx.lineTo(x + collar, topY + 1.5 * scale);
  ctx.lineTo(x + shoulder, topY + 4 * scale);
  ctx.lineTo(x + waist, bottomY - 1 * scale);
  ctx.lineTo(x - waist, bottomY);
  ctx.closePath();
  ctx.clip();

  if (theme.kit === "split") {
    ctx.fillStyle = theme.primary;
    ctx.fillRect(x - shoulder, topY, shoulder, height);
    ctx.fillStyle = theme.secondary;
    ctx.fillRect(x, topY, shoulder, height);
  } else if (theme.kit === "milan") {
    ctx.fillStyle = theme.secondary;
    ctx.fillRect(x - shoulder, topY, shoulder * 2, height);
    ctx.fillStyle = theme.primary;
    for (let i = 0; i < 4; i += 1) {
      ctx.fillRect(x - shoulder + i * shoulder * 0.55, topY, shoulder * 0.28, height);
    }
  } else if (theme.kit === "white") {
    const whiteKit = ctx.createLinearGradient(x, topY, x, bottomY);
    whiteKit.addColorStop(0, "#ffffff");
    whiteKit.addColorStop(1, "#d7dde7");
    ctx.fillStyle = whiteKit;
    ctx.fillRect(x - shoulder, topY, shoulder * 2, height);
  } else if (theme.kit === "eiffel") {
    ctx.fillStyle = theme.primary;
    ctx.fillRect(x - shoulder, topY, shoulder * 2, height);
    ctx.fillStyle = theme.trim;
    ctx.beginPath();
    ctx.moveTo(x, topY + 6 * scale);
    ctx.lineTo(x - 3.4 * scale, bottomY - 1 * scale);
    ctx.lineTo(x + 3.4 * scale, bottomY - 1 * scale);
    ctx.closePath();
    ctx.fill();
  } else {
    const plainKit = ctx.createLinearGradient(x, topY, x, bottomY);
    plainKit.addColorStop(0, theme.secondary);
    plainKit.addColorStop(1, theme.primary);
    ctx.fillStyle = plainKit;
    ctx.fillRect(x - shoulder, topY, shoulder * 2, height);
  }

  ctx.fillStyle = theme.trim;
  ctx.fillRect(x - 1.1 * scale, topY + 6 * scale, 2.2 * scale, height - 7 * scale);
  ctx.fillStyle = "rgba(255,255,255,0.16)";
  ctx.fillRect(x - shoulder, topY + 9 * scale, shoulder * 2, 1.5 * scale);
  ctx.fillStyle = "rgba(2,6,23,0.18)";
  ctx.fillRect(x - shoulder, bottomY - 4 * scale, shoulder * 2, 2 * scale);
  ctx.restore();

  ctx.strokeStyle = "rgba(2,6,23,0.85)";
  ctx.lineWidth = 1.2 * scale;
  ctx.beginPath();
  ctx.moveTo(x - shoulder, topY + 4 * scale);
  ctx.lineTo(x - collar, topY + 1.5 * scale);
  ctx.lineTo(x, topY + 5.5 * scale);
  ctx.lineTo(x + collar, topY + 1.5 * scale);
  ctx.lineTo(x + shoulder, topY + 4 * scale);
  ctx.lineTo(x + waist, bottomY - 1 * scale);
  ctx.lineTo(x - waist, bottomY);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1 * scale;
  ctx.beginPath();
  ctx.moveTo(x + lean * 0.12, topY + 5 * scale);
  ctx.lineTo(x + lean * 0.12, bottomY - 2 * scale);
  ctx.stroke();
}

function drawPlayerHair(x, y, scale, theme, player) {
  const color = theme.hair;

  if (theme.hairStyle === "braids") {
    ctx.strokeStyle = "rgba(2,6,23,0.75)";
    ctx.lineWidth = 2.7 * scale;
    ctx.lineCap = "round";
    for (let i = -2; i <= 2; i += 1) {
      const startX = x + i * 2.2 * scale;
      ctx.beginPath();
      ctx.moveTo(startX, y - 6.5 * scale);
      ctx.lineTo(startX - 1.5 * scale, y - 13 * scale);
      ctx.lineTo(startX - 3.2 * scale, y - 17 * scale);
      ctx.stroke();
    }

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y - 4 * scale, 7 * scale, 4.5 * scale, 0, Math.PI, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - 6.7 * scale, y - 3.2 * scale);
    ctx.lineTo(x - 4.5 * scale, y - 8.6 * scale);
    ctx.lineTo(x - 1.2 * scale, y - 7.3 * scale);
    ctx.lineTo(x + 2.4 * scale, y - 9.2 * scale);
    ctx.lineTo(x + 6.5 * scale, y - 4.2 * scale);
    ctx.lineTo(x + 6.2 * scale, y + 0.5 * scale);
    ctx.lineTo(x + 2 * scale, y - 2.5 * scale);
    ctx.lineTo(x - 2.5 * scale, y - 4.3 * scale);
    ctx.lineTo(x - 6.2 * scale, y - 1.2 * scale);
    ctx.closePath();
    ctx.fill();
  }

  if (theme.hairStyle === "blond") {
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    ctx.lineWidth = 1 * scale;
    ctx.beginPath();
    ctx.moveTo(x - 2 * scale, y - 8 * scale);
    ctx.lineTo(x + 4 * scale, y - 3.5 * scale);
    ctx.stroke();
  }

  ctx.strokeStyle = hexToRgba(theme.trim, 0.42);
  ctx.lineWidth = 1 * scale;
  ctx.stroke();
  ctx.lineCap = "butt";
}

function drawAnimeHair(x, y, scale, color, team) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x - 6.7 * scale, y - 3.2 * scale);
  ctx.lineTo(x - 4.5 * scale, y - 8.6 * scale);
  ctx.lineTo(x - 1.2 * scale, y - 7.3 * scale);
  ctx.lineTo(x + 2.4 * scale, y - 9.2 * scale);
  ctx.lineTo(x + 6.5 * scale, y - 4.2 * scale);
  ctx.lineTo(x + 6.2 * scale, y + 0.5 * scale);
  ctx.lineTo(x + 2 * scale, y - 2.5 * scale);
  ctx.lineTo(x - 2.5 * scale, y - 4.3 * scale);
  ctx.lineTo(x - 6.2 * scale, y - 1.2 * scale);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = team === "blue" ? "rgba(34,211,238,0.42)" : "rgba(15,23,42,0.28)";
  ctx.lineWidth = 1 * scale;
  ctx.stroke();
}

function drawBallTrail() {
  ball.trail.forEach((point) => {
    const p = project(point.x, point.y, point.z || 2);
    const alpha = clamp(point.life / point.maxLife, 0, 1);
    ctx.fillStyle = point.z > 22
      ? `rgba(250, 204, 21, ${alpha * 0.42})`
      : `rgba(226, 232, 240, ${alpha * 0.32})`;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 2 * p.scale, 15 * p.scale * alpha, 5.5 * p.scale * alpha, 0, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawVisualEffects() {
  visualEffects.forEach((effect) => {
    const progress = 1 - effect.life / effect.maxLife;
    const p = project(effect.x, effect.y);
    const radius = (effect.startRadius + (effect.endRadius - effect.startRadius) * progress) * p.scale;
    const alpha = clamp(effect.life / effect.maxLife, 0, 1);

    ctx.strokeStyle = hexToRgba(effect.color, alpha * 0.8);
    ctx.lineWidth = 3 * p.scale;
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 8 * p.scale, radius, radius * 0.45, 0, 0, Math.PI * 2);
    ctx.stroke();
  });
}

function drawCenterMessage(message) {
  ctx.fillStyle = "rgba(15, 23, 42, 0.72)";
  ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 42, 300, 84);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 34px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function drawFlowMeter() {
  const width = 176;
  const height = 14;
  const x = canvas.width - width - 22;
  const y = 24;
  const ratio = clamp(flowState.value / 100, 0, 1);
  const isActive = !!flowState.activeTeam;
  const flowTeam = flowState.activeTeam || flowState.team;
  const flowClub = flowTeam ? getClub(flowTeam === "blue" ? careerState.club : careerState.opponentClub) : null;
  const fill = flowClub ? flowClub.trim : "#64748b";

  ctx.save();
  ctx.font = "700 13px Arial Narrow, Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillStyle = "rgba(15,23,42,0.92)";
  ctx.shadowColor = isActive ? "rgba(250,204,21,0.85)" : flowClub ? hexToRgba(flowClub.trim, 0.45) : "rgba(248,250,252,0.35)";
  ctx.shadowBlur = 8;
  ctx.fillText(flowTeam ? `${teamLabel(flowTeam).toUpperCase()} ${isActive ? "FLOW MAX" : "FLOW"}` : "FLOW", x, y - 4);
  ctx.shadowBlur = 0;

  ctx.fillStyle = "rgba(2,6,23,0.72)";
  ctx.strokeStyle = "rgba(34,211,238,0.32)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 3);
  ctx.fill();
  ctx.stroke();

  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, isActive ? "#f59e0b" : fill);
  gradient.addColorStop(0.55, "#facc15");
  gradient.addColorStop(1, isActive ? "#fff7ad" : flowClub ? flowClub.primary : "#94a3b8");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, Math.max(0, (width - 4) * ratio), height - 4, 2);
  ctx.fill();

  if (flowState.messageTimer > 0) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "900 42px Arial Narrow, Arial, sans-serif";
    ctx.fillStyle = isActive ? "rgba(146,64,14,0.96)" : flowClub ? hexToRgba(flowClub.trim, 0.96) : "rgba(15,23,42,0.92)";
    ctx.shadowColor = isActive ? "rgba(250,204,21,0.95)" : flowClub ? hexToRgba(flowClub.trim, 0.9) : "rgba(248,250,252,0.75)";
    ctx.shadowBlur = 18;
    ctx.fillText(isActive ? "FLOW MAX" : "FLOW", canvas.width / 2, 84);
  }

  ctx.restore();
}

function drawCoachBoost() {
  if (coachBoost.timer <= 0) return;

  const ratio = coachBoost.timer / 5.5;
  const x = 24;
  const y = 58;
  const width = 150;
  const height = 10;

  ctx.save();
  ctx.font = "800 12px Arial Narrow, Arial, sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(15,23,42,0.94)";
  ctx.shadowColor = "rgba(34,211,238,0.7)";
  ctx.shadowBlur = 8;
  ctx.fillText("TEMPS FORT COACH", x, y - 6);
  ctx.shadowBlur = 0;
  ctx.fillStyle = "rgba(2,6,23,0.72)";
  ctx.strokeStyle = "rgba(34,211,238,0.38)";
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 3);
  ctx.fill();
  ctx.stroke();
  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, "#22d3ee");
  gradient.addColorStop(1, "#facc15");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(x + 2, y + 2, Math.max(0, (width - 4) * ratio), height - 4, 2);
  ctx.fill();
  ctx.restore();
}

function drawGrassTexture() {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "#bbf7d0";
  ctx.lineWidth = 1;

  for (let y = 35; y < field.height - 35; y += 34) {
    for (let x = 45; x < field.width - 45; x += 70) {
      const sway = Math.sin((x + y) * 0.03) * 8;
      drawWorldLine(x, y, x + 18 + sway, y + 6, "rgba(187,247,208,0.16)", 1);
    }
  }

  ctx.restore();
}

function project(x, y, z = 0) {
  const depth = y / field.height;
  const scale = 0.6 + depth * 0.52;
  const horizontalScale = canvas.width / field.width;
  return {
    x: canvas.width / 2 + (x - field.width / 2) * scale * horizontalScale,
    y: 48 + depth * (canvas.height - 92) - z * scale,
    scale,
  };
}

function fillPolygon(points) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.closePath();
  ctx.fill();
}

function drawPolygon(points, fill, stroke, lineWidth) {
  ctx.fillStyle = fill;
  fillPolygon(points);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function drawWorldLine(x1, y1, x2, y2, color, lineWidth) {
  const a = project(x1, y1);
  const b = project(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.stroke();
}

function drawWorldCircle(x, y, radius, color) {
  const center = project(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(center.x, center.y, radius * center.scale, radius * center.scale * 0.55, 0, 0, Math.PI * 2);
  ctx.stroke();
}

function drawWorldRect(x, y, width, height, color, lineWidth) {
  drawWorldLine(x, y, x + width, y, color, lineWidth);
  drawWorldLine(x + width, y, x + width, y + height, color, lineWidth);
  drawWorldLine(x + width, y + height, x, y + height, color, lineWidth);
  drawWorldLine(x, y + height, x, y, color, lineWidth);
}

function drawGoal(x, y, side) {
  const top = project(x, y, 0);
  const bottom = project(x, y + field.goalWidth, 0);
  const backTop = project(x + side * field.goalDepth, y + 18, 42);
  const backBottom = project(x + side * field.goalDepth, y + field.goalWidth - 18, 42);

  ctx.strokeStyle = "rgba(15,23,42,0.36)";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(top.x + 3, top.y + 4);
  ctx.lineTo(bottom.x + 3, bottom.y + 4);
  ctx.moveTo(top.x + 3, top.y + 4);
  ctx.lineTo(backTop.x + 3, backTop.y + 4);
  ctx.lineTo(backBottom.x + 3, backBottom.y + 4);
  ctx.lineTo(bottom.x + 3, bottom.y + 4);
  ctx.stroke();

  ctx.strokeStyle = "#f8fafc";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(backTop.x, backTop.y);
  ctx.lineTo(backBottom.x, backBottom.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.stroke();

  ctx.strokeStyle = "rgba(191,219,254,0.42)";
  ctx.lineWidth = 1.5;
  for (let i = 1; i < 4; i += 1) {
    const t = i / 4;
    const x1 = top.x + (bottom.x - top.x) * t;
    const y1 = top.y + (bottom.y - top.y) * t;
    const x2 = backTop.x + (backBottom.x - backTop.x) * t;
    const y2 = backTop.y + (backBottom.y - backTop.y) * t;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  for (let i = 1; i < 3; i += 1) {
    const t = i / 3;
    const x1 = top.x + (backTop.x - top.x) * t;
    const y1 = top.y + (backTop.y - top.y) * t;
    const x2 = bottom.x + (backBottom.x - bottom.x) * t;
    const y2 = bottom.y + (backBottom.y - bottom.y) * t;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function distanceToSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy || 1;
  const t = clamp(((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared, 0, 1);
  const closestX = start.x + dx * t;
  const closestY = start.y + dy * t;
  return Math.hypot(point.x - closestX, point.y - closestY);
}

function createRingEffect(x, y, color, life, startRadius, endRadius) {
  visualEffects.push({
    x,
    y,
    color,
    life,
    maxLife: life,
    startRadius,
    endRadius,
  });
}

function lerpAngle(current, target, amount) {
  const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + diff * amount;
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function isKeyDown(action) {
  return !!keys[keyBindings[action]];
}

function setControlMode(mode) {
  controlMode = mode;
  keyboardModeButton.classList.toggle("is-selected", mode === "keyboard");
  mobileModeButton.classList.toggle("is-selected", mode === "mobile");
  gamepadModeButton.classList.toggle("is-selected", mode === "gamepad");
  document.body.classList.toggle("mobile-mode", mode === "mobile");
  mobileStatus.textContent = mode === "mobile"
    ? "Mode mobile actif : gros boutons tactiles et interface compacte."
    : "Mode mobile : boutons tactiles agrandis et interface compacte.";
  if ((mode === "gamepad" || mode === "mobile") && getActiveOverlay()) queueControllerFocus();
}

function switchControlledPlayer() {
  controlledIndex = (controlledIndex + 1) % blueTeam.length;
}

function updateBindingButtons() {
  document.querySelectorAll("[data-bind-action]").forEach((button) => {
    const action = button.dataset.bindAction;
    button.textContent = `${bindingLabel(action)} : ${keyBindings[action].toUpperCase()}`;
  });

  document.querySelector(".controls").innerHTML = `
    <span>Tu es manager : les joueurs jouent seuls.</span>
    <span>Change les consignes pendant le match.</span>
    <span>Chaque but donne l'engagement a l'equipe qui vient d'encaisser.</span>
  `;
}

function updateGamepadBindingButtons() {
  document.querySelectorAll("[data-pad-bind-action]").forEach((button) => {
    const action = button.dataset.padBindAction;
    button.textContent = `${bindingLabel(action)} : ${gamepadButtonNames[gamepadBindings[action]]}`;
  });
}

function cycleGamepadBinding(action) {
  const oldButton = gamepadBindings[action];
  const currentIndex = gamepadButtonOptions.indexOf(oldButton);
  const nextButton = gamepadButtonOptions[(currentIndex + 1) % gamepadButtonOptions.length];
  const otherAction = Object.keys(gamepadBindings).find(
    (candidate) => candidate !== action && gamepadBindings[candidate] === nextButton
  );

  if (otherAction) {
    gamepadBindings[otherAction] = oldButton;
  }

  gamepadBindings[action] = nextButton;
  gamepadBindingHint.textContent = `${bindingLabel(action)} utilise maintenant ${gamepadButtonNames[nextButton]}.`;
  updateGamepadBindingButtons();
}

function bindingLabel(action) {
  const labels = {
    up: "Haut",
    left: "Gauche",
    down: "Bas",
    right: "Droite",
    pass: "Passe",
    shoot: "Tir",
    tackle: "Tacle",
    dribble: "Dribble",
    switch: "Changer",
  };
  return labels[action];
}

function managerFullName() {
  return `${careerState.manager.firstName} ${careerState.manager.lastName}`.trim() || "Coach";
}

function managerStyleLabel(style) {
  const labels = {
    analyste: "Analyste",
    leader: "Leader",
    visionnaire: "Visionnaire",
  };
  return labels[style] || "Analyste";
}

function defaultCustomTactic() {
  return {
    label: "Tactique Perso",
    description: "Plan fabrique par le manager.",
    tempo: 1.05,
    passBias: 0.55,
    shootBias: 0.7,
    dribbleBias: 0.2,
    press: 0.85,
    support: 1,
    risk: 0.55,
  };
}

function defaultCareerValues() {
  return {
    manager: { firstName: "Gabin", lastName: "Nova", nationality: "France", style: "analyste" },
    week: 1,
    seasonNumber: 1,
    boardTrust: 62,
    clubMorale: 66,
    budget: 85,
    club: managerClubSelect?.value || "barcha",
    opponentClub: "royal",
    tactic: "balanced",
    formation: "1-2-1",
    identity: "mastery",
    squad: [],
    lineup: [],
    keyPlayerId: "",
    customTactic: defaultCustomTactic(),
    league: createLeagueState(),
    trainingAvailable: true,
    rivalryMission: null,
    objective: null,
    lastSimulation: null,
    lastSeasonReport: null,
    seasonReadyForNext: false,
    lastTraining: "Aucune seance",
    matchInstruction: "Lecture du match",
    news: ["Nouvelle carriere creee. Le club attend une identite forte."],
  };
}

function applyCareerData(savedCareer) {
  if (!savedCareer || typeof savedCareer !== "object") return false;

  const next = { ...defaultCareerValues(), ...savedCareer };
  next.manager = { ...defaultCareerValues().manager, ...(savedCareer.manager || {}) };
  Object.assign(careerState, next);
  Object.assign(careerState.manager, next.manager);

  if (!clubDatabase[careerState.club]) careerState.club = "barcha";
  if (!clubDatabase[careerState.opponentClub] || careerState.opponentClub === careerState.club) careerState.opponentClub = getCurrentOpponentId();
  if (!Array.isArray(careerState.news)) careerState.news = ["Carriere chargee."];
  if (!Array.isArray(careerState.squad)) careerState.squad = [];
  if (!Array.isArray(careerState.lineup)) careerState.lineup = [];
  if (!careerState.customTactic) careerState.customTactic = defaultCustomTactic();
  if (!formations[careerState.formation]) careerState.formation = "1-2-1";
  if (!clubIdentities[careerState.identity]) careerState.identity = "mastery";
  if (typeof careerState.budget !== "number") careerState.budget = 85;
  if (typeof careerState.week !== "number") careerState.week = 1;
  if (typeof careerState.seasonNumber !== "number") careerState.seasonNumber = 1;
  if (typeof careerState.trainingAvailable !== "boolean") careerState.trainingAvailable = true;
  ensureLeague();
  ensureLineup();
  return true;
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem("elevenManagerAccounts") || "{}");
  } catch {
    return {};
  }
}

function saveAccounts(accounts) {
  localStorage.setItem("elevenManagerAccounts", JSON.stringify(accounts));
}

function loadCareer() {
  const accounts = getAccounts();
  if (activeAccountName && accounts[activeAccountName]?.career) {
    if (applyCareerData(accounts[activeAccountName].career)) return;
  }

  const saved = localStorage.getItem("elevenManagerCareer");
  if (!saved) return;

  try {
    const data = JSON.parse(saved);
    applyCareerData(data.career || {});
  } catch {
    careerState.news = ["Sauvegarde ignoree : donnees invalides."];
  }
}

function saveCareer() {
  const savedAt = new Date().toISOString();
  localStorage.setItem("elevenManagerCareer", JSON.stringify({ career: careerState, savedAt }));

  if (activeAccountName) {
    const accounts = getAccounts();
    accounts[activeAccountName] = {
      ...(accounts[activeAccountName] || {}),
      name: activeAccountName,
      code: accounts[activeAccountName]?.code || "",
      career: JSON.parse(JSON.stringify(careerState)),
      updatedAt: savedAt,
    };
    saveAccounts(accounts);
  }

  updateAccountUi();
}

function createOrLoginAccount() {
  const name = (accountNameInput.value || "").trim() || "Coach";
  const code = accountCodeInput.value || "";
  const accounts = getAccounts();

  if (accounts[name] && accounts[name].code && accounts[name].code !== code) {
    accountStatusElement.textContent = "Code incorrect pour ce compte local.";
    return;
  }

  if (!accounts[name]) {
    accounts[name] = {
      name,
      code,
      career: JSON.parse(JSON.stringify(careerState)),
      updatedAt: new Date().toISOString(),
    };
    saveAccounts(accounts);
  }

  activeAccountName = name;
  localStorage.setItem("elevenManagerActiveAccount", activeAccountName);
  if (accounts[name].career) applyCareerData(accounts[name].career);
  accountStatusElement.textContent = `Compte actif : ${name}.`;
  updateAccountUi();
  updateManagerInputs();
  updateManagerUi();
}

function saveCurrentAccountCareer() {
  if (!activeAccountName) {
    createOrLoginAccount();
  }
  saveCareer();
  accountStatusElement.textContent = `Carriere sauvegardee pour ${activeAccountName}.`;
}

function loadAccountCareer(name) {
  const accounts = getAccounts();
  if (!accounts[name]?.career) return;

  activeAccountName = name;
  localStorage.setItem("elevenManagerActiveAccount", activeAccountName);
  applyCareerData(accounts[name].career);
  addNews(`Carriere chargee depuis le compte ${name}.`);
  saveCareer();
  updateManagerInputs();
  updateManagerUi();
  openManagerHub();
}

function updateAccountUi() {
  if (!careerSlotsElement) return;

  const accounts = getAccounts();
  const names = Object.keys(accounts);
  accountNameInput.value = activeAccountName || accountNameInput.value || "Coach";
  accountStatusElement.textContent = activeAccountName
    ? `Compte actif : ${activeAccountName}. Sauvegarde auto active.`
    : "Aucun compte actif. Cree ou connecte un compte local.";

  careerSlotsElement.innerHTML = names.length
    ? names.map((name) => {
      const account = accounts[name];
      const career = account.career || {};
      const club = getClub(career.club || "barcha").label;
      const manager = `${career.manager?.firstName || "Coach"} ${career.manager?.lastName || ""}`.trim();
      const season = career.seasonNumber || 1;
      const updated = account.updatedAt ? new Date(account.updatedAt).toLocaleString("fr-FR") : "date inconnue";
      return `
        <article class="career-slot ${name === activeAccountName ? "is-selected" : ""}">
          <div>
            <strong>${name}</strong>
            <span>${manager} - ${club} - Saison ${season}</span>
            <small>${updated}</small>
          </div>
          <div class="career-slot-actions">
            <button type="button" data-load-account="${name}">Charger</button>
            <button type="button" data-delete-account="${name}">Supprimer</button>
          </div>
        </article>
      `;
    }).join("")
    : `<div class="sim-row">Aucune carriere sauvegardee pour l'instant.</div>`;

  document.querySelectorAll("[data-load-account]").forEach((button) => {
    button.addEventListener("click", () => loadAccountCareer(button.dataset.loadAccount));
  });

  document.querySelectorAll("[data-delete-account]").forEach((button) => {
    button.addEventListener("click", () => deleteAccountCareer(button.dataset.deleteAccount));
  });
}

function deleteAccountCareer(name) {
  const accounts = getAccounts();
  delete accounts[name];
  saveAccounts(accounts);

  if (activeAccountName === name) {
    activeAccountName = "";
    localStorage.removeItem("elevenManagerActiveAccount");
  }

  updateAccountUi();
}

function updateManagerInputs() {
  managerFirstNameInput.value = careerState.manager.firstName;
  managerLastNameInput.value = careerState.manager.lastName;
  managerNationalityInput.value = careerState.manager.nationality;
  managerStyleSelect.value = careerState.manager.style;
  managerClubSelect.value = careerState.club;
}

function createLeagueState() {
  const clubIds = Object.keys(clubDatabase);
  const standings = {};
  clubIds.forEach((id) => {
    standings[id] = { played: 0, wins: 0, draws: 0, losses: 0, gf: 0, ga: 0, points: 0 };
  });

  return {
    phase: "season",
    fixtures: buildRoundRobinFixtures(clubIds),
    playoffs: [],
    standings,
    trophyWinner: null,
  };
}

function buildRoundRobinFixtures(ids) {
  const teams = ids.slice();
  const rounds = [];
  const half = teams.length / 2;

  for (let round = 0; round < teams.length - 1; round += 1) {
    for (let i = 0; i < half; i += 1) {
      const a = teams[i];
      const b = teams[teams.length - 1 - i];
      const flip = (round + i) % 2 === 0;
      rounds.push({
        id: `r${round + 1}-${i}`,
        phase: "season",
        round: round + 1,
        home: flip ? a : b,
        away: flip ? b : a,
        played: false,
      });
    }
    teams.splice(1, 0, teams.pop());
  }

  const returnLegs = rounds.map((fixture) => ({
    ...fixture,
    id: `${fixture.id}-retour`,
    round: fixture.round + ids.length - 1,
    home: fixture.away,
    away: fixture.home,
    played: false,
  }));

  return [...rounds, ...returnLegs];
}

function ensureLeague() {
  if (!careerState.league || !Array.isArray(careerState.league.fixtures) || !careerState.league.standings) {
    careerState.league = createLeagueState();
  }
  return careerState.league;
}

function sortedStandings() {
  const league = ensureLeague();
  return Object.entries(league.standings)
    .sort(([, a], [, b]) => b.points - a.points || (b.gf - b.ga) - (a.gf - a.ga) || b.gf - a.gf)
    .map(([id, row]) => ({ id, ...row }));
}

function getNextUserFixture() {
  const league = ensureLeague();
  const seasonFixture = league.fixtures.find((fixture) => !fixture.played && (fixture.home === careerState.club || fixture.away === careerState.club));
  if (seasonFixture) return seasonFixture;

  createPlayoffsIfNeeded();
  const playoff = league.playoffs.find((fixture) => !fixture.played && (fixture.home === careerState.club || fixture.away === careerState.club));
  return playoff || league.playoffs.find((fixture) => !fixture.played) || null;
}

function createPlayoffsIfNeeded() {
  const league = ensureLeague();
  if (league.phase !== "season") return;
  if (league.fixtures.some((fixture) => !fixture.played)) return;

  const top = sortedStandings().slice(0, 4);
  league.phase = "semis";
  league.playoffs = [
    { id: "semi-1", phase: "semi", round: "Demi 1", home: top[0].id, away: top[2].id, played: false },
    { id: "semi-2", phase: "semi", round: "Demi 2", home: top[1].id, away: top[3].id, played: false },
  ];
}

function applyCurrentMatchToLeague(blueGoals, redGoals) {
  const fixture = getNextUserFixture();
  if (!fixture || fixture.played) return;

  const homeGoals = fixture.home === careerState.club ? blueGoals : redGoals;
  const awayGoals = fixture.home === careerState.club ? redGoals : blueGoals;
  recordFixtureResult(fixture, homeGoals, awayGoals);
  simulateOtherFixturesInRound(fixture);
  createFinalIfNeeded();
}

function recordFixtureResult(fixture, homeGoals, awayGoals) {
  fixture.played = true;
  fixture.homeScore = homeGoals;
  fixture.awayScore = awayGoals;

  if (fixture.phase === "season") {
    updateStanding(fixture.home, homeGoals, awayGoals);
    updateStanding(fixture.away, awayGoals, homeGoals);
    return;
  }

  fixture.winner = homeGoals === awayGoals
    ? (Math.random() < 0.5 ? fixture.home : fixture.away)
    : homeGoals > awayGoals ? fixture.home : fixture.away;

  if (fixture.phase === "final") {
    ensureLeague().phase = "finished";
    ensureLeague().trophyWinner = fixture.winner;
    addNews(`${getClub(fixture.winner).label} souleve le Trophee Eleven.`);
  }
}

function updateStanding(clubId, gf, ga) {
  const row = ensureLeague().standings[clubId];
  row.played += 1;
  row.gf += gf;
  row.ga += ga;
  if (gf > ga) {
    row.wins += 1;
    row.points += 3;
  } else if (gf === ga) {
    row.draws += 1;
    row.points += 1;
  } else {
    row.losses += 1;
  }
}

function simulateOtherFixturesInRound(referenceFixture) {
  if (referenceFixture.phase !== "season") return;
  ensureLeague().fixtures
    .filter((fixture) => !fixture.played && fixture.round === referenceFixture.round)
    .forEach((fixture) => {
      const result = simulateFixtureResult(fixture);
      recordFixtureResult(fixture, result.homeScore, result.awayScore);
    });
}

function createFinalIfNeeded() {
  const league = ensureLeague();
  if (league.phase !== "semis") return;
  if (league.playoffs.filter((fixture) => fixture.phase === "semi").some((fixture) => !fixture.played)) return;
  if (league.playoffs.some((fixture) => fixture.phase === "final")) return;

  const winners = league.playoffs.filter((fixture) => fixture.phase === "semi").map((fixture) => fixture.winner);
  league.phase = "final";
  league.playoffs.push({ id: "final", phase: "final", round: "Finale", home: winners[0], away: winners[1], played: false });
}

function simulateFixtureResult(fixture) {
  const homePower = getClubPower(fixture.home) + 2;
  const awayPower = getClubPower(fixture.away);
  const homeExpected = 0.45 + homePower / 64 + Math.random() * 0.65;
  const awayExpected = 0.45 + awayPower / 67 + Math.random() * 0.65;
  let homeScore = randomGoalCount(homeExpected);
  let awayScore = randomGoalCount(awayExpected);

  if (fixture.phase !== "season" && homeScore === awayScore) {
    if (homePower + Math.random() * 10 > awayPower + Math.random() * 10) homeScore += 1;
    else awayScore += 1;
  }

  return { homeScore, awayScore };
}

function getClubPower(clubId) {
  if (clubId === careerState.club) return getManagedPower();
  const club = getClub(clubId);
  const squadPower = club.squad.reduce((sum, player) => sum + playerPower(player), 0) / club.squad.length;
  return squadPower * 0.7 + club.strength * 0.3;
}

function getManagedPower() {
  const starters = getStartingPlayers();
  const activePower = starters.reduce((sum, player) => sum + playerPower(player), 0) / Math.max(1, starters.length);
  const identity = clubIdentities[careerState.identity] || clubIdentities.mastery;
  return activePower + identity.attackBonus * 0.4 + identity.passBonus * 0.35 + identity.defenseBonus * 0.35;
}

function playerPower(player) {
  const gk = player.isGoalkeeper ? (player.goalkeeping || 72) * 0.36 : 0;
  return player.attack * 0.28 + player.pass * 0.27 + player.defense * 0.22 + player.fitness * 0.12 + player.flair * 0.11 + gk;
}

function getAssistantInsight() {
  const tactic = getTacticByName(careerState.tactic);
  const identity = clubIdentities[careerState.identity];
  const next = getNextUserFixture();
  const opponentId = next ? (next.home === careerState.club ? next.away : next.home) : careerState.opponentClub;
  const mission = getRivalryMission(opponentId);
  const averagePass = averageSkill(getStartingPlayers(), "pass");

  if (!careerState.trainingAvailable) {
    return `Seance deja faite. Le staff prepare ${getClub(opponentId).label}. Mission rivalite : ${mission.text}`;
  }

  if (tactic.passBias > 0.7 && averagePass > 76) {
    return `Ton ADN ${identity.label} colle bien au groupe : fais tourner, puis attaque ${getClub(opponentId).short} apres decalage.`;
  }

  return `Cellule de rivalite : ${mission.text} Recompense possible : +${mission.reward} moral.`;
}

function getRivalryMission(opponentId = getCurrentOpponentId()) {
  const existing = careerState.rivalryMission;
  if (existing && existing.opponentId === opponentId) return existing;

  const opponent = getClub(opponentId);
  const star = opponent.squad.find((player) => !player.isGoalkeeper) || opponent.squad[0];
  const pool = [
    { id: "limit", text: `Limiter ${star.name} et encaisser 1 but maximum.`, reward: 4 },
    { id: "passes", text: `Confisquer le ballon contre ${opponent.short} avec au moins 52% de possession.`, reward: 3 },
    { id: "start", text: `Marquer avant la 30e minute pour faire douter ${opponent.short}.`, reward: 4 },
  ];
  careerState.rivalryMission = { opponentId, ...pool[Math.floor(Math.random() * pool.length)] };
  return careerState.rivalryMission;
}

function rivalryMissionSuccess(mission, sim) {
  if (!mission) return false;
  if (mission.id === "limit") return sim.redScore <= 1;
  if (mission.id === "passes") return sim.possession >= 52;
  if (mission.id === "start") return sim.timeline.some((event) => event.team === "blue" && event.minute <= 30);
  return false;
}

function averageSkill(players, stat) {
  return players.reduce((sum, player) => sum + (player[stat] || player.skills?.[stat] || 0), 0) / Math.max(1, players.length);
}

function renderSquad() {
  ensureLineup();
  const starters = new Set(careerState.lineup);
  squadListElement.innerHTML = getManagedPlayers().map((player) => `
    <button class="squad-card ${starters.has(player.id) ? "is-selected" : ""}" type="button" data-player-profile="${player.id}">
      <strong>${player.name}</strong>
      <span>${player.age} ans - ${player.position}${player.isGoalkeeper ? " - Gardien" : ""}</span>
      <span>ATT ${player.attack} - PAS ${player.pass} - DEF ${player.defense}${player.isGoalkeeper ? ` - GB ${player.goalkeeping}` : ""}</span>
      <span>${player.wish || "Veut aider le groupe."}</span>
    </button>
  `).join("");

  document.querySelectorAll("[data-player-profile]").forEach((button) => {
    button.addEventListener("click", () => openPlayerProfile(button.dataset.playerProfile));
  });
}

function renderFormationList() {
  formationListElement.innerHTML = Object.entries(formations)
    .map(([key, formation]) => `
      <button class="formation-card ${careerState.formation === key ? "is-selected" : ""}" type="button" data-formation="${key}">
        <strong>${formation.label}</strong>
        <p>${formation.description}</p>
      </button>
    `)
    .join("");

  document.querySelectorAll("[data-formation]").forEach((button) => {
    button.addEventListener("click", () => setFormation(button.dataset.formation));
  });
}

function renderIdentityList() {
  identityListElement.innerHTML = Object.entries(clubIdentities)
    .map(([key, identity]) => `
      <button class="identity-card ${careerState.identity === key ? "is-selected" : ""}" type="button" data-identity="${key}">
        <strong>${identity.label}</strong>
        <p>${identity.description}</p>
      </button>
    `)
    .join("");

  const current = clubIdentities[careerState.identity] || clubIdentities.mastery;
  identityDescriptionElement.textContent = current.description;

  document.querySelectorAll("[data-identity]").forEach((button) => {
    button.addEventListener("click", () => setIdentity(button.dataset.identity));
  });
}

function renderChalkPitch() {
  const formation = formations[careerState.formation] || formations["1-2-1"];
  chalkPitchElement.innerHTML = formation.positions
    .map((point, index) => `
      <div class="chalk-player" style="left:${point.x * 100}%; top:${point.y * 100}%">${point.role}</div>
    `)
    .join("");
}

function renderLineupEditor() {
  ensureLineup();
  const players = getManagedPlayers();
  const formation = formations[careerState.formation] || formations["1-2-1"];
  lineupEditorElement.innerHTML = formation.positions.map((slot, index) => {
    const selectedId = careerState.lineup[index] || "";
    const options = players
      .filter((player) => slot.role === "GB" ? player.isGoalkeeper : !player.isGoalkeeper)
      .map((player) => `<option value="${player.id}" ${player.id === selectedId ? "selected" : ""}>${player.name} - ${player.position}</option>`)
      .join("");
    return `
      <label class="lineup-slot">
        <span>${index + 1}. ${slot.role}</span>
        <select data-lineup-slot="${index}">${options}</select>
      </label>
    `;
  }).join("");

  document.querySelectorAll("[data-lineup-slot]").forEach((select) => {
    select.addEventListener("change", () => {
      careerState.lineup[Number(select.dataset.lineupSlot)] = select.value;
      ensureLineup();
      syncRuntimeTeams();
      saveCareer();
      updateManagerUi();
    });
  });
}

function renderCustomTacticEditor() {
  const tactic = careerState.customTactic || tacticProfiles.balanced;
  customTempoInput.value = Math.round(tactic.tempo * 100);
  customPassInput.value = Math.round(tactic.passBias * 100);
  customShootInput.value = Math.round(tactic.shootBias * 100);
  customPressInput.value = Math.round(tactic.press * 100);
  customRiskInput.value = Math.round(tactic.risk * 100);
  customTacticSummaryElement.textContent = `Perso : tempo ${customTempoInput.value}, tirs ${customShootInput.value}, passes ${customPassInput.value}, risque ${customRiskInput.value}.`;
}

function saveCustomTactic() {
  careerState.customTactic = {
    label: "Tactique Perso",
    description: "Plan fabrique par le manager.",
    tempo: Number(customTempoInput.value) / 100,
    passBias: Number(customPassInput.value) / 100,
    shootBias: Number(customShootInput.value) / 100,
    dribbleBias: clamp(Number(customRiskInput.value) / 250, 0.08, 0.36),
    press: Number(customPressInput.value) / 100,
    support: clamp(0.75 + Number(customPassInput.value) / 170, 0.82, 1.25),
    risk: Number(customRiskInput.value) / 100,
  };
  careerState.tactic = "custom";
  careerState.matchInstruction = "Bureau : Tactique Perso";
  addNews("Tactique perso activee par le manager.");
  saveCareer();
  updateManagerUi();
}

function renderKeyPlayerSelector() {
  const players = getStartingPlayers().filter((player) => !player.isGoalkeeper);
  keyPlayerSelect.innerHTML = players
    .map((player) => `<option value="${player.id}" ${careerState.keyPlayerId === player.id ? "selected" : ""}>${player.name}</option>`)
    .join("");
  const keyPlayer = players.find((player) => player.id === careerState.keyPlayerId) || players[0];
  if (keyPlayer) {
    careerState.keyPlayerId = keyPlayer.id;
    keyPlayerSummaryElement.textContent = `${keyPlayer.name} devient la reference : plus de passes vers lui et plus de liberte pour frapper.`;
  }
}

function renderHubLineupPitch() {
  ensureLineup();
  const formation = formations[careerState.formation] || formations["1-2-1"];
  const players = getStartingPlayers();
  hubLineupPitchElement.innerHTML = formation.positions.map((point, index) => {
    const player = players[index];
    return `
      <div class="mini-lineup-player" style="left:${point.x * 100}%; top:${point.y * 100}%">
        <b>${point.role}</b>
        <span>${player?.name || "Libre"}</span>
      </div>
    `;
  }).join("");
}

function renderMarket() {
  budgetDisplayElement.textContent = `Budget ${Math.round(careerState.budget)}M`;
  marketListElement.innerHTML = transferMarket
    .map((player) => {
      const owned = careerState.squad.includes(player.id);
      const affordable = careerState.budget >= player.value;
      return `
        <article class="market-card">
          <div class="player-portrait" style="${portraitStyle(player)}"></div>
          <div>
            <strong>${player.name}</strong>
            <span>${player.age} ans - ${player.position}</span>
            <span>Valeur ${player.value}M - ${player.style}</span>
          </div>
          <button type="button" data-buy-player="${player.id}" ${owned || !affordable ? "disabled" : ""}>
            ${owned ? "Signe" : "Payer"}
          </button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-buy-player]").forEach((button) => {
    button.addEventListener("click", () => signMarketPlayer(button.dataset.buyPlayer));
  });
}

function portraitStyle(player) {
  const kit = getClub(careerState.club);
  return `
    background:
      radial-gradient(circle at 50% 28%, ${player.hair} 0 14%, transparent 15%),
      radial-gradient(circle at 50% 37%, ${player.skin} 0 22%, transparent 23%),
      linear-gradient(90deg, ${kit.primary} 0 50%, ${kit.secondary} 50% 100%);
  `;
}

function signMarketPlayer(playerId) {
  const player = transferMarket.find((candidate) => candidate.id === playerId);
  if (!player || careerState.squad.includes(playerId) || careerState.budget < player.value) return;

  careerState.budget = Math.max(0, careerState.budget - player.value);
  careerState.squad.push(playerId);
  careerState.boardTrust = clamp(careerState.boardTrust + (player.value > 28 ? 3 : 2), 0, 100);
  careerState.clubMorale = clamp(careerState.clubMorale + 3, 0, 100);
  ensureLineup();
  syncRuntimeTeams();
  addNews(`${player.name} signe a ${getClub().label} pour ${player.value}M.`);
  saveCareer();
  updateManagerUi();
}

function setFormation(formationName) {
  if (!formations[formationName]) return;
  careerState.formation = formationName;
  careerState.lineup = [];
  ensureLineup();
  syncRuntimeTeams();
  addNews(`Nouvelle formation : ${formations[formationName].label}.`);
  if (!gameStarted) resetAfterGoal(ball.owner?.team || "blue");
  saveCareer();
  updateManagerUi();
}

function setIdentity(identityName) {
  if (!clubIdentities[identityName]) return;
  careerState.identity = identityName;
  addNews(`ADN du club choisi : ${clubIdentities[identityName].label}.`);
  saveCareer();
  updateManagerUi();
}

function renderLeaguePage() {
  const league = ensureLeague();
  const table = sortedStandings();
  leagueTableElement.innerHTML = table.map((row, index) => `
    <div class="league-row ${row.id === careerState.club ? "is-selected" : ""}">
      <b>${index + 1}</b>
      <span>${getClub(row.id).label}</span>
      <span>${row.points} pts</span>
      <small>${row.played}J ${row.wins}V ${row.draws}N ${row.losses}D ${row.gf}-${row.ga}</small>
    </div>
  `).join("");

  const nextFixtures = [...league.fixtures, ...league.playoffs]
    .filter((fixture) => !fixture.played)
    .slice(0, 9);
  fixtureListElement.innerHTML = nextFixtures.length
    ? nextFixtures.map((fixture) => `
      <div class="fixture-row ${fixture.home === careerState.club || fixture.away === careerState.club ? "is-selected" : ""}">
        <strong>${fixture.round}</strong>
        <span>${getClub(fixture.home).short} - ${getClub(fixture.away).short}</span>
      </div>
    `).join("")
    : `<div class="fixture-row">Tous les matchs sont joues.</div>`;

  const winner = league.trophyWinner ? getClub(league.trophyWinner).label : "En attente";
  trophyCardElement.innerHTML = `
    <div class="trophy-icon">XI</div>
    <strong>Trophee Eleven</strong>
    <span>${league.phase === "finished" ? `Champion : ${winner}` : "Le top 4 jouera les demies."}</span>
  `;
}

function updateManagerUi() {
  ensureLeague();
  ensureLineup();
  const tactic = getTacticByName(careerState.tactic);
  const style = managerStyleLabel(careerState.manager.style);
  const identity = clubIdentities[careerState.identity] || clubIdentities.mastery;
  const club = getClub();
  const next = getNextUserFixture();
  if (next) careerState.opponentClub = next.home === careerState.club ? next.away : next.home;

  managerNameElement.textContent = managerFullName();
  managerBioElement.textContent = `${careerState.manager.nationality} - ${style} - ${club.label}`;
  boardTrustElement.textContent = `Direction ${Math.round(careerState.boardTrust)}`;
  clubMoraleElement.textContent = `Moral ${Math.round(careerState.clubMorale)}`;
  seasonWeekElement.textContent = `Saison ${careerState.seasonNumber} - Semaine ${careerState.week}`;
  clubBudgetElement.textContent = `Budget ${Math.round(careerState.budget)}M`;
  tacticDescriptionElement.textContent = `Plan actuel : ${tactic.label}. Formation ${formations[careerState.formation]?.label || "1-2-1"}. ADN ${identity.label}.`;
  trainingReportElement.textContent = careerState.trainingAvailable ? careerState.lastTraining : `${careerState.lastTraining} (seance deja utilisee)`;
  matchManagerNameElement.textContent = managerFullName();
  matchTacticNameElement.textContent = tactic.label;
  matchInstructionElement.textContent = careerState.matchInstruction;
  managerAvatarElement.dataset.style = careerState.manager.style;
  assistantInsightElement.textContent = getAssistantInsight();

  document.querySelectorAll("[data-tactic]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.tactic === careerState.tactic);
  });

  renderSquad();
  renderFormationList();
  renderIdentityList();
  renderChalkPitch();
  renderLineupEditor();
  renderCustomTacticEditor();
  renderKeyPlayerSelector();
  renderHubLineupPitch();
  renderMarket();
  renderLeaguePage();
  newsFeedElement.innerHTML = careerState.news.map((item) => `<p>${item}</p>`).join("");
}

function addNews(message) {
  careerState.news.unshift(message);
  careerState.news = careerState.news.slice(0, 8);
  if (newsFeedElement && !gameStarted) updateManagerUi();
}

function hideOverlayPages() {
  resetControllerFocus();
  mainMenu.classList.add("is-hidden");
  settingsMenu.classList.add("is-hidden");
  managerHub.classList.add("is-hidden");
  tacticPage.classList.add("is-hidden");
  marketPage.classList.add("is-hidden");
  simulationPage.classList.add("is-hidden");
  updatePage.classList.add("is-hidden");
  loadPage.classList.add("is-hidden");
  seasonPage.classList.add("is-hidden");
  playerPage.classList.add("is-hidden");
  trainingPage.classList.add("is-hidden");
  leaguePage.classList.add("is-hidden");
  matchChoice.classList.add("is-hidden");
}

function openMainMenu() {
  gameStarted = false;
  hideOverlayPages();
  mainMenu.classList.remove("is-hidden");
  queueControllerFocus();
}

function openLoadPage() {
  gameStarted = false;
  updateAccountUi();
  hideOverlayPages();
  loadPage.classList.remove("is-hidden");
  loadPage.scrollTop = 0;
  queueControllerFocus();
}

function openManagerSetup() {
  gameStarted = false;
  updateManagerInputs();
  hideOverlayPages();
  settingsMenu.classList.remove("is-hidden");
  settingsMenu.scrollTop = 0;
  queueControllerFocus();
}

function openManagerHub() {
  gameStarted = false;
  updateManagerUi();
  hideOverlayPages();
  managerHub.classList.remove("is-hidden");
  managerHub.scrollTop = 0;
  queueControllerFocus();
}

function openTacticPage() {
  gameStarted = false;
  updateManagerUi();
  hideOverlayPages();
  tacticPage.classList.remove("is-hidden");
  tacticPage.scrollTop = 0;
  queueControllerFocus();
}

function openMarketPage() {
  gameStarted = false;
  updateManagerUi();
  hideOverlayPages();
  marketPage.classList.remove("is-hidden");
  marketPage.scrollTop = 0;
  queueControllerFocus();
}

function openLeaguePage() {
  gameStarted = false;
  updateManagerUi();
  hideOverlayPages();
  leaguePage.classList.remove("is-hidden");
  leaguePage.scrollTop = 0;
  queueControllerFocus();
}

function openSimulationPage() {
  gameStarted = false;
  hideOverlayPages();
  simulationPage.classList.remove("is-hidden");
  simulationPage.scrollTop = 0;
  queueControllerFocus();
}

function openSeasonPage() {
  gameStarted = false;
  hideOverlayPages();
  seasonPage.classList.remove("is-hidden");
  seasonPage.scrollTop = 0;
  queueControllerFocus();
}

function openTrainingPage() {
  gameStarted = false;
  hideOverlayPages();
  trainingPage.classList.remove("is-hidden");
  trainingPage.scrollTop = 0;
  queueControllerFocus();
}

function openPlayerProfile(playerId) {
  const player = getManagedPlayers().find((candidate) => candidate.id === playerId);
  if (!player) return;

  playerProfileTitleElement.textContent = player.name;
  playerProfileInfoElement.innerHTML = `
    <h3>${player.name}</h3>
    <p>${player.age} ans - ${player.position} - ${player.style}</p>
    <div class="profile-stat-grid">
      <span>Attaque <b>${player.attack}</b></span>
      <span>Passes <b>${player.pass}</b></span>
      <span>Defense <b>${player.defense}</b></span>
      <span>Flair <b>${player.flair}</b></span>
      <span>Forme <b>${player.fitness}</b></span>
      <span>Moral <b>${player.morale}</b></span>
      ${player.isGoalkeeper ? `<span>Gardien <b>${player.goalkeeping}</b></span>` : ""}
    </div>
    <div class="player-wish">
      <strong>Volonte</strong>
      <span>${player.wish || "Veut aider le groupe."}</span>
    </div>
  `;
  drawProfileModel(player);
  hideOverlayPages();
  playerPage.classList.remove("is-hidden");
  playerPage.scrollTop = 0;
  queueControllerFocus();
}

function drawProfileModel(player) {
  const ctx2 = playerModelCtx;
  const club = getClub();
  ctx2.clearRect(0, 0, playerModelCanvas.width, playerModelCanvas.height);
  const theme = {
    primary: player.isGoalkeeper ? club.goalkeeperKit : club.primary,
    secondary: player.isGoalkeeper ? "#111827" : club.secondary,
    trim: player.isGoalkeeper ? "#f8fafc" : club.trim,
  };
  ctx2.fillStyle = "rgba(2,6,23,0.55)";
  ctx2.fillRect(0, 0, playerModelCanvas.width, playerModelCanvas.height);
  ctx2.fillStyle = "rgba(0,0,0,0.35)";
  ctx2.beginPath();
  ctx2.ellipse(180, 344, 70, 18, 0, 0, Math.PI * 2);
  ctx2.fill();
  ctx2.save();
  ctx2.translate(180, 225);
  ctx2.rotate(0.18);
  ctx2.fillStyle = theme.primary;
  ctx2.fillRect(-35, -65, 70, 95);
  ctx2.fillStyle = theme.secondary;
  ctx2.fillRect(0, -65, 35, 95);
  ctx2.fillStyle = theme.trim;
  ctx2.fillRect(-4, -60, 8, 88);
  ctx2.strokeStyle = player.skin;
  ctx2.lineWidth = 16;
  ctx2.lineCap = "round";
  ctx2.beginPath();
  ctx2.moveTo(-34, -45);
  ctx2.lineTo(-55, 18);
  ctx2.moveTo(34, -45);
  ctx2.lineTo(56, 12);
  ctx2.stroke();
  ctx2.strokeStyle = club.shorts;
  ctx2.lineWidth = 18;
  ctx2.beginPath();
  ctx2.moveTo(-20, 24);
  ctx2.lineTo(-44, 110);
  ctx2.moveTo(20, 24);
  ctx2.lineTo(42, 110);
  ctx2.stroke();
  ctx2.fillStyle = club.shorts;
  ctx2.fillRect(-32, 24, 64, 32);
  ctx2.restore();
  ctx2.fillStyle = player.skin;
  ctx2.beginPath();
  ctx2.ellipse(188, 126, 28, 34, 0.12, 0, Math.PI * 2);
  ctx2.fill();
  ctx2.fillStyle = player.hair;
  ctx2.beginPath();
  ctx2.ellipse(184, 104, 31, 18, -0.1, Math.PI, Math.PI * 2);
  ctx2.fill();
  if (player.hairStyle === "braids") {
    ctx2.strokeStyle = player.hair;
    ctx2.lineWidth = 6;
    for (let i = 0; i < 5; i += 1) {
      ctx2.beginPath();
      ctx2.moveTo(166 + i * 8, 104);
      ctx2.lineTo(153 + i * 7, 72);
      ctx2.stroke();
    }
  }
  ctx2.fillStyle = "#f8fafc";
  ctx2.font = "900 28px Arial Narrow, Arial, sans-serif";
  ctx2.textAlign = "center";
  ctx2.fillText(player.name.toUpperCase(), 180, 390);
}

function openUpdatePage() {
  gameStarted = false;
  hideOverlayPages();
  updatePage.classList.remove("is-hidden");
  updatePage.scrollTop = 0;
  queueControllerFocus();
}

function openMatchChoice() {
  gameStarted = false;
  const next = getNextUserFixture();
  if (next) careerState.opponentClub = next.home === careerState.club ? next.away : next.home;
  hideOverlayPages();
  matchChoice.classList.remove("is-hidden");
  queueControllerFocus();
}

function startDirectedMatch(renderMode) {
  ensureAudio();
  matchRenderMode = renderMode;
  addNews(`${managerFullName()} lance ${teamLabel("blue")} - ${teamLabel("red")} avec ${renderMode === "dots" ? "ronds tactiques" : "joueurs stylises"}.`);
  restartMatch();
}

function saveManagerFromInputs() {
  const previousClub = careerState.club;
  careerState.manager.firstName = managerFirstNameInput.value.trim() || "Coach";
  careerState.manager.lastName = managerLastNameInput.value.trim() || "Eleven";
  careerState.manager.nationality = managerNationalityInput.value.trim() || "Libre";
  careerState.manager.style = managerStyleSelect.value;
  careerState.club = managerClubSelect.value;

  if (previousClub !== careerState.club) {
    careerState.squad = [];
    careerState.lineup = [];
    careerState.keyPlayerId = "";
    careerState.league = createLeagueState();
    careerState.rivalryMission = null;
  }

  ensureLineup();
  careerState.opponentClub = getCurrentOpponentId();
  syncRuntimeTeams();
  addNews(`${managerFullName()} prend le controle du banc de ${getClub().label}.`);
  saveCareer();
  openManagerHub();
}

function resetCareer() {
  localStorage.removeItem("elevenManagerCareer");
  applyCareerData(defaultCareerValues());
  ensureLineup();
  syncRuntimeTeams();
  resetAfterGoal("blue");
  gameStarted = false;
  saveCareer();
  openManagerSetup();
}

function setTactic(tacticName, source = "Bureau") {
  if (!tacticProfiles[tacticName] && tacticName !== "custom") return;
  const tactic = getTacticByName(tacticName);
  careerState.tactic = tacticName;
  careerState.matchInstruction = `${source} : ${tactic.label}`;
  if (gameStarted && source === "Match") {
    coachBoost.timer = 5.5;
    coachBoost.tactic = tacticName;
    showFeedback("TEMPS FORT COACH");
  }
  addNews(`Consigne : ${tactic.label}.`);
  if (!gameStarted || source !== "Match") showFeedback(tactic.label);
  saveCareer();
  updateManagerUi();
}

function applyTraining(focus) {
  const labels = {
    finishing: "Finition",
    passing: "Passes",
    pressing: "Pressing",
    fitness: "Physique",
    flow: "Mental Flow",
  };
  const statMap = {
    finishing: "attack",
    passing: "pass",
    pressing: "defense",
    fitness: "fitness",
    flow: "morale",
  };
  const stat = statMap[focus];
  if (!stat) return;

  if (!careerState.trainingAvailable) {
    trainingTitleElement.textContent = "Seance deja faite";
    trainingSummaryElement.textContent = "Une seule seance est autorisee entre deux matchs. Simule ou dirige le prochain match pour rouvrir le centre.";
    trainingGainsElement.innerHTML = `<div class="sim-row">Aucun gain supplementaire</div>`;
    trainingMoodElement.innerHTML = `<div class="sim-row">Le staff prefere garder les joueurs frais.</div>`;
    trainingTimelineElement.innerHTML = `<div class="sim-row">Repos obligatoire</div>`;
    openTrainingPage();
    return;
  }

  const starters = getStartingPlayers();
  const gains = starters.map((player) => {
    const gain = randomBetween(1.2, 3.1);
    player[stat] = clamp((player[stat] || 60) + gain, 35, 99);
    if (focus !== "fitness") player.fitness = clamp(player.fitness - 0.6, 45, 99);
    return `${player.name} +${gain.toFixed(1)} ${stat}`;
  });

  careerState.trainingAvailable = false;
  careerState.clubMorale = clamp(careerState.clubMorale + (focus === "flow" ? 4 : 1.5), 0, 100);
  careerState.lastTraining = `Derniere seance : ${labels[focus]}.`;
  trainingTitleElement.textContent = `Seance ${labels[focus]}`;
  trainingSummaryElement.textContent = "La seance est simulee comme un mini evenement de vestiaire avant le prochain match.";
  trainingGainsElement.innerHTML = gains.map((item) => `<div class="sim-row">${item}</div>`).join("");
  trainingMoodElement.innerHTML = [
    `Moral club : ${Math.round(careerState.clubMorale)}`,
    `Volonte suivie : ${starters[0]?.wish || "Le groupe reste concentre."}`,
  ].map((item) => `<div class="sim-row">${item}</div>`).join("");
  trainingTimelineElement.innerHTML = [
    "Echauffement technique",
    `Atelier ${labels[focus]}`,
    "Debrief du coach adjoint",
  ].map((item, index) => `<div class="sim-row">${index + 1}. ${item}</div>`).join("");
  addNews(`Le staff valide la seance ${labels[focus]}.`);
  syncRuntimeTeams();
  saveCareer();
  updateManagerUi();
  openTrainingPage();
}

function generateMatchObjective() {
  const pool = [
    { id: "clean", text: "Encaisser 1 but maximum", reward: 5 },
    { id: "score2", text: "Marquer au moins 2 buts", reward: 6 },
    { id: "control", text: "Atteindre 55% de possession", reward: 4 },
    { id: "flow", text: "Declencher le Flow dans la simulation", reward: 5 },
    { id: "shot", text: "Finir avec au moins 7 tirs", reward: 4 },
  ];
  return pool[Math.floor(Math.random() * pool.length)];
}

function objectiveSuccess(objective, sim) {
  if (!objective) return false;
  if (objective.id === "clean") return sim.redScore <= 1;
  if (objective.id === "score2") return sim.blueScore >= 2;
  if (objective.id === "control") return sim.possession >= 55;
  if (objective.id === "flow") return sim.flowTriggered;
  if (objective.id === "shot") return sim.blueShots >= 7;
  return false;
}

function randomGoalCount(expected) {
  let goals = 0;
  const chances = Math.max(1, Math.round(expected * 3));
  for (let i = 0; i < chances; i += 1) {
    if (Math.random() < expected / chances) goals += 1;
  }
  return clamp(goals, 0, 6);
}

function getSeasonSquad(clubId) {
  return clubId === careerState.club ? getManagedPlayers() : getClub(clubId).squad;
}

function weightedSeasonPlayer(players, stat) {
  const candidates = players.filter((player) => !player.isGoalkeeper);
  const pool = candidates.length ? candidates : players;
  const total = pool.reduce((sum, player) => sum + Math.max(8, player[stat] || player.attack || 60), 0);
  let roll = Math.random() * total;

  for (const player of pool) {
    roll -= Math.max(8, player[stat] || player.attack || 60);
    if (roll <= 0) return player;
  }

  return pool[0];
}

function touchSeasonStat(stats, clubId, player) {
  const key = `${clubId}-${player.id || player.name}`;
  if (!stats.players[key]) {
    stats.players[key] = {
      key,
      clubId,
      name: player.name,
      position: player.position,
      goals: 0,
      assists: 0,
      appearances: 0,
    };
  }
  return stats.players[key];
}

function addSeasonMatchStats(stats, fixture, homeGoals, awayGoals) {
  [
    { clubId: fixture.home, goals: homeGoals },
    { clubId: fixture.away, goals: awayGoals },
  ].forEach(({ clubId, goals }) => {
    const squad = getSeasonSquad(clubId);
    const starters = clubId === careerState.club ? getStartingPlayers() : squad.slice(0, 5);
    starters.forEach((player) => {
      touchSeasonStat(stats, clubId, player).appearances += 1;
    });

    for (let i = 0; i < goals; i += 1) {
      const scorer = weightedSeasonPlayer(starters, "attack");
      const assisterPool = starters.filter((player) => player !== scorer && !player.isGoalkeeper);
      const assister = weightedSeasonPlayer(assisterPool.length ? assisterPool : starters, "pass");
      touchSeasonStat(stats, clubId, scorer).goals += 1;
      if (assister && assister !== scorer) touchSeasonStat(stats, clubId, assister).assists += 1;
    }
  });
}

function simulateFixtureForSeason(fixture, stats) {
  const result = simulateFixtureResult(fixture);
  recordFixtureResult(fixture, result.homeScore, result.awayScore);
  addSeasonMatchStats(stats, fixture, result.homeScore, result.awayScore);
  return result;
}

function simulateWholeSeason() {
  if (careerState.seasonReadyForNext && careerState.lastSeasonReport) {
    renderSeasonReport(careerState.lastSeasonReport);
    openSeasonPage();
    return;
  }

  const league = ensureLeague();
  const seasonStats = { players: {} };
  let simulatedMatches = 0;

  league.fixtures
    .filter((fixture) => !fixture.played)
    .forEach((fixture) => {
      simulateFixtureForSeason(fixture, seasonStats);
      simulatedMatches += 1;
    });

  createPlayoffsIfNeeded();
  while (league.playoffs.some((fixture) => !fixture.played)) {
    const fixture = league.playoffs.find((candidate) => !candidate.played);
    simulateFixtureForSeason(fixture, seasonStats);
    simulatedMatches += 1;
    createFinalIfNeeded();
  }

  const table = sortedStandings();
  const playerStats = Object.values(seasonStats.players);
  const teamStats = getManagedPlayers().map((player) => {
    const stat = playerStats.find((entry) => entry.clubId === careerState.club && entry.name === player.name);
    return stat || { name: player.name, position: player.position, appearances: 0, goals: 0, assists: 0, clubId: careerState.club };
  });
  const topScorers = playerStats
    .filter((player) => player.goals > 0)
    .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
    .slice(0, 3);
  const topAssisters = playerStats
    .filter((player) => player.assists > 0)
    .sort((a, b) => b.assists - a.assists || b.goals - a.goals)
    .slice(0, 3);
  const winner = league.trophyWinner || table[0]?.id || careerState.club;
  const userRank = table.findIndex((row) => row.id === careerState.club) + 1;
  const wonTrophy = winner === careerState.club;
  const reward = wonTrophy ? 35 : userRank <= 2 ? 20 : userRank <= 4 ? 12 : 5;

  careerState.budget = clamp(careerState.budget + reward, 0, 300);
  careerState.boardTrust = clamp(careerState.boardTrust + (wonTrophy ? 16 : userRank <= 4 ? 7 : -4), 0, 100);
  careerState.clubMorale = clamp(careerState.clubMorale + (wonTrophy ? 18 : userRank <= 4 ? 8 : -3), 0, 100);
  careerState.week += Math.max(1, simulatedMatches);
  careerState.trainingAvailable = true;
  careerState.seasonReadyForNext = true;
  careerState.lastSeasonReport = {
    seasonNumber: careerState.seasonNumber,
    winner,
    wonTrophy,
    userRank,
    reward,
    table,
    topScorers,
    topAssisters,
    teamStats,
  };

  addNews(`Saison ${careerState.seasonNumber} terminee : ${getClub(winner).label} remporte le Trophee Eleven.`);
  saveCareer();
  updateManagerUi();
  renderSeasonReport(careerState.lastSeasonReport);
  openSeasonPage();
}

function createAwardFallbackFromTable(table) {
  const stats = { players: {} };
  table.forEach((row) => {
    const squad = getSeasonSquad(row.id);
    const starters = row.id === careerState.club ? getStartingPlayers() : squad.slice(0, 5);
    starters.forEach((player) => {
      touchSeasonStat(stats, row.id, player).appearances = Math.max(1, row.played || 10);
    });

    for (let i = 0; i < Math.max(1, row.gf || 1); i += 1) {
      const scorer = weightedSeasonPlayer(starters, "attack");
      const assisterPool = starters.filter((player) => player !== scorer && !player.isGoalkeeper);
      const assister = weightedSeasonPlayer(assisterPool.length ? assisterPool : starters, "pass");
      touchSeasonStat(stats, row.id, scorer).goals += 1;
      if (assister && assister !== scorer) touchSeasonStat(stats, row.id, assister).assists += 1;
    }
  });
  return Object.values(stats.players);
}

function renderSeasonReport(report = careerState.lastSeasonReport) {
  if (!report) return;

  if (!report.topScorers?.length || !report.topAssisters?.length || !report.teamStats?.some((player) => player.goals || player.assists)) {
    const fallbackStats = createAwardFallbackFromTable(report.table || sortedStandings());
    report.topScorers = fallbackStats
      .filter((player) => player.goals > 0)
      .sort((a, b) => b.goals - a.goals || b.assists - a.assists)
      .slice(0, 3);
    report.topAssisters = fallbackStats
      .filter((player) => player.assists > 0)
      .sort((a, b) => b.assists - a.assists || b.goals - a.goals)
      .slice(0, 3);
    report.teamStats = getManagedPlayers().map((player) => {
      return fallbackStats.find((entry) => entry.clubId === careerState.club && entry.name === player.name)
        || { name: player.name, position: player.position, appearances: 0, goals: 0, assists: 0, clubId: careerState.club };
    });
  }

  seasonReportTitleElement.textContent = `Saison ${report.seasonNumber} terminee`;
  seasonSummaryTitleElement.textContent = report.wonTrophy ? "Trophee gagne" : `Champion : ${getClub(report.winner).label}`;
  seasonSummaryTextElement.textContent = report.wonTrophy
    ? `Ton club souleve le Trophee Eleven. Prime +${report.reward}M, confiance et moral en hausse.`
    : `Ton club termine ${report.userRank}e. Prime +${report.reward}M. Clique Saison suivante quand tu veux repartir.`;

  seasonTableElement.innerHTML = report.table.map((row, index) => `
    <div class="league-row ${row.id === careerState.club ? "is-selected" : ""}">
      <b>${index + 1}</b>
      <span>${getClub(row.id).label}</span>
      <span>${row.points} pts</span>
      <small>${row.played}J ${row.wins}V ${row.draws}N ${row.losses}D ${row.gf}-${row.ga}</small>
    </div>
  `).join("");

  seasonScorersElement.innerHTML = report.topScorers.length
    ? report.topScorers.map((player, index) => `<div class="sim-row">${index + 1}. ${player.name} (${getClub(player.clubId).short}) - ${player.goals} buts</div>`).join("")
    : `<div class="sim-row">Aucun buteur notable.</div>`;

  seasonAssistersElement.innerHTML = report.topAssisters.length
    ? report.topAssisters.map((player, index) => `<div class="sim-row">${index + 1}. ${player.name} (${getClub(player.clubId).short}) - ${player.assists} passes</div>`).join("")
    : `<div class="sim-row">Aucun passeur notable.</div>`;

  seasonTeamStatsElement.innerHTML = report.teamStats
    .sort((a, b) => b.goals - a.goals || b.assists - a.assists || b.appearances - a.appearances)
    .map((player) => `
      <div class="sim-row team-stat-row">
        <strong>${player.name}</strong>
        <span>${player.position || "Joueur"}</span>
        <span>${player.appearances} matchs</span>
        <span>${player.goals} buts</span>
        <span>${player.assists} passes</span>
      </div>
    `).join("");
}

function startNextSeason() {
  careerState.seasonNumber += 1;
  careerState.week = 1;
  careerState.league = createLeagueState();
  careerState.trainingAvailable = true;
  careerState.rivalryMission = null;
  careerState.objective = null;
  careerState.lastSimulation = null;
  careerState.seasonReadyForNext = false;
  careerState.matchInstruction = "Lecture du match";
  careerState.opponentClub = getCurrentOpponentId();
  addNews(`Saison ${careerState.seasonNumber} lancee. Le calendrier est pret.`);
  ensureLineup();
  syncRuntimeTeams();
  resetAfterGoal("blue");
  gameStarted = false;
  saveCareer();
  updateManagerUi();
  openManagerHub();
}

function simulateFullMatch() {
  const fixture = getNextUserFixture();
  if (!fixture) {
    renderSimulation({
      blueScore: 0,
      redScore: 0,
      possession: 50,
      blueShots: 0,
      redShots: 0,
      flowTriggered: false,
      scorers: [],
      timeline: [{ minute: 0, text: "Championnat termine." }],
      objective: { text: "Saison terminee" },
      opponentLabel: "",
      missionWon: false,
    }, false);
    openSimulationPage();
    return;
  }

  careerState.opponentClub = fixture.home === careerState.club ? fixture.away : fixture.home;
  syncRuntimeTeams();

  const tactic = getTacticByName(careerState.tactic);
  const identity = clubIdentities[careerState.identity] || clubIdentities.mastery;
  const objective = generateMatchObjective();
  const mission = getRivalryMission(careerState.opponentClub);
  careerState.objective = objective;

  const managedPower = getManagedPower();
  const opponentPower = getClubPower(careerState.opponentClub);
  const tacticAttack = tactic.shootBias * 0.9 + tactic.risk * 0.55 + identity.attackBonus / 22;
  const tacticControl = tactic.passBias * 0.9 + identity.passBonus / 20;
  const tacticDefense = (1 - tactic.risk) * 0.45 + identity.defenseBonus / 20;
  const blueExpected = 0.72 + managedPower / 74 + tacticAttack + Math.random() * 0.55;
  const redExpected = 0.72 + opponentPower / 82 + Math.max(0, tactic.risk - 0.35) * 0.7 - tacticDefense + Math.random() * 0.55;
  let blueScore = randomGoalCount(blueExpected);
  let redScore = randomGoalCount(redExpected);

  if (fixture.phase !== "season" && blueScore === redScore) {
    if (managedPower + Math.random() * 10 > opponentPower + Math.random() * 10) blueScore += 1;
    else redScore += 1;
  }

  const possession = clamp(Math.round(46 + tacticControl * 15 + (managedPower - opponentPower) * 0.18 + randomBetween(-6, 6)), 34, 68);
  const blueShots = clamp(Math.round(4 + blueExpected * 2.2 + tactic.risk * 3 + randomBetween(0, 4)), 2, 16);
  const redShots = clamp(Math.round(4 + redExpected * 2 + Math.max(0, 52 - possession) / 7 + randomBetween(0, 4)), 2, 16);
  const flowTriggered = possession > 54 || blueScore >= 2 || Math.random() < 0.25 + identity.passBonus / 30;
  const scorers = [];
  const timeline = [];
  const starters = getStartingPlayers().filter((player) => !player.isGoalkeeper);
  const opponents = getOpponentPlayers().filter((player) => !player.isGoalkeeper);

  for (let i = 0; i < blueScore; i += 1) {
    const scorer = starters[Math.floor(Math.random() * starters.length)];
    const minute = Math.floor(randomBetween(7, 88));
    scorers.push(`${teamLabel("blue")} ${minute}' ${scorer.name}`);
    timeline.push({ minute, team: "blue", text: `But ${teamLabel("blue")} : ${scorer.name}` });
  }

  for (let i = 0; i < redScore; i += 1) {
    const scorer = opponents[Math.floor(Math.random() * opponents.length)];
    const minute = Math.floor(randomBetween(8, 89));
    scorers.push(`${teamLabel("red")} ${minute}' ${scorer.name}`);
    timeline.push({ minute, team: "red", text: `But ${teamLabel("red")} : ${scorer.name}` });
  }

  if (flowTriggered) timeline.push({ minute: Math.floor(randomBetween(35, 75)), team: "blue", text: `${teamLabel("blue")} active un temps fort Flow` });
  timeline.push({ minute: Math.floor(randomBetween(12, 35)), team: "blue", text: `Consigne cle : ${tactic.label}` });
  timeline.sort((a, b) => a.minute - b.minute);

  const sim = { blueScore, redScore, possession, blueShots, redShots, flowTriggered, scorers, timeline, objective, mission };
  const objectiveWon = objectiveSuccess(objective, sim);
  const missionWon = rivalryMissionSuccess(mission, sim);
  sim.missionWon = missionWon;
  careerState.lastSimulation = sim;
  scoreBlue = blueScore;
  scoreRed = redScore;
  timeLeft = 0;
  matchResolved = true;
  gameStarted = false;

  const homeGoals = fixture.home === careerState.club ? blueScore : redScore;
  const awayGoals = fixture.home === careerState.club ? redScore : blueScore;
  recordFixtureResult(fixture, homeGoals, awayGoals);
  simulateOtherFixturesInRound(fixture);
  createFinalIfNeeded();

  const result = blueScore > redScore ? "victoire" : blueScore < redScore ? "defaite" : "nul";
  careerState.week += 1;
  careerState.trainingAvailable = true;
  careerState.boardTrust = clamp(careerState.boardTrust + (result === "victoire" ? 6 : result === "nul" ? 1 : -4) + (objectiveWon ? 2 : 0), 0, 100);
  careerState.clubMorale = clamp(careerState.clubMorale + (result === "victoire" ? 5 : result === "nul" ? 1 : -3) + (objectiveWon ? 3 : 0) + (missionWon ? mission.reward : 0), 0, 100);
  careerState.budget = clamp(careerState.budget + (result === "victoire" ? 6 : result === "nul" ? 3 : 1) + (objectiveWon ? objective.reward : 0), 0, 250);
  addNews(`Simulation : ${teamLabel("blue")} ${blueScore}-${redScore} ${teamLabel("red")}. Objectif ${objectiveWon ? "reussi" : "rate"}. Mission rivalite ${missionWon ? "validee" : "ratee"}.`);
  saveCareer();
  updateHud();
  renderSimulation(sim, objectiveWon);
  openSimulationPage();
}

function renderSimulation(sim, objectiveWon) {
  simScoreTitleElement.textContent = `${teamLabel("blue")} ${sim.blueScore} - ${sim.redScore} ${teamLabel("red")}`;
  simSummaryElement.textContent = `Objectif : ${sim.objective.text} (${objectiveWon ? "reussi" : "rate"}). Mission : ${sim.mission?.text || "aucune"} (${sim.missionWon ? "validee" : "en cours"}). Budget : ${Math.round(careerState.budget)}M.`;
  simScorersElement.innerHTML = sim.scorers.length
    ? sim.scorers.map((item) => `<div class="sim-row">${item}</div>`).join("")
    : `<div class="sim-row">Aucun buteur</div>`;
  simStatsElement.innerHTML = [
    `Possession ${teamLabel("blue")} : ${sim.possession}%`,
    `Tirs ${teamLabel("blue")} : ${sim.blueShots}`,
    `Tirs ${teamLabel("red")} : ${sim.redShots}`,
    `Flow ${teamLabel("blue")} : ${sim.flowTriggered ? "declenche" : "non declenche"}`,
  ].map((item) => `<div class="sim-row">${item}</div>`).join("");
  simTimelineElement.innerHTML = sim.timeline.map((event) => `<div class="sim-row">${event.minute}' - ${event.text}</div>`).join("");
}

function updateInstallButton(text) {
  if (!installAppButton) return;
  installAppButton.textContent = text;
}

async function installApp() {
  if (!deferredInstallPrompt) {
    window.alert("Pour installer l'app : sur PC utilise l'icone Installer du navigateur. Sur mobile, ouvre le menu du navigateur puis Ajouter a l'ecran d'accueil. Pour une vraie installation hors-ligne sur telephone, le jeu devra etre heberge en HTTPS.");
    return;
  }

  deferredInstallPrompt.prompt();
  const choice = await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallButton(choice.outcome === "accepted" ? "App installee" : "Installer l'app");
}

function registerAppInstall() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      updateInstallButton("Installer l'app");
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton("Installer l'app");
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton("App installee");
  });
}

playButton.addEventListener("click", resetCareer);
loadCareerButton.addEventListener("click", openLoadPage);

settingsButton.addEventListener("click", openManagerHub);
updateButton.addEventListener("click", openUpdatePage);
if (installAppButton) installAppButton.addEventListener("click", installApp);

saveManagerButton.addEventListener("click", saveManagerFromInputs);
loginAccountButton.addEventListener("click", createOrLoginAccount);
saveAccountButton.addEventListener("click", saveCurrentAccountCareer);
editManagerButton.addEventListener("click", openManagerSetup);
openTacticsButton.addEventListener("click", openTacticPage);
openMarketButton.addEventListener("click", openMarketPage);
openLeagueButton.addEventListener("click", openLeaguePage);
simulateMatchButton.addEventListener("click", simulateFullMatch);
simulateSeasonButton.addEventListener("click", simulateWholeSeason);
startMatchButton.addEventListener("click", openMatchChoice);
startClassicMatchButton.addEventListener("click", () => startDirectedMatch("players"));
startDotsMatchButton.addEventListener("click", () => startDirectedMatch("dots"));
cancelMatchChoiceButton.addEventListener("click", openManagerHub);
resetCareerButton.addEventListener("click", resetCareer);

backToMenuButton.addEventListener("click", openMainMenu);
document.querySelectorAll(".backHubButton").forEach((button) => {
  button.addEventListener("click", openManagerHub);
});
document.querySelectorAll(".backMainButton").forEach((button) => {
  button.addEventListener("click", openMainMenu);
});

keyboardModeButton.addEventListener("click", () => setControlMode("keyboard"));
mobileModeButton.addEventListener("click", () => setControlMode("mobile"));
gamepadModeButton.addEventListener("click", () => setControlMode("gamepad"));
nextSeasonButton.addEventListener("click", startNextSeason);

document.querySelectorAll("[data-tactic]").forEach((button) => {
  button.addEventListener("click", () => setTactic(button.dataset.tactic));
});

document.querySelectorAll("[data-training]").forEach((button) => {
  button.addEventListener("click", () => applyTraining(button.dataset.training));
});

saveCustomTacticButton.addEventListener("click", saveCustomTactic);
[customTempoInput, customPassInput, customShootInput, customPressInput, customRiskInput].forEach((input) => {
  input.addEventListener("input", () => {
    customTacticSummaryElement.textContent = `Perso : tempo ${customTempoInput.value}, tirs ${customShootInput.value}, passes ${customPassInput.value}, risque ${customRiskInput.value}.`;
  });
});
keyPlayerSelect.addEventListener("change", () => {
  careerState.keyPlayerId = keyPlayerSelect.value;
  const player = getManagedPlayers().find((candidate) => candidate.id === careerState.keyPlayerId);
  if (player) addNews(`${player.name} devient le joueur cle du plan.`);
  saveCareer();
  updateManagerUi();
});

passButton.addEventListener("click", () => setTactic("possession", "Match"));
shootButton.addEventListener("click", () => setTactic("attack", "Match"));
tackleButton.addEventListener("click", () => setTactic("pressing", "Match"));
dribbleButton.addEventListener("click", () => setTactic("counter", "Match"));
switchButton.addEventListener("click", () => setTactic("defense", "Match"));
restartButton.addEventListener("click", () => {
  ensureAudio();
  restartMatch();
});
menuButton.addEventListener("click", openManagerHub);

document.querySelectorAll("[data-bind-action]").forEach((button) => {
  button.addEventListener("click", () => {
    waitingForBinding = button.dataset.bindAction;
    bindingHint.textContent = `Appuie sur une touche pour ${bindingLabel(waitingForBinding).toLowerCase()}.`;
  });
});

document.querySelectorAll("[data-pad-bind-action]").forEach((button) => {
  button.addEventListener("click", () => {
    cycleGamepadBinding(button.dataset.padBindAction);
  });
});

window.addEventListener("gamepadconnected", (event) => {
  activeGamepadIndex = event.gamepad.index;
  setControlMode("gamepad");
  updateGamepadStatus();
});

window.addEventListener("gamepaddisconnected", () => {
  activeGamepadIndex = null;
  updateGamepadStatus();
});

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  ensureAudio();

  if (waitingForBinding) {
    keyBindings[waitingForBinding] = key;
    waitingForBinding = null;
    bindingHint.textContent = "Touche modifiée.";
    updateBindingButtons();
    event.preventDefault();
    return;
  }

  keys[key] = true;

  if (controlMode !== "keyboard") return;

  if (key === "1") setTactic("possession", "Raccourci");
  if (key === "2") setTactic("attack", "Raccourci");
  if (key === "3") setTactic("pressing", "Raccourci");
  if (key === "4") setTactic("counter", "Raccourci");
  if (key === "5") setTactic("defense", "Raccourci");
  if (key === "0") setTactic("balanced", "Raccourci");
});

window.addEventListener("keyup", (event) => {
  keys[event.key.toLowerCase()] = false;
});

registerAppInstall();
loadCareer();
ensureLeague();
ensureLineup();
syncRuntimeTeams();
updateHud();
updateBindingButtons();
updateGamepadBindingButtons();
if (window.matchMedia && window.matchMedia("(max-width: 760px)").matches) {
  setControlMode("mobile");
}
updateGamepadStatus();
updateManagerInputs();
updateAccountUi();
updateManagerUi();
requestAnimationFrame(gameLoop);
