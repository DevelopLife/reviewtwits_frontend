import useStatistics from 'hooks/queries/statistics';
import useDates from 'hooks/useDates';

const useVisitorChart = () => {
  const {
    referenceDate,
    focusedDate,
    changeFocusedDate,
    changeReferenceDateIntoPreviousReferenceDate,
    changeReferenceDateIntoNextReferenceDate,
  } = useDates();

  const { visitGraphInfosQuery } = useStatistics({
    projectId: '25020',
    // TODO: referenceDate를 이용하여 api 요청하도록 변경
    // referenceDate
  });

  const visitInfos = visitGraphInfosQuery.data?.data?.visitInfo.map(
    ({ timeStamp }) => new Date(timeStamp)
  );

  return {
    referenceDate,
    focusedDate,
    visitInfos: visitGraphInfosQuery.data?.data?.visitInfo,
    onClickBar: changeFocusedDate,
    onClickPrevButton: () =>
      visitInfos?.length &&
      changeReferenceDateIntoPreviousReferenceDate(visitInfos),
    onClickNextButton: () =>
      visitInfos?.length &&
      changeReferenceDateIntoNextReferenceDate(visitInfos),
  };
};

export default useVisitorChart;
