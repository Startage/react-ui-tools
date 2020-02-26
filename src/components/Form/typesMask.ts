export const typesMasks = (mask: any) => {
  switch (mask) {
    case 'phone':
      return {
        style: (rawValue: string) => {
          if (rawValue.replace(/^\D+/g, '').length < 14) return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
          return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        },
        inputMode: 'numeric',
      };
    case 'cpfCnpj':
      return {
        style: (rawValue: string) => {
          if (rawValue.replace(/[^0-9]/g, '').length > 11) return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
          return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        },
        inputMode: 'numeric',
      };
    case 'cpf':
      return { style: () => [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/], inputMode: 'numeric' };
    case 'cnpj':
      return { style: () => [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/], inputMode: 'numeric' };
    case 'cep':
      return { style: () => [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/], inputMode: 'numeric' };
    default:
      return { style: mask };
  }
};
