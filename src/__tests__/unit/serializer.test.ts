import { addGenderString } from '@/transformation/GenderHandler'

describe('Generate a slug for Developers', () => {
  const { generateSlug } = require('../../transformation/developers/Handler.ts')
  it('Properly slugifies the developers occupation', () => {
    const testDeveloper = {
      id: 0,
      name: 'Test Developer',
      gender: 0,
      occupation: 'This is a test',
    }
    expect(generateSlug(testDeveloper)).toContain('this-is-a-test')
  })

  it('Properly returns a string gender', () => {
    const genders = [
      {
        id: 0,
        expected: 'male',
      },
      {
        id: 1,
        expected: 'female',
      },
      {
        id: 2,
        expected: 'non-binary',
      },
    ]
    genders.forEach(({ id, expected }) => {
      expect(addGenderString(id)).toEqual(expected)
    })
  })

  it('Throws an error if a gender id was received', () => {
    const genders = [4, 'False', false, 0.2]
    genders.forEach((id) => {
      expect(() => {
        addGenderString(id as any)
      }).toThrow(`${id} is not a valid gender ID`)
    })
  })
})

describe('Generate a slug for Sales', () => {
  it('Properly slugifies the sales achivements', () => {
    const { generateSlug } = require('../../transformation/sales/Handler.ts')
    const testSales = {
      id: 0,
      name: 'Test Developer',
      gender: 0,
      occupation: 'Sales representative',
      achievements: 'This is a sales representative test',
    }
    expect(generateSlug(testSales)).toContain(
      'this-is-a-sales-representative-test'
    )
  })
})

describe('Generate a slug for Management', () => {
  it('Properly slugifies the managements occupation', () => {
    const {
      generateSlug,
    } = require('../../transformation/management/Handler.ts')
    const testSales = {
      id: 0,
      name: 'Test Developer',
      gender: 0,
      occupation: 'Test management manages the staff',
    }
    expect(generateSlug(testSales)).toContain(
      'test-management-manages-the-staff'
    )
  })
})
