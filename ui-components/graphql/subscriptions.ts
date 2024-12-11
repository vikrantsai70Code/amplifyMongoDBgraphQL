/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppeals = /* GraphQL */ `
  subscription OnCreateAppeals($filter: ModelSubscriptionAppealsFilterInput) {
    onCreateAppeals(filter: $filter) {
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
export const onCreateAwards = /* GraphQL */ `
  subscription OnCreateAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onCreateAwards(filter: $filter) {
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
export const onCreateCostAndAid = /* GraphQL */ `
  subscription OnCreateCostAndAid(
    $filter: ModelSubscriptionCostAndAidFilterInput
  ) {
    onCreateCostAndAid(filter: $filter) {
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
export const onCreateDisbursement = /* GraphQL */ `
  subscription OnCreateDisbursement(
    $filter: ModelSubscriptionDisbursementFilterInput
  ) {
    onCreateDisbursement(filter: $filter) {
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
export const onCreateFAFSAApplications = /* GraphQL */ `
  subscription OnCreateFAFSAApplications(
    $filter: ModelSubscriptionFAFSAApplicationsFilterInput
  ) {
    onCreateFAFSAApplications(filter: $filter) {
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
export const onCreateFinancialInformation = /* GraphQL */ `
  subscription OnCreateFinancialInformation(
    $filter: ModelSubscriptionFinancialInformationFilterInput
  ) {
    onCreateFinancialInformation(filter: $filter) {
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
export const onCreateSchoolEnrollment = /* GraphQL */ `
  subscription OnCreateSchoolEnrollment(
    $filter: ModelSubscriptionSchoolEnrollmentFilterInput
  ) {
    onCreateSchoolEnrollment(filter: $filter) {
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
export const onCreateStudents = /* GraphQL */ `
  subscription OnCreateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onCreateStudents(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAppeals = /* GraphQL */ `
  subscription OnDeleteAppeals($filter: ModelSubscriptionAppealsFilterInput) {
    onDeleteAppeals(filter: $filter) {
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
export const onDeleteAwards = /* GraphQL */ `
  subscription OnDeleteAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onDeleteAwards(filter: $filter) {
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
export const onDeleteCostAndAid = /* GraphQL */ `
  subscription OnDeleteCostAndAid(
    $filter: ModelSubscriptionCostAndAidFilterInput
  ) {
    onDeleteCostAndAid(filter: $filter) {
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
export const onDeleteDisbursement = /* GraphQL */ `
  subscription OnDeleteDisbursement(
    $filter: ModelSubscriptionDisbursementFilterInput
  ) {
    onDeleteDisbursement(filter: $filter) {
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
export const onDeleteFAFSAApplications = /* GraphQL */ `
  subscription OnDeleteFAFSAApplications(
    $filter: ModelSubscriptionFAFSAApplicationsFilterInput
  ) {
    onDeleteFAFSAApplications(filter: $filter) {
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
export const onDeleteFinancialInformation = /* GraphQL */ `
  subscription OnDeleteFinancialInformation(
    $filter: ModelSubscriptionFinancialInformationFilterInput
  ) {
    onDeleteFinancialInformation(filter: $filter) {
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
export const onDeleteSchoolEnrollment = /* GraphQL */ `
  subscription OnDeleteSchoolEnrollment(
    $filter: ModelSubscriptionSchoolEnrollmentFilterInput
  ) {
    onDeleteSchoolEnrollment(filter: $filter) {
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
export const onDeleteStudents = /* GraphQL */ `
  subscription OnDeleteStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onDeleteStudents(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAppeals = /* GraphQL */ `
  subscription OnUpdateAppeals($filter: ModelSubscriptionAppealsFilterInput) {
    onUpdateAppeals(filter: $filter) {
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
export const onUpdateAwards = /* GraphQL */ `
  subscription OnUpdateAwards($filter: ModelSubscriptionAwardsFilterInput) {
    onUpdateAwards(filter: $filter) {
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
export const onUpdateCostAndAid = /* GraphQL */ `
  subscription OnUpdateCostAndAid(
    $filter: ModelSubscriptionCostAndAidFilterInput
  ) {
    onUpdateCostAndAid(filter: $filter) {
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
export const onUpdateDisbursement = /* GraphQL */ `
  subscription OnUpdateDisbursement(
    $filter: ModelSubscriptionDisbursementFilterInput
  ) {
    onUpdateDisbursement(filter: $filter) {
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
export const onUpdateFAFSAApplications = /* GraphQL */ `
  subscription OnUpdateFAFSAApplications(
    $filter: ModelSubscriptionFAFSAApplicationsFilterInput
  ) {
    onUpdateFAFSAApplications(filter: $filter) {
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
export const onUpdateFinancialInformation = /* GraphQL */ `
  subscription OnUpdateFinancialInformation(
    $filter: ModelSubscriptionFinancialInformationFilterInput
  ) {
    onUpdateFinancialInformation(filter: $filter) {
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
export const onUpdateSchoolEnrollment = /* GraphQL */ `
  subscription OnUpdateSchoolEnrollment(
    $filter: ModelSubscriptionSchoolEnrollmentFilterInput
  ) {
    onUpdateSchoolEnrollment(filter: $filter) {
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
export const onUpdateStudents = /* GraphQL */ `
  subscription OnUpdateStudents($filter: ModelSubscriptionStudentsFilterInput) {
    onUpdateStudents(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
