import responseFormatter from '../utils/responseFormatter';
import responseCodes from '../config/responseCodes';


const seedService = async ({ query, consumer }) => {
  try {
    const data = "express seed!"
    const body = await responseFormatter.formatter(responseCodes.OK, data);
    const { status } = body;
    return { status, body };
  } catch (error) {
    const body = await responseFormatter.formatter(responseCodes.BAD_REQUEST, []);
    const { status } = body;
    return { status, body };
  }
};

export default { seedService };
