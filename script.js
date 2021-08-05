
class Hero {
    constructor() {
        const names = ["Alys","Angharad","Beca","Bethan","Carys","Catrin","Ceri","Efa","Elin","Erin","Ffion","Gwen","Heledd","Lowri","Mari","Megan","Nia","Rhian","Rhiannon","Sara","Siân","Sioned","Aled","Cai","Carwyn","Dafydd","Dylan","Elis","Emyr","Gareth","Gethin","Gruffudd","Harri","Ieuan","Iwan","Jac","Marc","Osian","Owain","Owen","Rhodri","Rhys","Siôn","Steffan","Tomos"];
        let randName = names[Math.floor(Math.random()*names.length)];
        this.name = randName;
        this.level = 1;
        this.job = "NONE";
        this.strength = Math.ceil(Math.random()*3);
        this.speed = Math.ceil(Math.random()*3);
        this.maxHealth = Math.ceil(Math.random()*6)+6;
        this.currentHealth = this.maxHealth;
    }

    heal() {
        this.currentHealth = this.maxHealth;
    }

    levelUp() {
        this.level++;
    }
}

class Room {

    constructor(level) {

        const adjectives = ["dark","small","great","deep","natural","big","sacred","secret","shallow","huge","rocky","vast","main","hidden","black","gloomy","dry","inner","hollow","narrow","artificial","ancient","lonely","large","damp","cold","cool","mysterious","tiny","remarkable","warm","crystal","spacious","smaller","remote","beautiful","enormous","prehistoric","mammoth","dim","solitary","wonderful","magic","enchanted","vacant","double","corycian","sepulchral","cut","immense","shadowy","coral-like","strange","deep","darksome","curious"];
        const areas = ["chamber","clearing","area","glade","wood","swamp","forest","cave","ruin","dungeon","wetland","mire","cavern","patch of darkness","space","cavern","grotto","cavity","den","hollow","pothole","rock shelter","subterranean area","tunnel","dugout","hole"]
        const density = ["with","full of","marked by","and spot","and see","and note"]
        const sights = ["tangles of dark ivy","ancient oaks","pines","white birch trees","yellow lichen","thick mosses","strange mushrooms","creeping vines","withered ferns","dead trees","burned trees","piles of ash","rotting wood","small puddles","rivulets of water","strange, chalky stones","glowing fungus","shattered weapons","skeletons","gravestones","pools of water","crumbling ruins","neglected stone walls","broken furniture","rusted tools","dried bones","stalactites","stalagmites","piles of guano","bits of rusted metal","corpses","spider eggs","spider webs","tombs","stone cairns","strange carvings","cave paintings","unknown glyphs","claw-marks in the dirt","wide roots","thorn bushes","poisonous berries","peat bogs","thin reeds","round stones","animal tracks","tufts of fur"];
        const smells = ["abominable","acid","acrid","agreeable","ammoniacal","animal","antiseptic","appetizing","aromatic","awful","bad","beautiful","better","bitter","briny","burnt","chemical","clean","cloying","coppery","curious","damp","dank","delicious","delightful","","different","disagreeable","disgusting","distinct","distinctive","dreadful","dry","dusty","earthy","enticing","evil","familiar","fetid","fine","fishy","flowery","foetid","foul","fragrant","fresh","fruity","funky","funny","glorious","good","greasy","great","green","harsh","heady","heavenly","heavy","homely","horrible","horrid","hot","ill","indescribable","intense","intolerable","keen","like","lingering","little","lovely","medicinal","metallic","moist","moldy","mouldy","musky","musty","nasty","natural","nauseating","nauseous","new","nice","noisome","noxious","odd","offensive","oily","old","only","other","overpowering","overwhelming","own","particular","peculiar","penetrating","pervading","pervasive","pleasant","pleasing","potent","powerful","pungent","putrid","rancid","rank","raw","refreshing","repulsive","","resinous","rich","ripe","rotten","rotting","salty","savory","savoury","sharp","sick","sickening","sickly","skunk","slight","smoke","smoky","soapy","soft","sour","special","spicy","stale","stifling","stinking","strange","strong","stronger","stuffy","subtle","suffocating","sulfurous","sulphureous","","sulphurous","sure","sweaty","sweet","sweeter","sweetest","sweetish","tangy","tantalizing","terrible","thick","unfamiliar","unique","unmistakable","unpleasant","unusual","unwholesome","vague","vile","weird","wholesome","wonderful","woodsy","woody"];
        const tones = ["boisterous","low-pitched","shrill","brittle","mellifluous","silent","calm","melodic","smooth","clamorous","melodious","soft","croaky","muffled","soundless","discordant","musical","dissonant","muted","squeaky","dull","noiseless","strong","earsplitting","noisy","sweet","enjoyable","faint","gentle","piercing","thundering","gruff","pleasing","thunderous","half-deafening","quiet","tranquil","rasping","tuneful","harmonious","raspy","harsh","raucous","high","resonant","velvety","high-pitched","riotous","hoarse","husky","screaky","whispered","loud","screaming","low"];
        const sounds = ["screech","bark","peep","twittering","trill","cheep","chirp","hoot","squeak","song","call","click","wheeze","clack","clatter","grating","grinding","growl","swish","shriek","squawk","cluck","cackle","ping"];
        const feels = ["muggy","sweltering","pressing","thick","languid","sticky","suffocating","gray","misty","soupy","perfumed","swift","lively","breezy","aromatic","chemically","charged","prickly","lifeless","spicy","light","malodorous","clear","hazy","dirty","uplifting","fresh","smoky","dreary","flat","oily","tepid","lukewarm","toxic","boiling"];
    
        this.level = level;
        this.monsters = Math.ceil(Math.random()*4);
        this.lootCount = Math.ceil(Math.random()*3);

        this.adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
        this.area = areas[Math.floor(Math.random()*areas.length)];
        this.density = density[Math.floor(Math.random()*density.length)];
        this.sight = sights[Math.floor(Math.random()*sights.length)];
        this.smell = smells[Math.floor(Math.random()*smells.length)];
        this.tone = tones[Math.floor(Math.random()*tones.length)];
        this.sound = sounds[Math.floor(Math.random()*sounds.length)];
        this.feel = feels[Math.floor(Math.random()*feels.length)];
    }

