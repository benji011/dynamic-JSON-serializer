import { Management } from '@/models/management/Management'

describe('class instance of IStaff', () => {
  it('Generate a test management instance', () => {
    const management = new Management(0, 'test1', 0, 'HR', 'hired staff')
    expect(management).toEqual({
      gender: 0,
      id: 0,
      name: 'test1',
      occupation: 'HR',
      achievements: 'hired staff',
    })
    expect(management).toBeInstanceOf(Management)
  })
  it('Get test management description', () => {
    const management = new Management(0, 'test1', 0, 'HR', 'hired staff')
    expect(management.getDescription()).toEqual(
      `test1 is a HR and identifies themselves as 0.`
    )
  })
})
