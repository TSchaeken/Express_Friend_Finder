const logic = {
  friends: [
    {
      name: 'Michael',
      answers: [1, 3, 3, 1, 2, 5, 5, 0, 4, 3],
      description:
        "Michael is looking for a bud. A bud that's looking for a pal."
    },
    {
      name: 'Janelle',
      answers: [2, 3, 2, 1, 1, 2, 4, 2, 4, 2],
      description: 'Fun loving Janelle is just looking for a pal!'
    },
    {
      name: 'Jacob',
      answers: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      description: 'Jacob likes video games and bugs. You guys will get along.'
    },
    {
      name: 'Quinn',
      answers: [4, 1, 3, 5, 2, 5, 3, 4, 4, 5],
      description: 'Jacob likes video games and bugs. You guys will get along.'
    }
  ],
  comparison(values) {
    for (let index = 0; index < this.friends.length; index++) {
      this.friends[index].differential = Math.abs(
        this.friends[index].answers.reduce((a, b) => a + b, 0) -
          values.reduce((a, b) => parseInt(a) + parseInt(b), 0)
      );
    }
    const friend = this.friends.sort(
      (a, b) => (a.differential > b.differential ? 1 : -1)
    );
    return friend[0];
  }
};

module.exports = logic;

// logic.comparison();
