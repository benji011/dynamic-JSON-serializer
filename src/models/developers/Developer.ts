import IStaff from '@/models/abstract/IStaff'

/**
 * A Developer class that implements a developer model
 */
export class Developer implements IStaff {
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
   * Get description for the developer
   * @returns Human readable description of the developer
   */
  getDescription(): string {
    return `${this.name} is a ${this.occupation} and identifies themselves as ${this.gender}.`
  }
}
