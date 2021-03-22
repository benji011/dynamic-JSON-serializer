import IStaff from '@/models/abstract/IStaff'
import { Developer } from '@/models/developers/Developer'
import { Management } from '@//models/management/Management'
import { Sales } from '@/models/sales/Sales'
import { developers, verifiedMembersOfStaff } from '@/utils'
import { generateSlug as generateDeveloperSlug } from '@/transformation/developers/Handler'
import { generateSlug as generateOccupationSlug } from '@/transformation/management/Handler'
import { generateSlug as generateAchievementsSlug } from '@/transformation/sales/Handler'

/**
 * Print the message of generated slug
 *
 * @param slug The generated slug
 */
const printSlug = (slug: string): void => {
  console.log(JSON.parse(slug))
}

// Dynamically serialize the JSON values of these staff
developers.forEach((staff: IStaff) => {
  const json: object = staff
  switch (verifiedMembersOfStaff.get(staff)) {
    case Developer:
      return printSlug(generateDeveloperSlug(json as IStaff))
    case Management:
      return printSlug(generateOccupationSlug(json as IStaff))
    case Sales:
      return printSlug(generateAchievementsSlug(json as IStaff))
    default:
      throw new Error(`Exausted list, ${staff} does not exist.`)
  }
})
