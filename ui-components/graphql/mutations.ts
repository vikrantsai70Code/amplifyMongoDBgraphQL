/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppeals = /* GraphQL */ `
  mutation CreateAppeals(
    $condition: ModelAppealsConditionInput
    $input: CreateAppealsInput!
  ) {
    createAppeals(condition: $condition, input: $input) {
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
export const createAwards = /* GraphQL */ `
  mutation CreateAwards(
    $condition: ModelAwardsConditionInput
    $input: CreateAwardsInput!
  ) {
    createAwards(condition: $condition, input: $input) {
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
export const createCostAndAid = /* GraphQL */ `
  mutation CreateCostAndAid(
    $condition: ModelCostAndAidConditionInput
    $input: CreateCostAndAidInput!
  ) {
    createCostAndAid(condition: $condition, input: $input) {
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
export const createDisbursement = /* GraphQL */ `
  mutation CreateDisbursement(
    $condition: ModelDisbursementConditionInput
    $input: CreateDisbursementInput!
  ) {
    createDisbursement(condition: $condition, input: $input) {
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
export const createFAFSAApplications = /* GraphQL */ `
  mutation CreateFAFSAApplications(
    $condition: ModelFAFSAApplicationsConditionInput
    $input: CreateFAFSAApplicationsInput!
  ) {
    createFAFSAApplications(condition: $condition, input: $input) {
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
export const createFinancialInformation = /* GraphQL */ `
  mutation CreateFinancialInformation(
    $condition: ModelFinancialInformationConditionInput
    $input: CreateFinancialInformationInput!
  ) {
    createFinancialInformation(condition: $condition, input: $input) {
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
export const createSchoolEnrollment = /* GraphQL */ `
  mutation CreateSchoolEnrollment(
    $condition: ModelSchoolEnrollmentConditionInput
    $input: CreateSchoolEnrollmentInput!
  ) {
    createSchoolEnrollment(condition: $condition, input: $input) {
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
export const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $condition: ModelStudentsConditionInput
    $input: CreateStudentsInput!
  ) {
    createStudents(condition: $condition, input: $input) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const deleteAppeals = /* GraphQL */ `
  mutation DeleteAppeals(
    $condition: ModelAppealsConditionInput
    $input: DeleteAppealsInput!
  ) {
    deleteAppeals(condition: $condition, input: $input) {
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
export const deleteAwards = /* GraphQL */ `
  mutation DeleteAwards(
    $condition: ModelAwardsConditionInput
    $input: DeleteAwardsInput!
  ) {
    deleteAwards(condition: $condition, input: $input) {
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
export const deleteCostAndAid = /* GraphQL */ `
  mutation DeleteCostAndAid(
    $condition: ModelCostAndAidConditionInput
    $input: DeleteCostAndAidInput!
  ) {
    deleteCostAndAid(condition: $condition, input: $input) {
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
export const deleteDisbursement = /* GraphQL */ `
  mutation DeleteDisbursement(
    $condition: ModelDisbursementConditionInput
    $input: DeleteDisbursementInput!
  ) {
    deleteDisbursement(condition: $condition, input: $input) {
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
export const deleteFAFSAApplications = /* GraphQL */ `
  mutation DeleteFAFSAApplications(
    $condition: ModelFAFSAApplicationsConditionInput
    $input: DeleteFAFSAApplicationsInput!
  ) {
    deleteFAFSAApplications(condition: $condition, input: $input) {
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
export const deleteFinancialInformation = /* GraphQL */ `
  mutation DeleteFinancialInformation(
    $condition: ModelFinancialInformationConditionInput
    $input: DeleteFinancialInformationInput!
  ) {
    deleteFinancialInformation(condition: $condition, input: $input) {
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
export const deleteSchoolEnrollment = /* GraphQL */ `
  mutation DeleteSchoolEnrollment(
    $condition: ModelSchoolEnrollmentConditionInput
    $input: DeleteSchoolEnrollmentInput!
  ) {
    deleteSchoolEnrollment(condition: $condition, input: $input) {
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
export const deleteStudents = /* GraphQL */ `
  mutation DeleteStudents(
    $condition: ModelStudentsConditionInput
    $input: DeleteStudentsInput!
  ) {
    deleteStudents(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const updateAppeals = /* GraphQL */ `
  mutation UpdateAppeals(
    $condition: ModelAppealsConditionInput
    $input: UpdateAppealsInput!
  ) {
    updateAppeals(condition: $condition, input: $input) {
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
export const updateAwards = /* GraphQL */ `
  mutation UpdateAwards(
    $condition: ModelAwardsConditionInput
    $input: UpdateAwardsInput!
  ) {
    updateAwards(condition: $condition, input: $input) {
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
export const updateCostAndAid = /* GraphQL */ `
  mutation UpdateCostAndAid(
    $condition: ModelCostAndAidConditionInput
    $input: UpdateCostAndAidInput!
  ) {
    updateCostAndAid(condition: $condition, input: $input) {
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
export const updateDisbursement = /* GraphQL */ `
  mutation UpdateDisbursement(
    $condition: ModelDisbursementConditionInput
    $input: UpdateDisbursementInput!
  ) {
    updateDisbursement(condition: $condition, input: $input) {
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
export const updateFAFSAApplications = /* GraphQL */ `
  mutation UpdateFAFSAApplications(
    $condition: ModelFAFSAApplicationsConditionInput
    $input: UpdateFAFSAApplicationsInput!
  ) {
    updateFAFSAApplications(condition: $condition, input: $input) {
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
export const updateFinancialInformation = /* GraphQL */ `
  mutation UpdateFinancialInformation(
    $condition: ModelFinancialInformationConditionInput
    $input: UpdateFinancialInformationInput!
  ) {
    updateFinancialInformation(condition: $condition, input: $input) {
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
export const updateSchoolEnrollment = /* GraphQL */ `
  mutation UpdateSchoolEnrollment(
    $condition: ModelSchoolEnrollmentConditionInput
    $input: UpdateSchoolEnrollmentInput!
  ) {
    updateSchoolEnrollment(condition: $condition, input: $input) {
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
export const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $condition: ModelStudentsConditionInput
    $input: UpdateStudentsInput!
  ) {
    updateStudents(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