    delveDeeper() {
        this.level++;
    }

    resetDelve() {
        this.level = 1;
    }
}

const hero1 = new Hero();
console.log(hero1);

const room1 = new Room(1);
console.log(room1);

const weapons = [
    {n: "hands", damage: 1, range: 0, price: 0},
    {n: "staff", damage: 1, range: 2, price: 1},
    {n: "dagger", damage: 2, range: 0, price: 1},
    {n: "axe", damage: 3, range: 1, price: 3},
    {n: "spear", damage: 3, range: 2, price: 3},
    {n: "bow", damage: 2, range: 3, price: 4},
    {n: "sword", damage: 4, range: 1, price: 5},
];

const armor = [
    {n: "none", aRating: 0, price: 0},
    {n: "leather", aRating: 1, price: 3},
    {n: "chain", aRating: 2, price: 6},
    {n: "plate", aRating: 3, price: 9}
];

const gear = [
    {n: "torch", description: "each trip into the wild uses one torch", price: 1},
    {n: "ration", description: "rations can be used to restore health in camp", price: 1},
    {n: "shield", description: "a shield grants extra armor", price: 4},
    {n: "helmet", description: "a helmet grants extra armor", price: 3},
    {n: "cloak", description: "a cloak makes you better at sneaking", price: 3}
];

const spells = [
    {n: "Mage Armor", description: "Your armor becomes more effective!", property: "armor", bonus: 0},
    {n: "Cloak of Shadows", description: "You are much better at sneaking!", property: "stealth", bonus: 0},
    {n: "Fireball", description: "You do substantial extra damage!", property: "damage", bonus: 0},
    {n: "Levitation", description: "You are much better at fleeing!", property: "speed", bonus: 4}
];