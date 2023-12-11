
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('attendance_table').insert([
    {
      id: 1,
      date: "9/21/2022",
      first: 'Joe',
      last: 'Prakash ',
      showed_up: 1
    },
    {
      id: 2,
      date: "9/21/2022",
      first: 'Ammaar',
      last: 'Firozi',
      showed_up: 1
    },
    {
      id: 3,
      date: "9/21/2022",
      first: 'WENQI',
      last: 'XU',
      showed_up: 1
    },
    {
      id: 4,
      date: "9/21/2022",
      first: 'Yoga',
      middle: 'Keshnen',
      last: 'Yogaindran ',
      showed_up: 1
    },
    {
      id: 5,
      date: "9/21/2022",
      first: 'Blake',
      last: 'Han',
      showed_up: 1
    },
    {
      id: 6,
      date: "9/21/2022",
      first: 'Diego',
      last: 'Lopez',
      showed_up: 1
    },
    {
      id: 7,
      date: "9/21/2022",
      first: 'Idan',
      last: 'Lau',
      showed_up: 1
    },
    {
      id: 8,
      date: "9/21/2022",
      first: 'Arnav',
      last: 'Kanwal',
      showed_up: 1
    },
    {
      id: 9,
      date: "9/21/2022",
      first: 'Ke',
      last: 'Yang',
      showed_up: 1
    }
  ]);
};
