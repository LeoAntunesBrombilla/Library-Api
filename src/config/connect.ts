import mongoose from 'mongoose';

type DBInput = {
  db: string;
};

const connect = async ({ db }: DBInput) => {
  try {
    mongoose.connect(db);
    console.log(`Connected to database`);
  } catch (error: any) {
    console.error(`Error connecting to database :`, error);
    return process.exit(1);
  }
};

export default connect;
