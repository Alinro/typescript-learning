import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches);

// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);



console.log(`Man United won ${manUnitedWins} games`);
