import { Developer } from '@/models/developers/Developer'

describe('class instance of IStaff', () => {
  const testDeveloper = new Developer(
    0,
    'test',
    0,
    'test developer',
    'wrote front/back end'
  )
  it('Generate a TestDeveloper instance', () => {
    expect(testDeveloper).toBeInstanceOf(Developer)
    expect(testDeveloper).toEqual({
      gender: 0,
      id: 0,
      name: 'test',
      occupation: 'test developer',
      achievements: 'wrote front/back end',
    })
  })
  it('Get TestDeveloper description', () => {
    expect(testDeveloper.getDescription()).toEqual(
      `test is a test developer and identifies themselves as 0.`
    )
  })
})
