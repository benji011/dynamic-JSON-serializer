import IStaff from '@/models/abstract/IStaff'

/**
 * A Developer class that implements a staff model
 */
export class Management implements IStaff {
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
   * Get description for management
   * @returns Human readable description of management
   */
  getDescription(): string {
    return `${this.name} is a ${this.occupation} and identifies themselves as ${this.gender}.`
  }
}
