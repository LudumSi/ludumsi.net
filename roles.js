
class Guild{
	constructor(name, roleslist, color){
			this.name = name;
			this.roleslist = roleslist;
			this.color = color;
	}
}

engineers = new Guild("Guild of Engineers", ["Redstone Engineer", "Pyrotech", "Dyer", "Entertainer"], "red");
miners = new Guild("Order of Stone", ["Miner", "Mason", "Guard", "Inspector"], "orange");
farmers = new Guild("Golden Hand Cooperative", ["Farmer", "Rancher", "Banker", "Trader"], "yellow");
woodsmen = new Guild("Sylvan Lodge", ["Forester", "Monster Hunter", "Librarian", "Scholar"], "green");
mafia = new Guild("Dockworker's Union", ["Fisher", "Quartermaster", "Lawyer", "Legislator"], "blue");
wizards = new Guild("Occult League", ["Alchemist", "Enchanter", "Dimensional Delver", "Priest"], "purple");

guildslist = [engineers, miners, farmers, woodsmen, mafia, wizards];

/*
guildslist = [
	["Guild of Engineers", "Redstone, fireworks, dyes, entertainment"],
	["Order of Stone", "Mining, stoneworking, military, law enforcement"],
	["Golden Hand Cooperative", "Farming, food, animals, banking, trading"],
	["Sylvan Lodge", "Forestry, wood, mob hunting, books, knowledge, academia"],
	["Dockworker's Union", "Fishing, storage, rails, logistics, law, judiciary"],
	["Occult League", "Potions, enchantments, dimensions, religion, occultism"]
];

tribelist = [
	["Children of Crimson","Red is their color, and red is their way"],
	["Azure Kindred","Blue is their color, and blue is their way"],
	["Verdant Folk","Green is their color, and green is their way"]
];
*/

secretlist = [
	["Loyalist","You are fiercely loyal to the Ruler, and follow them faithfully"],
	["Revolutionary","You want to change the world through pen or sword, no matter what the powerful think"],
	["Cultist","You worship dark and unpleasant gods. You must maintain a secret shrine to them, and defend it from the sight of outsiders"],
	["Hoarder","Pick a specific item, and hoard as many of that item as possible in a secret location"],
	["Secret Keeper","You love surprises and secrets, and must scatter them across the world"],
	["Salesman","You write spam mail, and leave it in people's houses"],
	["Obsessed","Choose a random player. You are obsessed with them and must follow them around, ideally without their knowledge"],
	["Shy","Choose a random player. You are afraid of them and must avoid their gaze"],
	["Spherist","You secretly believe in the mythical solid known as the sphere, and hate all those who deny its existance"],
	["Anti-Spherist","You secretly detest the mythical solid known as the sphere, and hate all those who insist it exists"],
	["Gift-giver","You just love everyone soooo much! And you secretly give them little gifts to show it"],
	["Usurper","You crave personal power, and seek to become the Ruler"],
	["Vampire","You hate the sun, and must not go above ground during the day. You must remove or convert anyone who learns your terrible secret"]
];

function pickChance(chance){
	roll = Math.floor(Math.random() * 101);
	return roll <= chance;
}

function pickElement(list){
	return list[Math.floor(Math.random() * list.length)];
}

function addGuild(guilds){
	
	guild = pickElement(guilds);
	roletext = pickElement(guild.roleslist);
	
	header = document.createElement("h2");
	header.innerText = roletext;
	header.className = "role";
	roleslist.appendChild(header);
	
	newrole = document.createElement("p");
	bodytext = "You are a member of the " + guild.name + ". Their color is " + guild.color;
	newrole.innerText = bodytext;
	newrole.className = "role";
	roleslist.appendChild(newrole);
}

function addSimpleRole(roleslist, textlist){
	
	role_tuple = pickElement(textlist);
	headertext = role_tuple[0];
	bodytext = role_tuple[1];
	
	header = document.createElement("h2");
	header.innerText = headertext;
	header.className = "role";
	roleslist.appendChild(header);
	
	newrole = document.createElement("p");
	newrole.innerText = bodytext;
	newrole.className = "role";
	roleslist.appendChild(newrole);
}

function getRoles(){
	
	currentroles = document.getElementsByClassName("role");
	while(currentroles.length > 0){
        currentroles[0].parentNode.removeChild(currentroles[0]);
    }
	
	roleslist = document.getElementById("roleresults");
	
	addGuild(guildslist);
	//addRole(roleslist, tribelist);
	if(pickChance(30)){
		addSimpleRole(roleslist, secretlist);
	}
	
}

window.addEventListener('load', function() {
	document.getElementById('rolebutton').onclick = getRoles;
})