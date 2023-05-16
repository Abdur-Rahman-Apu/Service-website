var queryString = location.search.substring(1);

// find specific data

const caseDetails = (data, projectId) => {
  const findData = data.find((item) => item.id == projectId);
  console.log(findData);
};

getAllData(caseDetails, queryString);
