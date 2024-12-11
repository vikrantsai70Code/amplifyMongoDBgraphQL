/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppeals = /* GraphQL */ `
  query GetAppeals($id: ID!) {
    getAppeals(id: $id) {
      appealId
      appealReasons
      createdAt
      fafsaId
      id
      supportingDocuments
      updatedAt
      __typename
    }
  }
`;
export const getAwards = /* GraphQL */ `
  query GetAwards($id: ID!) {
    getAwards(id: $id) {
      awardDecision
      awardId
      awardPackageDetails
      createdAt
      fafsaId
      id
      loanEligibility
      pellGrantEligibility
      updatedAt
      __typename
    }
  }
`;
export const getCostAndAid = /* GraphQL */ `
  query GetCostAndAid($id: ID!) {
    getCostAndAid(id: $id) {
      aidPackageDetails
      costAidId
      costOfAttendance
      createdAt
      fafsaId
      id
      updatedAt
      __typename
    }
  }
`;
export const getDisbursement = /* GraphQL */ `
  query GetDisbursement($id: ID!) {
    getDisbursement(id: $id) {
      bankingDetails
      createdAt
      disbursementId
      disbursementRecords
      fafsaId
      id
      paymentSchedule
      updatedAt
      __typename
    }
  }
`;
export const getFAFSAApplications = /* GraphQL */ `
  query GetFAFSAApplications($id: ID!) {
    getFAFSAApplications(id: $id) {
      applicationDate
      createdAt
      drtResults
      enrollmentDetails
      fafsaId
      id
      schoolCodes
      studentId
      updatedAt
      __typename
    }
  }
`;
export const getFinancialInformation = /* GraphQL */ `
  query GetFinancialInformation($id: ID!) {
    getFinancialInformation(id: $id) {
      createdAt
      efc
      financialInfoId
      id
      irsData
      studentId
      taxableIncome
      untaxedIncome
      updatedAt
      __typename
    }
  }
`;
export const getSchoolEnrollment = /* GraphQL */ `
  query GetSchoolEnrollment($id: ID!) {
    getSchoolEnrollment(id: $id) {
      createdAt
      enrollmentId
      fafsaId
      id
      schoolConfirmationStatus
      updatedAt
      verificationData
      __typename
    }
  }
`;
export const getStudents = /* GraphQL */ `
  query GetStudents($id: ID!) {
    getStudents(id: $id) {
      createdAt
      dependencyStatus
      dob
      firstName
      householdSize
      id
      lastName
      ssn
      studentId
      updatedAt
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const listAppeals = /* GraphQL */ `
  query ListAppeals(
    $filter: ModelAppealsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        appealId
        appealReasons
        createdAt
        fafsaId
        id
        supportingDocuments
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listAwards = /* GraphQL */ `
  query ListAwards(
    $filter: ModelAwardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAwards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        awardDecision
        awardId
        awardPackageDetails
        createdAt
        fafsaId
        id
        loanEligibility
        pellGrantEligibility
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCostAndAids = /* GraphQL */ `
  query ListCostAndAids(
    $filter: ModelCostAndAidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCostAndAids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aidPackageDetails
        costAidId
        costOfAttendance
        createdAt
        fafsaId
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDisbursements = /* GraphQL */ `
  query ListDisbursements(
    $filter: ModelDisbursementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDisbursements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bankingDetails
        createdAt
        disbursementId
        disbursementRecords
        fafsaId
        id
        paymentSchedule
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listFAFSAApplications = /* GraphQL */ `
  query ListFAFSAApplications(
    $filter: ModelFAFSAApplicationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAFSAApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        applicationDate
        createdAt
        drtResults
        enrollmentDetails
        fafsaId
        id
        schoolCodes
        studentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listFinancialInformations = /* GraphQL */ `
  query ListFinancialInformations(
    $filter: ModelFinancialInformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFinancialInformations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        efc
        financialInfoId
        id
        irsData
        studentId
        taxableIncome
        untaxedIncome
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSchoolEnrollments = /* GraphQL */ `
  query ListSchoolEnrollments(
    $filter: ModelSchoolEnrollmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchoolEnrollments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        enrollmentId
        fafsaId
        id
        schoolConfirmationStatus
        updatedAt
        verificationData
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        dependencyStatus
        dob
        firstName
        householdSize
        id
        lastName
        ssn
        studentId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
