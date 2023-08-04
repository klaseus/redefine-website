
import fs from 'fs';

// Read the local JSON file
const rawData = fs.readFileSync({bossData}, 'utf-8');
const data = JSON.parse(rawData);
const extractedData = data.roster.map(player => ({
    name: player.character.name,
    role: player.character.spec.role
}));

console.log(extractedData);