/**
 * Add gender as a string value from a number ID
 *
 * @param gender A number ID representing the gender of this person.
 * @returns A string value of either: male|female|non-binary. Else an error is thrown
 */
export const addGenderString = (gender: number): string | Error => {
  switch (gender) {
    case 0:
      return 'male'
    case 1:
      return 'female'
    case 2:
      return 'non-binary'
    default:
      throw new Error(`${gender} is not a valid gender ID`)
  }
}
