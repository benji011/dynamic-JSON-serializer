import IStaff from '@/models/abstract/IStaff'
import { addGenderString } from '@/transformation/GenderHandler'

/**
 * Takes in some data of type IStaff then creates a JSON copy
 *
 * @param data An IStaff object instance
 * @returns A JSON string representation of IStaff with the occupation field slugged & lowercased.
 */
export const generateSlug = (data: IStaff): string => {
  return JSON.stringify({
    ...data,
    gender: addGenderString(data.gender),
    occupation: data.occupation
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, ''),
  })
}
