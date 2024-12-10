import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  // Todo model
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Students model
  Students: a
    .model({
      studentId: a.string(), // MongoDB automatically generates an _id field
      ssn: a.string(),
      firstName: a.string(),
      lastName: a.string(),
      dob: a.string(), // Use string to represent dates
      dependencyStatus: a.string(),
      householdSize: a.integer(), // Use number for integers
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // FAFSAApplications model
  FAFSAApplications: a
    .model({
      fafsaId: a.string(),
      studentId: a.string(), // Reference Students (no explicit relations in Amplify schema)
      applicationDate: a.string(),
      schoolCodes: a.string(), // Use a.list for arrays
      enrollmentDetails: a.string(),
      drtResults: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // FinancialInformation model
  FinancialInformation: a
    .model({
      financialInfoId: a.string(),
      studentId: a.string(), // Reference Students
      taxableIncome: a.integer(),
      untaxedIncome:a.integer(),
      irsData: a.string(),
      efc:a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Awards model
  Awards: a
    .model({
      awardId: a.string(),
      fafsaId: a.string(), // Reference FAFSAApplications
      pellGrantEligibility: a.boolean(),
      loanEligibility: a.boolean(),
      awardDecision: a.string(),
      awardPackageDetails: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // SchoolEnrollment model
  SchoolEnrollment: a
    .model({
      enrollmentId: a.string(),
      fafsaId: a.string(), // Reference FAFSAApplications
      schoolConfirmationStatus: a.string(),
      verificationData: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // CostAndAid model
  CostAndAid: a
    .model({
      costAidId: a.string(),
      fafsaId: a.string(), // Reference FAFSAApplications
      costOfAttendance: a.integer(),
      aidPackageDetails: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  // Disbursement model
  Disbursement: a
    .model({
      disbursementId: a.string(),
      fafsaId: a.string(), // Reference FAFSAApplications
      paymentSchedule: a.string(),
      disbursementRecords: a.string(),
      bankingDetails: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),





  // Appeals model
  Appeals: a
    .model({
      appealId: a.string(),
      fafsaId: a.string(), // Reference FAFSAApplications
      appealReasons: a.string(),
      supportingDocuments: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;


export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
