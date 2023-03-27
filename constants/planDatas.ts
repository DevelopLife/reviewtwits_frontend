import { PricePlan } from 'api/projects';

type PlanDatas = Record<
  string,
  { title: PricePlan; price: number; options: string[] }
>;

export const PLAN_DATAS: PlanDatas = {
  free: {
    title: 'Free',
    price: 0,
    options: [
      '하루 최대 10,000 페이지 뷰',
      'Ad-Supported',
      '2개 프로젝트 생성가능',
    ],
  },
  plus: {
    title: 'Plus',
    price: 11,
    options: ['하루 최대 50,000 페이지 뷰', 'Ad-Free', '5개 프로젝트 생성가능'],
  },
  pro: {
    title: 'Pro',
    price: 110,
    options: [
      '하루 최대 250,000 페이지 뷰',
      'Ad-Free',
      '10개 프로젝트 생성가능',
      'API 지원',
      '분석툴 지원',
    ],
  },
  business: {
    title: 'Business',
    price: -1,
    options: [
      'SSO 통합',
      '프로젝트 생성 무제한',
      '페이지뷰 무제한',
      '통계 전문상담 서비스',
      '직접 댓글 관리 서비스',
    ],
  },
};
