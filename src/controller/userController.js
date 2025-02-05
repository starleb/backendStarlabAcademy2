import prisma from '../config/db.js';
import validate from '../validation/validate.js';
import userSchema from '../validation/userValidation.js';
import responseHelper from '../responseHelper/responseHelper.js';
import { uploadFile } from '../utils/uploadFile.js';
const register = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      return responseHelper.sendErrorResponse(res, 'Gambar harus diisi!');
    }
    const validasiData = validate(userSchema, req.body, res);
    let imageUrl = null;
    if (file) {
      imageUrl = await uploadFile(file);
    }
    if (!validasiData) return;
    const cekEmail = await prisma.user.findUnique({
      where: { email: validasiData.value.email },
    });

    if (cekEmail > 0) {
      return responseHelper.sendErrorResponse(res, 'Email sudah ada', 409);
    }

    const pendaftarBaru = await prisma.user.create({
      data: {
        ...validasiData.value,
        photo: imageUrl.url,
      },
    });

    return responseHelper.sendSuccesResponse(
      res,
      pendaftarBaru,
      'Berhasil Mendaftar Likk!!'
    );
  } catch (error) {
    console.error(error.message);
    return responseHelper.sendServerErrorResponse(
      res,
      'Terjadi kesalahan pada server'
    );
  }
};
export default register;
