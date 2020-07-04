import { formatCurrency } from '.'

describe('formatCurrency', () => {
  it('should format', () => {
    expect(formatCurrency(0)).toBe('$0.00')
    expect(formatCurrency(1)).toBe('$1.00')
    expect(formatCurrency(1.5)).toBe('$1.50')
    expect(formatCurrency(1.55)).toBe('$1.55')
    expect(formatCurrency(1.555)).toBe('$1.55')
  })
})
