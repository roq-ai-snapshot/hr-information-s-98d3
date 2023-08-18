import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  vacation_status: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
