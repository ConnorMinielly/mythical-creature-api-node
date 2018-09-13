import mongoose from 'mongoose';

const creds = {
  user: 'connor',
  pass: 'mythicspass1',
};

export default mongoose.connect(
  `mongodb://${creds.user}:${
    creds.pass
  }@ds155862.mlab.com:55862/mythical-creatures`,
);
