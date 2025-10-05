elements.acid = {
    hidden: true,
}

elements.peracetic_acid = {
    ignore: ["gold","glass"],
    color: "#E1F4F5",
	behavior: [
		"XX|DB%1|XX",
		"DB%1 AND M2|XX|DB%1 AND M2",
		"DB%1 AND M2|DB%2 AND M1|DB%1 AND M2",
    ],
    category: "acids",
    tempHigh: "99",
    tempLow: "-1",
    stateHigh: ["fire","fire","fire","acid_gas"],
    stateLow: "frozen_peracetic_acid",
    state: "liquid"
}


elements.frozen_peracetic_acid = {
    hidden: true,
    color: "#D8EFF0",
    behavior: behaviors.SOLID,
    category: "solids",
    tempHigh: "-1",
    stateHigh: ["peracetic_acid"],
    state: "solid"
}

elements.alcohol.reactions.vinegar = {elem1: null, elem2: "peracetic_acid"}


elements.hydrochloric_acid = {
    ignore: ["gold","nitric_acid","aqua_regia","glass"],
    color: "#FAFAE6",
	reactions: {
    "nitric_acid": { elem1:null, elem2:"aqua_regia" }
    },
    behavior: [
		"XX|DB%1|XX",
		"DB%2 AND M2|XX|DB%2 AND M2",
		"DB%2 AND M2|DB%4 AND M1|DB%2 AND M2",
    ],
    category: "acids",
    tempHigh: "110",
    tempLow: "-25",
    stateHigh: ["hcl_gas","hcl_gas","hcl_gas","hcl_gas","steam"],
    stateLow: "hcl_ice",
    state: "liquid"
}

elements.hcl_gas = {
    ignore: ["gold"],
    hidden: true,
    color: "#EDEDDF",
	behavior: [
		"M1|DB%2 AND M1|M1",
		"DB%2 AND M1|XX|DB%2 AND M1",
		"DB%2 AND M1|DB%4 AND M1|DB%2 AND M1",
	],
    category: "gases",
    tempLow: "110",
    stateLow: "hydrochloric_acid",
    state: "solid"
}

elements.hcl_ice = {
    hidden: true,
    color: "#E7E8E6",
    behavior: behaviors.SOLID,
    category: "solids",
    tempHigh: "-25",
    stateHigh: "hydrochloric_acid",
    state: "solid"
}

elements.nitric_acid = {
    ignore: ["gold","hydrochloric_acid","aqua_regia","glass"],
    color: "#CFCCC0",
	behavior: [
		"XX|DB%1|XX",
		"DB%1.5 AND M2|XX|DB%1.5 AND M2",
		"DB%1.5 AND M2|DB%3 AND M1|DB%1.5 AND M2",
    ],
    category: "acids",
    tempHigh: "83",
    tempLow: "-42",
    stateHigh: ["nitric_gas","nitric_gas","steam"],
    stateLow: "nitric_ice",
    state: "liquid"
}

elements.nitric_gas = {
    ignore: ["gold"],
    hidden: true,
    color: "#D6D5C7",
	behavior: [
		"M1|DB%1.5 AND M1|M1",
		"DB%1.5 AND M1|XX|DB%1.5 AND M1",
		"DB%1.5 AND M1|DB%3 AND M1|DB%1.5 AND M1",
	],
    category: "gases",
    tempLow: "83",
    stateLow: "nitric_acid",
    state: "solid"
}

elements.nitric_ice = {
    hidden: true,
    color: "#DBDAD3",
    behavior: behaviors.SOLID,
    category: "solids",
    tempHigh: "-42",
    stateHigh: "nitric_acid",
    state: "solid"
}

elements.aqua_regia = {
    ignore: ["hydrochloric_acid","nitric_acid","glass"],
    color: "#E3D5B3",
	behavior: [
		"XX|DB%5|XX",
		"DB%5 AND M2|XX|DB%5 AND M2",
		"DB%5 AND M2|DB%10 AND M1|DB%5 AND M2",
    ],
    category: "acids",
    tempHigh: "108",
    tempLow: "-42",
    stateHigh: ["fire","fire","nitric_gas","hcl_gas"],
    stateLow: ["nitric_ice","hcl_ice"],
    state: "liquid"
}
