import Joi from 'joi';
const userSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Nama harus berupa teks',
    'string.min': 'Nama harus memiliki minimal 3 karakter',
    'string.max': 'Nama tidak boleh lebih dari 100 karakter',
    'any.required': 'Nama harus diisi',
  }),

  nim: Joi.string().alphanum().length(10).required().messages({
    'string.base': 'NIM harus berupa teks',
    'string.alphanum': 'NIM hanya boleh terdiri dari huruf dan angka',
    'string.length': 'NIM harus terdiri dari 10 karakter',
    'any.required': 'NIM harus diisi',
  }),

  gender: Joi.string().valid('Male', 'Female').required().messages({
    'string.base': 'Jenis kelamin harus berupa teks',
    'any.only': 'Jenis kelamin haruslah Male atau Female',
    'any.required': 'Jenis kelamin harus diisi',
  }),

  programStudi: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Program studi harus berupa teks',
    'string.min': 'Program studi harus memiliki minimal 3 karakter',
    'string.max': 'Program studi tidak boleh lebih dari 100 karakter',
    'any.required': 'Program studi harus diisi',
  }),

  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      'string.base': 'Nomor telepon harus berupa teks',
      'string.pattern.base':
        'Nomor telepon hanya boleh terdiri dari angka dengan panjang 10-15 digit',
      'any.required': 'Nomor telepon harus diisi',
    }),

  angkatan: Joi.number().integer().min(2000).max(9999).required().messages({
    'number.base': 'Angkatan harus berupa angka',
    'number.integer': 'Angkatan harus berupa angka bulat',
    'number.min': 'Angkatan harus lebih besar dari atau sama dengan 2000',
    'number.max': 'Angkatan tidak boleh lebih dari 9999',
    'any.required': 'Angkatan harus diisi',
  }),
  fakultas: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Fakultas harus berupa teks',
    'string.min': 'Fakultas harus memiliki minimal 3 karakter',
    'string.max': 'Fakultas tidak boleh lebih dari 100 karakter',
    'any.required': 'Fakultas harus diisi',
  }),
  photo: Joi.string().uri().optional().messages({
    'string.base': 'Foto harus berupa URL',
    'string.uri': 'Foto harus berupa URL yang valid',
  }),

  email: Joi.string().email().required().messages({
    'string.base': 'Email harus berupa teks',
    'string.email': 'Email harus valid',
    'any.required': 'Email harus diisi',
  }),
});

export default userSchema;
