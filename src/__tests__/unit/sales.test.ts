import { Sales } from '@/models/sales/Sales'

describe('class instance of IStaff', () => {
  it('Generate a test sales instance', () => {
    const sales = new Sales(
      0,
      'test1',
      0,
      'sales consultant',
      'Improved KPI by 200%'
    )
    expect(sales).toEqual({
      gender: 0,
      id: 0,
      name: 'test1',
      occupation: 'sales consultant',
      achievements: 'Improved KPI by 200%',
    })
    expect(sales).toBeInstanceOf(Sales)
  })
  it('Get test sales description', () => {
    const sales = new Sales(
      0,
      'test1',
      0,
      'sales consultant',
      'Improved KPI by 200%'
    )
    expect(sales.getDescription()).toEqual(
      `test1 is a sales consultant and identifies themselves as 0.`
    )
  })
})
