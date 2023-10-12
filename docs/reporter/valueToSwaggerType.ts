export const valueToSwaggerType = (value: any): { type?: string } => {
  const type = typeof value;
  switch(type) {
    case 'string':
    case 'number':
    case 'object':
      return {
        type,
        // TODO: add format etc...
      }
    default: {
      return {}
    }
  }
}