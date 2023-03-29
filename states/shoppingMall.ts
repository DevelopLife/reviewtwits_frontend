const state = {
  averageStarScore: 4.67,
  totalReviewCount: 123000,
  recentReviewCount: 104,
  '[].satisfyList': [
    {
      id: 1,
      good: {
        goodString: '예상보다 맛있어요',
        goodPercent: 0.66,
      },
      moderate: {
        moderateString: '괜찮아요',
        moderatePercent: 0.22,
      },
      bad: {
        badString: '예상보다 맛없어요',
        badPercent: 0.11,
      },
    },
    {
      id: 2,
      good: {
        goodString: '조리가 간편해요',
        goodPercent: 0.44,
      },
      moderate: {
        moderateString: '보통이에요',
        moderatePercent: 0.33,
      },
      bad: {
        badString: '조리하기 불편해요',
        badPercent: 0.22,
      },
    },
  ],
  starScoreArray: [0.1, 0.1, 0.2, 0.3, 0.4],
};

export { state };
