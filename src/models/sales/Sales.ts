import IStaff from '@/models/abstract/IStaff'

/**
 * A Sales class that implements a staff model
 */
export class Sales implements IStaff {
  id: number
  name: string
  gender: number
  occupation: string
  achievements: string
  constructor(
    id: number,
    name: string,
    gender: number,
    occupation: string,
    achievements: string
  ) {
    this.id = id
    this.name = name
    this.gender = gender
    this.occupation = occupation
    this.achievements = achievements
  }
  /**
   * Get description for sales
   * @returns Human readable description of sales
   */
  getDescription(): string {
    return `${this.name} is a ${this.occupation} and identifies themselves as ${this.gender}.`
  }

  /**
   * Get job duties of a sales staff
   */
  getAchievements(): string {
    return `${this.name} and has achieved ${this.achievements}`
  }
}
