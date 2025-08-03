export const validate = ( email: string ): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const addSeparator = (num: any) => {
  if (num == null || isNaN(num))
    return ""

  const [integerPart, fractionalPart] = num.toString().split('.')
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger
}