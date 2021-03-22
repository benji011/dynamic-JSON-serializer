/**
 * An interface of a staff member
 */
export default interface IStaff {
  id: number
  name: string
  gender: number
  occupation: string
  achievements: string
  /**
   * Label attached to this member of staff
   */
  getDescription(): string
}
