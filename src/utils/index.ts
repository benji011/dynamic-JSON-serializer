import { Developer } from '@/models/developers/Developer'
import IStaff from '@/models/abstract/IStaff'
import { Management } from '@/models/management/Management'
import { Sales } from '@/models/sales/Sales'

// Initialize developers
const alice: Developer = new Developer(
  1,
  'Alice',
  1,
  'Frontend developer',
  'deploying to the frontend via ArgoCD'
)
const bob: Developer = new Developer(
  2,
  'Bob',
  0,
  'Backend developer',
  'decoupling backend services as loosely coupled microservices'
)
// Initialize management
const cassandra: Management = new Management(
  3,
  'Cassandra',
  1,
  'Human Resources',
  'hiring a Lead Senior Engineer'
)
const daniel: Sales = new Sales(
  4,
  'Daniel',
  0,
  'sales consultant of some company',
  'KPI of 200%'
)

// Add verified developers into the verified map
export const verifiedMembersOfStaff: Map<IStaff, unknown> = new Map()
verifiedMembersOfStaff.set(alice, Developer)
verifiedMembersOfStaff.set(bob, Developer)
// Management
verifiedMembersOfStaff.set(cassandra, Management)
verifiedMembersOfStaff.set(daniel, Sales)

// Return IStaff array of developers
export const developers: IStaff[] = [alice, bob, cassandra, daniel]
