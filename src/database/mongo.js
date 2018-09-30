import mongoose from 'mongoose';

const creds = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
};

export default mongoose.connect(
  `mongodb://${creds.user}:${
    creds.pass
  }@ds155862.mlab.com:55862/mythical-creatures`,
);
