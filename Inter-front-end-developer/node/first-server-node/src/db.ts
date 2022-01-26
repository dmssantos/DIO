import { Pool } from "pg";

const connectionString = 'postgres://fikvpnza:LPAiS-L3_A3WDtM-xlC7nvyEY7CVL1TG@kesavan.db.elephantsql.com/fikvpnza';

const db = new Pool({connectionString});

export default db;