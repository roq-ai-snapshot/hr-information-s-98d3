import { PayrollInterface } from 'interfaces/payroll';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  first_name: string;
  last_name: string;
  vacation_status: string;
  user_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    payroll?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  vacation_status?: string;
  user_id?: string;
  company_id?: string;
}
