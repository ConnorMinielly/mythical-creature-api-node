export default {
  Query: {
    mythics: async (parent, args, { Mythics }) => {
      // TODO: Not Accounting For Possible Errors
      const allMythics = await Mythics.find();
      console.log(allMythics);
      return allMythics;
    },
    mythic: async (parent, { name }, { Mythics }) => {
      // TODO: Not Accounting For Possible Errors
      const oneMythics = await Mythics.findOne({ name });
      console.log(oneMythics);
      return oneMythics;
    },
  },
  Mutation: {
    summon: async (
      parent,
      { name, description, country, powers, weaknesses, rank },
      { Mythics },
    ) => {
      if (await Mythics.findOne({ name })) {
        throw new Error('Thats not a unique mythical creature!');
      }
      await Mythics.create({
        name,
        description,
        country,
        powers,
        weaknesses,
        rank,
      }).catch(() => {
        throw new Error('Cannot summon  mythical creature!!');
      });
      return true;
    },
    banish: async (parent, { name }, { Mythics }) => {
      await Mythics.deleteOne({
        name,
      }).catch(() => {
        throw new Error(`Cannot banish mythical creature with name ${name}!!`);
      });
      return true;
    },
  },
};
